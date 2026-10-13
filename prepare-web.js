const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, '..', 'web');
const target = path.join(__dirname, '..', 'www');
if (!fs.existsSync(path.join(source, 'index.html'))) {
  console.error('Missing web/index.html. Add your A² Builder project files to the web/ folder.');
  process.exit(1);
}
fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
console.log('Prepared web files for Capacitor.');
