import fs from "fs";
import path from "path";

export const getAllFiles = (
  matches: string[],
  {
    dirPath,
    arrayOfFiles,
    excludes,
  }: { dirPath: any; arrayOfFiles?: any; excludes?: any }
) => {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (!dirPath.includes("node_modules")) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(matches, {
          dirPath: dirPath + "/" + file,
          arrayOfFiles: arrayOfFiles,
        });
      } else {
        if (matches.includes(file)) {
          console.log("paths", dirPath);
          arrayOfFiles.push(path.join(dirPath, "/", file));
        }
      }
    }
  });

  return arrayOfFiles;
};
