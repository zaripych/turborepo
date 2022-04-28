import { getWorkspaceImplementation } from "./implementations";

export type WorkspaceManager = "yarn" | "pnpm" | "rush" | "npm" | "lerna";

const preferred = process.env
  .PREFERRED_WORKSPACE_MANAGER as WorkspaceManager | null;

export async function getWorkspaces(cwd: string) {
  const workspaceImplementation =
    preferred || (await getWorkspaceImplementation(cwd));

  if (!workspaceImplementation) {
    return [];
  }
  console.log("in getworkspaces", workspaceImplementation);

  switch (workspaceImplementation) {
    case "yarn":
      return [];

    case "pnpm":
      return require(`./implementations/pnpm`).getNpmWorkspaces(cwd);

    case "rush":
      return [];

    case "npm":
      return require(`./implementations/npm`).getNpmWorkspaces(cwd);

    case "lerna":
      return [];
  }
}
