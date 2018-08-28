const loadPCOPlans = (serviceType, user, pwd, lines) => {
    const url = URL_PLANS.replace(SERVICE_TYPE, serviceType).replace(LINES, lines);
    return importPCOData(url, user, pwd, filterPlans);
}

const filterPlans = plans => {
    let filtPlans = [];
    for (let item of plans.data) {
        const obj = {
            date: item.attributes.dates,
            id: item.id
        }
        filtPlans.push(obj);
    }
    return filtPlans;
}

const planDataToTable = plans => {
    let lines = [];
    for (let item of plans) {
        lines.push([item.date, item.id]);
    }
    return lines;
}
