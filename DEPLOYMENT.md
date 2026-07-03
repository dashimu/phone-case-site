# Cloudflare Pages Deployment

This project is configured for Cloudflare Pages static deployment.

## Build Settings

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: use the current LTS version or newer

## Environment Variables

Set these variables in Cloudflare Pages:

```env
PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN=your-token
PUBLIC_SHOPIFY_COLLECTION_HANDLE=phone-case
PUBLIC_SITE_NAME=Phone Case Store
PUBLIC_SITE_DESCRIPTION=Stylish and protective phone cases for daily use.
PUBLIC_SITE_TAGLINE=Slim, shockproof, and stylish phone cases for your everyday protection.
```

Do not commit a local `.env` file. If products do not appear, confirm the Shopify collection handle is exactly `phone-case` in Shopify Admin.
