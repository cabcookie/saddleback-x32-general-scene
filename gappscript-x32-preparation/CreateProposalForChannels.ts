import { createGithubHeader } from "./github-data/import-github-data";
import { mixerPositionsToTable } from "./mapping/map-objects-to-table";
import { fetchData, parseData } from "./pco-data/import-pco-data";
import { loadPcoPlans } from "./pco-data/load-pco-plans";
import { flow, IKeyValuePair, replace } from "./utils/fp-library";
import { createX32Proposal } from "./x32/create-x32-proposal";

/**
 * With this function you create a proposal for the organization of the mixer. You post the link
 * for the affected service in PCO, the relevant information for the PCO positions and the template
 * for the mixer and as a result you will receive the suggestion.
 *
 * @param serviceType ID of service type
 * @param planId ID of plan for which the position are to be loaded
 * @param timeId ID of time for which the position are to be loaded
 * @param channelsOfTheMixer a list of channels with their position types
 * @param positionSettings two dimensional array with settings on the PCO positions; the
 *        first row of this array should include the following headers:
 *           PcoPosition                name of the position from PCO
 *           channels                   a position might need several
 *                                      channels, name the channels in a
 *                                      comma-separated list
 *           isPeopleSpecific           flag [yes/no] if the position is
 *                                      people specific in terms of channel
 *                                      naming and preset naming
 *           toLoadPrefsForChannels     a flag [yes/no] to tell if the
 *                                      presets need to be loaded for every
 *                                      single channel from the channel list
 *           noPcoScheduling            flag [yes/no] to tell if this
 *                                      position is never scheduled on PCO
 *           prefixChannelNaming        a prefix which is used to name the
 *                                      channel on the board
 *           prefixFileNaming           a prefix which is used for the
 *                                      preset file name
 *           positionType               the types name is being used on the
 *                                      mixer template
 * @param positionsNotForMixer positions that will appear in PCO but aren't relevant for the
 *           mixer setup (e.g. Sound Engineer)
 * @param namesForNonPcoPositions names for people not being scheduled via PCO
 * @customfunction
 *
 * @returns a two-dimensional array containing the proposal for the Mixer Setup
 */
function CreateProposalForChannels(
    serviceType: number,
    planId: number,
    timeId: number,
    channelsOfTheMixer: any[],
    positionSettings: string[][],
    positionsNotForMixer: any[],
    namesForNonPcoPositions: string[][]): string[][] {
    try {
        const pipe = flow(
            createX32Proposal(
                serviceType,
                planId,
                timeId,
                channelsOfTheMixer,
                positionSettings,
                positionsNotForMixer,
                namesForNonPcoPositions),
            mixerPositionsToTable,
        );
        return pipe();
    } catch (error) {
        return [[error.message]];
    }
}

/**
 * With this function the next x plans can be loaded from PCO.
 *
 * @param serviceType       ID of service type which includes the specific plans
 * @param lines             no of lines being returned
 * @customfunction
 *
 * @returns a two-dimensional array containing the plans
 */
function GetNextPcoPlans(serviceType: number, lines: number): string[][] {
    return loadPcoPlans(serviceType, lines);
}

/**
 * This function creates the final X32 scene file for a selected Sunday.
 *
 * @param serviceType ID of service type
 * @param planId ID of plan for which the position are to be loaded
 * @param timeId ID of time for which the position are to be loaded
 * @param channelsOfTheMixer a list of channels with their position types
 * @param positionSettings two dimensional array with settings on the PCO positions; the
 *        first row of this array should include the following headers:
 *           PcoPosition                name of the position from PCO
 *           channels                   a position might need several
 *                                      channels, name the channels in a
 *                                      comma-separated list
 *           isPeopleSpecific           flag [yes/no] if the position is
 *                                      people specific in terms of channel
 *                                      naming and preset naming
 *           toLoadPrefsForChannels     a flag [yes/no] to tell if the
 *                                      presets need to be loaded for every
 *                                      single channel from the channel list
 *           noPcoScheduling            flag [yes/no] to tell if this
 *                                      position is never scheduled on PCO
 *           prefixChannelNaming        a prefix which is used to name the
 *                                      channel on the board
 *           prefixFileNaming           a prefix which is used for the
 *                                      preset file name
 *           positionType               the types name is being used on the
 *                                      mixer template
 * @param positionsNotForMixer positions that will appear in PCO but aren't relevant for the
 *           mixer setup (e.g. Sound Engineer)
 * @param namesForNonPcoPositions names for people not being scheduled via PCO
 * @param presetsLibraryName folder on Github repository for the channel preset files
 * @param x32TemplateFileName name of the template file for the scene on Github
 * @param x32GeneralSceneFileName name of the general scene file on Github
 * @param githubBranchName name of the branch where the presets files rely
 * @param githubRepository link to the Github repository with the scene file and the presets
 * @customfunction
 *
 * @returns a two-dimensional array containing the proposal for the Mixer Setup
 */
function CreateX32SceneFile(
    serviceType: number,
    planId: number,
    timeId: number,
    channelsOfTheMixer: any[],
    positionSettings: string[][],
    positionsNotForMixer: any[],
    namesForNonPcoPositions: string[][],
    presetsLibraryName: string,
    x32TemplateFileName: string,
    x32GeneralSceneFileName: string,
    githubBranchName: string,
    githubRepository: string,
): string[][] {
    try {
        const mixerPositions = createX32Proposal(
            serviceType,
            planId,
            timeId,
            channelsOfTheMixer,
            positionSettings,
            positionsNotForMixer,
            namesForNonPcoPositions);

        const url = githubRepository + "/" + githubBranchName + "/" + encodeURIComponent(x32GeneralSceneFileName);
        const replacer: IKeyValuePair[] = [{
            newVal: "raw.githubusercontent.com",
            orgVal: "github.com",
        }];

        const pipe = flow(
            replace(replacer),
            createGithubHeader,
            fetchData,
            parseData,
            JSON.stringify,
            console.log
        );

        return pipe(url);
    } catch (error) {
        return [[error.message]];
    }
}

export {
    CreateProposalForChannels,
    GetNextPcoPlans,
    CreateX32SceneFile,
};
