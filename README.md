# JSG Partners - Law Firm Website

A modern, responsive website for JSG Partners, a full-service law firm in Mumbai, India. Built with Next.js 15 and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Next.js 15**: Latest version with App Router and Turbopack
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, sitemap, and robots.txt
- **Interactive Elements**: 
  - Typewriter animation on homepage
  - Disclaimer modal
  - Mobile navigation
  - Contact forms
  - Google Maps integration
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## Pages

1. **Home** (`/`) - Hero section with typewriter animation and company overview
2. **About Us** (`/about`) - Company philosophy, approach, and commitment
3. **Partners** (`/partners`) - Information about the three founding partners
4. **Practice Areas** (`/practice-areas`) - Six main areas of legal practice
5. **Careers** (`/careers`) - Job openings and benefits
6. **Contact** (`/contact`) - Contact form, office locations, and Google Maps

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)
- **Icons**: Heroicons (Tailwind CSS compatible)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jsg
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jsg/
├── app/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Footer.js
│   ├── about/
│   │   └── page.js
│   ├── careers/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── partners/
│   │   └── page.js
│   ├── practice-areas/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── images/
│   ├── robots.txt
│   └── sitemap.xml
└── package.json
```

## License

© 2025 JSG Partners. All Rights Reserved.
