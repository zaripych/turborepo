import * as workspaceTools from "workspace-tools";
import findDown from "finddown-sync";
import findUp from "find-up";
import { getAllFiles } from "../utils/getAllFiles";
import { getWorkspaces } from "../utils/getWorkspaces";

(async () => {
  console.log(
    "finddown-sync",
    findDown("package-lock.json", {
      cwd: __dirname,
      exclude: "node_modules/",
    })[0]
  );
  console.log(
    "getAllFiles",
    getAllFiles(["package-lock.json"], { dirPath: __dirname })[0]
  );
  console.log("dirname", __dirname);
  console.log("all pkg files", workspaceTools.getWorkspaces(__dirname));
  console.log("workspaces", await getWorkspaces(__dirname)); // we use the workspace path to detect the framework
  console.log(
    "findup",
    findUp.sync(
      [
        "lerna.json",
        "rush.json",
        "yarn.lock",
        "package-lock.json",
        "package-lock.json",
      ],
      {
        cwd: __dirname,
      }
    )
  );
})();
