/**
 * Generator script to create static HTML pages for all 300 styles
 * Output directory: pages/<style-id>.html
 */

const fs = require('fs');
const path = require('path');

const catalog = require('./data-300.js');
console.log(`Loaded ${catalog.length} styles from data-300.js.`);

const outputDir = path.join(__dirname, '..', 'pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let generatedCount = 0;

catalog.forEach((style) => {
  const numFormatted = String(style.num || 1).padStart(3, '0');
  const pageHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${style.nameAr} (${style.nameEn}) | موقع متكامل للنمط #${numFormatted}</title>
  <meta name="description" content="موقع إلكتروني متكامل مصمم بنمط ${style.nameAr} (${style.nameEn}). ${style.traits} - إشراف وهندسة أ. طارق ابوعشي">

  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌐</text></svg>">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,400&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">

  <!-- Preset Stylesheet -->
  <link rel="stylesheet" href="../styles/site-presets.css">
</head>
<body class="has-hud">
  <!-- THE DEDICATED MOCK WEBSITE CONTAINER -->
  <div id="siteViewport" class="site-viewport"></div>

  <!-- SCRIPTS -->
  <script src="../scripts/data-300.js"></script>
  <script src="../scripts/site-renderer.js"></script>
</body>
</html>
`;

  const filePath = path.join(outputDir, `${style.id}.html`);
  fs.writeFileSync(filePath, pageHtml, 'utf8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} dedicated static HTML pages in /pages/!`);
