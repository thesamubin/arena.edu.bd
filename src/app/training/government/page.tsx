import React from "react";
import type { Metadata } from "next";
import { TrainingDetail } from "@/components/training/TrainingDetail";
import { GOVERNMENT_TRAINING } from "@/data/trainingContent";

export const metadata: Metadata = {
  title: "Government & Defense Training | Arena Web Security",
  description: "Specialized doctrine and capability training for defense forces, intelligence units, and public sector organizations.",
};

export default function GovernmentTrainingPage() {
  return <TrainingDetail type="Government" {...GOVERNMENT_TRAINING} />;
}
