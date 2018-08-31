const getPositionSettings = posSettings => {
    const headersToFind = {
        PCOPosition: -1,
        channels: -1,
        isPeopleSpecific: -1,
        toLoadPrefsForChannels: -1,
        noPCOScheduling: -1,
        prefixChannelNaming: -1,
        prefixFileNaming: -1,
        folderGitHub: -1,
        positionType: -1
    };
    const headersWithBoolean = {
        isPeopleSpecific: true,
        toLoadPrefsForChannels: true,
        noPCOScheduling: true
    }
    const headers = getHeadersOfPositionSettings(posSettings, headersToFind);

    posSettings.splice(0, 1);
    const positionSettings = {};
    posSettings.forEach(line => {
        if (line[headers.PCOPosition]) {
            const obj = {};
            let name = "";
            for (let key in headers) {
                const item = line[headers[key]];
                if (headersWithBoolean[key]) {
                    obj[key] = item.toUpperCase() === "YES" ? true : false;
                } else if (key === "PCOPosition") {
                    name = item;
                } else {
                    obj[key] = item;
                }
            }
            positionSettings[name] = obj;
        }
    });
    return positionSettings;
}

const getHeadersOfPositionSettings = (posSettings, objToFind) => {
    const headers = posSettings[0];
    let missing = [];
    const KEY = "[KEY]";
    const errorMsg = "Error: Couldn't find '"+ KEY +"' in position settings.";
    for (let key in objToFind) {
        headers.forEach((e, i) => if (e === key) objToFind[key] = i);
        if (objToFind[key] < 0) {
            missing.push(errorMsg.replace(KEY, key));
        };
    }
    if (missing.length > 0) {
        throw new Error(JSON.stringify(missing));
    }
    return objToFind;
}
