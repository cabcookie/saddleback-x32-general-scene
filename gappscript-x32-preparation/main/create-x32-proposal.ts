const createX32Proposal = (serviceType, planId, timeId, channelsOfTheMixer, posSettings, positionsNotForMixer, namesForNonPCOPositions) => {
    try {
        const scheduledPeople = loadScheduledPeople(serviceType, planId, timeId);
        const positionSettings = getPositionSettings(posSettings);
        const matchedPeoplePositions = matchPeoplePositions(scheduledPeople, positionSettings, namesForNonPCOPositions, positionsNotForMixer);
        const matchedMixerPositions = matchMixerPositions(matchedPeoplePositions, channelsOfTheMixer);
        return peoplePositionsToTable(matchedMixerPositions);
        // TODO: return mixerToTable(channels);
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
