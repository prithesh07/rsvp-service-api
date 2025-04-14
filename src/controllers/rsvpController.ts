import { Request, Response } from 'express';
import { RsvpService } from '../services/rsvpService';

class RsvpController {
    private rsvpService: RsvpService;
    private validStatuses = ['Yes', 'No', 'Maybe'];

    constructor() {
        this.rsvpService = new RsvpService();
    }

    public async addOrUpdateRsvp(req: Request, res: Response): Promise<void> {
        try {
            const { player, status } = req.body;
            
            if (!player || typeof player !== 'string') {
                res.status(400).json({ error: 'Player name is required and must be a string' });
                return;
            }

            if (!status || !this.validStatuses.includes(status)) {
                res.status(400).json({ 
                    error: 'Status must be one of: Yes, No, Maybe',
                    validStatuses: this.validStatuses 
                });
                return;
            }

            this.rsvpService.addOrUpdateRsvp(player, status);
            res.status(200).json({ message: 'RSVP updated successfully' });
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    public async getConfirmedAttendees(req: Request, res: Response): Promise<void> {
        try {
            const confirmedAttendees = this.rsvpService.getConfirmedAttendees();
            res.status(200).json(confirmedAttendees);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async countResponses(req: Request, res: Response): Promise<void> {
        try {
            const counts = this.rsvpService.countResponses();
            res.status(200).json(counts);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }
}

export default RsvpController;