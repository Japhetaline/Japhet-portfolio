# Japhet Portfolio - Modern React Portfolio

A modern, responsive portfolio website built with React, TailwindCSS, and Framer Motion animations.

## Features

- 🎨 **Modern UI Design** - Clean, professional design with smooth animations
- 🌓 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ✨ **Framer Motion Animations** - Smooth transitions and micro-interactions
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 🚀 **Performance Optimized** - Built with Vite for fast development and production builds

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Font Awesome** - Icons

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Portfolio.jsx   # Portfolio section
│   ├── Contact.jsx     # Contact section
│   └── ...
├── data/               # Data files
│   ├── about.js        # About information
│   ├── projects.js     # Projects and graphics
│   ├── skills.js       # Skills data
│   ├── timeline.js     # Timeline/experience
│   └── contact.js      # Contact information
├── context/            # React context
│   └── ThemeContext.jsx # Dark mode context
└── App.jsx             # Main app component
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Update Content

Edit the data files in `src/data/` to update:
- Personal information (`about.js`)
- Projects (`projects.js`)
- Skills (`skills.js`)
- Timeline/Experience (`timeline.js`)
- Contact information (`contact.js`)

### Styling

The project uses TailwindCSS with custom configuration in `tailwind.config.js`. You can:
- Modify colors in the theme
- Adjust spacing and typography
- Customize animations

### Images

**Important:** Copy all images from the `img/` folder to `public/img/` directory. Vite serves static assets from the `public/` folder.

You can do this manually or run:
```bash
# Windows PowerShell
New-Item -ItemType Directory -Force -Path "public\img" | Out-Null
Copy-Item -Path "img\*" -Destination "public\img\" -Recurse -Force

# Or manually copy the img folder contents to public/img/
```

Images should be referenced in your data files with paths starting with `/img/` (e.g., `/img/Japhet3.jpg`).

## Sections

1. **Hero** - Introduction and main call-to-action
2. **About** - Personal information, stats, skills, and timeline
3. **Portfolio** - Projects showcase and graphics design gallery
4. **Contact** - Contact form and social links

## Form Submission

The contact form uses Formspree. Update the form action URL in `src/data/contact.js` with your Formspree endpoint.

## License

Copyright © 2025 | All rights reserved

