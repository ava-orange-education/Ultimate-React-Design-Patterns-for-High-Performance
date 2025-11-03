import { createContext, PropsWithChildren, Dispatch, useReducer } from "react";
import { ColorActions, colorReducer, initState } from "../reducer/colorReducer";

type ColorContextState = { hexColor: string; dispatch: Dispatch<ColorActions>; };

export const ColorContext = createContext<ColorContextState>({ hexColor: "#FFF000" } as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [{ hexColor }, dispatch] = useReducer(colorReducer, initState);
    return (
        <ColorContext.Provider value={{ hexColor, dispatch }}>
            {children}
        </ColorContext.Provider>
    );
};
