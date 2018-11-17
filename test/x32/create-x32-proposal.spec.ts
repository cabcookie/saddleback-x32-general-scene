import { createX32Proposal } from "../../gappscript-x32-preparation/x32/create-x32-proposal";
import { PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, SERVICE_TYPE, POSITIONS_NOT_FOR_MIXER, POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS } from "../CreateProposalForChannels.spec";
import { cloneObject } from "../../gappscript-x32-preparation/utils/fp-library";
import { IMixerChannel } from "../../gappscript-x32-preparation/utils/interfaces";

const expect = require('chai').expect;

describe("test file create-x32-proposal", () => {
    describe("test createX32Proposal", () => {
        describe("check exceptions and results", () => {
            const newPositionsNotForMixer: string[][] = cloneObject(POSITIONS_NOT_FOR_MIXER);
            const newChannelsOfTheMixer = cloneObject(CHANNELS_OF_THE_MIXER);
            const expected: IMixerChannel[] = [{
                channelName: "CD Person",
                channelNumber: 12,
                folderGithub: "Vocals",
                inEar: 1,
                personName: "CD Person",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                positionType: "Leader",
                presetFileName: "Vocals CD Person 36308664",
            }, {
                channelName: "Acc CD Perso",
                channelNumber: 3,
                folderGithub: "Instruments",
                inEar: 1,
                personName: "CD Person",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                positionType: "Guitars",
                presetFileName: "Acoustic CD Person 36308664",
            }, {
                positionType: "Drums",
                channelNumber: 8,
                folderGithub: "Drums and Percussion",
                inEar: 2,
                personName: "JM Drummer",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                channelName: "Kick",
                presetFileName: "Drums Kick",
            }, {
                positionType: "Drums",
                channelNumber: 9,
                folderGithub: "Drums and Percussion",
                inEar: 2,
                personName: "JM Drummer",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                channelName: "Snare",
                presetFileName: "Drums Snare",
            }, {
                positionType: "Drums",
                channelNumber: 10,
                folderGithub: "Drums and Percussion",
                inEar: 2,
                personName: "JM Drummer",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                channelName: "Overhead",
                presetFileName: "Drums Overhead",
            }, {
                channelName: "Keys L",
                channelNumber: 6,
                folderGithub: "Instruments",
                inEar: 3,
                personName: "VH Keys",
                photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23",
                positionType: "Keys",
                presetFileName: "Keys",
            }, {
                channelName: "Keys R",
                channelNumber: 7,
                folderGithub: "Instruments",
                inEar: 3,
                personName: "VH Keys",
                photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23",
                positionType: "Keys",
                presetFileName: "Keys",
            }, {
                channelName: "TA Singer",
                channelNumber: 1,
                folderGithub: "Vocals",
                inEar: 4,
                personName: "TA Singer",
                photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/29767105-1505856373/avatar.6.jpg?g=136x136%23",
                positionType: "Vocals",
                presetFileName: "Vocals TA Singer 29767105",
            }, {
                channelName: "Bass MG Bass",
                channelNumber: 5,
                folderGithub: "Instruments",
                inEar: 5,
                personName: "MG Bass",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                positionType: "Bass",
                presetFileName: "Bass MG Bass 25024004",
            }, {
                channelName: "SP Sings",
                channelNumber: 2,
                folderGithub: "Vocals",
                inEar: 6,
                personName: "SP Sings",
                photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                positionType: "Vocals",
                presetFileName: "Vocals SP Sings 40587017",
            }, {
                channelName: "Serm Rick Wa",
                channelNumber: 11,
                folderGithub: "Others",
                inEar: null,
                personName: "Rick Warren",
                photoThumbnail: "",
                positionType: "Sermon EN",
                presetFileName: "Sermon Rick Warren",
            }];
            const fn = createX32Proposal(SERVICE_TYPE, PLAN_ID, TIME_ID, newChannelsOfTheMixer, POSITION_SETTINGS, newPositionsNotForMixer, NAMES_FOR_NON_PCO_POSITIONS);

            describe("check exceptions", () => {
                ["Interpreter", "ProPresenter Preparation", "Sermon Video Preparation"]
                    .forEach((pos) => {
                        it("should throw error because position '" + pos + "' is not defined", () => {
                            expect(fn).to.throw(pos);
                            newPositionsNotForMixer.push([pos]);
                        })
                    })
                it("should through Leader is missing on mixer setup", () => {
                    expect(fn).to.throw("Leader");
                    newChannelsOfTheMixer.push("Leader");
                })
            })

            describe("now check values", () => {
                it("should equal to expected values of a table", () => {
                    expect(fn()).to.deep.equal(expected);
                })
            })
        })
    })
})