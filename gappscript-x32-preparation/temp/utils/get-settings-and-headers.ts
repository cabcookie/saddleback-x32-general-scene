const getPositionSettings = (posSettings) => {
    const headersToFind = {
        PCOPosition: -1,
        channels: -1,
        folderGitHub: -1,
        isPeopleSpecific: -1,
        noPCOScheduling: -1,
        positionType: -1,
        prefixChannelNaming: -1,
        prefixFileNaming: -1,
        toLoadPrefsForChannels: -1};

    const headersWithBoolean = {
        isPeopleSpecific: true,
        noPCOScheduling: true,
        toLoadPrefsForChannels: true};

    const headers = getHeadersOfPositionSettings(posSettings, headersToFind);

    posSettings.splice(0, 1);
    const positionSettings = {};
    posSettings.forEach((line) => {
        if (line[headers.PCOPosition]) {
            const obj = {};
            let name = "";
            for (const key in headers) {
                if (headers.hasOwnProperty(key)) {
                    const item = line[headers[key]];
                    if (headersWithBoolean[key]) {
                        obj[key] = item.toUpperCase() === "YES" ? true : false;
                    } else if (key === "PCOPosition") {
                        name = item;
                    } else {
                        obj[key] = item;
                    }
                }
            }
            positionSettings[name] = obj;
        }
    });
    return positionSettings;
};

const getHeadersOfPositionSettings = (posSettings, objToFind) => {
    const headers = posSettings[0];
    const missing = [];
    const KEY = "[KEY]";
    const errorMsg = "Error: Couldn't find '" + KEY + "' in position settings.";
    for (const key in objToFind) {
        if (objToFind.hasOwnProperty(key)) {
            headers.forEach((e, i) => e === key ? objToFind[key] = i : null);
            if (objToFind[key] < 0) {
                missing.push(errorMsg.replace(KEY, key));
            }
        }
    }
    if (missing.length > 0) {
        throw new Error(JSON.stringify(missing));
    }
    return objToFind;
};
