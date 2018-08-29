const matchPeoplePositions = (people, positions) => {
    let matched = [];
    people.forEach(p => {
        const pos = positions[p.position];
        if (pos) {
            const obj = cloneObject(p);
            obj.personId = obj.id;
            const toPush = makeChannels(obj, pos);
            for (let i of toPush) {
                matched.push(i);
            }
        } else {
            // TODO: handle positions not relevant for mixer setup
        }
    });
    for (let key in positions) {
        const pos = positions[key];
        if (pos.noPCOScheduling) {
            const obj = {
                // name: "placeholder",
                position: key
            };
            const toPush = makeChannels(obj, pos);
            for (let i of toPush) {
                matched.push(i);
            }
        }
    }
    return matched;
}

const makeChannels = (o, s) => {
    let toPush = [];
    o.positionType = s.positionType;
    if (s.channels) {
        const chs = s.channels.split(",");
        for (let ch of chs) {
            const chSets = makeChannelSettings(o, s, ch);
            chSets.presetFileName = makePresetFileName(chSets, s, ch);
            toPush.push(chSets);
        }
    } else {
        const chSets = makeChannelSettings(o, s, "")
        chSets.presetFileName = makePresetFileName(chSets, s, "");
        toPush.push(chSets);
    }
    return toPush;
}

const makeChannelSettings = (o, s, ch) => {
    const c = cloneObject(o);
    c.channelName = makeChannelName(o, s, ch);
    return c;
}

const makePresetFileName = (o, s, ch) => {
    let name = s.prefixFileNaming + " ";
    const NAME = "[NAME]";
    if (s.isPeopleSpecific) name = name + NAME + " ";
    if (s.toLoadPrefsForChannels) name = name + ch;
    if (s.isPeopleSpecific) {
        name = name.replace(NAME, o.name);
        if (o.personId) name = name + o.personId + " ";
    }
    return name.replace('  ', ' ').trim();
}

const makeChannelName = (o, s, ch) => {
    try {
        let name = s.prefixChannelNaming + " ";
        const NAME = "[NAME]";
        const MAX_LENGTH = 12;
        if (s.isPeopleSpecific) name = name + NAME + " ";
        if (ch.length > 0) name = name + ch;
        name = name.replace('  ', ' ').trim();
        if (s.isPeopleSpecific) {
            const maxLengthName = 12 - (name.length - NAME.length);
            name = name.replace(NAME, o.name.substr(0, maxLengthName));
        }
        return name.substr(0, MAX_LENGTH);
    } catch (e) {
        throw new Error("Please provide name for position: "+ o.position);
    }
}

const peoplePositionsToTable = p => {
    let l = [[
        "personId",
        "name",
        // "photo",
        // "status",
        "position",
        "channelName",
        "positionType",
        "presetFileName"
    ]];
    for (let i of p) {
        l.push([
            i.personId,
            i.name,
            // i.photo,
            // i.status,
            i.position,
            i.channelName,
            i.positionType,
            i.presetFileName
        ]);
    }
    return l;
}
