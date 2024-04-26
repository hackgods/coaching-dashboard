export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
}

export interface Coach {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
}

export interface Status {
    id: number;
    title: string;
}

export interface Session {
    id: number;
    bundle_id: number;
    type: string;
    date: string | null;
    status: Status;
}

export interface CoachingBundle {
    id: number;
    deadline: string;
    duration_mins: number;
    invitation_sent: boolean;
    user: User;
    coach: Coach;
    sessions: Session[];
}
