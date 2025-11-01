# Health App

A modern health tracking web application built with React, Vite, and Tailwind CSS. The app features pixel-perfect UI, dynamic charts, diary/photo cards, authentication, and responsive layouts.

## Features

- **Pixel-perfect UI**: Custom components for header, footer, buttons, cards, and charts.
- **Authentication**: Google login, protected routes, and sign-in/logout menu.
- **Dynamic Data**: Interactive charts (Recharts), diary and food photo cards, and filterable content.
- **Responsive Design**: Mobile-friendly layouts using Tailwind CSS.
- **Scroll to Top**: Floating button for easy navigation.
- **Routing**: React Router with authentication guards.
- **Custom Theming**: Extended Tailwind config for colors, fonts, and gradients.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/uthtuan/health-app.git
cd health-app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  components/
    layout/         # Header, Footer, Sidebar, HeaderMenu
    ui/             # Button, FilterBtn, FoodPhotoCard, ChartContainer, etc.
    sections/       # Page sections (e.g., BodyRecordChart)
    configs/        # Static config/data files
    hooks/          # Custom React hooks (e.g., use-scroll)
  pages/            # Main pages (Home, Discovery, Login, etc.)
  lib/              # Utilities and route definitions
  assets/           # Images, icons, fonts
public/
  photos/           # Demo images for cards
```

## Key Technologies

- **React** (with hooks)
- **Vite** (fast dev/build)
- **Tailwind CSS** (utility-first styling)
- **Recharts** (charts)
- **React Router** (routing & guards)
- **Lucide React** (icons)
- **Class Variance Authority** (button variants)
- **Google OAuth** (demo login)

- Update theme and colors in `tailwind.config.js`.
- Add/modify demo data in `src/components/configs/`.
- Adjust authentication logic in `src/routes.tsx` and `src/pages/login-page.tsx`.
