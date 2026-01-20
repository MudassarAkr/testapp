<div align="center">
  <h1>🔍 UserLens</h1>
  <p><strong>Watch real people test your product</strong></p>
  <p>Get honest feedback from verified testers. Watch them navigate, hear their thoughts, and fix issues before launch.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat-square&logo=tailwind-css)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27-FF0055?style=flat-square&logo=framer)
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 About

**UserLens** is a two-sided marketplace platform that connects product teams with real users for UX testing. Get actionable feedback on your websites, apps, and prototypes before launch.

### Why UserLens?

- ✅ **Verified Testers** - Email and phone verified humans, no bots
- ⚡ **Fast Turnaround** - First submissions within 24 hours
- 🔒 **Escrow Payments** - Secure payment system with approval workflow
- 📝 **Structured Feedback** - Custom tasks and questions for actionable insights
- 💰 **Fair Pricing** - Transparent per-tester pricing ($4.99/test)
- 🎯 **Target Demographics** - Filter by country, device, and experience

---

## ✨ Features

### Current Features

- 🎨 **Modern Landing Page** with immersive hero section
- 📱 **Interactive Testing Visualization** with animated device mockup
- 🎭 **Animated Navigation** with tubelight effect (powered by Framer Motion)
- 🌈 **Custom Gradient Theme** (#4B086D → #ACC0FE)
- 📊 **Real-time Cursor Trails** and feedback bubbles demo
- 💬 **Social Proof** section with testimonials
- 🔄 **Responsive Design** for all screen sizes

### Planned Features

- 🔐 Authentication system (email, Google, GitHub)
- 👥 Role-based access (Client, Tester, Admin)
- 💳 Stripe payment integration
- 📧 Email notifications (Resend)
- 🗄️ Database integration (Supabase/PostgreSQL)
- 📤 File uploads (Cloudinary)
- 📱 Test creation and management dashboard
- 🎥 Video feedback recording
- 📈 Analytics and reporting

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16.1.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion 12.27](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Backend (Planned)
- **[Supabase](https://supabase.com/)** - PostgreSQL database & authentication
- **[Stripe](https://stripe.com/)** - Payment processing
- **[Resend](https://resend.com/)** - Transactional emails
- **[Cloudinary](https://cloudinary.com/)** - Media storage

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/userlens.git
   cd userlens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (when backend is implemented)
   ```bash
   cp .env.example .env.local
   ```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
testapp/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   └── tubelight-navbar.tsx
│   └── LandingPage.tsx      # Main landing page
├── docs/                    # Documentation
│   ├── user_lens_prd.md     # Product Requirements Document
│   └── user_lens_security_trust_model.md
├── lib/                     # Utility functions
│   └── utils.ts             # cn() and other helpers
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

---

## 🔑 Key Components

### `LandingPage.tsx`
Main landing page featuring:
- Hero section with animated visualization
- Features showcase
- How it works process
- Pricing information
- Testimonials
- Call-to-action sections

### `tubelight-navbar.tsx`
Animated navigation component with:
- Tubelight spotlight effect
- Smooth spring animations
- Responsive icon/text display
- Active state tracking

### `TestingVisualization`
Interactive demo component featuring:
- 3D phone mockup with rotation
- Animated cursor trails
- Live feedback bubbles
- Typing indicators
- Click heatmap visualization
- Floating reaction emojis

---

## 🗺️ Roadmap

### Phase 1: Foundation (Current)
- [x] Landing page design
- [x] Component library setup
- [x] Animation system
- [ ] Database schema design
- [ ] API architecture planning

### Phase 2: Authentication & User Management
- [ ] User registration & login
- [ ] OAuth integration (Google, GitHub)
- [ ] Email verification
- [ ] Profile management

### Phase 3: Core Features
- [ ] Test creation workflow
- [ ] Tester onboarding
- [ ] Test submission interface
- [ ] Review & approval system

### Phase 4: Payments & Security
- [ ] Stripe integration
- [ ] Escrow system
- [ ] Payout management
- [ ] Security audit

### Phase 5: Advanced Features
- [ ] Video feedback
- [ ] Screen recording
- [ ] Analytics dashboard
- [ ] Admin panel

### Phase 6: Launch
- [ ] Beta testing
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Production deployment

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint for code quality
- Write clean, readable code
- Add comments for complex logic
- Test thoroughly before submitting

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mudassar Akram**

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons

---

<div align="center">
  <p>Made with ❤️ by Mudassar Akram</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
