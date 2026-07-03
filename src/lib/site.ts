import config from "@/config/config.json";

const DEFAULT_COLLECTION_HANDLE = "featured-products";

export const siteName =
  import.meta.env.PUBLIC_SITE_NAME || config.site.title || "Store";

export const siteDescription =
  import.meta.env.PUBLIC_SITE_DESCRIPTION ||
  config.metadata.meta_description ||
  "";

export const siteTagline =
  import.meta.env.PUBLIC_SITE_TAGLINE || siteDescription;

export const getCurrentCollectionHandle = () =>
  import.meta.env.PUBLIC_SHOPIFY_COLLECTION_HANDLE ||
  config.shopify.collections.featured_products ||
  DEFAULT_COLLECTION_HANDLE;

export const getSiteImage = (image?: string | null) =>
  image || config.metadata.meta_image;
