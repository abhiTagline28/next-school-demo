"use client";

import React, { useEffect, useMemo, useRef } from "react";

type Node = { x: number; y: number };
type Edge = {
  from: number;
  to: number;
  via?: Node; // optional bend point (orthogonal-ish trace)
  len: number;
  dir: number; // +1 or -1 for pulse travel direction
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function randBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function dist(a: Node, b: Node): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function pointOnEdge(nodes: Node[], e: Edge, t: number): Node {
  const a = nodes[e.from];
  const b = nodes[e.to];
  const v = e.via;
  if (!v) return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };

  const ab = dist(a, v);
  const vb = dist(v, b);
  const total = Math.max(1, ab + vb);
  const cut = ab / total;
  if (t <= cut) {
    const tt = t / cut;
    return { x: lerp(a.x, v.x, tt), y: lerp(a.y, v.y, tt) };
  }
  const tt = (t - cut) / (1 - cut);
  return { x: lerp(v.x, b.x, tt), y: lerp(v.y, b.y, tt) };
}

export function AiCircuitBackground({
  className,
  intensity = 1,
}: {
  className?: string;
  /**
   * 0.7–1.3 is a good range; affects trace density and pulse count.
   */
  intensity?: number;
}): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useMemo(() => prefersReducedMotion(), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = (): { w: number; h: number } => {
      const parent = canvas.parentElement;
      const rect = parent?.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect?.width ?? window.innerWidth));
      const h = Math.max(1, Math.floor(rect?.height ?? window.innerHeight));
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { w, h };
    };

    let size = resize();

    const buildGraph = (w: number, h: number): { nodes: Node[]; edges: Edge[] } => {
      // “Circuit board” style: sparse grid-aligned nodes + orthogonal traces
      const grid = clamp(Math.round(42 / intensity), 26, 56);
      const cols = clamp(Math.floor(w / grid), 7, 18);
      const rows = clamp(Math.floor(h / grid), 6, 16);

      const nodes: Node[] = [];
      const indexAt: number[][] = [];
      for (let r = 0; r <= rows; r += 1) {
        indexAt[r] = [];
        for (let c = 0; c <= cols; c += 1) {
          // jitter makes it feel “alive” without moving the whole scene
          const jx = randBetween(-grid * 0.18, grid * 0.18);
          const jy = randBetween(-grid * 0.18, grid * 0.18);
          const x = (c / cols) * w + jx;
          const y = (r / rows) * h + jy;
          indexAt[r][c] = nodes.length;
          nodes.push({ x, y });
        }
      }

      const edges: Edge[] = [];
      const addEdge = (from: number, to: number, via?: Node): void => {
        const a = nodes[from];
        const b = nodes[to];
        const len = via ? dist(a, via) + dist(via, b) : dist(a, b);
        edges.push({
          from,
          to,
          via,
          len,
          dir: Math.random() > 0.5 ? 1 : -1,
        });
      };

      // Connect neighbors + a few longer “bus” traces
      for (let r = 0; r <= rows; r += 1) {
        for (let c = 0; c <= cols; c += 1) {
          const from = indexAt[r][c];
          if (c < cols && Math.random() < 0.62) {
            const to = indexAt[r][c + 1];
            addEdge(from, to);
          }
          if (r < rows && Math.random() < 0.62) {
            const to = indexAt[r + 1][c];
            addEdge(from, to);
          }
          // occasional L-trace
          if (c < cols && r < rows && Math.random() < 0.20 * intensity) {
            const to = indexAt[r + 1][c + 1];
            const a = nodes[from];
            const b = nodes[to];
            const via: Node = Math.random() > 0.5 ? { x: b.x, y: a.y } : { x: a.x, y: b.y };
            addEdge(from, to, via);
          }
        }
      }

      // A couple of long “spines”
      const spineCount = clamp(Math.round(2 * intensity), 1, 3);
      for (let i = 0; i < spineCount; i += 1) {
        const r = Math.floor(randBetween(1, rows - 1));
        const c1 = Math.floor(randBetween(0, Math.max(1, cols - 2)));
        const c2 = clamp(c1 + Math.floor(randBetween(2, 6)), 0, cols);
        const from = indexAt[r][c1];
        const to = indexAt[r][c2];
        addEdge(from, to);
      }

      // prune very short edges (noise)
      const filtered = edges.filter((e) => e.len > 24);
      return { nodes, edges: filtered };
    };

    let graph = buildGraph(size.w, size.h);

    // pulse state
    const pulses = Array.from({ length: clamp(Math.round(10 * intensity), 8, 16) }).map(() => ({
      edge: Math.floor(Math.random() * Math.max(1, graph.edges.length)),
      t: Math.random(),
      speed: randBetween(0.08, 0.22) * intensity, // fraction per second
      size: randBetween(1.6, 2.6),
      hue: randBetween(190, 230), // cyan/sky
    }));

    const drawFrame = (ts: number): void => {
      const w = size.w;
      const h = size.h;
      ctx.clearRect(0, 0, w, h);

      // background “AI glow”
      const glow = ctx.createRadialGradient(w * 0.72, h * 0.35, 10, w * 0.72, h * 0.35, Math.max(w, h));
      glow.addColorStop(0, "rgba(99, 102, 241, 0.10)"); // indigo
      glow.addColorStop(0.45, "rgba(56, 189, 248, 0.06)"); // cyan
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const { nodes, edges } = graph;

      // circuit traces
      ctx.lineCap = "round";
      for (const e of edges) {
        const a = nodes[e.from];
        const b = nodes[e.to];
        const v = e.via;

        const baseAlpha = 0.10;
        ctx.strokeStyle = `rgba(255,255,255,${baseAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        if (v) ctx.lineTo(v.x, v.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // subtle “etched” highlight
        ctx.strokeStyle = "rgba(56,189,248,0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        if (v) ctx.lineTo(v.x, v.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // nodes (pads)
      for (const n of nodes) {
        ctx.fillStyle = "rgba(255,255,255,0.16)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      // scanning band (feels “computed”)
      const bandY = ((ts / 20) % (h + 140)) - 70;
      const band = ctx.createLinearGradient(0, bandY - 28, 0, bandY + 28);
      band.addColorStop(0, "rgba(255,255,255,0)");
      band.addColorStop(0.5, "rgba(56,189,248,0.12)");
      band.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = band;
      ctx.fillRect(0, bandY - 28, w, 56);

      // pulses (data packets)
      const seconds = ts / 1000;
      for (const p of pulses) {
        const e = edges[p.edge];
        if (!e) continue;

        const dir = e.dir;
        const tRaw = reducedMotion ? p.t : (p.t + seconds * p.speed * dir);
        const t = ((tRaw % 1) + 1) % 1;
        const pos = pointOnEdge(nodes, e, t);

        const alpha = 0.55;
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // outer bloom
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, 0.12)`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // occasional “spark” node intensification
        if (Math.random() < 0.015 && !reducedMotion) {
          p.edge = Math.floor(Math.random() * Math.max(1, edges.length));
          p.speed = randBetween(0.08, 0.22) * intensity;
          p.hue = randBetween(190, 235);
          p.size = randBetween(1.6, 2.8);
        }
      }

      if (!reducedMotion) {
        rafRef.current = window.requestAnimationFrame(drawFrame);
      }
    };

    rafRef.current = window.requestAnimationFrame(drawFrame);

    const onResize = (): void => {
      size = resize();
      graph = buildGraph(size.w, size.h);
      // remap pulses to new edges
      for (const p of pulses) {
        p.edge = Math.floor(Math.random() * Math.max(1, graph.edges.length));
        p.t = Math.random();
      }
    };

    const ro = new ResizeObserver(() => onResize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, reducedMotion]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

