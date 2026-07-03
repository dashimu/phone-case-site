# Phone Case Store

Shopify Headless B2C storefront for stylish protective phone cases.

## Local Development

```bash
npm install
npm run dev
```

Create a local `.env` file with real Shopify credentials before testing live products. Do not commit `.env`.

## Build

```bash
npm run build
```

The static output is generated in `dist`.

## Required Environment Variables

```env
PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
PUBLIC_SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN=your-token
PUBLIC_SHOPIFY_COLLECTION_HANDLE=phone-case
PUBLIC_SITE_NAME=Phone Case Store
PUBLIC_SITE_DESCRIPTION=Stylish and protective phone cases for daily use.
PUBLIC_SITE_TAGLINE=Slim, shockproof, and stylish phone cases for your everyday protection.
```

If products do not appear, confirm the Shopify collection handle is exactly `phone-case`.
