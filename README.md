# PT. TRIROYAL TIMURRAYA — Website

Official corporate website for **PT. TRIROYAL TIMURRAYA** (Palm Oil Mill Contractor & Water Treatment Plant specialist).

Built with **Vite**, **React 18**, and **Bulma SCSS**, and deployed as a static site with serverless functions on **Cloudflare Pages**.

---

## 🛠 Tech Stack

- **Frontend**: [React 18](https://react.dev/), [React Router v6](https://reactrouter.com/), [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Build System**: [Vite 5](https://vitejs.dev/) with `@rollup/plugin-dsv` for CSV data imports
- **Styles**: [Bulma CSS](https://bulma.io/) + Dart [Sass](https://sass-lang.com/), [FontAwesome Icons](https://fontawesome.com/)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) (Output directory: `dist`)
- **Serverless Backend**: [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/) (`functions/api/contact.js`)
- **Email Service**: [Resend API](https://resend.com/)
- **Anti-Bot Defense**: [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) & Honeypot protection

---

## 📁 Directory Structure

```text
triroyal.net/
├── functions/
│   └── api/
│       └── contact.js       # Cloudflare Pages Function (contact form handler)
├── src/
│   ├── components/
│   │   ├── AboutPage/       # About page components
│   │   ├── ContactPage/     # Contact form with limits & character counters
│   │   ├── GalleryPage/     # Gallery page components
│   │   ├── LandingPage/     # Home page components
│   │   ├── ProjectsPage/    # Projects list with location search filter
│   │   ├── ServicesPage/    # Services page components
│   │   ├── shared/          # Reusable UI components (AppImage, etc.)
│   │   ├── footer.jsx       # Footer with contact details
│   │   ├── header.jsx       # Navbar & company logo
│   │   ├── layout.jsx       # Page wrapper layout
│   │   ├── seo.jsx          # Meta tags & SEO component
│   │   └── styles.scss      # Bulma SCSS customization & global styles
│   ├── data/
│   │   └── projects.csv     # 122+ project records (imported directly)
│   ├── hooks/
│   │   └── useProjectsData.js # CSV data loader hook
│   ├── images/              # Static PNG assets (header, about, services, etc.)
│   ├── pages/               # Route components (index, about, services, etc.)
│   ├── App.jsx              # React Router v6 setup
│   └── main.jsx             # React 18 DOM root & HelmetProvider
├── index.html               # Main HTML template
├── vite.config.js           # Vite config & path aliases (@src, @components, etc.)
├── .env.example             # Environment variables template
└── package.json             # NPM dependencies & scripts
```

---

## 🔑 Environment Variables Reference

Create a `.env` or `.env.local` file in the root directory for local development, or set these in **Cloudflare Pages Dashboard -> Settings -> Environment Variables**:

| Variable | Scope | Description | Required? |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | Serverless (`functions/`) | API key from [Resend](https://resend.com) to send emails to `mail@triroyal.net` | **Yes** (for form emails) |
| `TURNSTILE_SECRET_KEY` | Serverless (`functions/`) | Private secret key from Cloudflare Turnstile dashboard | Optional |
| `VITE_TURNSTILE_SITE_KEY` | Frontend (`src/`) | Public site key to render Cloudflare Turnstile widget | Optional |

Template file `.env.example` is provided in the repository root.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled static output will be generated in `./dist`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to Cloudflare Pages

### Option A: Git Integration (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Log into the **Cloudflare Dashboard** -> **Workers & Pages** -> **Create application** -> **Pages**.
3. Connect your Git repository and select project `triroyal.net`.
4. Set build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Add `RESEND_API_KEY` under **Environment Variables**.
6. Click **Save and Deploy**.

### Option B: Direct Deployment via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name=triroyal-net
```

---

## 🛡 Form Security & Multi-Layer Anti-Bot Protection

The contact form is protected by 4 layers of security:
1. **Cloudflare Edge Rate Limiting**: Managed at edge layer by Cloudflare WAF.
2. **Honeypot Trap (`botfield`)**: Invisible input field that catches automated crawlers instantly.
3. **Cloudflare Turnstile**: Server-verified CAPTCHA before triggering email sending.
4. **Dual Input Validation**: Upfront character limit hints (`100` chars for name/email, `2000` chars for message) with live remaining character counters and server-side worker validation.
