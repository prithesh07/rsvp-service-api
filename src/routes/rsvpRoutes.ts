import { Router } from 'express';
import RsvpController from '../controllers/rsvpController';

/**
 * @swagger
 * /api/rsvp:
 *   post:
 *     summary: Add or update an RSVP
 *     tags: [RSVP]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - player
 *               - status
 *             properties:
 *               player:
 *                 type: string
 *                 description: The player's name
 *               status:
 *                 type: string
 *                 description: RSVP status (yes/no/maybe)
 *     responses:
 *       200:
 *         description: RSVP successfully updated
 *       400:
 *         description: Invalid request
 * 
 *   get:
 *     summary: Get all confirmed attendees
 *     tags: [RSVP]
 *     responses:
 *       200:
 *         description: List of confirmed attendees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 * 
 * /api/rsvp/count:
 *   get:
 *     summary: Get count of responses by status
 *     tags: [RSVP]
 *     responses:
 *       200:
 *         description: Count of responses by status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 yes:
 *                   type: integer
 *                 no:
 *                   type: integer
 *                 maybe:
 *                   type: integer
 */

const router = Router();
const rsvpController = new RsvpController();

router.post('/rsvp', rsvpController.addOrUpdateRsvp.bind(rsvpController));
router.get('/rsvp', rsvpController.getConfirmedAttendees.bind(rsvpController));
router.get('/rsvp/count', rsvpController.countResponses.bind(rsvpController));

export default router;