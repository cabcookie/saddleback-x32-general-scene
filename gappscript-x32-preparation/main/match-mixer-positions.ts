const matchMixerPositions = (positions, mixer) => {
    // TODO: lines.push([item.channel, item.type, item.person, item.name, item.fileName]);
    
    if (mixer.length === 1) {
        mixer = mixer[0];
    }
    if (mixer.length < 3) {
        throw new Error("Error: The mixer template has less than three channels.");
    }
    return positions;
}
