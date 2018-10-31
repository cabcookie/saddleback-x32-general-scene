import { mapPeoplePositions } from "../mapping/map-people-positions";
import { loadPeoplePositions } from "../pco-data/load-people-positions";
import { flow } from "../utils/fp-library";

const createX32Proposal = (
    serviceType: number,
    planId: number,
    timeId: number,
    channelsOfTheMixer: string[],
    posSettings: string[][],
    positionsNotForMixer: string[][],
    namesForNonPcoPositions: string[][]): string[][] => {
        if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
        if (!(planId && planId > 0)) { throw new Error("planId are not defined"); }
        if (!(timeId && timeId > 0)) { throw new Error("timeId are not defined"); }

        const pipe = () => flow(
            loadPeoplePositions(serviceType, planId, timeId),
            mapPeoplePositions(posSettings, namesForNonPcoPositions, positionsNotForMixer),
            // mapMixerPositions(channelsOfTheMixer),
            // mixerPositionsToTable,
            JSON.stringify,
        );

        return pipe();
    };

export { createX32Proposal };

//     const positionSettings = getPositionSettings(posSettings);
//     // TODO: create type for matchPeoplePositions
//     const matchedPeoplePositions = matchPeoplePositions(
//       scheduledPeople,
//       positionSettings,
//       namesForNonPcoPositions,
//       positionsNotForMixer);
//     // TODO: create type for matchMixerPositions
//     const matchedMixerPositions = matchMixerPositions(
//       matchedPeoplePositions,
//       channelsOfTheMixer);
//     // TODO: create type for channelProposal
//     return channelProposal(matchedMixerPositions);

// // TODO: fix issue in mapping of channels.map
// const channelProposal = (channels) => channels.map((channel) => [
//   channel.channel, channel.type, channel.person, channel.inEar]);

// const mixerToTable = (channels: IMixerPosition[]) => pureUnshift(channels.map((item) => [
//   item.channel.toString,
//   item.type,
//   item.person,
//   item.name,
//   item.fileName,
//   item.inEar.toString]),
//   ["Channel", "Type", "Person", "Channel Name", "Preset File Name", "In Ear"]);
