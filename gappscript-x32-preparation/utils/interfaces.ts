import { IHeader } from "./mock-functions";

interface IPlan {
    date: string;
    planId: number;
    times: ITime[];
}
interface IPcoPlan {
    id: number;
    attributes: {
        short_dates: string,
    };
}
interface IPcoPlans { data: IPcoPlan[]; }
interface ITime { id: number; time?: string; }
interface IPcoTime {
    id: number;
    attributes: {
        starts_at: string,
    };
}
interface IPcoTimes { data: IPcoTime[]; }
interface IUrlEncodedSecret {
    encodedSecret: string;
    url: string;
}
interface IUrlHeader {
    header: IHeader;
    url: string;
}
interface IKeyValuePair {
    orgVal: string | number;
    newVal: string | number;
}
interface IPcoPeoples { data: IPcoPeople[]; }
interface IPeoplePosition {
    declineReason?: string;
    name: string;
    personId: string;
    photoThumbnail: string;
    status: string;
    teamPositionName: string;
    channelName?: string;
    positionType?: string;
    presetFileName?: string;
    folderGithub?: string;
    noPcoScheduling?: boolean;
}
interface IPcoPeople {
    id?: string;
    relationships: {
        times: { data: ITime[] },
        person?: { data: { id: number }},
    };
    attributes: {
        status?: string,
        name: string,
        photo_thumbnail?: string,
        team_position_name?: string,
        decline_reason?: string,
    };
}
interface IPositionSettings {
    pcoPosition: string;
    channels: string;
    isPeopleSpecific: string;
    toLoadPrefsForChannels: string;
    noPcoScheduling: string;
    prefixChannelNaming: string;
    prefixFileNaming: string;
    folderGitHub: string;
    positionType: string;
}
interface IMixerChannel {
    channelName: string;
    channelNumber: number;
    folderGithub: string;
    inEar: number;
    personName: string;
    photoThumbnail: string;
    positionType: string;
    presetFileName: string;
}

export {
    IPlan,
    IPcoTimes,
    ITime,
    IPcoPlans,
    IUrlEncodedSecret,
    IUrlHeader,
    IKeyValuePair,
    IPcoPeople,
    IPcoPeoples,
    IPeoplePosition,
    IPositionSettings,
    IMixerChannel };
