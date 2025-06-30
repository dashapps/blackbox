const fs = require('fs');
const path = require('path');
const Typograf = require('typograf');

// Соответствие папки и локали Typograf
const LOCALE_MAP = {
    ru: 'ru',
    de: 'de',
    es: 'es',
    // другие локали можно добавить по мере необходимости
};

const CONTENT_DIR = path.join(__dirname, 'src', 'content', 'docs');

function processFile(filePath, locale) {
    const text = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = text.match(/^(---[\s\S]*?---\n?)/);
    let frontmatter = '';
    let body = text;
    if (frontmatterMatch) {
        frontmatter = frontmatterMatch[1];
        body = text.slice(frontmatter.length);
    }
    const tp = new Typograf({ locale: [locale] });
    const formattedBody = tp.execute(body);
    const result = frontmatter + formattedBody;
    fs.writeFileSync(filePath, result, 'utf8');
    console.log(`✔ [${locale}]`, filePath);
}

function walk(dir, locale) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, locale);
        } else if (file.endsWith('.md')) {
            processFile(fullPath, locale);
        }
    });
}

// Обходим папки локалей
fs.readdirSync(CONTENT_DIR).forEach(folder => {
    const locale = LOCALE_MAP[folder];
    const fullPath = path.join(CONTENT_DIR, folder);
    if (locale && fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, locale);
    }
});

console.log('Готово!');
