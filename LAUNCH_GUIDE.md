# 2Go Website: Launching & GitHub Guide

This guide provides everything you need to know about running, maintaining, and deploying the **2Go Fresh Beverage Brand** website.

## 🚀 Project Launching Guide

### 1. Local Development

To run the project on your local machine:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Dev Server**:
    ```bash
    npm run dev
    ```
3.  **Access the Site**: Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Building for Production

Next.js is configured for a **static export**, which is required for GitHub Pages.

1.  **Build Command**:
    ```bash
    npm run build
    ```
    This creates an `out/` directory containing the static HTML, CSS, and JS files.

---

## 🛠 GitHub & Deployment Guide

### 1. Automated Deployment

The project uses **GitHub Actions** to automatically deploy to GitHub Pages whenever you push to the `main` branch.

- **Workflow File**: `.github/workflows/nextjs.yml`
- **Deployment URL**: [https://iam-abrarx.github.io/2Go-a-freshness-first-beverage-brand/](https://iam-abrarx.github.io/2Go-a-freshness-first-beverage-brand/)

### 2. GitHub Pages "Gotchas" (Mandatory Reading)

Because the site is hosted in a subfolder (`/2Go-a-freshness-first-beverage-brand/`), standard asset paths will break. We have implemented a system to fix this:

#### ⚠️ Handling Images and Assets

**NEVER** use hardcoded strings for image paths like `<Image src="/assets/logo.png" />`.
**ALWAYS** use the `getAssetPath` utility:

```tsx
import { getAssetPath } from "@/lib/utils";

// Correct way:
<Image src={getAssetPath("/assets/logo.png")} ... />
```

This utility ensures that paths correctly resolve to the project subfolder on GitHub but still work locally.

#### ⚠️ Jekyll Filtering

The file `public/.nojekyll` must remain in the project. It tells GitHub Pages not to ignore the `_next` directory, which contains all the core website logic.

### 3. Pushing Changes

Whenever you make a change and want it to go live:

```bash
git add .
git commit -m "Describe your changes (e.g., 'Update pricing')"
git push origin main
```

Monitor the progress in the **"Actions"** tab of your GitHub repository. Once the workflow turns green, your changes are live!

---

## 🎨 Design System

- **Fonts**: Urbanist (Luxury/Premium feel) & Noto Sans Bengali.
- **Root Styles**: Defined in `src/app/globals.css`.
- **Components**: Stylized with a "Mastermind" aesthetic (gradients, glassmorphism, and bold typography).
