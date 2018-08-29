const loadScheduledPeople = (serviceType, planId, timeId) => {
    const url = URL_PEOPLE_POSITIONS.replace(SERVICE_TYPE, serviceType).replace(LINES, 50).replace(PLAN_ID, planId);
    return importPCOData(url, filterScheduledPeople(timeId));
}

const filterScheduledPeople = curry((timeId, plans) => {
    const DECLINED = "D";
    const f = plans.data.filter(p => p.relationships.times.data.filter(t => t.id == timeId).length == 1 && p.attributes.status != DECLINED);
    let filtPeople = [];
    for (let item of f) {
        const attr = item.attributes;
        const obj = {
            name: attr.name,
            id: item.relationships.person.data.id,
            photo: attr.photo_thumbnail,
            status: attr.status,
            position: attr.team_position_name,
            decline_reason: attr.decline_reason
        };
        filtPeople.push(obj);
    }
    return filtPeople;
});

const scheduledPeopleToTable = p => {
    let l = [];
    for (let i of p) {
        l.push([i.name, i.photo, i.status, i.position, i.decline_reason]);
    }
    return l;
}
