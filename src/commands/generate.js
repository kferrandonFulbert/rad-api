import { readTemplate, writeFile, getOutputPath, fileExists } from '../utils/fileHelper.js';
import { formatTableName } from '../utils/stringHelper.js';

export async function generate(type, tableName, pathOverride='output') {
  try {
    // Valider le nom de la table
    if (!tableName || tableName.trim() === '') {
      throw new Error('Table name cannot be empty');
    }

    // Formater les noms
    const { tableSingular, tablePlural } = formatTableName(tableName);

    // Récupérer le template
    let content = readTemplate(type);

    // Remplacer les placeholders
    content = content.replace(/{{TABLE_SINGULAR}}/g, tableSingular);
    content = content.replace(/{{TABLE_PLURAL}}/g, tablePlural);

    // Déterminer le chemin de sortie
    const outputPath = getOutputPath(tableName, type, pathOverride);

    // Vérifier si le fichier existe déjà
    if (fileExists(outputPath)) {
      throw new Error(`File ${tableName}.${type}s.js already exists. Please choose a different name or remove the existing file.`);
    }

    // Écrire le fichier
    writeFile(outputPath, content);

    console.log(`✅ ${type} file created successfully!`);
    console.log(`📁 Location: ${outputPath}`);
    console.log(`\n📝 File content generated for table: ${tablePlural}`);
    console.log(`   - Handler: all() - Get all ${tablePlural}`);
    console.log(`\n🚀 Next steps:`);
    console.log(`   1. Import this route in your main ${type}`);
    console.log(`   2. Ensure your Prisma client is properly configured`);
    console.log(`   3. Update the adapter path if needed: ../../../generated/prisma/client.js`);

  } catch (error) {
    throw error;
  }
}
