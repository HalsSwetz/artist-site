# Henry Stoner Artist Portfolio

A modern, image-first portfolio website built for San Francisco-based artist Henry Stoner, showcasing his paintings influenced by tattoo culture, street art, and folk art.

🌐 **Live Site:** [henrystonerart.com](https://henrystonerart.com)

## Project Overview

This was a freelance commission to create a professional artist portfolio with dynamic image management, SEO optimization, and a functional contact system. The site needed to handle a large gallery of high-resolution artwork while maintaining fast load times and a polished user experience.

## Key Features

- **Dynamic Gallery System:** Masonry layout with lightbox viewing, powered by Cloudinary's Search API for automatic image fetching and metadata display
- **Cloudinary Integration:** Automated image optimization with on-the-fly transformations for responsive delivery
- **Custom API Routes:** Built Next.js API endpoints to fetch and process artwork data from Cloudinary with proper error handling
- **Contact Form:** Integrated Resend API for reliable email delivery with form validation
- **Responsive Design:** Mobile-first approach using Tailwind CSS, optimized for all screen sizes
- **SEO & Social Sharing:** Comprehensive meta tags, Open Graph, and Twitter Card configuration

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Image CDN:** Cloudinary (with Search API integration)
- **Email Service:** Resend
- **Gallery Libraries:** react-photo-album, yet-another-react-lightbox
- **Deployment:** Vercel with custom domain configuration

## Technical Highlights

### Cloudinary Integration
Built a custom helper library (`lib/cloudinary.ts`) to generate optimized image URLs with dynamic transformations. The gallery fetches images programmatically from Cloudinary folders via their Search API, with context metadata (title, year, medium, dimensions) automatically pulled and displayed.

### API Route Architecture
Created `/api/artworks` endpoint that:
- Authenticates with Cloudinary using API credentials
- Constructs dynamic search queries based on folder/tag parameters
- Handles pagination for large image sets
- Sanitizes and formats metadata for frontend consumption
- Implements proper error handling and status codes

### Performance Optimization
- Implemented Next.js Image component for automatic image optimization
- Configured remote patterns for Cloudinary CDN
- Used priority loading for above-the-fold images
- Lazy loading for gallery images

## Getting Started

### Prerequisites
- Node.js 18+
- Cloudinary account with API credentials
- Resend API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/artist-site.git
cd artist-site
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RESEND_API_KEY=your_resend_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── about/              # Artist biography and sketchbook showcase
│   ├── contact/            # Contact form with email integration
│   ├── gallery/            # Dynamic gallery with lightbox
│   ├── api/
│   │   └── artworks/       # Cloudinary API integration endpoint
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Landing page
├── components/
│   └── Header.tsx          # Navigation component
├── lib/
│   └── cloudinary.ts       # Cloudinary URL generation helper
└── public/
    └── icon.png            # Site favicon
```

## Deployment

Deployed on Vercel with automatic CI/CD from the main branch. Custom domain configured using Vercel nameservers for optimal performance.

### Environment Variables
All environment variables from `.env.local` must be added to Vercel project settings for production deployment.

## Image Management

Images are managed through Cloudinary's Media Library. To add artwork to the gallery:

1. Upload images to the `Art Site Gallery` folder in Cloudinary
2. Add context metadata in Cloudinary (title, year, medium, dimensions, collection)
3. Images automatically appear in the gallery via API fetch

The API route handles folder-based organization and supports filtering by tags.

## Challenges & Solutions

- **Image Path Resolution:** Resolved Next.js image optimization issues with Cloudinary paths by configuring proper remote patterns and building a URL generation helper
- **Deployment Caching:** Overcame Vercel deployment cache issues from AWS outages by implementing fresh deployment strategy
- **DNS Configuration:** Successfully integrated custom domain despite complex DNS provider interface

## License

All artwork © Henry Stoner. All rights reserved.

Website code available as open-source template under MIT License.

---

**Developer:** Halsey Swetzoff  
**Contact:** halseyswetzoff@gmail.com |  [My LinkedIn](https://www.linkedin.com/in/halsey-swetzoff)

**Portfolio:** [My Portfolio Site](https://halsswetz.github.io/portfolio-page-new/)