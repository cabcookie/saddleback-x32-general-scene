
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
 * @param {positionsNotForMixer}  positions that will appear in PCO but aren't relevant for the mixer setup (e.g. Sound Engineer)
 * @param {user}                  username for basic authentication
 * @param {pwd}                   password for basic authentication
 * @customfunction
 *
 * @return a two-dimensional array containing the proposal for the Mixer Setup
 **/
function CreateProposalForChannels(serviceType, planId, channelsOfTheMixer, positionSettings, positionsNotForMixer, user, pwd) {
    return createX32Proposal(serviceType, planId, channelsOfTheMixer, positionSettings, positionsNotForMixer, user, pwd);
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
  return planDataToTable(loadPCOPlans(serviceType, user, pwd, lines));
}
