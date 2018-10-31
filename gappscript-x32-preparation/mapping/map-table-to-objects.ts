import { POSITION_SETTINGS_KEYS } from "../utils/constants";
import { pureShift } from "../utils/fp-library";
import { IPositionSettings } from "../utils/interfaces";

const posSettingsTableToObject = (positionSettings: string[][]): IPositionSettings[] => {
    const keys: string[] = POSITION_SETTINGS_KEYS;
    const headerLineUpperCase = positionSettings[0].map((item) => item.toUpperCase());
    const keyIndexes = {};
    keys.forEach((key) => {
        keyIndexes[key] = headerLineUpperCase.indexOf(key.toUpperCase());
        if (keyIndexes[key] === -1) { throw new Error(key + " is missing"); }
    });

    return pureShift(positionSettings).map((line) => {
        const obj = {};
        keys.forEach((key) => obj[key] = line[keyIndexes[key]]);
        return obj as IPositionSettings;
    });
};

export { posSettingsTableToObject };
