import {
  breakpoints,
  fontWeights,
  leadings,
  radii,
  redScale,
  trackings,
  Var,
} from "../lib/vars";
import { verbose } from "./logging";
import { postToUI } from "./msg";

// eslint-disable-next-line @typescript-eslint/ban-types
export type PluginSettings = {};

let settings: PluginSettings = {};

// If you need to store a subset of the PluginSettings
// export type StoredSettings = Omit<PluginSettings, "lastUpdated">;

export const getStoredSettings = async (): Promise<PluginSettings> => {
  const storedSettings = await figma.clientStorage.getAsync("settings");
  console.log("get stored settings:", { storedSettings });
  return Object.assign({}, settings, storedSettings);
};

export const setStoredSettings = async (
  data: Omit<PluginSettings, "lastUpdated">,
) => {
  verbose && console.log("store", { settings, data });
  figma.clientStorage
    .setAsync("settings", data)
    .then(() => {
      settings = Object.assign({}, settings, data);
      figma.notify("Settings saved");
    })
    .catch((e) => {
      true && console.log("Save settings error:", { e });
      figma.notify("Error saving settings", { error: true });
    })
    .finally(() => {
      getFigmaData();
    });
};

export const init = async () => {
  settings = await getStoredSettings();
  getFigmaData();
  return;
};

export const getFigmaData = () => {
  // @TODO - model data for UI

  const payload = {
    settings,
  };
  verbose && console.log("getFigmaData:", payload);
  postToUI(payload);
};

const createVars = (vars: Var[], collection: VariableCollection): void => {
  for (const item of vars) {
    const v = figma.variables.createVariable(
      item.name,
      collection,
      item.resolvedType,
    );
    v.description = item.description;
    v.scopes = item.scopes;
    v.setValueForMode(collection.defaultModeId, item.value);
  }
};

export const createTailwindCollection = (): void => {
  const twCollection = figma.variables.createVariableCollection("tailwind");

  createVars(fontWeights, twCollection);
  createVars(breakpoints, twCollection);
  createVars(radii, twCollection);
  createVars(trackings, twCollection);
  createVars(leadings, twCollection);

  createVars(redScale, twCollection);
};
