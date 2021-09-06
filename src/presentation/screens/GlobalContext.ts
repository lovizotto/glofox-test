import * as React from "react";

const GlobalContext = React.createContext<GlobalContext.GlobalContextParams>({});
export namespace GlobalContext {
    export type GlobalContextParams = {
        search?: { name?: string, date?: string }
    }
}

export default GlobalContext