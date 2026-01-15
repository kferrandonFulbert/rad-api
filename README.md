# KAPI - Rapid API Development Tool

Un outil puissant pour générer rapidement des fichiers de routes, contrôleurs et modèles pour votre API.

## Installation

```bash
npm install -g rad-api
```

Ou pour le développement local :

```bash
npm link
```

## Utilisation

### Générer une route

Générez un fichier de route complet pour une table spécifique :

```bash
kapi generate route <tableName>
```

#### Exemple :

```bash
kapi generate route citations
```

Cela créera un fichier `citations.routes.js` avec :
- Configuration Prisma MariaDB
- Fonction `all()` pour récupérer tous les enregistrements
- Gestion des erreurs complète
- Logs de requête

#### Fichier généré (`citations.routes.js`) :

```javascript
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
  req.log?.info('all Citations endpoint');
  try {
    const allCitation = await main();
    res.status(200);
    res.json(allCitation);
  } catch (error) {
    req.log?.error('Error fetching Citations:', error);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};

async function main() {
  const allCitation = await prisma.Citations.findMany()
  console.log('All Citations:', JSON.stringify(allCitation, null, 2))
  return allCitation;
}
```

## Fonctionnalités

- ✅ Génération automatique de fichiers de routes
- ✅ Conversion intelligente des noms (singulier/pluriel, PascalCase)
- ✅ Intégration Prisma MariaDB préinstallée
- ✅ Gestion des erreurs et logs
- ✅ Protection contre les fichiers dupliqués
- ✅ Messages de sortie détaillés et utiles

## Structure du projet

```
RAD-api/
├── index.js                    # Point d'entrée CLI
├── package.json
├── README.md
└── src/
    ├── commands/
    │   └── generate.js        # Logique de génération
    ├── templates/
    │   └── route.template.js  # Template de route
    └── utils/
        ├── parser.js          # Parser d'arguments
        ├── fileHelper.js      # Utilitaires de fichier
        └── stringHelper.js    # Utilitaires de chaîne
```

## Options d'environnement

Le fichier généré utilise les variables d'environnement suivantes :

```
DATABASE_HOST      = Adresse du serveur MariaDB
DATABASE_PORT      = Port MariaDB (par défaut: 3306)
DATABASE_USER      = Utilisateur MariaDB
DATABASE_PASSWORD  = Mot de passe MariaDB
DATABASE_NAME      = Nom de la base de données
```

## Exemples d'utilisation

### Tables simples
```bash
kapi generate route products
kapi generate route categories
kapi generate route customers
```

### Tables plurielles
```bash
kapi generate route citations      # Génère handlers pour la table "Citations"
kapi generate route users          # Génère handlers pour la table "Users"
```

## Gestion des erreurs

L'outil gère automatiquement :
- Les fichiers déjà existants ✓
- Les noms de table vides ✓
- Les répertoires manquants (création automatique) ✓

## Développement

Pour ajouter de nouvelles commandes :

1. Créez un template dans `src/templates/`
2. Créez un fichier de commande dans `src/commands/`
3. Ajoutez la logique de parsing dans `index.js`

## Améliorations futures

- [ ] `kapi generate controller <tableName>` - Générer les contrôleurs
- [ ] `kapi generate model <tableName>` - Générer les modèles Prisma
- [ ] `kapi generate crud <tableName>` - Générer CRUD complet
- [ ] `kapi config` - Configuration interactive

## Licence

ISC

## Auteur

kferrandon
