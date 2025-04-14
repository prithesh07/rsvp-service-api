export interface Rsvp {
    player: string;
    status: 'Yes' | 'No' | 'Maybe';
}

export interface RsvpCount {
    total: number;
    confirmed: number;
    declined: number;
}