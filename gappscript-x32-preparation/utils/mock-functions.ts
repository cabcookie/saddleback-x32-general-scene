import { GITHUB_GENERAL_SCENE } from "../../test/import-data/results/github-general-scene";
import { GITHUB_SCENE_TEMPLATE } from "../../test/import-data/results/github-scene-template";
import { TEST_PCO_PLANS } from "../../test/import-data/results/pco-data-plans";
import { TEST_PCO_TIME1, TEST_PCO_TIME2 } from "../../test/import-data/results/pco-data-times";
import { TEST_PCO_PEOPLE_POSITIONS } from "../../test/import-data/results/pco-people-positions";

interface IUtilities {
    base64Encode: (toEncode: string) => string;
}

interface IUrlFetchApp { fetch: (url: string, header?: IHeader) => IJSONContent; }
interface IJSONContent {
    data?: string[];
    getContentText(): string;
}
interface IHeader { headers: { Authorization: string }; }

const BASE_URL_PLANS = "https://api.planningcenteronline.com/services/v2/service_types/309883/plans";
const TEST_URL_PLANS = BASE_URL_PLANS + "?filter=future&per_page=2";
const TEST_URL_TIME1 = BASE_URL_PLANS + "/38402157/plan_times?where[time_type]=service";
const TEST_URL_TIME2 = BASE_URL_PLANS + "/38579002/plan_times?where[time_type]=service";
const TEST_URL_PEOPLE_POSITIONS = BASE_URL_PLANS + "/38402157/team_members?per_page=50";

const BASE_GITHUB_URL = "https://raw.githubusercontent.com/cabcookie/saddleback-x32-general-scene/master/";
const URL_GENERAL_SCENE_FILE = BASE_GITHUB_URL + "Soundboard%20Setup.scn";
const URL_SCENE_TEMPLATE = BASE_GITHUB_URL + "TemplateX32.scn";

const TEST_URL_FETCH = "http://this.is.just.the.test.url";
const TEST_FETCH_RESULT = "This is just the test result";

const Utilities: IUtilities = {
    base64Encode: (toEncode) => "this is the encoded string",
};

const UrlFetchApp: IUrlFetchApp = {
    fetch: (url, header?) => {
        let result: any = {};
        switch (url) {
            case TEST_URL_PLANS:
                result = { getContentText: () => JSON.stringify(TEST_PCO_PLANS) };
                break;
            case TEST_URL_TIME1:
                result = { getContentText: () => JSON.stringify(TEST_PCO_TIME1) };
                break;
            case TEST_URL_TIME2:
                result = { getContentText: () => JSON.stringify(TEST_PCO_TIME2) };
                break;
            case TEST_URL_PEOPLE_POSITIONS:
                result = { getContentText: () => JSON.stringify(TEST_PCO_PEOPLE_POSITIONS) };
                break;
            case URL_GENERAL_SCENE_FILE:
                result = { data: GITHUB_GENERAL_SCENE };
                break;
            case URL_SCENE_TEMPLATE:
                result = { data: GITHUB_SCENE_TEMPLATE };
                break;
            case TEST_URL_FETCH:
                result = TEST_FETCH_RESULT;
                break;
            default:
                result = "Couldn't find URL " + url;
                break;
        }
        return result;
    }};

export {
    Utilities,
    UrlFetchApp,
    IJSONContent,
    IHeader,
    TEST_URL_PLANS,
    TEST_URL_TIME1,
    TEST_URL_TIME2,
    TEST_FETCH_RESULT,
    TEST_URL_FETCH,
    URL_GENERAL_SCENE_FILE,
};
