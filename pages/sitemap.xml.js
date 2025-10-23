export async function getServerSideProps({ req, res }) {
  try {
    const host = req?.headers?.host || "alice-artisanal-soap-enhanced-final.vercel.app";
    const base = `https://${host}`;

    const urls = ["", "/shop", "/about", "/gallery", "/contact"]
      .map(u => `<url><loc>${base}${u}</loc></url>`)
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.write(xml);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return { notFound: true };
  }
}

export default function SiteMap() {
  // Next.js requires a default export, but this page never renders on the client.
  return null;
}
