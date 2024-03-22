import { create } from "zustand";
import actions from "./actions";
import reducers from "./reducers";
import getters from "./getters";
import state from "./state";
import { devtools } from "zustand/middleware"

export default create((set, get) => ({
    state,
    actions: actions(set, get),
    reducers: reducers(set, get),
    getters: getters(get)
}))

