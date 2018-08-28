/**
 * With this function the next x plans can be loaded from PCO.
 *
 * @param {serviceType}           ID of service type which includes the specific plans
 * @param {user}                  username for basic authentication
 * @param {pwd}                   password for basic authentication
 * @param {lines}                 no of lines being returned
 * @customfunction
 *
 * @return a two-dimensional array containing the plans
 **/
const getNextPCOPlans = (serviceType, user, pwd, lines) => ({
    const url = URL_PLANS.replace(serviceType, serviceType).replace(LINES, lines);
    const nextPCOPlans = importPCOData(url, user, pwd, filterPlans);
    return planDataToTable(nextPCOPlans);
});

const filterPlans = plans => ({
    const filtPlans = [];
    for (let i = 0; i< plans.data.length; i++) {
        const item = plans.data[i];
        const obj = {
            date: item.attributes.dates,
            id: item.id
        };
        filtPlans[i] = obj;
    }
    return filtPlans;
});

const planDataToTable = plans => ({
    const lines = [];
    for (let i = 0; i < plans.length; i++) {
        lines[i] = [plans[i].date, plans[i].id];
    }
    return lines;
});
