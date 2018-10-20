const listUnknownPositions = (serviceType, planId, timeId, positions, positionsNotForMixer) => {
    const unknown = [];
    const scheduled = loadScheduledPeople(serviceType, planId, timeId);
    scheduled.forEach(s => {
        const knownP = positions.filter(p => s.position == p);
        if (knownP.length == 0) {
            const knownN = positionsNotForMixer.filter(p => s.position == p);
            if (knownN.length == 0) unknown.push(s.position);
        }
    });
    return unknown.length == 0 ? ["All positions known"] : unknown;
}
