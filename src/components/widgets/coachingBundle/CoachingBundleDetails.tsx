import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { CoachingBundle } from "@/models/CoachingModels";

interface CoachingBundleDetailsProps {
  bundle: CoachingBundle;
  coachesNames: string[];
}

export default function CoachingBundleDetails({
  bundle,
  coachesNames,
}: CoachingBundleDetailsProps) {
  return (
    <Card className="shadow-2xl bg-stone-300/15">
      <CardHeader>
        <CardTitle className="text-zinc-950/75">Bundle Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="coach-name">Coach Name</Label>
            <Select>
              <SelectTrigger>
                <SelectValue
                  placeholder={`${bundle.coach.first_name} ${bundle.coach.last_name}`}
                />
              </SelectTrigger>
              <SelectContent>
                {coachesNames.map((coachName, index) => (
                  <SelectItem key={index} value={coachName as string}>
                    {coachName as string}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              defaultValue={new Date(bundle.deadline)
                .toISOString()
                .slice(0, 10)}
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration (Mins) </Label>
            <Input
              defaultValue={bundle.duration_mins}
              id="duration"
              type="number"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
