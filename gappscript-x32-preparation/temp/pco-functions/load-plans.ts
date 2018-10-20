const loadPCOPlans = (serviceType, lines) => {
    const url = URL_PLANS.replace(SERVICE_TYPE, serviceType).replace(LINES, lines);
    return planDataToTable(importPCOData(url, filterPlans(serviceType)));
};

const filterPlans = curry((serviceType, plans) => {
    const filtPlans = [];
    for (const item of plans.data) {
        const obj = {
            date: item.attributes.short_dates,
            times: loadPCOPlanTimes(serviceType, item.id),
            id: item.id
        }
        filtPlans.push(obj);
    }
    return filtPlans;
});

const loadPCOPlanTimes = (serviceType, planId) => {
    const url = URL_PLAN_TIMES.replace(SERVICE_TYPE, serviceType).replace(PLAN_ID, planId);
    return importPCOData(url, filterPlanTimes);
};

const filterPlanTimes = (times) => {
    let filtPlanTimes = [];
    for (let item of times.data) {
        filtPlanTimes.push({
            id: item.id,
            time: formatDate(item.attributes.starts_at)
        });
    }
    return filtPlanTimes
};

const planDataToTable = (plans) => {
    const lines = [];
    for (let plan of plans) {
        for (let time of plan.times) {
            lines.push([time.time, plan.id, time.id])
        }
    }
    return lines;
};

const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    d.setHours(d.getHours() - 9);
    return d;
};
