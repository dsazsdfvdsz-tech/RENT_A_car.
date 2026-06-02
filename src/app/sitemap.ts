import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://abubakr-rentacar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/fleet", "/about", "/terms", "/privacy"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
