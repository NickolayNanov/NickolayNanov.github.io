const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir, { recursive: true });
}

const nojekyllPath = path.join(outDir, '.nojekyll');

try {
	fs.writeFileSync(nojekyllPath, '', 'utf8');
	console.log('Created out/.nojekyll');
} catch (err) {
	console.error('Failed to create .nojekyll:', err);
	process.exitCode = 1;
}
