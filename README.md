# Shashank Korthiwada - Modern Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, smooth interactions, and a professional design.

## 🚀 Features

### **Advanced Animations & Interactions**
- **Framer Motion** for smooth page transitions and micro-interactions
- **GSAP** for complex timeline animations
- **Intersection Observer API** for scroll-triggered animations
- **Typing animations** in the hero section
- **Particle effects** and floating elements
- **Hover effects** and magnetic buttons

### **Modern Design System**
- **Custom color palette** with primary, secondary, and accent colors
- **Responsive typography** with Inter and JetBrains Mono fonts
- **Glass morphism effects** and gradient backgrounds
- **Consistent spacing** using 8px base unit system
- **Dark/light mode ready** design tokens

### **Performance Optimized**
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for rapid styling and consistency
- **Lazy loading** and optimized images
- **SEO optimized** with proper meta tags

### **Interactive Components**
- **Animated navigation** with glass effect
- **Hero section** with typing animation and particle effects
- **Skills section** with animated progress bars
- **Projects showcase** with filtering and hover effects
- **Contact form** with validation and animations
- **Blog section** with reading time estimates

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### **Animation Libraries**
- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional-grade animations
- **Lucide React** - Beautiful icons

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Navigation.tsx       # Animated navigation
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with timeline
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Projects showcase
│   ├── Blog.tsx            # Blog section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions
└── types/                  # TypeScript type definitions
```

## 🎨 Design System

### **Colors**
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Secondary**: Gray scale (#F8FAFC to #0F172A)
- **Accent**: Green, Yellow, Red, Purple

### **Typography**
- **Headings**: Inter (Bold, 600-800 weights)
- **Body**: Inter (Regular, 400-500 weights)
- **Code**: JetBrains Mono (400-600 weights)

### **Spacing**
- **Base Unit**: 8px
- **Scale**: xs(4px), sm(8px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px)

### **Animations**
- **Duration**: Fast(150ms), Normal(300ms), Slow(500ms)
- **Easing**: ease-in-out, ease-out
- **Transitions**: Fade, Slide, Scale, Rotate

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/shashankorthiwada/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### **Build for Production**

```bash
npm run build
npm start
```

## 🎯 Key Features Implementation

### **1. Advanced Navigation**
- Glass morphism effect on scroll
- Smooth hover animations
- Mobile-responsive hamburger menu
- Social media links integration

### **2. Hero Section**
- Typing animation with multiple texts
- Particle background effects
- Animated profile image
- Call-to-action buttons with hover effects

### **3. Skills Section**
- Animated progress bars
- Technology grid with icons
- Category-based organization
- Interactive hover states

### **4. Projects Showcase**
- Filterable project grid
- Featured project badges
- Live demo and code links
- Technology tags

### **5. Contact Form**
- Form validation
- Loading states
- Success/error messages
- Social media integration

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### **Colors**
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
  },
  secondary: {
    50: '#f8fafc',
    // ... other shades
  }
}
```

### **Content**
Update the content in each component:
- Personal information in `Hero.tsx`
- Skills data in `Skills.tsx`
- Projects in `Projects.tsx`
- Contact details in `Contact.tsx`

### **Animations**
Modify animation parameters in `globals.css`:

```css
--transition-fast: 150ms ease-in-out;
--transition-normal: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` folder

### **Other Platforms**
- **GitHub Pages**: Use `next export`
- **AWS S3**: Upload static files
- **Firebase Hosting**: Use Firebase CLI

## 📈 Performance

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Optimizations**
- Image optimization with Next.js
- Code splitting and lazy loading
- CSS and JS minification
- Gzip compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for utility-first styling
- **Lucide** for beautiful icons
- **Next.js** team for the amazing framework

---

**Built with ❤️ by Shashank Korthiwada**
