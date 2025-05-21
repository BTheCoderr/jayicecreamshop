# Jay's Ice Cream Shop CT Website

A modern website for Jay's Ice Cream Shop built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Clean, modern UI with ice cream-themed colors
- Interactive menu with categorized items
- Contact form for customer inquiries
- Location and hours information
- Featured flavors showcase

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone this repository
   ```bash
   git clone [repository-url]
   cd jayicecreamshop
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Customization

### Images
Replace the placeholder images in the `/public/images` directory with actual ice cream shop photos.

### Content
Update the content in the component files located in:
- `src/components/sections/` - Main content sections
- `src/components/layout/` - Layout components like Navbar and Footer

### Colors
Modify the color scheme in `src/app/globals.css` and `tailwind.config.ts`.

## Deployment

This site can be easily deployed on Vercel or other hosting platforms that support Next.js.

```bash
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)
