import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { CoachingBundle } from "@/models/CoachingModels";
import { Button } from "../../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface CoachingSessionsDetailsProps {
  bundle: CoachingBundle;
  createNewSession: (bundleId: number) => void;
}

export default function CoachingSessionsDetails({
  bundle,
  createNewSession,
}: CoachingSessionsDetailsProps) {
  return (
    <Card className="shadow-2xl bg-stone-300/15">
      <CardHeader className="flex flex-row">
        <CardTitle className="text-zinc-950/75">Coaching Sessions</CardTitle>
        <Button className="ml-auto" onClick={() => createNewSession(bundle.id)}>
          Create Session
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bundle.sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>{session.id}</TableCell>
                <TableCell>{session.type}</TableCell>
                <TableCell>
                  {session.date ? (
                    <Input
                      defaultValue={new Date(session.date)
                        .toISOString()
                        .slice(0, 10)}
                      type="date"
                    />
                  ) : (
                    <Input defaultValue="" type="date" />
                  )}
                </TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={session.status.title} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unbooked">Unbooked</SelectItem>
                      <SelectItem value="booked">Booked</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="forfeited">Forfeited</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  {session.date == null ? (
                    <RiDeleteBin5Fill className="text-red-700" />
                  ) : (
                    <></>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
