const matchMixerPositions = (positions, mixer) => {
    // let lines = [["Channel", "Type", "Person", "Channel Name", "Preset File Name"]];
    // TODO: lines.push([item.channel, item.type, item.person, item.name, item.fileName]);

    if (mixer.length === 1) {
        mixer = mixer[0];
    }
    if (mixer.length < 3) {
        throw new Error("Error: The mixer template has less than three channels.");
    }

    const channels = [];
    mixer.forEach((m,i) => channels.push({channel: i+1, type: m}));

    positions.forEach(pos => {
        // let l = [["personId", "name", "position", "channelName", "positionType", "presetFileName"]];
        // for (let i of p) l.push([i.personId, i.name, i.position, i.channelName, i.positionType, i.presetFileName]);
        const channel = channels.filter(ch => pos.positionType == ch.type && !ch.name)[0];
        channel.name = pos.channelName;
        channel.person = pos.name;
        channel.fileName = pos.presetFileName;
        channel.inEar = pos.inEar;
    });

    return channels;
}
