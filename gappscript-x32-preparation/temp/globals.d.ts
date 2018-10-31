interface IPositionSetting {}
interface IMixerPosition {
    channel: number,
    type: string,
    person: string,
    inEar: number,
    name?: string,
    fileName?: string
}

declare global {
    function loadScheduledPeople(serviceType: number, planId: number, timeId: number): IPeoplePosition[];
    function getPositionSettings(posSettings: string[][]): IAnyObject;
    function scheduledPeopleToTable(people: IPeoplePosition[]): string[][];
    function matchPeoplePositions(people: IPeoplePosition[], positions: IAnyObject, namesNonPco: string[], posNotForMixer: string[]): IPeoplePosition[];
    function matchMixerPositions(matchedPeoplePositions: IPeoplePosition[], channelsOfTheMixer: string[]): IMixerPosition[];
    function channelProposal(channels: IMixerPosition[]): IMixerPosition[];
    function filterScheduledPeople(timeId: number, pcoPeople: IPcoPeoples): IPeoplePosition[];
    function createPeoplePositionObj(item: IAnyObject): IPeoplePosition;
}
