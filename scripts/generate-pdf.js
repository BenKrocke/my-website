import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to the built HTML file
    const htmlPath = join(__dirname, '../dist/index.html');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    // Generate PDF with ATS-friendly settings
    const pdfBuffer = await page.pdf({
      format: 'A4',
      margin: {
        top: '15mm',
        bottom: '15mm', 
        left: '15mm',
        right: '15mm'
      },
      printBackground: false, // ATS systems prefer no backgrounds
      preferCSSPageSize: false,
      displayHeaderFooter: false,
      tagged: true, // Creates accessible/structured PDF
      outline: false
    });

    // Save PDF
    const outputPath = join(__dirname, '../dist/Ben-Krocke-Resume.pdf');
    const fs = await import('fs');
    fs.writeFileSync(outputPath, pdfBuffer);
    
    console.log('✅ ATS-friendly PDF generated:', outputPath);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePDF();