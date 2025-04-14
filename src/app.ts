import express from 'express';
import { json } from 'body-parser';
import setRsvpRoutes from './routes';
import { setupSwagger } from './config/swagger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
setupSwagger(app);
setRsvpRoutes(app);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});