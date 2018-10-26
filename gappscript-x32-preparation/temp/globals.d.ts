interface ITimes { id: number }
interface IPcoPeoples { data: IPcoPeople[] }

// TODO: add the optional attributes
interface IPeoplePosition {
    name: string,
    personId: string,
    photo: string,
    status: string,
    position: string,
    decline_reason: string
}

interface IPcoPeople {
    relationships: {
        times: { data: ITimes[] },
        person: { data: { id: number }}
    },
    attributes: {
        status: string,
        name: string,
        photo_thumbnail: string,
        team_position_name: string,
        decline_reason: string
    }
}

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
    // TODO: Define return types instead of just setting any
    function loadScheduledPeople(serviceType: number, planId: number, timeId: number): IPeoplePosition[];
    function getPositionSettings(posSettings: string[][]): IAnyObject;
    function scheduledPeopleToTable(people: IPeoplePosition[]): string[][];
    function matchPeoplePositions(people: IPeoplePosition[], positions: IAnyObject, namesNonPCO: string[], posNotForMixer: string[]): IPeoplePosition[];
    function matchMixerPositions(matchedPeoplePositions: IPeoplePosition[], channelsOfTheMixer: string[]): IMixerPosition[];
    function channelProposal(channels: IMixerPosition[]): IMixerPosition[];
    function filterScheduledPeople(timeId: number, pcoPeople: IPcoPeoples): IPeoplePosition[];
    function createPeoplePositionObj(item: IAnyObject): IPeoplePosition;
}
