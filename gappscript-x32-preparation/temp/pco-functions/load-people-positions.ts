const loadScheduledPeople = (serviceType, planId, timeId) => {
    const url: string = replaceInStrings(URL_PEOPLE_POSITIONS, [
        {key: SERVICE_TYPE, value: serviceType.toString()},
        {key: LINES, value: "50"},
        {key: PLAN_ID, value: planId.toString()}]);
    return filterScheduledPeople(timeId, importPcoData(url) as IPCOPeoples);
};

const scheduledPeopleToTable = (people) => people.map((i) => [
    i.name,
    i.personId,
    i.photo,
    i.status,
    i.position,
    i.decline_reason]);

const filterPeopleOnTimeAndStatus = curry((timeId: number, item: IPCOPeople) =>
    filterById(timeId, item.relationships.times.data).length === 1
    && item.attributes.status !== "D");

const createPeoplePositionObj = (item) => {
    const attr = item.attributes;
    const person = item.relationships.person.data;
    return {
        decline_reason: attr.decline_reason,
        name: attr.name,
        personId: person.id,
        photo: attr.photo_thumbnail,
        position: attr.team_position_name,
        status: attr.status,
    };
};

const filterScheduledPeople = (timeId, pcoPeople) =>
    pcoPeople.data
      .filter(filterPeopleOnTimeAndStatus(timeId))
      .map(createPeoplePositionObj);
