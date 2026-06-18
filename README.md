# Hassan Nawaz — Personal Academic Website

A world-class, production-ready personal academic website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Modern Premium Design** inspired by Stanford faculty sites, MIT research groups, Apple, Vercel, and OpenAI
- **Fully Responsive** layout for desktop, tablet, and mobile
- **Dark & Light Mode** with system preference detection
- **Smooth Animations** using Framer Motion
- **SEO Optimized** with metadata, Open Graph, and Twitter cards
- **Accessibility Compliant** with semantic HTML, ARIA labels, and reduced-motion support
- **Static Export** for easy GitHub Pages deployment
- **Clean Component Architecture** for easy maintenance
- **Animated Backgrounds** with particle networks and molecular visual elements
- **Professional Sections**: Hero, About, Research, Publications, Education, Experience, Skills, Achievements, Conferences, Gallery, Contact

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hassan-nawaz-website.git
cd hassan-nawaz-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 🌐 Deploy to GitHub Pages

### 1. Update the repository name

Edit `next.config.js` and replace `hassan-nawaz-website` with your actual GitHub repository name:

```js
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
};
```

If deploying to a custom domain (e.g., `hassannawaz.com`), set both to empty strings:

```js
basePath: '',
assetPrefix: '',
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select the `gh-pages` branch and click **Save**

### 4. Deploy automatically (optional)

Use the included deploy script after setting up `gh-pages`:

```bash
npm run deploy
```

Or use a GitHub Actions workflow for CI/CD deployment.

## ✅ Pre-Deployment Checklist

Before pushing to GitHub Pages, update the following:

1. **Add your CV**: Place your CV as `public/cv.pdf`. The hero section links to `/cv.pdf` and will 404 until the file exists.
2. **Update contact details**: Replace the placeholder email and social URLs in `data/site.ts`.
3. **Update publications**: Replace placeholder entries in `data/publications.ts` with real papers, DOIs, and citations.
4. **Update achievements**: Replace estimated counts in `data/achievements.ts` with actual numbers.
5. **Update conferences & gallery**: Add real events and images in `data/conferences.ts` and `data/gallery.ts`.
6. **Configure `next.config.js`**: Replace `hassan-nawaz-website` with your repository name, or set both `basePath` and `assetPrefix` to `''` for a custom domain.
7. **Update `app/layout.tsx` metadata**: Set your real site URL, Open Graph image, and Twitter handle.

## 📝 Customizing Content

All content is centralized in the `data/` directory:

| File | Content |
|------|---------|
| `data/site.ts` | Personal info, navigation, social links |
| `data/research.ts` | Research projects |
| `data/publications.ts` | Publications list |
| `data/education.ts` | Education timeline |
| `data/experience.ts` | Work and research experience |
| `data/skills.ts` | Skills and expertise |
| `data/achievements.ts` | Achievement statistics |
| `data/conferences.ts` | Conferences and workshops |
| `data/gallery.ts` | Gallery images |

### Adding your own photos

Place images in `public/images/` and update the paths in `data/gallery.ts`.

## 🎨 Customizing Design

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Color palette: Deep navy (`navy-*`) and cyan (`cyan-*`) accents
- Fonts: Inter (body) and Calistoga (display)

## 📁 Project Structure

```
.
├── app/                    # Next.js app router
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page composing all sections
│   └── globals.css         # Global styles
├── components/
│   ├── animations/         # Background animations
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable UI components
│   ├── footer.tsx
│   ├── icon.tsx
│   ├── loading-screen.tsx
│   ├── navigation.tsx
│   ├── scroll-progress.tsx
│   ├── section.tsx
│   ├── section-heading.tsx
│   └── theme-provider.tsx
├── data/                   # Content data files
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── images/
├── types/                  # TypeScript types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build static export |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 📄 License

This project is available for personal and academic use.

---

Built with care for Hassan Nawaz.
