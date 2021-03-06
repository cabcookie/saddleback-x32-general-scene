const SERVICE_TYPE = "[SERVICE_TYPE]";
const LINES = "[LINES]";
const PLAN_ID = "[PLAN_ID]";
const URL_PLANS = "https://api.planningcenteronline.com/services/v2/service_types/" +
    SERVICE_TYPE +
    "/plans?filter=future&per_page=" +
    LINES;
const URL_PLAN_TIMES = "https://api.planningcenteronline.com/services/v2/service_types/" +
    SERVICE_TYPE +
    "/plans/" +
    PLAN_ID +
    "/plan_times?where[time_type]=service";
const URL_PEOPLE_POSITIONS = "https://api.planningcenteronline.com/services/v2/service_types/" +
    SERVICE_TYPE +
    "/plans/" +
    PLAN_ID +
    "/team_members?per_page=" +
    LINES;
const POSITION_SETTINGS_KEYS = [
    "pcoPosition",
    "channels",
    "isPeopleSpecific",
    "toLoadPrefsForChannels",
    "noPcoScheduling",
    "prefixChannelNaming",
    "prefixFileNaming",
    "folderGitHub",
    "positionType",
];
const MAX_LENGTH_CHANNEL_NAME = 12;
export {
    SERVICE_TYPE,
    LINES,
    PLAN_ID,
    URL_PLANS,
    URL_PLAN_TIMES,
    URL_PEOPLE_POSITIONS,
    POSITION_SETTINGS_KEYS,
    MAX_LENGTH_CHANNEL_NAME,
};
