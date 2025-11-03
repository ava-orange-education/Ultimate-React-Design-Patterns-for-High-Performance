import { rgb } from "color-convert";

export type UpdateHexAction = {
    type: "update-hex";
    payload: { hexColor: string; };
};

export type UpdateRGBAction = {
    type: "update-rgb";
    payload: { rgb: [number, number, number] };
};

type ColorState = {
    hexColor: string;
};

export const initState: ColorState = {
    hexColor: "#f5278b",
};

export type ColorActions = UpdateHexAction | UpdateRGBAction

export const colorReducer = (state: ColorState = initState, action: ColorActions) => {
    switch (action.type) {
        case "update-hex": {
            const { hexColor } = action.payload;
            return { ...state, hexColor };
        }
        case "update-rgb": {
            const hexColor = '#' + rgb.hex(action.payload.rgb);
            return { ...state, hexColor };
        }
        default: return state;
    }
};
