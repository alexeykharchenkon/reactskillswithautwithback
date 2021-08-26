import { createContext, useContext } from "react";
import { TableStore } from "@stores/tableStore";
import { AuthStore } from "@stores/authStore";

interface RootStore {
    tableStore: TableStore;
    authStore: AuthStore;
}

export const rootStore: RootStore = {
    tableStore: new TableStore(),
    authStore: new AuthStore(),
}

export const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);