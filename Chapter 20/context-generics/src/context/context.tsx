import { PropsWithChildren, Dispatch, useReducer } from "react";
import { ColorActions, colorReducer, initState } from "../reducer/colorReducer";
import { createContext } from "./create-context";

type ColorContextState = { hexColor: string; dispatch: Dispatch<ColorActions>; };

export const [useContext, ContextProvider] = createContext<ColorContextState>();

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [{ hexColor }, dispatch] = useReducer(colorReducer, initState);
    return (
        <ContextProvider value={{ hexColor, dispatch }}>
            {children}
        </ContextProvider>
    );
};
