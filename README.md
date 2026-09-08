# Gaurav Beniwal — Personal Portfolio Website

A minimal, premium, liquid-glass personal brand website designed specifically for Gaurav Beniwal — software developer, automation engineer, and digital product builder.

Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 📑 Table of Contents
1. [How to Run the Project](#1-how-to-run-the-project)
2. [How to Change Profile Information](#2-how-to-change-profile-information)
3. [How to Change WhatsApp / Phone / Email](#3-how-to-change-whatsapp--phone--email)
4. [How to Add a Project](#4-how-to-add-a-project)
5. [How to Replace Project Images](#5-how-to-replace-project-images)
6. [How to Add a Skill](#6-how-to-add-a-skill)
7. [How to Add an Experience Entry](#7-how-to-add-an-experience-entry)
8. [How to Change Colors & Theme](#8-how-to-change-colors--theme)
9. [How to Deploy the Website](#9-how-to-deploy-the-website)
10. [Quick Reference: Files to Edit vs. Avoid Touching](#10-quick-reference-files-to-edit-vs-avoid-touching)

---

## 1. How to Run the Project

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm or yarn

### Steps:
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

To create an optimized production build:
```bash
npm run build
```

---

## 2. How to Change Profile Information

All personal details, bio, headlines, location, and social links are centralized in:
📂 `src/config/site.ts`

Open `src/config/site.ts` and modify any field:

```typescript
export const siteConfig = {
  name: "Gaurav Beniwal",
  role: "Developer & Digital Product Builder",
  age: 18,
  location: "Panipat, Haryana, India",
  experienceYears: "4+",

  // Headline & Hero text
  hero: {
    badge: "Available for selected projects",
    headline: "Building digital products that actually work.",
    description: "Hi, I'm Gaurav Beniwal — a developer from Panipat, Haryana with 4+ years of hands-on experience building websites, applications, automation systems and digital products.",
    primaryCtaText: "Let's Work Together",
    secondaryCtaText: "View My Work",
    profileImage: "/images/profile.webp",
    profileImageFallback: "/images/profile-placeholder.svg",
  },
  
  // Social profiles (Leave empty string "" to hide any icon)
  socials: {
    github: "https://github.com/gauravbeniwal",
    linkedin: "https://linkedin.com/in/gauravbeniwal",
    instagram: "https://instagram.com/gauravbeniwal",
    youtube: "https://youtube.com/@gauravbeniwal",
    x: "https://x.com/gauravbeniwal",
  },
};
```

Any change made here immediately updates the whole site (Navigation, Hero, About, Footer, Meta tags).

---

## 3. Configured WhatsApp / Phone / Email / Instagram

In `src/config/site.ts`:

```typescript
// Configured contact details:
whatsapp: "919729480795", // Phone number with country code, no "+" or spaces
whatsappPrefillMessage: "Hi Gaurav, I saw your portfolio and would like to discuss a project with you.",
phone: "+91 9729480795",
email: "gauravbeniwal30003@gmail.com",
instagramHandle: "@gauravbeniwalx",
socials: {
  instagram: "https://instagram.com/gauravbeniwalx",
  // ...
}
```

- Clicking **"WhatsApp"** opens `https://wa.me/919729480795` with prefilled message.
- Clicking **"Call +91 9729480795"** opens direct mobile dialer (`tel:+919729480795`).
- Clicking **"Send Email"** opens direct mail composer to `gauravbeniwal30003@gmail.com`.
- Clicking **"Instagram"** opens `@gauravbeniwalx` profile (`https://instagram.com/gauravbeniwalx`).
- Visitors can also click the **Copy** buttons to copy your email, mobile number, or Instagram handle with one click.

---

## 4. Configured Live Demo Projects

The 4 live demo sites configured on your portfolio:

| Project | Live Demo URL | Category |
| --- | --- | --- |
| **QueKart™** | [quekart.in](https://www.quekart.in) | Direct Factory Wholesale Marketplace |
| **SocialUpHub** | [socialuphub.in](https://www.socialuphub.in) | Automated SMM Growth Panel Platform |
| **XYZ Supplements** | [xyzsupplement.netlify.app](https://xyzsupplement.netlify.app) | Performance Nutrition Store |
| **Drishti Library** | [drishtilibrary.netlify.app](https://drishtilibrary.netlify.app) | Digital Study Hall & Seat Booking Portal |

Each demo project is configured inside `src/data/projects.ts` with custom mockups in `public/images/projects/`.

---

## 5. How to Add or Modify Projects

Projects are managed inside:
📂 `src/data/projects.ts`

To add a new project, copy and paste this block into the `projects` array:

```typescript
{
  id: "my-new-project",
  title: "E-Commerce Web Application",
  category: "Web Application", // Category pill label
  description: "A fast, conversion-optimized web store with real-time cart synchronization and secure checkout.",
  image: "/images/projects/my-project.webp", // Path in public/ folder
  technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
  link: "https://my-demo-link.com",
  github: "https://github.com/gauravbeniwal/my-repo", // Optional
  featured: false // Set to true to make it span a large magazine card
},
```

---

## 5. How to Replace Project Images & Profile Photo

### Your Profile Photo:
1. Save your photo as:
   `public/images/profile.webp` (or `.jpg` / `.png`)
2. If the file is not yet added, the website automatically displays the sleek fallback avatar in `public/images/profile-placeholder.svg`.

### Project Images:
1. Save your project screenshots/mockups in:
   `public/images/projects/`
   For example:
   - `public/images/projects/project-1.webp`
   - `public/images/projects/project-2.webp`
2. Update the `image` field in `src/data/projects.ts` to point to `/images/projects/project-1.webp`.
3. Recommended format: **WebP** for instant loading and high clarity.

---

## 6. How to Add a Skill

Skills are managed in:
📂 `src/data/skills.ts`

### To add to the top highlight pill row:
Add the name to `highlightSkills`:
```typescript
export const highlightSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "Docker", // <-- Added new skill
];
```

### To add to a category card:
Add the item to the `skills` array under any category:
```typescript
{
  title: "Backend & Systems",
  description: "Database architectures, server environments, and reliable APIs.",
  skills: [
    "REST APIs",
    "Python",
    "Firebase",
    "PostgreSQL", // <-- Added new skill
  ],
}
```

---

## 7. How to Add an Experience Entry

The timeline is managed in:
📂 `src/data/experience.ts`

To add or update an entry, add an object to the `experienceTimeline` array:

```typescript
{
  period: "2026",
  focus: "Scaling Client Digital Products",
  description: "Architecting microservices and building high-traffic web applications for modern businesses.",
  highlights: ["Multi-tenant architectures", "Edge deployments", "Performance optimization"],
},
```

---

## 8. How to Change Colors & Theme

Colors are organized using CSS variables in:
📂 `src/index.css`

Inside the `:root` block, you can modify any color token:

```css
:root {
  /* Canvas Background */
  --background: #ffffff;
  
  /* Text */
  --foreground: #09090b;       /* Dark charcoal / near-black */
  --foreground-muted: #52525b; /* Muted gray text */

  /* Primary Brand Action (Professional Green) */
  --primary: #10b981;          /* Emerald green CTA buttons & accents */
  --primary-hover: #059669;    /* Darker shade on hover */
  --primary-light: #ecfdf5;    /* Subtle 5% tint for badges */

  /* Borders & Glass */
  --border: #e4e4e7;
  --glass-bg: rgba(255, 255, 255, 0.72);
}
```

---

## 9. How to Deploy the Website

### ⚡ Option A: Cloudflare Pages (Recommended — Fast, Free SSL, Global CDN)

Cloudflare Pages is the best hosting choice for this portfolio. It has zero MIME type errors, automatic global CDN caching, and 100% uptime.

The project is already pre-configured for Cloudflare Pages with:
- **`_redirects`**: Handles client-side Single Page Application (SPA) routing (`/*  /index.html  200`).
- **`_headers`**: Provides strict security headers and 1-year immutable caching for static assets.
- **`cloudflare_pages_dist.zip`**: Ready-to-upload archive for direct drag-and-drop.

#### Method 1: Direct Upload (Drag & Drop — No Git required!)
1. Log in to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
3. Enter a project name (e.g., `gauravbeniwal`).
4. Drag and drop the **`cloudflare_pages_dist.zip`** (or the **`dist`** folder) directly into Cloudflare Pages.
5. Click **Deploy site**.
6. Done! Your site will be live at `https://gauravbeniwal.pages.dev` in 10 seconds!

#### Method 2: Connect GitHub Repo (Automatic Builds on Git push)
1. Push this project to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave blank)
5. Click **Save and Deploy**. Cloudflare will automatically build and deploy every time you push code!

---

### 🚀 Option B: Deploying on InfinityFree Hosting (Ready to Upload!)

**Aapko InfinityFree par koi terminal ya build command run karne ki zaroorat nahi hai!** 
Humne aapke liye saare files pehle se hi compile karke **`htdocs/`** folder aur **`infinityfree_htdocs.zip`** me prepare kar diye hain.

#### Step 1: Ready-Made Files (Pehle se compiled hain)
Project ke andar aapko direct **`htdocs/`** folder aur **`infinityfree_htdocs.zip`** milenge.
Inme ye ready files hain:
- `index.html` (Compiled SPA entry)
- `.htaccess` (InfinityFree Apache routing, MIME type fix & Gzip)
- `assets/` (Compiled JS & CSS)
- `images/` (Profile photo & assets)
- `robots.txt` & `sitemap.xml` (SEO indexing)

#### Step 2: Upload to InfinityFree File Manager
1. Apne **[InfinityFree Client Area](https://dash.infinityfree.com)** me login karein aur **File Manager** kholein.
2. **`htdocs/`** folder ke andar jayein.
3. **Pehle se maujood saari files delete kar dein** (jaise `index2.html` ya jo pehle upload kiya tha).
4. `htdocs/` folder ke andar hamare **`htdocs`** folder ki saari files upload kar dein:
   - Ya toh File Manager me **Upload Zip Archive and Unpack** choose karke **`infinityfree_htdocs.zip`** upload kar dein.
   - Ya phir `htdocs/` ke andar ke files (`index.html`, `.htaccess`, `assets/`, `images/`, `robots.txt`, `sitemap.xml`) ko directly upload kar dein.

> ⚠️ **Dhayan dein**: `src/`, `package.json`, ya `tsconfig.json` ko InfinityFree par upload **mat** karein. Sirf compiled files (`htdocs/` wali) hi upload karni hain.

#### Step 3: Test your website
Apni website URL kholein aur **Ctrl + Shift + R** (hard refresh) karein. Portfolio bina kisi error ke instant load ho jayega!

---

### Option B: Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Click **Deploy**.

### Option C: Netlify
1. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 10. Quick Reference: Files to Edit vs. Avoid Touching

### ✅ Files You Should Normally Edit:
| File | What it controls |
| --- | --- |
| `src/config/site.ts` | Your name, phone, WhatsApp, email, bio, social links, headline |
| `src/data/projects.ts` | All project cards, links, descriptions, tags, and images |
| `src/data/skills.ts` | The tech stack cards and pill badges |
| `src/data/experience.ts` | The timeline years and milestones |
| `src/data/whatIBuild.ts` | The 6 core service/discipline glass cards |
| `src/index.css` | Color scheme CSS variables (`--primary`, `--background`, etc.) |
| `public/images/` | Your profile picture and project screenshots |

### 🛑 Files You Should Avoid Touching:
| File | Why |
| --- | --- |
| `src/App.tsx` | Main structure connecting all sections |
| `src/components/*` | Handcrafted liquid-glass responsive components and animations |
| `src/main.tsx` | React mount entry point |
| `vite.config.ts` | Build and Tailwind configuration |
| `package.json` | Project dependencies |
