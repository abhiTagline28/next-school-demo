import React from "react";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { AcademicsOverview } from "@/components/home/AcademicsOverview";
import { FacilitiesPreview } from "@/components/home/FacilitiesPreview";
import { AdmissionCTA } from "@/components/home/AdmissionCTA";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Highlights />
      <PrincipalMessage />
      <AcademicsOverview />
      <FacilitiesPreview />
      <AdmissionCTA />
    </>
  );
}
