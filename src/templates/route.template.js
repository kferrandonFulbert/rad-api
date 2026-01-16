import { Router } from 'express';
import {
    all,
    getById,
    search,
    create,
    update,
    deleteItem
} from '../controllers/{{TABLE_SINGULAR}}.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

/**
 * @openapi
 * /{{TABLE_PLURAL}}:
 *   get:
 *     summary: Get all {{TABLE_PLURAL}}
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *   post:
 *     summary: Create a new {{TABLE_SINGULAR}}
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: {{TABLE_SINGULAR}} created
 */
router.get('/', all);
router.post('/', create);

/**
 * @openapi
 * /{{TABLE_PLURAL}}/search:
 *   get:
 *     summary: Search {{TABLE_PLURAL}}
 *     parameters:
 *       - name: q
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/search', search);

/**
 * @openapi
 * /{{TABLE_PLURAL}}/{id}:
 *   get:
 *     summary: Get {{TABLE_SINGULAR}} by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: {{TABLE_SINGULAR}} not found
 *   put:
 *     summary: Update a {{TABLE_SINGULAR}}
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: {{TABLE_SINGULAR}} updated
 *       404:
 *         description: {{TABLE_SINGULAR}} not found
 *   delete:
 *     summary: Delete a {{TABLE_SINGULAR}}
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: {{TABLE_SINGULAR}} deleted
 *       404:
 *         description: {{TABLE_SINGULAR}} not found
 */
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteItem);

export default router;
