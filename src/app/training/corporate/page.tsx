import React from "react";
import type { Metadata } from "next";
import { TrainingDetail } from "@/components/training/TrainingDetail";
import { CORPORATE_TRAINING } from "@/data/trainingContent";

export const metadata: Metadata = {
  title: "Corporate Capability Building | Arena Web Security",
  description: "Targeted upskilling for enterprise IT teams, focusing on secure development lifecycles, active defense, and compliance.",
};

export default function CorporateTrainingPage() {
  return <TrainingDetail type="Corporate" {...CORPORATE_TRAINING} />;
}
