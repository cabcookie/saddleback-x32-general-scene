import { IUrlHeader } from "../utils/interfaces";

const createGithubHeader = (url: string): IUrlHeader => {
    return { url };
};

export { createGithubHeader };

// import { plansToTable } from "../mapping/map-objects-to-table";
// import { mapPlans, mapPlanTimes } from "../mapping/map-pco-data-to-object";
// import { LINES, PLAN_ID, SERVICE_TYPE, URL_PLAN_TIMES, URL_PLANS } from "../utils/constants";
// import { flow, replace } from "../utils/fp-library";
// import { ITime } from "../utils/interfaces";
// import { createHeader, encodeSecret, fetchData, parseData } from "./import-pco-data";

// const loadPcoPlanTimes: (serviceType: number, planId: number) => ITime[] =
//     (serviceType, planId) => {
//         if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
//         if (!(planId && planId > 0)) { throw new Error("planId are not defined"); }

//         const replacer = [
//             { newVal: serviceType, orgVal: SERVICE_TYPE },
//             { newVal: planId, orgVal: PLAN_ID },
//         ];

//         const pipe = flow(
//             replace(replacer),
//             encodeSecret,
//             createHeader,
//             fetchData,
//             parseData,
//             mapPlanTimes,
//         );

//         return pipe(URL_PLAN_TIMES);
//     };

// const loadPcoPlans: (serviceType: number, lines: number) => string[][] =
//     (serviceType, lines) => {
//     if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
//     if (!(lines && lines > 0)) { throw new Error("lines are not defined"); }

//     const replacer = [
//         { newVal: serviceType, orgVal: SERVICE_TYPE },
//         { newVal: lines, orgVal: LINES },
//     ];

//     const pipe = flow(
//         replace(replacer),
//         encodeSecret,
//         createHeader,
//         fetchData,
//         parseData,
//         mapPlans(serviceType),
//         plansToTable,
//     );

//     return pipe(URL_PLANS);
// };

// export { loadPcoPlans, loadPcoPlanTimes };
