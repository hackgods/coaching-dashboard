"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Card } from "../../ui/card";
import { CoachingBundle } from "../../../models/CoachingModels";
import CoachingBundleDetails from "./CoachingBundleDetails";
import CoachingSessionsDetails from "./CoachingSessionsDetails";

interface Props {
  coachingData: CoachingBundle[];
}

export default function CoachingBundleTable({ coachingData }: Props) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [coachingDataState, setCoachingDataState] = useState(coachingData);

  const uniqueCoachesNamesSet = new Set<string>();
  coachingData.forEach((item) => {
    const coachName = `${item.coach.first_name} ${item.coach.last_name}`;
    uniqueCoachesNamesSet.add(coachName);
  });

  const coachesNames: string[] = Array.from(uniqueCoachesNamesSet);

  const handleRowClick = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const createNewSession = (bundleId: number) => {
    const newSession = {
      id: Math.floor(Math.random() * 100) + 1,
      type: "Coaching",
      date: null,
      bundle_id: bundleId,
      status: {
        id: 1,
        title: "Unbooked",
      },
    };

    const updatedCoachingData: CoachingBundle[] = coachingDataState.map(
      (bundle) =>
        bundle.id === bundleId
          ? {
              ...bundle,
              sessions: [...bundle.sessions, newSession],
            }
          : bundle
    );

    setCoachingDataState(updatedCoachingData);
  };

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-stone-200 text-zinc-900">ID</TableHead>
            <TableHead className="bg-stone-200 text-zinc-900">User</TableHead>
            <TableHead className="bg-stone-200 text-zinc-900">Coach</TableHead>
            <TableHead className="bg-stone-200 text-zinc-900">
              Deadline
            </TableHead>
            <TableHead className="bg-stone-200 text-zinc-900">
              Duration
            </TableHead>
            <TableHead className="bg-stone-200 text-zinc-900">
              Invitation Sent
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coachingDataState.map((bundle) => (
            <React.Fragment key={bundle.id}>
              <TableRow onClick={() => handleRowClick(bundle.id)}>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="#">
                    {`${bundle.id}`}
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="font-semibold">{`${bundle.user.first_name} ${bundle.user.last_name}`}</div>
                  <div>{bundle.user.email}</div>
                </TableCell>
                <TableCell>
                  <div className="font-semibold">{`${bundle.coach.first_name} ${bundle.coach.last_name}`}</div>
                  <div>{bundle.coach.email}</div>
                </TableCell>
                <TableCell>
                  {new Date(bundle.deadline).toLocaleDateString()}
                </TableCell>
                <TableCell>{bundle.duration_mins}</TableCell>
                <TableCell>
                  {bundle.invitation_sent ? (
                    <div className="bg-green-600 rounded-2xl w-fit px-6 text-zinc-200 font-medium">
                      Yes
                    </div>
                  ) : (
                    <div className="bg-red-600 rounded-2xl w-fit px-6 text-zinc-200 font-medium">
                      No
                    </div>
                  )}
                </TableCell>
              </TableRow>
              {expandedRow === bundle.id && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 mx-2 my-4">
                      <div className="col-span-1">
                        <CoachingBundleDetails
                          bundle={bundle}
                          coachesNames={coachesNames}
                        />
                      </div>

                      <div className="col-span-2">
                        <CoachingSessionsDetails
                          bundle={bundle}
                          createNewSession={createNewSession}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
