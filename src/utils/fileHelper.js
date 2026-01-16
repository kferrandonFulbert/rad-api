import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getOutputPath(tableName, type = 'route', pathOverride = 'output') {
    // Le fichier sera créé dans le répertoire output 
    let cwd =null;
    if (pathOverride === 'output') {
        cwd = process.cwd() + "/" + pathOverride;
    } else {
        cwd = pathOverride;
    }
    let fileType = type;
if(type==='route'){
    fileType = 'routes';
}
    return path.join(cwd, `${tableName}.${fileType}.js`);
}

export function fileExists(filePath) {
    return fs.existsSync(filePath);
}

export function writeFile(filePath, content) {
    const dir = path.dirname(filePath);

    // Créer le répertoire s'il n'existe pas
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content, 'utf-8');
}

export function getTemplatePath(templateName) {
    return path.join(__dirname, '..', 'templates', `${templateName}.template.js`);
}

export function readTemplate(templateName) {
    const templatePath = getTemplatePath(templateName);
    return fs.readFileSync(templatePath, 'utf-8');
}
