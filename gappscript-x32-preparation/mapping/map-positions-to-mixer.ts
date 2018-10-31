import { IMixerChannel, IPeoplePosition } from "../utils/interfaces";

const mapPositionsToMixer =
    (channelsOfTheMixer: string[]) =>
    (positions: IPeoplePosition[]): IMixerChannel[] => {
        const channels = channelsOfTheMixer.map((ch, idx) => {
            return {
                channel: idx + 1,
                positionType: ch,
            };
        });

        const peoplesInEars = [];

        return positions.map((pos) => {
            const channel = channels.filter((ch) => ch.positionType === pos.positionType)[0];
            if (channel === undefined) {
                throw new Error("Position type " + pos.positionType + " is missing on the mixer");
            }
            const index = channels.indexOf(channel);
            channels.splice(index, 1);

            let inEar = peoplesInEars.filter((item) => item.personId === pos.personId)[0];
            if (inEar === undefined) {
                if (!pos.noPcoScheduling) {
                    inEar = {
                        inEar: peoplesInEars.length + 1,
                        personId: pos.personId,
                    };
                    peoplesInEars.push(inEar);
                }
            }

            return {
                channelName: pos.channelName,
                channelNumber: channel.channel,
                folderGithub: pos.folderGithub,
                inEar: (inEar ? inEar.inEar : null),
                personName: pos.name,
                photoThumbnail: pos.photoThumbnail,
                positionType: pos.positionType,
                presetFileName: pos.presetFileName,
            };
        });
    };

export { mapPositionsToMixer };
