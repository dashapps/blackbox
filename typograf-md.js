const fs = require('fs');
const path = require('path');
const Typograf = require('typograf');

// Настройте языки и правила по необходимости
const tp = new Typograf({ locale: ['ru', 'en', 'de', 'es'] });

// Папка с markdown-файлами
const CONTENT_DIR = path.join(__dirname, 'src', 'content', 'docs');

function processFile(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    // Определяем frontmatter (между двумя --- в начале)
    const frontmatterMatch = text.match(/^(---[\s\S]*?---\n?)/);
    let frontmatter = '';
    let body = text;
    if (frontmatterMatch) {
        frontmatter = frontmatterMatch[1];
        body = text.slice(frontmatter.length);
    }
    // Применяем typograf только к body
    const formattedBody = tp.execute(body);
    // Собираем обратно
    const result = frontmatter + formattedBody;
    fs.writeFileSync(filePath, result, 'utf8');
    console.log('✔', filePath);
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.md')) {
            processFile(fullPath);
        }
    });
}

walk(CONTENT_DIR);
console.log('Готово!');
