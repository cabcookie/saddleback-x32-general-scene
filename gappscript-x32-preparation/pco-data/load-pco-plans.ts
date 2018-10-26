import { LINES, PLAN_ID, SERVICE_TYPE, URL_PLAN_TIMES, URL_PLANS } from "../utils/constants";
import { flow, formatTime, replace, toString } from "../utils/fp-library";
import { createHeader, encodeSecret, fetchData, parseData } from "./import-pco-data";

interface IPcoPlan {
    id: number;
    attributes: {
        short_dates: string,
    };
}

interface IPcoTime {
    id: number;
    attributes: {
        starts_at: string,
    };
}

interface IPlans {
    date: string;
    planId: number;
    times: ITime[];
}

interface IPcoPlans { data: IPcoPlan[]; }
interface ITime { id: number; time: string; }
interface IPcoTimes { data: IPcoTime[]; }

const mapPlanTimes: (times: IPcoTimes) => ITime[] = (times) => times.data.map((item) => {
    return {
        id: item.id,
        time: formatTime(item.attributes.starts_at),
    };
});

const loadPcoPlanTimes: (serviceType: number, planId: number) => ITime[] =
    (serviceType, planId) => {
        if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
        if (!(planId && planId > 0)) { throw new Error("planId are not defined"); }

        const replacer = [
            { newVal: serviceType, orgVal: SERVICE_TYPE },
            { newVal: planId, orgVal: PLAN_ID },
        ];

        const pipe = flow(
            replace(replacer),
            encodeSecret,
            createHeader,
            fetchData,
            parseData,
            mapPlanTimes,
        );

        return pipe(URL_PLAN_TIMES);
    };

const mapPlans: (serviceType: number) => (plans: IPcoPlans) => IPlans[] =
    (serviceType) => (plans) => plans.data.map((item) => {
        return {
            date: item.attributes.short_dates,
            planId: item.id,
            times: loadPcoPlanTimes(serviceType, item.id),
        };
    });

const plansToTable = (plans: IPlans[]): string[][] => {
    const lines = [["Date", "Time", "Plan ID", "Time ID"]];
    plans.forEach((plan) => {
        plan.times.forEach((time) => {
            lines.push([plan.date, time.time, toString(plan.planId), toString(time.id)]);
        });
    });
    return lines;
};

const loadPcoPlans: (serviceType: number, lines: number) => string[][] =
    (serviceType, lines) => {
    if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
    if (!(lines && lines > 0)) { throw new Error("lines are not defined"); }

    const replacer = [
        { newVal: serviceType, orgVal: SERVICE_TYPE },
        { newVal: lines, orgVal: LINES },
    ];

    const tabMapping = [];

    const pipe = flow(
        replace(replacer),
        encodeSecret,
        createHeader,
        fetchData,
        parseData,
        mapPlans(serviceType),
        plansToTable,
    );

    return pipe(URL_PLANS);
};

export { loadPcoPlans };
