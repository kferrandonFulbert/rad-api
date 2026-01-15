import { Router } from 'express';
import { all } from '../controllers/citations.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * @openapi
 * {{TABLE_SINGULAR}}:
 *   get:
 *     summary: get all {{TABLE_PLURAL}}
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               
 */
router.get('/', all);

export default router;
