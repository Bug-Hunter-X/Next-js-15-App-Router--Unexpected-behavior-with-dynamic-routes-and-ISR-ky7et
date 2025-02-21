# Next.js 15 App Router: Unexpected behavior with dynamic routes and ISR

This repository demonstrates an unexpected behavior in Next.js 15's App Router when combining dynamic routes, `fetch` calls within page components, and Incremental Static Regeneration (ISR).

## Bug Description

When using dynamic routes with ISR enabled, the initial page load seems to be cached and not reflect changes in data until manually cleared the cache. This prevents users from seeing updated content until the cache expires or is manually refreshed.