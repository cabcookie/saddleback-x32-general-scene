import { mapPeople } from "../mapping/map-pco-data-to-object";
import { LINES, PLAN_ID, SERVICE_TYPE, URL_PEOPLE_POSITIONS } from "../utils/constants";
import { flow, replace } from "../utils/fp-library";
import { IPeoplePosition } from "../utils/interfaces";
import { fetchData } from "./import-data";
import { createPcoHeader, encodeSecret, parsePcoData } from "./import-pco-data";

const loadPeoplePositions = (serviceType: number, planId: number, timeId: number) => (): IPeoplePosition[] => {
    if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
    if (!(planId && planId > 0)) { throw new Error("planId are not defined"); }
    if (!(timeId && timeId > 0)) { throw new Error("timeId are not defined"); }

    const replacer = [
        { newVal: serviceType, orgVal: SERVICE_TYPE },
        { newVal: planId, orgVal: PLAN_ID },
        { newVal: 50, orgVal: LINES },
    ];

    const pipe = flow(
        replace(replacer),
        encodeSecret,
        createPcoHeader,
        fetchData,
        parsePcoData,
        mapPeople(timeId),
    );

    return pipe(URL_PEOPLE_POSITIONS);
};

export { loadPeoplePositions };
