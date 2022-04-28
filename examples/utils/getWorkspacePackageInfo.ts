import path from "path";
import fs from "fs";

export function getWorkspacePackageInfo(workspacePaths: string[]) {
  if (!workspacePaths) {
    return [];
  }

  return workspacePaths.reduce((returnValue, workspacePath) => {
    let packageJson: any;
    const packageJsonPath = path.join(workspacePath, "package.json");

    try {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    } catch {
      return returnValue;
    }

    return [
      ...returnValue,
      {
        name: packageJson.name,
        path: workspacePath,
        packageJson: {
          ...packageJson,
          packageJsonPath,
        },
      },
    ];
  }, []);
}
