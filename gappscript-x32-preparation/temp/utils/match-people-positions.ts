const matchPeoplePositions = (people, positions, namesNonPCO, posNotForMixer) => {
    const peopleWithInEar = [];
    const matched = [];
    people.forEach((person) => {
        const pos = positions[person.position];
        if (pos) {
            const obj = cloneObject(person);
            const inEarOfPerson = getInEarOfPerson(obj.personId, peopleWithInEar);
            if (inEarOfPerson < 0) {
                obj.inEar = peopleWithInEar.length + 1;
                peopleWithInEar.push(obj.personId);
            } else {
                obj.inEar = inEarOfPerson + 1;
            }
            const toPush = makeChannels(obj, pos);
            for (const i of toPush) {
                matched.push(i);
            }
        } else {
            const known = posNotForMixer.filter((m) => m === person.position);
            if (known.length === 0) {
                throw new Error("ERROR: Position '"
                    + person.position
                    + "' is not defined. Please describe this position in the list "
                    + "'Relevant for mixer setup' or in the list 'Not relevant for mixer'.");
            }
        }
    });
    for (const key in positions) {
        if (positions.hasOwnProperty(key)) {
            const pos = positions[key];
            if (pos.noPCOScheduling) {
                const obj = { position: key };
                const names = namesNonPCO.filter((n) => n[0].toUpperCase() === key.toUpperCase());
                if (names.length > 0) {
                    obj.name = names[0][1];
                }
                const toPush = makeChannels(obj, pos);
                for (const i of toPush) {
                    matched.push(i);
                }
            }
        }
    }
    return matched;
};

const getInEarOfPerson = (personId, listOfInEars) => {
    let index = -1;
    listOfInEars.filter((item, idx) => {
        if (personId === item) {
            index = idx;
        }
    });
    return index;
};

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
    let name = s.folderGitHub + "/" + s.prefixFileNaming + " ";
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
    let l = [["personId", "name", "position", "channelName", "positionType", "presetFileName", "inEar"]];
    // "status", "photo"
    for (let i of p) l.push([i.personId, i.name, i.position, i.channelName, i.positionType, i.presetFileName, i.inEar]);
    return l;
}
