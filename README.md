# 🤖 Malloum - Site Web Officiel

![Malloum Banner](public/images/banner.png)

Site web officiel de **Malloum**, la solution d'intelligence artificielle éducative accessible par SMS, développée par **Maroua Innovation Technology (MIT)**.

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📋 Table des matières

- [À propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Configuration](#configuration)
- [Déploiement](#déploiement)
- [Contribution](#contribution)
- [Licence](#licence)
- [Contact](#contact)

## 🎯 À propos

Malloum est une plateforme révolutionnaire qui démocratise l'accès à l'éducation au Cameroun en utilisant la technologie SMS pour connecter les élèves à un tuteur IA basé sur ChatGPT, une banque de cours et d'examens.

### Problème résolu

- ❌ Manque d'accès à Internet en zones rurales
- ❌ Pénurie d'enseignants qualifiés
- ❌ Inégalités éducatives entre zones urbaines et rurales
- ❌ Difficulté pour les filles à poser des questions en classe

### Solution apportée

- ✅ Éducation accessible par SMS (pas besoin d'Internet)
- ✅ Tuteur IA disponible 24/7
- ✅ Contenu aligné au curriculum national camerounais
- ✅ Apprentissage personnalisé et adaptatif

## ✨ Fonctionnalités

### Pages principales

- 🏠 **Accueil** - Présentation de Malloum avec statistiques clés
- 📖 **À propos** - Histoire, mission, vision et équipe
- ⚙️ **Fonctionnalités** - Détails techniques et capacités
- 🎯 **Impact** - Témoignages et résultats concrets
- 📱 **Comment ça marche** - Guide d'utilisation et FAQ
- 📧 **Contact** - Formulaire avec envoi d'email via EmailJS

### Composants

- Navigation responsive avec menu mobile
- Sections réutilisables (Hero, Stats, CTA, etc.)
- Formulaire de contact avec validation
- Footer complet avec réseaux sociaux
- Cartes d'informations interactives

## 🛠️ Technologies

### Frontend

- **[Next.js 14+](https://nextjs.org/)** - Framework React avec App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[EmailJS](https://www.emailjs.com/)** - Envoi d'emails depuis le navigateur

### Outils de développement

- **ESLint** - Linter JavaScript/TypeScript
- **PostCSS** - Transformation CSS
- **Vercel** - Plateforme de déploiement

## 📦 Installation

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**

```bash
git clone https://github.com/maroua-it/malloum-website.git
cd malloum-website
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
```

3. **Configurer les variables d'environnement**

Créez un fichier `.env.local` à la racine :

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Utilisation

### Commandes disponibles

```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Crée le build de production
npm start            # Démarre le serveur de production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
```

### Structure des URLs

- `/` - Page d'accueil
- `/about` - À propos de Malloum
- `/features` - Fonctionnalités détaillées
- `/impact` - Impact social
- `/how-it-works` - Guide d'utilisation
- `/contact` - Formulaire de contact

## 📂 Structure du projet

```
malloum-website/
│
├── src/
│   ├── app/                      # Pages (App Router)
│   │   ├── about/
│   │   ├── features/
│   │   ├── impact/
│   │   ├── how-it-works/
│   │   ├── contact/
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Page d'accueil
│   │   └── globals.css           # Styles globaux
│   │
│   ├── components/
│   │   ├── layout/               # Navbar, Footer
│   │   ├── sections/             # Sections de pages
│   │   ├── ui/                   # Composants UI
│   │   └── features/             # Composants métier
│   │
│   ├── lib/
│   │   ├── utils.ts              # Fonctions utilitaires
│   │   └── constants.ts          # Constantes
│   │
│   └── types/
│       └── index.ts              # Types TypeScript
│
├── public/
│   └── images/                   # Images statiques
│
├── .env.local                    # Variables d'environnement (à créer)
├── next.config.js                # Configuration Next.js
├── tailwind.config.ts            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances
```

## ⚙️ Configuration

### EmailJS Setup

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/)
2. Ajoutez un service email (Gmail, Outlook, etc.)
3. Créez un template email (voir `docs/email-template.html`)
4. Copiez vos clés dans `.env.local`

### Tailwind CSS v4

Le projet utilise Tailwind CSS v4. Configuration dans `globals.css` :

```css
@import "tailwindcss";

@theme {
  --color-primary-500: #3b82f6;
  /* Autres couleurs... */
}
```

## 🌐 Déploiement

### Déploiement sur Vercel (Recommandé)

1. **Via l'interface Vercel**

   - Connectez votre repository GitHub
   - Importez le projet sur [vercel.com](https://vercel.com)
   - Configurez les variables d'environnement
   - Déployez automatiquement

2. **Via CLI Vercel**

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Déploiement sur d'autres plateformes

Le site peut aussi être déployé sur :

- **Netlify** - [netlify.com](https://www.netlify.com/)
- **AWS Amplify** - [aws.amazon.com/amplify](https://aws.amazon.com/amplify/)
- **DigitalOcean App Platform** - [digitalocean.com](https://www.digitalocean.com/)

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

### Conventions de code

- Utilisez TypeScript pour tous les nouveaux fichiers
- Suivez les conventions de nommage React/Next.js
- Commentez le code complexe
- Testez avant de soumettre

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**Maroua Innovation Technology (MIT)**

- 🌐 Site web : [malloum.cm](https://malloum.cm)
- 📧 Email : [contact@mit.cm](mailto:contact@mit.cm)
- 📱 Téléphone : +237 672 277 579 | +237 691 805 321
- 📍 Adresse : Hardé, Maroua - Cameroun

### Réseaux sociaux

- [Facebook](https://www.facebook.com/61572934537559)
- [LinkedIn](https://www.linkedin.com/company/maroua-it/)

## 🙏 Remerciements

- L'équipe de Maroua Innovation Technology
- Les élèves et enseignants qui utilisent Malloum
- La communauté open source

---

<div align="center">
  <p>Fait avec ❤️ par <strong>Maroua Innovation Technology</strong></p>
  <p>🤖 <strong>Malloum</strong> - L'éducation par SMS pour tous</p>
</div>