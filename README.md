# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a clean blue and white design with animations and hover effects.

![Portfolio Preview](public/images/portfolio-preview.jpg)

## 🌟 Features

- **Modern Design**: Clean, professional layout with blue & white theme
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and hover effects
- **Dynamic Content**: Easy project management through JSON files
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Optimized images and code splitting
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Technologies Used

- **Frontend**: React 18, Next.js 15, TypeScript
- **Styling**: TailwindCSS with custom animations
- **Deployment**: Vercel (ready-to-deploy)
- **Development**: ESLint, PostCSS
- **Icons**: Heroicons (via SVG)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          # Project screenshots and assets
│   └── ...             # Static files
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── projects/   # Projects page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   │   ├── Layout.tsx  # Main layout with nav/footer
│   │   └── ProjectCard.tsx # Project card component
│   └── data/
│       └── projects.json # Project data
├── vercel.json         # Vercel deployment config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
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

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Easy Configuration

This portfolio is designed to be **easily configurable** through centralized configuration files. No need to dig through component code!

### 🔧 Quick Setup

1. **Personal Information**: Update `src/config/personal.ts`
   ```typescript
   export const personalConfig = {
     name: "Your Name",
     initials: "YN",
     title: "Your Title",
     location: "Your Location",
     // ... and more
   }
   ```

2. **Skills**: Update `src/config/skills.ts`
   ```typescript
   export const skillsConfig = [
     {
       category: 'Frontend Development',
       technologies: ['React', 'TypeScript'],
       level: 90 // 0-100
     }
   ]
   ```

3. **Projects**: Update `src/data/projects.json`
   ```json
   {
     "id": 1,
     "title": "Your Project",
     "description": "Short description",
     "techStack": ["React", "Node.js"],
     "githubUrl": "https://github.com/username/project",
     "imageUrl": "/images/project-preview.jpg",
     "featured": true,
     "category": "Full-Stack",
     "completedDate": "2024-12-01"
   }
   ```

4. **Timeline**: Update `src/config/timeline.ts`
5. **Contact Info**: Update `src/config/contact.ts`
6. **Site Settings**: Update `src/config/site.ts`

### 📖 Detailed Configuration Guide

See **[CONFIGURATION.md](CONFIGURATION.md)** for a complete guide on customizing every aspect of your portfolio.

### 🚀 Configuration Files

- `src/config/personal.ts` - Personal info, bio, contact details
- `src/config/skills.ts` - Technical skills and levels
- `src/config/timeline.ts` - Career timeline and milestones
- `src/config/interests.ts` - Areas of interest
- `src/config/navigation.ts` - Navigation and social links
- `src/config/contact.ts` - Contact page settings and FAQ
- `src/config/site.ts` - SEO, metadata, and site-wide settings

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray (#6b7280)
- **Background**: White (#ffffff)
- **Text**: Gray-900 (#111827)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular weight, line-height 1.6

### Components
- **Cards**: Rounded corners, shadow on hover
- **Buttons**: Hover animations, focus states
- **Forms**: Clean inputs with validation styles

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings

### Alternative Deployments

- **Netlify**: Import from GitHub, auto-deploy
- **GitHub Pages**: Use `npm run build` and deploy `/out`
- **Railway**: Connect GitHub repo for auto-deploy

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Caching**: Static generation for optimal performance

## 🛡️ Security

- **HTTPS**: Enforced in production
- **Security Headers**: Content Security Policy, X-Frame-Options
- **Input Validation**: Form validation and sanitization
- **No Sensitive Data**: No API keys or secrets in client code

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Environment Variables

Create `.env.local` for environment-specific configs:

```env
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Issues**: GitHub Issues
- **Questions**: Discussion tab
- **Contact**: your.email@example.com

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For seamless deployment
- **TailwindCSS**: For beautiful styling
- **Heroicons**: For the icon set

---

**Happy coding!** 🚀

Made with ❤️ by [Your Name](https://yourportfolio.com)