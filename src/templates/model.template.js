import { getPrisma } from '../../services/prisma.service.js';

const prisma = getPrisma();

export const findAll = async () => {
  const all = await prisma.{{TABLE_PLURAL}}.findMany()
  console.log('All {{TABLE_PLURAL}}:', JSON.stringify(all, null, 2))
  return all;
}

export const findById = async (id) => {
  const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.findUnique({
    where: { id: parseInt(id) }
  })
  return {{TABLE_SINGULAR}};
}

export const search = async (query) => {
  const {{TABLE_PLURAL}} = await prisma.{{TABLE_PLURAL}}.findMany({
    where: {
      OR: [
        { Texte: { contains: query } },
        { Auteur: { contains: query } }
      ]
    }
  })
  return citations;
}

export const create = async (data) => {
  const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.create({
    data: {
      Texte: data.Texte,
      Auteur: data.Auteur
    }
  })
  return {{TABLE_SINGULAR}};
}

export const update = async (id, data) => {
  const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.update({
    where: { id: parseInt(id) },
    data: {
      Texte: data.Texte,
      Auteur: data.Auteur
    }
  })
  return {{TABLE_SINGULAR}};
}

export const remove = async (id) => {
  const {{TABLE_SINGULAR}} = await prisma.{{TABLE_PLURAL}}.delete({
    where: { id: parseInt(id) }
  })
  return {{TABLE_SINGULAR}};
}
