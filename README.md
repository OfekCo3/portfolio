# Personal  Portfolio Template

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Perfect for students to showcase their projects, skills, and career journey. Features a clean design with smooth animations and easy customization.

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
│   │   ├── projects/    # Project images
│   │   └── profile.jpg  # Profile photo
│   └── ...             # Static files
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page with timeline
│   │   ├── contact/    # Contact page with form & methods
│   │   ├── projects/   # Projects page with skills section
│   │   ├── globals.css # Global styles & animations
│   │   ├── layout.tsx  # Root layout with navigation
│   │   └── page.tsx    # Home page with hero & featured projects
│   ├── components/     # Reusable components
│   │   ├── ContactForm.tsx      # Contact form with validation
│   │   ├── ContactMethods.tsx   # Social links & contact info
│   │   ├── ContactReasons.tsx   # Why contact section
│   │   ├── Layout.tsx           # Main layout with nav/footer
│   │   ├── ProjectCard.tsx      # Project card component
│   │   ├── Skills.tsx           # Technical skills with categories
│   │   └── Timeline.tsx         # Career timeline with alternating layout
│   ├── config/         # Configuration files
│   │   ├── contact.ts   # Contact methods & reasons
│   │   ├── index.ts     # Central exports
│   │   ├── navigation.ts # Navigation & social links
│   │   ├── personal.ts  # Personal information
│   │   ├── site.ts      # Site metadata & SEO
│   │   ├── skills.ts    # Technical skills data
│   │   └── timeline.ts  # Career timeline data
│   └── data/
│       └── projects.json # Project data & metadata
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
  title: "Software Engineer",              // Your title/role
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
  author: "Your Name",
  seo: {
    twitter: {
      creator: "@yourtwitterhandle", // Replace with your Twitter handle, or leave as "@yourusername" if you don't have Twitter
      site: "@yourtwitterhandle"
    }
  }
  // ... more SEO settings
}
```


### 🚀 Configuration Files

- `src/config/personal.ts` - Personal info, bio, contact details
- `src/config/skills.ts` - Technical skills and levels
- `src/config/timeline.ts` - Career timeline and milestones
- `src/config/navigation.ts` - Navigation and social links
- `src/config/contact.ts` - Contact page settings and FAQ
- `src/config/site.ts` - SEO, metadata, and site-wide settings

## 🧩 Components Overview

### 📄 **Page Components**
- **`Layout.tsx`** - Main layout wrapper with navigation and footer
- **`ProjectCard.tsx`** - Individual project display cards with links and tech stack

### 💼 **Skills Components**
- **`Skills.tsx`** - Technical skills organized by categories with beautiful card layout
- **`SkillCategory`** - Sub-component for individual skill categories

### 📅 **Timeline Components**
- **`Timeline.tsx`** - Career journey with alternating left-right layout
- **`TimelineItemComponent`** - Individual timeline entries with animations

### 📞 **Contact Components**
- **`ContactForm.tsx`** - Contact form with validation and submission handling
- **`ContactMethods.tsx`** - Social links and contact information display
- **`ContactReasons.tsx`** - Why people should contact you section

### ✨ **Component Features**
- **Responsive Design** - All components work on desktop, tablet, and mobile
- **Smooth Animations** - Fade-in effects, hover animations, and transitions
- **TypeScript Support** - Full type safety with proper interfaces
- **Customizable Props** - Easy to customize titles, colors, and behavior
- **Accessible** - Proper ARIA labels and keyboard navigation

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


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

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



## 🌟 Show Your Support

If this template helped you create an awesome portfolio:

- ⭐ **Star this repository** 
- 🔄 **Share with classmates**
- 📝 **Leave feedback** in the Issues tab
- 💼 **Tag me** when you get that job/internship!

**Happy coding, and best of luck with your career!** 🚀

---

