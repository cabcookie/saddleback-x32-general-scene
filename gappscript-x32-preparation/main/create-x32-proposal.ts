const createX32Proposal = (serviceType, planId, timeId, channelsOfTheMixer, posSettings, positionsNotForMixer, namesForNonPCOPositions) => {
    try {
        const scheduledPeople = loadScheduledPeople(serviceType, planId, timeId);
        const positionSettings = getPositionSettings(posSettings);
        const matchedPeoplePositions = matchPeoplePositions(scheduledPeople, positionSettings, namesForNonPCOPositions, positionsNotForMixer);
        return peoplePositionsToTable(matchedPeoplePositions);

        if (channelsOfTheMixer.length === 1) {
            channelsOfTheMixer = channelsOfTheMixer[0];
        }
        if (channelsOfTheMixer.length < 3) {
            throw new Error("Error: The mixer template has less than three channels.");
        }
        const channels = [];
        channelsOfTheMixer.forEach((item,idx) => channels.push({
            channel: idx+1,
            type: item,
            person: "",
            name: "",
            fileName: ""
        });

        scheduledPeople.forEach(pp => {
            const posSettings = positionSettings[pp.position];
            if (posSettings) {
                let channelFound;
                channelsOfTheMixer.forEach((item, idx) => {
                    if (item == posSettings.positionType && !channelFound && !channels[idx].name) channelFound = idx;
                });
                const c = posSettings.channels.split(", ").push(pp.name);
                // channels.push({channel: JSON.stringify(c));
                const channel = channels[channelFound];
                channel.person = pp.name;
            } else {
                let itemFound = false;
                positionsNotForMixer.forEach(item => if (item == pp.position) itemFound = true);
                if (!itemFound) {
                    throw new Error("Error: Couldn't find position '"+ pp.position +"'");
                }
            }
        });

        return mixerToTable(channels);
    } catch (e) {
        if (typeof e.message == "string") {
            return e.message;
        } else {
            return JSON.parse(e.message);
        }
    }
}

const mixerToTable = channels => {
    let lines = [["Channel", "Type", "Person", "Channel Name", "Preset File Name"]];

    for (let item of channels) {
        lines.push([item.channel, item.type, item.person, item.name, item.fileName]);
    }
    return lines;
}
