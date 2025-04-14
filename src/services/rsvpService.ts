import { Rsvp } from '../models/rsvp';

export class RsvpService {
    private rsvps: Rsvp[] = [];

    addOrUpdateRsvp(player: string, status: 'Yes' | 'No' | 'Maybe'): void {
        const existingRsvpIndex = this.rsvps.findIndex(r => r.player === player);
        if (existingRsvpIndex > -1) {
            this.rsvps[existingRsvpIndex].status = status;
        } else {
            this.rsvps.push({ player, status });
        }
    }

    getConfirmedAttendees(): string[] {
        return this.rsvps
            .filter(r => r.status === 'Yes')
            .map(r => r.player);
    }

    countResponses(): { total: number; confirmed: number; declined: number } {
        const total = this.rsvps.length;
        const confirmed = this.rsvps.filter(r => r.status === 'Yes').length;
        const declined = this.rsvps.filter(r => r.status === 'No').length;

        return { total, confirmed, declined };
    }
}