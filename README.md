# Vite + Twig + Tailwind CSS Boilerplate

A modern, minimal static site boilerplate powered by Vite, Twig templating, and Tailwind CSS 4.

## ✨ Features

- ⚡️ **Vite 6** - Lightning-fast development server and optimized builds
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework with the latest features
- 📄 **Twig** - Flexible and powerful templating engine
- 🏗️ **Vituum** - Enhanced static site generation capabilities
- 🚀 **Vercel Ready** - Configured for seamless deployment
- 🔧 **Custom Twig Functions** - Includes `html_classes` helper for dynamic class management
- 🔤 **Optimized Fonts** - Automatic Google Fonts download and WOFF2 conversion with subsetting
- 📦 **Bun/npm/yarn/pnpm** - Use your preferred package manager
- 🎨 **UI Kit Page** - Complete showcase of all components, typography, colors, and spacing (visit `/ui-kit.html`)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or newer
- Bun, npm, yarn, or pnpm

### Installation

1. Clone or download this repository:
   ```bash
   git clone <your-repo-url>
   cd vite-twig-tailwind-boilerplate
   ```

2. Install dependencies:
   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using yarn
   yarn install

   # Or using pnpm
   pnpm install
   ```

3. Start the development server:
   ```bash
   bun dev
   # or npm run dev / yarn dev / pnpm dev
   ```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## 📁 Project Structure

```
.
├── public/                 # Static assets served as-is
├── src/
│   ├── assets/
│   │   ├── fonts/         # Font files (TTF - auto-converted to WOFF2)
│   │   ├── js/            # JavaScript files
│   │   │   └── app.js     # Main JS entry point
│   │   └── styles/        # CSS files
│   │       ├── main.css   # Main stylesheet (Tailwind)
│   │       └── fonts.css  # Font definitions (Google Fonts)
│   ├── data/              # JSON data files for Twig templates
│   │   └── main.json      # Global data
│   ├── layouts/           # Page layouts
│   │   └── main.twig      # Main layout template
│   └── pages/             # Page templates
│       ├── index.twig     # Homepage
│       ├── index.json     # Homepage data
│       ├── about.twig     # About page (example)
│       └── about.twig.json # About page data
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── .prettierrc.json       # Prettier configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🛠️ Available Scripts

- `bun dev` / `npm run dev` - Start development server with hot reload
- `bun build` / `npm run build` - Build for production (output to `dist/`)
- `bun preview` / `npm run preview` - Preview production build locally

---

## 📄 Working with Pages

### Page Structure

Each page consists of two files:

```
src/pages/
├── about.twig         # Template (HTML structure)
└── about.twig.json    # Data (content)
```

### Creating a New Page

**Step 1: Create JSON data file**

`src/pages/services.twig.json`:
```json
{
    "title": "Our Services",
    "services": [
        {
            "name": "Web Development",
            "price": "$1000"
        },
        {
            "name": "Design",
            "price": "$500"
        }
    ]
}
```

**Step 2: Create Twig template**

`src/pages/services.twig`:
```twig
{% extends "./layouts/main.twig" %}

{% block content %}
    <div class="container mx-auto">
        <h1>{{ title }}</h1>
        
        {% for service in services %}
            <div class="service-card">
                <h2>{{ service.name }}</h2>
                <p>{{ service.price }}</p>
            </div>
        {% endfor %}
    </div>
{% endblock %}
```

**Step 3: Done!**

The page is automatically available at `/services`

### Twig Examples

#### Simple Variables
```twig
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

#### Nested Objects
```twig
<h3>{{ author.name }}</h3>
<a href="mailto:{{ author.email }}">Email</a>
```

#### Loops
```twig
{% for product in products %}
    <div class="card">
        <h3>{{ product.name }}</h3>
        <span>${{ product.price }}</span>
    </div>
{% endfor %}
```

#### Conditionals
```twig
{% if user.isLoggedIn %}
    <p>Welcome back, {{ user.name }}!</p>
{% else %}
    <a href="/login">Please log in</a>
{% endif %}
```

#### Using html_classes Helper
```twig
{# Array syntax #}
<button class="{{ html_classes([
    'btn',
    button.isPrimary and 'btn-primary',
    button.isLarge and 'btn-lg'
]) }}">
    Click Me
