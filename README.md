# Personal  Portfolio Template

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Perfect for students to showcase their projects, skills, and career journey. Features a clean design with smooth animations and easy customization.

> **🎯 For Students**: This template is designed to be easily customizable with your own data. Follow the setup guide below to create your personal portfolio in minutes!

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

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Step 1: Get the Template

#### Option A: Use as Template (Recommended)
1. Click **"Use this template"** button at the top of this repository
2. Create a new repository in your GitHub account
3. Clone your new repository:
   ```bash
   git clone https://github.com/YOURUSERNAME/YOURREPONAME.git
   cd YOURREPONAME
   ```

#### Option B: Fork the Repository
1. Click **"Fork"** button at the top of this repository
2. Clone your forked repository:
   ```bash
   git clone https://github.com/OfekCo3/portfolio.git
   cd portfolio
   ```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio!

### Step 4: Customize with Your Data
Follow the **"📝 Easy Customization Guide"** section below.

### Available Scripts

- `npm run dev` - Start development server (for development)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Check for code issues

## 📝 Easy Customization Guide

This portfolio is designed to be **easily customizable** with your own data. All personal information is stored in separate config files - no need to edit complex component code!

### 🎯 5-Minute Setup Checklist

Follow these steps to make the portfolio yours:

#### 1. **👤 Personal Information** (`src/config/personal.ts`)
Replace the example data with your information:
```typescript
export const personalConfig = {
  name: "Your Full Name",                    // Your name
  initials: "YN",                           // Used in logo/favicon
  title: "Computer Science Student",        // Your title/role
  location: "Your City, Country",           // Where you're located
  email: "your.email@example.com",          // Your email
  phone: "+1234567890",                     // Your phone
  profileImage: "/images/profile.jpg",      // Your photo
  heroDescription: "Write a brief intro about yourself...",
  // ... more fields to customize
}
```

#### 2. **💼 Projects** (`src/data/projects.json`)
Add your own projects:
```json
[
  {
    "id": 1,
    "title": "Your Amazing Project",
    "description": "Brief description of what your project does",
    "longDescription": "Detailed description...",
    "techStack": ["React", "Node.js", "MongoDB"],
    "githubUrl": "https://github.com/yourusername/project",
    "linkedinUrl": "https://www.linkedin.com/posts/yourusername/project",
    "imageUrl": "/images/projects/your-project.jpg",
    "category": ["Cloud", "AI", "Serverless"],
    "completedDate": "2024-01-15"
  }
]
```

#### 3. **🛠️ Skills** (`src/config/skills.ts`)
Update with your technical skills:
```typescript
export const skillsConfig = [
  {
    category: 'Programming Languages',
    technologies: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'HTML5', 'CSS3']
  },
  // Add more categories...
]
```

#### 4. **📅 Timeline** (`src/config/timeline.ts`)
Add your career/education milestones:
```typescript
export const timelineConfig = [
  {
    year: '2024',
    title: 'Started Computer Science Degree',
    description: 'Began studying CS at University Name',
    type: 'education'  // 'work', 'education', 'milestone', 'goal', 'volunteering'
  },
  // Add more timeline items...
]
```

#### 5. **📱 Social Links** (`src/config/navigation.ts`)
Update your social media links:
```typescript
export const socialLinksConfig = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'linkedin'
  },
  // Add more social links...
]
```

#### 6. **🖼️ Images**
- Add your profile photo to `public/images/profile.jpg`
- Add project screenshots to `public/images/projects/`
- Recommended image sizes:
  - Profile photo: 500x500px
  - Project images: 800x600px

#### 7. **🌐 Site Settings** (`src/config/site.ts`)
Update SEO and site metadata:
```typescript
export const siteConfig = {
  name: "Your Name - Portfolio",
  description: "Your portfolio description for search engines",
  url: "https://yourportfolio.com",
  // ... more SEO settings
}
```

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

## 🚀 Student Deployment Guide

### Deploy Your Portfolio for FREE

#### Option 1: Vercel (Recommended - Easiest)

1. **Prepare your code**
   ```bash
   git add .
   git commit -m "My portfolio customization"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub
   - Click **"New Project"**
   - Select your portfolio repository
   - Click **"Deploy"** (no configuration needed!)
   - Your portfolio will be live at `yourproject.vercel.app`

3. **Share your portfolio**
   - Add the live URL to your GitHub repository description
   - Include it in your resume/CV
   - Share on LinkedIn and social media

#### Option 2: Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your project folder (after running `npm run build`)
3. Get your live URL instantly

#### Option 3: GitHub Pages (Free with Custom Domain)

1. In your repository settings, enable GitHub Pages
2. Set source to "GitHub Actions"
3. Your portfolio will be live at `yourusername.github.io/portfolio`

### 🎯 Student Tips

- **Add to Resume**: Include your portfolio URL in your resume
- **LinkedIn**: Add the link to your LinkedIn profile
- **Email Signature**: Include your portfolio link
- **Job Applications**: Always mention your portfolio
- **Networking**: Share with professors, mentors, and peers

### Custom Domain (Optional)

If you want a custom domain like `yourname.com`:
1. Buy a domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
2. Connect it to your Vercel/Netlify deployment
3. Follow the DNS setup instructions provided

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

## 🚨 Troubleshooting

### Common Issues & Solutions

#### "npm install" fails
```bash
# Try clearing npm cache
npm cache clean --force
npm install
```

#### Development server won't start
```bash
# Make sure you're in the right directory
cd portfolio
# Check if port 3000 is busy
npm run dev -- --port 3001
```

#### Images not showing
- Check that image files are in `public/images/`
- Use correct paths: `/images/filename.jpg` (starting with `/`)
- Supported formats: `.jpg`, `.png`, `.webp`

#### Build fails
```bash
# Check for TypeScript errors
npm run lint
# Build locally to test
npm run build
```

### Need Help?

#### For Students:
1. **Check the Issues tab** - someone might have had the same problem
2. **Ask in Discussions** - great for general questions
3. **Join our Discord** (if available) - real-time help from other students
4. **Ask your professor/TA** - they can help with technical issues

#### Getting Started Resources:
- [Node.js Installation Guide](https://nodejs.org/en/download/)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [VS Code Setup](https://code.visualstudio.com/docs/setup/setup-overview)
- [React Basics](https://react.dev/learn)

## 🤝 Contributing

Want to improve this template?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Ideas for Contributions:
- New color themes
- Additional components
- Better documentation
- Bug fixes
- Performance improvements

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For seamless deployment
- **TailwindCSS**: For beautiful styling
- **Heroicons**: For the icon set
- **The Student Community**: For feedback and contributions


## 🌟 Show Your Support

If this template helped you create an awesome portfolio:

- ⭐ **Star this repository** 
- 🔄 **Share with classmates**
- 📝 **Leave feedback** in the Issues tab
- 💼 **Tag us** when you get that job/internship!

**Happy coding, and best of luck with your career!** 🚀

---

### 📌 Template Credits
Originally created for students by students. Feel free to customize, share, and contribute!

> 💡 **Pro Tip**: Keep your portfolio updated with new projects and skills as you grow in your career!
