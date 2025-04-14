import { Express } from 'express';
import rsvpRoutes from './routes/rsvpRoutes';

const setRsvpRoutes = (app: Express): void => {
    app.use('/api', rsvpRoutes);
};

export default setRsvpRoutes;