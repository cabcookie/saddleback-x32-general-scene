import {
    posSettingsTableToObject,
} from "../mapping/map-table-to-objects";
import {
    MAX_LENGTH_CHANNEL_NAME,
} from "../utils/constants";
import {
    cloneObject,
} from "../utils/fp-library";
import {
    IPeoplePosition,
    IPositionSettings,
} from "../utils/interfaces";

const mapNonPcoPositions = (posSettings: string[][], namesForNonPcoPositions: string[][]): IPeoplePosition[] => {
    const channels = [];
    const settings = posSettingsTableToObject(posSettings);
    namesForNonPcoPositions.forEach((line) => {
        mapPersonToChannelSettings({
                    declineReason: null,
                    name: line[1],
                    personId: "",
                    photoThumbnail: "",
                    status: "C",
                    teamPositionName: line[0],
                },
                settings.filter((item) =>
                    item.pcoPosition === line[0])[0])
            .forEach((newItem) =>
                channels.push(newItem));
    });
    return channels;
};

const isLabelSetToYes = (attribute: string): boolean => attribute.toUpperCase() === "YES";

const mapPersonToChannelSettings = (person: IPeoplePosition, posSettings: IPositionSettings): IPeoplePosition[] => {
    person.folderGithub = posSettings.folderGitHub;
    person.positionType = posSettings.positionType;

    const splitChannels = posSettings.channels.split(",");
    let channels = [];
    if (splitChannels.length === 0) {
        channels = [person];
    } else {
        channels = splitChannels.map((channel) => {
            const newLine = cloneObject(person);
            newLine.channelName = (
                    posSettings.prefixChannelNaming + " " +
                    channel.trim() +
                    (isLabelSetToYes(posSettings.isPeopleSpecific) ? newLine.name + " " : ""))
                .trim().substr(0, MAX_LENGTH_CHANNEL_NAME);
            newLine.presetFileName = (
                    posSettings.prefixFileNaming + " " +
                    (isLabelSetToYes(posSettings.toLoadPrefsForChannels) ? channel.trim() + " " : "") +
                    (isLabelSetToYes(posSettings.isPeopleSpecific) ? person.name + " " + person.personId : ""))
                .trim();
            return newLine;
        });
    }

    return channels;
};

const mapPeoplePositions = (
        posSettings: string[][],
        namesForNonPcoPositions: string[][],
        positionsNotForMixer: string[][]) =>
    (peoplePosition: IPeoplePosition[]): any[] => {
        const result = [];

        peoplePosition.forEach((person) => {
            const positionSettings = posSettingsTableToObject(posSettings).filter((position) =>
                position.pcoPosition === person.teamPositionName)[0];

            if (positionSettings === undefined) {
                if (positionsNotForMixer
                    .filter((posNotForMix) => posNotForMix[0] === person.teamPositionName)
                    .length === 0) {
                    throw new Error(person.teamPositionName + " is not defined");
                }
            } else {
                mapPersonToChannelSettings(person, positionSettings).forEach((item) =>
                    result.push(item));
            }
        });

        mapNonPcoPositions(posSettings, namesForNonPcoPositions).forEach((item) =>
            result.push(item));

        return result;
    };

export {
    mapPeoplePositions,
};