</button>

{# Object syntax #}
<button class="{{ html_classes({
    'btn': true,
    'btn-primary': button.isPrimary,
    'btn-lg': button.isLarge
}) }}">
    Click Me
</button>
```

### Useful Twig Filters

```twig
{# Default value #}
<h1>{{ title | default('Untitled') }}</h1>

{# Text transforms #}
<p>{{ name | upper }}</p>
<p>{{ email | lower }}</p>
<p>{{ description | capitalize }}</p>

{# Array length #}
<p>Total: {{ products | length }}</p>

{# Date formatting #}
<time>{{ date | date('Y-m-d') }}</time>

{# Escape HTML #}
<div>{{ userInput | escape }}</div>
```

---

## 🎨 Customization

### Using Tailwind CSS

This boilerplate uses Tailwind CSS 4. Simply use utility classes in your Twig templates:

```twig
<div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-blue-600">Hello World</h1>
    <p class="text-gray-600 mt-4">Your content here</p>
</div>
```

### Custom Tailwind Configuration

Edit `tailwind.config.js`:

```js
import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
      }
    }
  }
})
```

### Adding Custom Fonts

The boilerplate includes automatic font optimization via `vite-plugin-webfont-dl`.

**Option 1: Google Fonts (Recommended)**

In `src/assets/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
```

The plugin automatically:
- Downloads fonts during build
- Converts to WOFF2 format
- Applies subsetting (latin, cyrillic)
- Hosts fonts locally (no external requests)
- Reduces font size by 80%+

**Option 2: Local Font Files**

1. Add font files to `src/assets/fonts/`
2. Create @font-face declarations in `src/assets/styles/fonts.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('../fonts/YourFont-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

3. Update `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      custom: ['YourFont', 'sans-serif'],
    }
  }
}
```

### Environment Variables

1. Copy `.env.example` to `.env`
2. Add your environment-specific variables
3. Access them in Vite with `import.meta.env.VITE_*`

Example:
```js
// .env
VITE_API_URL=https://api.example.com

// In your JS
const apiUrl = import.meta.env.VITE_API_URL
```

### Reusable Components

Create components in `src/components/`:

```twig
{# src/components/card.twig #}
<div class="bg-white p-6 rounded-lg shadow">
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
</div>
```

Use in pages:
```twig
{% for item in items %}
    {% include './components/card.twig' with item %}
{% endfor %}
```

### Included Components

This boilerplate comes with several pre-built components:

#### Button Component (`components/button.twig`)

Flexible button component with multiple variants and sizes.

**Parameters:**
- `text` (required) - Button text
- `link` (required) - Button URL
- `target` (optional) - Link target (`_self`, `_blank`, etc.)
- `variant` (optional) - Button style variant: `primary` (default), `secondary`, `outline`, `ghost`
- `size` (optional) - Button size: `sm`, `md` (default), `lg`
- `showIcon` (optional) - Show arrow icon (default: `true`)

**Examples:**

```twig
{# Primary button (default) #}
{% include "components/button.twig" with {
    text: "Click me",
    link: "/page",
    target: "_self"
} %}

{# Secondary variant #}
{% include "components/button.twig" with {
    text: "Secondary Action",
    link: "#",
    variant: "secondary"
} %}

{# Large outline button without icon #}
{% include "components/button.twig" with {
    text: "Learn More",
    link: "/about",
    variant: "outline",
    size: "lg",
    showIcon: false
} %}

{# Small ghost button #}
{% include "components/button.twig" with {
    text: "Ghost",
    link: "#",
    variant: "ghost",
    size: "sm"
} %}
```

**Available Variants:**
- `primary` - Primary color background with white text
- `secondary` - White background with primary border and text
- `outline` - Transparent background with primary border
- `ghost` - Transparent background, no border

**Available Sizes:**
- `sm` - Small button
- `md` - Medium button (default)
- `lg` - Large button

#### Media Components (`components/media/`)
- `img.twig` - Image display
- `video-embed.twig` - Embedded video player
- `video-modal.twig` - Video in modal overlay
- `index.twig` - Smart media selector (auto-selects based on `type`)

```twig
{# Image #}
{% include "components/media/index.twig" with {
    media: {
        type: "img",
        img: {
            src: "/photo.jpg",
            alt: "Description",
            width: 800,
            height: 600
        }
    }
} %}

{# Video #}
{% include "components/media/index.twig" with {
    media: {
        type: "video-embed",
        video: {
            src: "/video.mp4",
            poster: "/poster.jpg",
            title: "Video title"
        }
    }
} %}
```

#### Quote Component (`components/quote.twig`)
```twig
{% include "components/quote.twig" with {
    text: "Quote text here",
    author: "Author Name",
    position: "Job Title",
    media: { 
        type: "img",
        img: { src: "/author.jpg", alt: "Author" }
    }
} %}
```

#### Media Caption Component (`components/media-caption.twig`)
Wrapper component for media with captions:
```twig
{% embed "components/media-caption.twig" with {caption: "Image caption"} %}
    {% block content %}
        {# Your media content here #}
    {% endblock %}
{% endembed %}
```

### Included Sections

The boilerplate includes pre-built section templates in `src/sections/`:

#### Offer Section (`sections/offer.twig`)
Hero section with title, text, buttons, and background image.

#### Video Section (`sections/video.twig`)
Full-width video or embed display.

#### Reason Section (`sections/reason.twig`)
"Why us" section with text, quote, media, and decorative elements.

#### Projects Section (`sections/projects.twig`)
Portfolio/projects showcase grid.

#### Schools/Divisions Section (`sections/schools.twig`)
Multi-column layout for services, divisions, or categories with quotes and events.

#### Founders/Partners Section (`sections/founders.twig`)
Logo showcase for partners or founders.

**Example Usage in Page:**
```twig
{% extends "./layouts/main.twig" %}

{% block content %}
    {% include "sections/offer.twig" with {fields: offer} %}
    {% include "sections/video.twig" with {fields: video} %}
    {% include "sections/projects.twig" with {fields: projects} %}
{% endblock %}
```

See `src/pages/index.twig.json` for complete data structure examples.

---

## 🎯 JavaScript Features

### Swiper Integration

The boilerplate includes Swiper for creating carousels/sliders:

**HTML Structure:**
```html
<div class="events-swiper swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <div class="swiper-pagination"></div>
</div>
```

The initialization is automatic - just use the `.events-swiper` class. Configuration is in `src/assets/js/swiper-init.ts`:
- Responsive breakpoints (1, 2, or 3 slides per view)
- Pagination with custom styling
- Easy to customize

**Customizing Swiper:**
Edit `src/assets/js/swiper-init.ts` to adjust settings or add new modules (navigation, autoplay, etc).

### Video Player

Custom video player with modal support:

**Video Embed:**
```twig
{% include "components/media/video-embed.twig" with {
    video: {
        src: "/path/to/video.mp4",
        poster: "/path/to/poster.jpg",
        title: "Video title"
    }
} %}
```

**Video Modal:**
```twig
{% include "components/media/video-modal.twig" with {
    video: {
        src: "/path/to/video.mp4",
        poster: "/path/to/thumbnail.jpg",
        title: "Video title in modal"
    }
} %}
```

Video player features:
- Click thumbnail to open modal
- Custom progress bar
- Pause/resume controls
- Auto-pause on modal close
- Prevent body scroll when modal is open

Implementation is in `src/assets/js/video-player.ts`.

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy with optimal settings

**CLI Deployment:**
```bash
npm i -g vercel
vercel
```

### Netlify

1. Build the project: `bun build`
2. Create `netlify.toml`:
```toml
[build]
  command = "bun build"
  publish = "dist"
```
3. Push to git and connect via Netlify dashboard

### GitHub Pages

1. Update `vite.config.js`:
```js
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```
2. Build: `bun build`
3. Deploy `dist/` folder to `gh-pages` branch

### Manual Build

```bash
bun build  # or npm run build
```

The `dist/` folder contains your production-ready static site. Upload it to any static hosting service (AWS S3, Cloudflare Pages, etc.).

---

## 🆕 Creating a New Project from This Boilerplate

### Method 1: GitHub Template

1. Click "Use this template" button (if available)
2. Name your new repository
3. Clone your new repository locally

### Method 2: Manual Setup

```bash
# 1. Clone the boilerplate
git clone <this-repo-url> my-new-project
cd my-new-project

# 2. Remove existing git history
rm -rf .git

# 3. Initialize new repository
git init
git add .
git commit -m "Initial commit from Vite+Twig+Tailwind boilerplate"

# 4. Install dependencies
bun install  # or npm install

# 5. Start development
bun dev  # or npm run dev
```

### Customization Checklist

After creating your project:

**1. package.json**
- [ ] Change `name` to your project name
- [ ] Update `version` (start with `0.1.0` or `1.0.0`)
- [ ] Add `description`
- [ ] Add `author`
- [ ] Add `repository` URL

**2. README.md**
- [ ] Replace title with your project name
- [ ] Update description
- [ ] Add project-specific documentation

**3. src/pages/index.twig**
- [ ] Replace example content with your homepage

**4. src/layouts/main.twig**
- [ ] Customize HTML structure
- [ ] Add your site's header/footer
- [ ] Update meta tags

**5. .env**
- [ ] Copy `.env.example` to `.env`
- [ ] Add your environment values
- [ ] **Never commit `.env` to git**

**6. Branding & Assets**
- [ ] Update fonts or use Google Fonts in `fonts.css`
- [ ] Add your logo/favicon to `public/`
- [ ] Customize Tailwind colors

---

## 🔧 Configuration

### Vite Config

The `vite.config.js` includes:
- Tailwind CSS plugin
- Vituum static site generation
- Twig templating with custom functions
- Webfont download and optimization
- Vercel deployment plugin

### Custom Twig Functions

#### `html_classes`
Helps manage conditional CSS classes:

```twig
{# Array syntax - filters out falsy values #}
<div class="{{ html_classes(['btn', isActive and 'active']) }}">

{# Object syntax - includes keys where values are truthy #}
<div class="{{ html_classes({ 'btn': true, 'btn-primary': isPrimary }) }}">
```

#### `get_image`
Placeholder for image handling (customize as needed)

### Prettier Configuration

Code formatting rules are in `.prettierrc.json`. Adjust to match your preferences.

---

## 📚 Best Practices

### Keep Logic in Data, Not Templates

✅ **Good:**
```json
{
    "hero": {
        "title": "Welcome",
        "isVisible": true
    }
}
```

```twig
{% if hero.isVisible %}
    <h1>{{ hero.title }}</h1>
{% endif %}
```

❌ **Bad:**
```twig
<h1>{{ "Welcome to " ~ siteName ~ " - " ~ currentYear }}</h1>
```

### Organize Your Files

```
src/
├── components/      # Reusable UI components
├── layouts/         # Page layouts
├── pages/           # Individual pages
├── data/            # Global data
└── assets/
    ├── styles/      # CSS files
    ├── js/          # JavaScript
    └── fonts/       # Font files
```

### Use Components

Break down complex pages into smaller, reusable components:

```twig
{# In your page #}
{% include './components/header.twig' %}
{% include './components/hero.twig' with { title: 'Welcome' } %}
{% include './components/footer.twig' %}
```

---

## 🐛 Troubleshooting

### Build Errors

**Fonts not loading:**
- Check paths in CSS are correct (relative to CSS file)
- Verify Google Fonts URL is valid
- Check browser DevTools → Network tab

**Twig template errors:**
- Ensure extends path is correct: `./layouts/main.twig`
- Check JSON data file exists with same name
- Use `{{ dump() }}` to debug available variables

**Tailwind classes not working:**
- Make sure `main.css` is imported in layout
- Check Tailwind config syntax
- Clear browser cache and rebuild

### Performance Issues

**Large bundle size:**
- Remove unused font weights from Google Fonts URL
- Optimize images before adding to project
- Use lazy loading for heavy components

**Slow development server:**
- Update Node.js to latest LTS version
- Clear Vite cache: `rm -rf node_modules/.vite`
- Restart dev server

---

## 📖 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Twig Documentation](https://twig.symfony.com/doc/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vituum Documentation](https://vituum.dev/)
- [vite-plugin-webfont-dl](https://github.com/feat-agency/vite-plugin-webfont-dl)

---

## 🤝 Contributing

This is a boilerplate template. Feel free to fork and customize for your needs.

## 📄 License

MIT License - feel free to use this boilerplate for any project.

---

**Happy coding!** 🎉
