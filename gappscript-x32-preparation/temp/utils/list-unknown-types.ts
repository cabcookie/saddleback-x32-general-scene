const listUnknownTypes = (types, channels) => {
    types.splice(0,1); // slice header
    if (channels.length === 1) channels = channels[0];
    const arr = types.filter(t => channels.filter(c => t == c).length == 0);
    return arr;
}
