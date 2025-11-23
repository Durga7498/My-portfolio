# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a dark theme with cyan accents, animated particle background, and smooth scroll navigation.

## Features

- 🎨 Dark theme with cyan/blue accent colors
- ✨ Animated particle background using react-tsparticles
- 📱 Fully responsive design (Desktop, Tablet, Mobile)
- 🎭 Smooth animations with Framer Motion
- 🧭 Active section highlighting in navbar
- 📄 Single-page layout with smooth scroll navigation
- 🎯 Sections: Hero, Education, Projects, Skills, Contact

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **react-icons** for icons
- **react-tsparticles** for animated background
- **TypeScript** for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "My portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and particles
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Education.tsx       # Education timeline
│   ├── Projects.tsx         # Projects grid
│   ├── Skills.tsx          # Skills categories
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer component
│   ├── ParticlesBackground.tsx  # Animated particles
│   └── SectionTitle.tsx    # Reusable section title
├── data/
│   ├── projects.ts         # Projects data
│   ├── education.ts        # Education data
│   ├── skills.ts           # Skills data
│   └── contact.ts          # Contact information
└── hooks/
    └── useTheme.ts         # Theme hook (ready for light mode)
```

## Customization

### Update Personal Information

1. **Name**: Update "Your Name" in:
   - `components/Navbar.tsx` (line with logo)
   - `components/Hero.tsx` (main heading)
   - `app/layout.tsx` (metadata)
   - `components/Footer.tsx` (copyright)

2. **Projects**: Edit `data/projects.ts` to add/update your projects

3. **Education**: Edit `data/education.ts` to update your education history

4. **Skills**: Edit `data/skills.ts` to customize your skills

5. **Contact**: Edit `data/contact.ts` to update contact information

6. **Social Links**: Update social media links in:
   - `components/Hero.tsx` (social icons)
   - `components/Contact.tsx` (contact info)
   - `components/Footer.tsx` (footer icons)

### Resume

Place your resume PDF file at `public/resume.pdf` for the download button to work.

### Styling

- Colors can be customized in `tailwind.config.ts`
- Primary color (cyan) is defined as `#06b6d4`
- Global styles are in `app/globals.css`

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

The site is optimized for Vercel deployment and will work out of the box.

## License

This project is open source and available for personal use.

