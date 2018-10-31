import { TEST_PCO_PLANS } from "../../test/pco-data/results/pco-data-plans";
import { TEST_PCO_TIME1, TEST_PCO_TIME2 } from "../../test/pco-data/results/pco-data-times";
import { TEST_PCO_PEOPLE_POSITIONS } from "../../test/pco-data/results/pco-people-positions";

interface IUtilities {
    base64Encode: (toEncode: string) => string;
}

interface IUrlFetchApp { fetch: (url: string, header: IHeader) => IJSONContent; }
interface IJSONContent { getContentText(): string; }
interface IHeader { headers: { Authorization: string }; }

const BASE_URL_PLANS: string = "https://api.planningcenteronline.com/services/v2/service_types/309883/plans";
const TEST_URL_PLANS: string = BASE_URL_PLANS + "?filter=future&per_page=2";
const TEST_URL_TIME1: string = BASE_URL_PLANS + "/38402157/plan_times?where[time_type]=service";
const TEST_URL_TIME2: string = BASE_URL_PLANS + "/38579002/plan_times?where[time_type]=service";
const TEST_URL_PEOPLE_POSITIONS: string = BASE_URL_PLANS + "/38402157/team_members?per_page=50";

const Utilities: IUtilities = {
    base64Encode: (toEncode) => "this is the encoded string",
};

const UrlFetchApp: IUrlFetchApp = {
    fetch: (url, header) => {
        let result: any = {};
        switch (url) {
            case TEST_URL_PLANS:
                result = TEST_PCO_PLANS;
                break;
            case TEST_URL_TIME1:
                result = TEST_PCO_TIME1;
                break;
            case TEST_URL_TIME2:
                result = TEST_PCO_TIME2;
                break;
            case TEST_URL_PEOPLE_POSITIONS:
                result = TEST_PCO_PEOPLE_POSITIONS;
                break;
            default:
                result = "Couldn't find URL";
                break;
        }
        return { getContentText: () => JSON.stringify(result) };
    }};

export { Utilities, UrlFetchApp, IJSONContent, IHeader, TEST_URL_PLANS, TEST_URL_TIME1, TEST_URL_TIME2 };
