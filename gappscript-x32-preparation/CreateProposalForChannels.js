
/**
 * With this function you create a proposal for the organization of the mixer. You post the link for the affected service
 * in PCO, the relevant information for the PCO positions and the template for the mixer and as a result you will receive
 * the suggestion.
 *
 * @param {serviceType}           ID of service type
 * @param {planID}                ID of plan for which the position are to be loaded
 * @param {timeId}                ID of time for which the position are to be loaded
 * @param {channelsOfTheMixer}    a list of channels with their position types
 * @param {positionSettings}      two dimensional array with settings on the PCO positions; the
 *                                first row of this array should include the following headers:
 *                                   PCOPosition                name of the position from PCO
 *                                   channels                   a position might need several
 *                                                              channels, name the channels in a
 *                                                              comma-separated list
 *                                   isPeopleSpecific           flag [yes/no] if the position is
 *                                                              people specific in terms of channel
 *                                                              naming and preset naming
 *                                   toLoadPrefsForChannels     a flag [yes/no] to tell if the
 *                                                              presets need to be loaded for every
 *                                                              single channel from the channel list
 *                                   noPCOScheduling            flag [yes/no] to tell if this
 *                                                              position is never scheduled on PCO
 *                                   prefixChannelNaming        a prefix which is used to name the
 *                                                              channel on the board
 *                                   prefixFileNaming           a prefix which is used for the
 *                                                              preset file name
 *                                   positionType               the types name is being used on the
 *                                                              mixer template
 * @param {positionsNotForMixer}  positions that will appear in PCO but aren't relevant for the
 *                                mixer setup (e.g. Sound Engineer)
 * @param {namesForNonPCOPositions} names for people not being scheduled via PCO
 * @customfunction
 *
 * @return a two-dimensional array containing the proposal for the Mixer Setup
 **/
function CreateProposalForChannels(serviceType, planId, timeId, channelsOfTheMixer, positionSettings, positionsNotForMixer, namesForNonPCOPositions) {
    return createX32Proposal(serviceType, planId, timeId, channelsOfTheMixer, positionSettings, positionsNotForMixer, namesForNonPCOPositions);
}

/**
 * With this function the next x plans can be loaded from PCO.
 *
 * @param {serviceType}       ID of service type which includes the specific plans
 * @param {lines}             no of lines being returned
 * @customfunction
 *
 * @return a two-dimensional array containing the plans
 **/
function GetNextPCOPlans(serviceType, lines) {
    return loadPCOPlans(serviceType, lines);
}

/**
* Shows all positions in PCO for which there is no information provided in this sheet.
*
* @param {serviceType}           ID of service type
* @param {planID}                ID of plan for which the position are to be loaded
* @param {timeId}                ID of time for which the position are to be loaded
* @param {positions}             list of names of the positions from PCO
* @param {positionsNotForMixer}  positions that will appear in PCO but aren't relevant for the
*                                mixer setup (e.g. Sound Engineer)
*
* @customfunction
* @return one-dimensional array (one column) with all position names not knwon
**/
function GetUnidentifiedTeamPositions(serviceType, planId, timeId, positions, positionsNotForMixer) {
    return listUnknownPositions(serviceType, planId, timeId, positions, positionsNotForMixer);
}

/**
* Shows all position types described in this sheet for which there is no channel information
* provided in this sheet.
*
* @param {positionTypes}    complete list of position types defined in this sheet
* @param {mixerSettings}    complete list of channels of the mixer defined in this sheet
*
* @customfunction
* @return one-dimensional array (one column) with all position names not knwon
**/
function GetPositionTypesNotKnownInSoundbard(positionTypes, mixerSettings) {
    return listUnknownTypes(positionTypes, mixerSettings);
}
