import React from "react";
import coachingData from "../../bundles.json";
import { CoachingBundle } from "../../../models/CoachingModels";
import CoachingBundleTable from "@/components/widgets/coachingBundle/CoachingBundleTable";

const typedCoachingData: CoachingBundle[] = coachingData as CoachingBundle[];

export default function CoachingPage() {
  return (
    <div className="m-6">
      <h1 className="text-2xl font-bold py-3 text-zinc-950/75">
        Coaching Dashboard
      </h1>
      <CoachingBundleTable coachingData={typedCoachingData} />
    </div>
  );
}
