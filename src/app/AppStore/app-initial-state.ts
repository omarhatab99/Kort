import { StaticData } from "./static-data";
import { IAppStore } from "./app-store.interface";
import { cache, noCache } from "./persisit-cache";

export const AppStore: IAppStore = noCache() ? { ...StaticData } : cache
