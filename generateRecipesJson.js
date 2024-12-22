const fs = require('fs');
const path = require('path');

const recipesDir = path.join(__dirname, 'recipes');
const outputFilePath = path.join(__dirname, 'recipes.json');

fs.readdir(recipesDir, (err, files) => {
    if (err) {
        console.error('Error reading recipes directory:', err);
        return;
    }

    const recipes = files.filter(file => file.endsWith('.html')).map(file => {
        const filePath = path.join(recipesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return { fileName: file, content };
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(recipes, null, 2), 'utf-8');
    console.log('recipes.json has been created successfully.');
});