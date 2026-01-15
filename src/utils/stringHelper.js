export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function singularize(word) {
  // Règles simples de singularisation pour le français/anglais
  if (word.endsWith('ies')) {
    return word.slice(0, -3) + 'y';
  }
  if (word.endsWith('es')) {
    return word.slice(0, -2);
  }
  if (word.endsWith('s')) {
    return word.slice(0, -1);
  }
  return word;
}

export function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map(word => capitalize(word))
    .join('');
}

export function formatTableName(tableName) {
  const plural = tableName.toLowerCase();
  const singular = toPascalCase(singularize(tableName));
  const pluralPascal = toPascalCase(tableName);

  return {
    tableName: plural,
    tableSingular: singular,
    tablePlural: pluralPascal
  };
}
