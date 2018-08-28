const loadPCOPlans = (serviceType, user, pwd, lines) => {
    const url = URL_PLANS.replace(SERVICE_TYPE, serviceType).replace(LINES, lines);
    return importPCOData(url, user, pwd, filtPlans);
}

const filterPlans = plans => {
    let filtPlans = [];
    for (let i = 0; i < plans.data.length; i++) {
        const item = plans.data[i];
        const obj = {
            date: item.attributes.dates,
            id: item.id
        };
        filtPlans[i] = obj;
    }
    return filtPlans;
}

const planDataToTable = plans => {
    let lines = [];
    for (let i = 0; i < plans.length; i++) {
        lines[i] = [plans[i].date, plans[i].id];
    }
    return lines;
}
