const SERVICE_TYPE = "[SERVICE_TYPE]";
const LINES = "[LINES]";
const PLAN_ID = "[PLAN_ID]";
const URL_PLANS = "https://api.planningcenteronline.com/services/v2/service_types/"+ SERVICE_TYPE +"/plans?filter=future&per_page="+ LINES;
const URL_PEOPLE_POSITIONS = "https://api.planningcenteronline.com/services/v2/service_types/"+ SERVICE_TYPE +"/plans/"+ PLAN_ID +"/team_members?per_page="+ LINES;
