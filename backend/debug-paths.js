const fs = require('fs');
const path = require('path');

// Print current directory and parent directories
console.log('Current directory (__dirname):', __dirname);
console.log('Parent directory:', path.resolve(__dirname, '..'));
console.log('Parent of parent directory:', path.resolve(__dirname, '../..'));

// Function to list files in a directory
function listFilesInDirectory(directory) {
  try {
    console.log(`\nListing files in ${directory}:`);
    const files = fs.readdirSync(directory);
    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        console.log(`[DIR] ${file}`);
      } else {
        console.log(`[FILE] ${file}`);
      }
    });
  } catch (error) {
    console.error(`Error listing files in ${directory}:`, error.message);
  }
}

// List files in current directory
listFilesInDirectory(__dirname);

// List files in models directory
listFilesInDirectory(path.join(__dirname, 'models'));

// Try to list files in the parent directory
listFilesInDirectory(path.resolve(__dirname, '..'));

// Try to list files in the parent's models directory
try {
  listFilesInDirectory(path.resolve(__dirname, '../models'));
} catch (error) {
  console.error('Error listing files in ../models:', error.message);
}

// Check if productModel.js exists
const possiblePaths = [
  path.join(__dirname, 'models', 'productModel.js'),
  path.resolve(__dirname, '..', 'models', 'productModel.js'),
  path.resolve(__dirname, '../..', 'models', 'productModel.js'),
  '/opt/render/project/src/models/productModel.js',
  '/opt/render/project/src/backend/models/productModel.js'
];

console.log('\nChecking for productModel.js:');
possiblePaths.forEach(p => {
  try {
    if (fs.existsSync(p)) {
      console.log(`EXISTS: ${p}`);
    } else {
      console.log(`NOT FOUND: ${p}`);
    }
  } catch (error) {
    console.error(`Error checking ${p}:`, error.message);
  }
});
