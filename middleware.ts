import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: [
    /*
     * Match all pathnames except for:
     * - files with extensions (static files)
     * - _next (Next.js internals)
     * - api (API routes)
     */
    "/((?!api|_next|.*\\..*).*)",
  ],
};
