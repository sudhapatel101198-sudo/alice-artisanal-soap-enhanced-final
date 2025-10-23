export async function getServerSideProps({ res }) {
  // Static fallback base domain
  const base = "https://alice-artisanal-soap-enhanced-final.vercel.app";

  // Robots.txt content
  const content = `User-agent: *
Allow: /
Sitemap: ${base}/sitemap.xml`;

  // Set header and send response
  res.setHeader("Content-Type", "text/plain");
  res.write(content);
  res.end();

  return { props: {} };
}

export default function RobotsTxt() {
  // This page never actually renders in browser
  return null;
}
