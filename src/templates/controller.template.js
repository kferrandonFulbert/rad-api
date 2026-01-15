import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../../generated/prisma/client.js';

const maria = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

const prisma = new PrismaClient({ adapter: maria });

export const all = async (req, res) => {
  req.log?.info('all {{TABLE_PLURAL}} endpoint');
  try {
    const all{{TABLE_SINGULAR}} = await main();

    res.status(200);
    res.json(all{{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error fetching {{TABLE_PLURAL}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

async function main() {
  const all{{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.findMany()
  console.log('All {{TABLE_PLURAL}}:', JSON.stringify(all{{TABLE_SINGULAR}}, null, 2))
  return all{{TABLE_SINGULAR}};
}
