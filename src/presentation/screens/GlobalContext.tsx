import * as React from "react";

export const GlobalContext = React.createContext<GlobalContext.GlobalContextParams>({});

type GlobalContextProviderProps = {
    value: any
}
export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = (props) => {
    return <GlobalContext.Provider {...props} />
}

export namespace GlobalContext {
    type SearchParams = { name?: string, date?: string };
    export type GlobalContextParams = {
        search?: SearchParams
    }
}


export default GlobalContextProvider