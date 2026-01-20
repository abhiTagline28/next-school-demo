import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.example.com"; // Schools should update with actual domain

  const routes = [
    "",
    "/about",
    "/academics",
    "/admissions",
    "/facilities",
    "/faculty",
    "/gallery",
    "/events",
    "/contact",
    "/privacy-policy",
    "/mandatory-disclosure",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/admissions" ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap;
}
