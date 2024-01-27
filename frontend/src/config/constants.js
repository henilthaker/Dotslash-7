import { move, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
// {
//   name: "colorpicker",
//   icon: swatch,
// },
export const EditorTabs = [
    {
        name: "colorpicker",
        icon: move,
    },
    {
        name: "filepicker",
        icon: fileIcon,
    },
    {
        name: "aipicker",
        icon: ai,
    },
];

export const FilterTabs = [
    {
        name: "logoShirt",
        icon: logoShirt,
    },
    {
        name: "stylishShirt",
        icon: stylishShirt,
    },
];

export const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt",
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt",
    },
};
