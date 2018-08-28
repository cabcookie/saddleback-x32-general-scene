const loadPeopleAndPositions = (url, user, pwd) => importPCOData(url, user, pwd, filterPeopleAndPositions);

const filterPeopleAndPositions = plans => ({
    const filtPeople = [];
    for (let i = 0; i < plans.data.length; i++) {
        const data = plans.data[i];
        const attr = data.attributes;
        const times = data.relationships.times.data;
        const t = [];
        for (let j = 0; j < times.length; j++) {
            t[j] = times[j].id;
        }
        const obj = {
            name: attr.name,
            photo: attr.photo_thumbnail,
            status: attr.status,
            position: attr.team_position_name,
            decline_reason: attr.decline_reason,
            times: t
        }
        filtPeople[i] = obj;
    }
    return filtPeople;
});

const peoplePositionsToTable = people => ({
    const lines = [];
    for (var i = 0; i < people.length; i++) {
        lines[i] = [people[i].name, people[i].photo, people[i].status, people[i].position];
    }
    return lines;
});
