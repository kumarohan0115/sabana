
import fs from 'fs-extra';

import path from 'path';

const buildPath = path.join(__dirname, 'build');
const indexPath = path.join(buildPath, 'index.html');

// Define the base directory where you want to create folders.
const baseDirectory = './build/';

// Define the number of folders you want to create.
const folder = ['checkout','kora','mandate-management', 'ride-collect','subsequent-collect','order-status']

// Loop to create the folders and index.html files.
for (const element of folder) {
  const folderName = `${element}`;
  const folderPath = `${baseDirectory}${folderName}`;

  // Create the folder
  fs.mkdirSync(folderPath);

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html:', err);
    }
    else {
      fs.writeFileSync(`${folderPath}/index.html`, data);
    }
  })
}
