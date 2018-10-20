declare namespace Utilities { function base64Encode(toEncode: string): string }
declare namespace UrlFetchApp { function fetch(url: string, header: IHeader) }

interface IHeader { headers: { Authorization: string }}
interface IJSONContent { getContentText(): string }
interface IAnyObject { [key: string]: any }
interface ITimes { id: number }
interface IPCOPeoples { data: IPCOPeople[] }

// TODO: add the optional attributes
interface IPeoplePosition {
    name: string,
    personId: string,
    photo: string,
    status: string,
    position: string,
    decline_reason: string
}

interface IPCOPeople {
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

interface IKeyValuePair {
    key: string,
    value: string
}

declare global {
    // TODO: Define return types instead of just setting any
    function loadScheduledPeople(serviceType: number, planId: number, timeId: number): IPeoplePosition[];
    function getPositionSettings(posSettings: string[][]): IAnyObject;
    function importPCOData(url: string): IAnyObject;
    function scheduledPeopleToTable(people: IPeoplePosition[]): string[][];
    function matchPeoplePositions(people: IPeoplePosition[], positions: IAnyObject, namesNonPCO: string[], posNotForMixer: string[]): IPeoplePosition[];
    function matchMixerPositions(matchedPeoplePositions: IPeoplePosition[], channelsOfTheMixer: string[]): IMixerPosition[];
    function channelProposal(channels: IMixerPosition[]): IMixerPosition[];
    function filterScheduledPeople(timeId: number, pcoPeople: IPCOPeoples): IPeoplePosition[];
    function createPeoplePositionObj(item: IAnyObject): IPeoplePosition;

    function curry(fn: (...args: any) => {}): (...args: any) => any;
    function cloneObject(obj: any): any;
    function pureUnshift(arr: any[], element: any): any[];
    function replaceInStrings(original: string, keyValues: IKeyValuePair[]): string;
    function filterById(id: number, arr: any[]): any[];
    function callbackfn(value: any, index?: number, arr?: any[]): any;
    function match(what: any, str: string): string[];
    function replace(): any;
    function filter(fn: (value: any, index?: number, arr?: any[]) => any, arr: any[]): any[];
    function map(): any;
    function hello(): string;
}

// const prematch: (what: any, str: string) => string[] = (what, str) => str.match(what);
// const prereplace: (what: string, replacement: string, str: string) => string =
// const prefilter: (fn: (value: any, index?: number, arr?: any[]) => any, arr: any[]) => any[] =
// const premap: (fn: (value: any, index?: number, arr?: any[]) => any, arr: any[]) => any[] =
