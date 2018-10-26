const createX32Proposal = (
    serviceType: number,
    planId: number,
    timeId: number,
    channelsOfTheMixer: string[],
    posSettings: string[][],
    positionsNotForMixer: string[],
    namesForNonPcoPositions: string[]) => {
  try {
    const scheduledPeople = loadScheduledPeople(serviceType, planId, timeId);
    // TODO: create type for getPositionSettings
    const positionSettings = getPositionSettings(posSettings);
    // TODO: create type for matchPeoplePositions
    const matchedPeoplePositions = matchPeoplePositions(
      scheduledPeople,
      positionSettings,
      namesForNonPcoPositions,
      positionsNotForMixer);
    // TODO: create type for matchMixerPositions
    const matchedMixerPositions = matchMixerPositions(
      matchedPeoplePositions,
      channelsOfTheMixer);
    // TODO: create type for channelProposal
    return channelProposal(matchedMixerPositions);
  } catch (e) {
    if (typeof e.message === "string") {
      return e.message;
    } else {
      return JSON.parse(e.message);
    }
  }
};

// TODO: fix issue in mapping of channels.map
const channelProposal = (channels) => channels.map((channel) => [
  channel.channel, channel.type, channel.person, channel.inEar]);

const mixerToTable = (channels: IMixerPosition[]) => pureUnshift(channels.map((item) => [
  item.channel.toString,
  item.type,
  item.person,
  item.name,
  item.fileName,
  item.inEar.toString]),
  ["Channel", "Type", "Person", "Channel Name", "Preset File Name", "In Ear"]);
