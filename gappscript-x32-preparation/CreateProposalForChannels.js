var SERVICE_TYPE = "[SERVICE_TYPE]";
var LINES = "[LINES]";
var PLAN_ID = "[PLAN_ID]";
var URL_PLANS = "https://api.planningcenteronline.com/services/v2/service_types/"+ SERVICE_TYPE +"/plans?filter=future&per_page="+ LINES;
var URL_PEOPLE_POSITIONS = "https://api.planningcenteronline.com/services/v2/service_types/"+ SERVICE_TYPE +"/plans/"+ PLAN_ID +"/team_members?per_page="+ LINES;


/**
 * With this function you create a proposal for the organization of the mixer. You post the link for the affected service
 * in PCO, the relevant information for the PCO positions and the template for the mixer and as a result you will receive
 * the suggestion.
 *
 * @param {serviceType}           ID of service type
 * @param {planID}                ID of plan for which the position are to be loaded
 * @param {channelsOfTheMixer}    a list of channels with their position types
 * @param {positionSettings}      two dimensional array with settings on the PCO positions; the first row of this array should include the following headers
 *                                      PCOPosition              name of the position from PCO
 *                                      channels                 a position might need several channels, name the channels in a comma-separated list
 *                                      isPeopleSpecific         flag [yes/no] if the position is people specific in terms of channel naming and preset naming
 *                                      toLoadPrefsForChannels   a flag [yes/no] to tell if the presets need to be loaded for every single channel from the channel list
 *                                      noPCOScheduling          flag [yes/no] to tell if this position is never scheduled on PCO
 *                                      prefixChannelNaming      a prefix which is used to name the channel on the board
 *                                      prefixFileNaming         a prefix which is used for the preset file name
 *                                      positionType             the types name is being used on the mixer template
 * @param {user}                  username for basic authentication
 * @param {pwd}                   password for basic authentication
 * @customfunction
 *
 * @return a two-dimensional array containing the proposal for the Mixer Setup
 **/
function CreateProposalForChannels(serviceType, planId, channelsOfTheMixer, positionSettings, user, pwd) {
  var url = URL_PEOPLE_POSITIONS.replace(SERVICE_TYPE, serviceType).replace(LINES, 50).replace(PLAN_ID, planId);
  var peopleAndPositions = LoadPeopleAndPositions(url, user, pwd);
  return peoplePositionsToTable(peopleAndPositions);
}

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
function GetNextPCOPlans(serviceType, user, pwd, lines) {
  var url = URL_PLANS.replace(SERVICE_TYPE, serviceType).replace(LINES, lines);
  var nextPCOPlans = ImportPCOData(url, user, pwd, filterPlanData);
  return planDataToTable(nextPCOPlans);
}

function LoadPeopleAndPositions(url, user, pwd) {
  return ImportPCOData(url, user, pwd, filterPeopleAndPositionsData);
}

function ImportPCOData(url, user, pwd, filterFunc) {
  var encodedAuthInformation = Utilities.base64Encode(user + ":" + pwd);
  var header = {headers: {Authorization: "Basic " + encodedAuthInformation}};
  var jsondata = UrlFetchApp.fetch(url, header);
  var object = JSON.parse(jsondata.getContentText());

  return filterFunc(object);
}

function filterPlanData(plans) {
  // query = "/data/links/self,/data/attributes/dates";
  var filtPlans = [];
  for (var i = 0; i < plans.data.length; i++) {
    var item = plans.data[i];
    var obj = {
      date: item.attributes.dates,
      id: item.id
    };
    filtPlans[i] = obj;
  }
  return filtPlans;
}

function filterPeopleAndPositionsData(plans) {
  // query = "/data/attributes/name,/data/attributes/photo_thumbnail,/data/attributes/status,/data/attributes/team_position_name,/data/relationships/times/data/id,/data/attributes/decline_reason";
  var filtPeople = [];
  for (var i = 0; i < plans.data.length; i++) {
    var data = plans.data[i];
    var attr = data.attributes;
    var times = data.relationships.times.data;
    var t = [];
    for (var j = 0; j < times.length; j++) {
      t[j] = times[j].id;
    }
    var obj = {
      name: attr.name,
      photo: attr.photo_thumbnail,
      status: attr.status,
      position: attr.team_position_name,
      decline_reason: attr.decline_reason,
      times: t
    };
    filtPeople[i] = obj;
  }
  return filtPeople;
}

function planDataToTable(plans) {
  var lines = [];
  for (var i = 0; i < plans.length; i++) {
    lines[i] = [plans[i].date, plans[i].id];
  }
  return lines;
}

function peoplePositionsToTable(people) {
  var lines = [];
  for (var i = 0; i < people.length; i++) {
    lines[i] = [people[i].name, people[i].photo, people[i].status, people[i].position];
  }
  return lines;
}
