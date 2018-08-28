const loadPeopleAndPositions = (serviceType, planId, user, pwd) => {
    const url = URL_PEOPLE_POSITIONS.replace(SERVICE_TYPE, serviceType).replace(LINES, 50).replace(PLAN_ID, planId);
    return importPCOData(url, user, pwd, filterPeopleAndPositions);
}

const filterPeopleAndPositions = plans => {
    const DECLINED = "D";
    let filtPeople = [];
    for (let item of plans.data) {
        const attr = item.attributes;
        const times = item.relationships.times.data;
        let t = [];
        for (let time of times) {
            t.push(time.id);
        }
        const obj = {
            name: attr.name,
            photo: attr.photo_thumbnail,
            status: attr.status,
            position: attr.team_position_name,
            decline_reason: attr.decline_reason,
            times: t
        };
        if (obj.status !== DECLINED) {
            filtPeople.push(obj);
        }
    }
    return filtPeople;
}

const peoplePositionsToTable = people => {
    let lines = [];
    for (let item of people) {
        lines.push([item.name, item.photo, item.status, item.position]);
    }
    return lines;
}
