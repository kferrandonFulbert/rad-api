import { getPrisma } from '../../services/prisma.service.js';

const prisma = getPrisma();

export const findAll = async (req, res) => {
  req.log?.info('findAll {{TABLE_PLURAL}} endpoint');
  try {
    const all{{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.findMany();
    console.log('All {{TABLE_PLURAL}}:', JSON.stringify(all{{TABLE_SINGULAR}}, null, 2));
    res.status(200).json(all{{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error fetching {{TABLE_PLURAL}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const findById = async (req, res) => {
  req.log?.info('findById {{TABLE_SINGULAR}} endpoint');
  try {
    const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    res.status(200).json({{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error fetching {{TABLE_SINGULAR}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const search = async (req, res) => {
  req.log?.info('search {{TABLE_PLURAL}} endpoint');
  try {
    const {{TABLE_PLURAL}} = await prisma.{{TABLE_PLURAL}}.findMany({
      where: {
        OR: [
          { field1: { contains: req.query.q } },
          { field2: { contains: req.query.q } }
        ]
      }
    });
    res.status(200).json({{TABLE_PLURAL}});
  } catch (error) {
    req.log?.error('Error searching {{TABLE_PLURAL}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const create = async (req, res) => {
  req.log?.info('create {{TABLE_SINGULAR}} endpoint');
  try {
    const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.create({
      data: req.body
    });
    res.status(201).json({{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error creating {{TABLE_SINGULAR}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const update = async (req, res) => {
  req.log?.info('update {{TABLE_SINGULAR}} endpoint');
  try {
    const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.status(200).json({{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error updating {{TABLE_SINGULAR}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const remove = async (req, res) => {
  req.log?.info('remove {{TABLE_SINGULAR}} endpoint');
  try {
    const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(200).json({{TABLE_SINGULAR}});
  } catch (error) {
    req.log?.error('Error deleting {{TABLE_SINGULAR}}:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};
