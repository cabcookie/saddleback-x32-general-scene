import { CreateProposalForChannels, GetNextPcoPlans, CreateX32SceneFile } from "../gappscript-x32-preparation/CreateProposalForChannels";
import { cloneObject } from "../gappscript-x32-preparation/utils/fp-library";
import { mapArrayToOneDimArray } from "../gappscript-x32-preparation/mapping/map-arrays";

const expect = require('chai').expect;

const SERVICE_TYPE = 309883;
const PLAN_ID = 38402157;
const TIME_ID = 92596418;
const CHANNELS_OF_THE_MIXER = [
    ["Vocals"],
    ["Vocals"],
    ["Guitars"],
    ["Guitars"],
    ["Bass"],
    ["Keys"],
    ["Keys"],
    ["Drums"],
    ["Drums"],
    ["Drums"],
    ["Sermon EN"]
];
const POSITION_SETTINGS = [
    ["PcoPosition", "channels", "isPeopleSpecific", "toLoadPrefsForChannels", "noPcoScheduling", "prefixChannelNaming", "prefixFileNaming", "folderGitHub", "positionType"],
    ["Vocal Team", "", "yes", "", "no", "", "Vocals", "Vocals", "Vocals"],
    ["Keys", "L, R", "no", "", "no", "Keys", "Keys", "Instruments", "Keys"],
    ["Drums", "Kick, Snare, Overhead", "no", "yes", "no", "", "Drums", "Drums and Percussion", "Drums"],
    ["Worship Leader", "", "yes", "", "no", "", "Vocals", "Vocals", "Leader"],
    ["Acoustic Guitar", "", "yes", "", "no", "Acc", "Acoustic", "Instruments", "Guitars"],
    ["Bass", "", "yes", "", "no", "Bass", "Bass", "Instruments", "Bass"],
    ["Sermon EN", "", "yes", "", "yes", "Serm", "Sermon", "Others", "Sermon EN"]
];
const POSITIONS_NOT_FOR_MIXER = [
    ["Production Lead"],
    ["Sound Engineer"],
    ["Graphics Operator"]
];
const NAMES_FOR_NON_PCO_POSITIONS = [
    ["Sermon EN", "Rick Warren"]
];
const GITHUB_LIBRARY_FOLDER = "Channel Library";
const GENERAL_SCENE_FILE = "Soundboard Setup.scn";
const X32_TEMPLATE_FILE = "TemplateX32.scn";
const GITHUB_BRANCH = "master";
const GITHUB_REPOSITORY = "https://github.com/cabcookie/saddleback-x32-general-scene";

describe("test main function (callable in Google Sheet)", () => {
    describe("test CreateProposalForChannels", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => CreateProposalForChannels(undefined, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("serviceType");
            })

            it("should throw an error if no plan id is provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, undefined, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("planId");
            })

            it("should throw an error if no time id is provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, undefined, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("timeId");
            })

            it("should throw an error if no channels of the mixer are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, undefined, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("channelsOfTheMixer");
            })

            it("should throw an error if channels of the mixer is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, [], POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("channelsOfTheMixer");
            })

            it("should throw an error if no position settings are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, undefined, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("positionSettings");
            })

            it("should throw an error if position settings is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, [], POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("positionSettings");
            })

            it("should throw an error if no positions not for mixer are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, undefined, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("positionsNotForMixer");
            })

            it("should throw an error if positions not for mixer is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, [], NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn()[0][0]).to.include("positionsNotForMixer");
            })
        })

        describe("check return values", () => {
            describe("check exceptions and results", () => {
                const newPositionsNotForMixer = cloneObject(POSITIONS_NOT_FOR_MIXER);
                const newChannelsOfTheMixer = mapArrayToOneDimArray(CHANNELS_OF_THE_MIXER);
                const expected = [
                    ["Channel", "Channel Name", "In Ear", "Picture", "Position Type", "Person"],
                    ["1", "TA Singer", "4", "https://avatars.planningcenteronline.com/uploads/person/29767105-1505856373/avatar.6.jpg?g=136x136%23", "Vocals", "TA Singer"],
                    ["2", "SP Sings", "6", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Vocals", "SP Sings"],
                    ["3", "Acc CD Perso", "1", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Guitars", "CD Person"],
                    ["5", "Bass MG Bass", "5", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Bass", "MG Bass"],
                    ["6", "Keys L", "3", "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23", "Keys", "VH Keys"],
                    ["7", "Keys R", "3", "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23", "Keys", "VH Keys"],
                    ["8", "Kick", "2", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Drums", "JM Drummer"],
                    ["9", "Snare", "2", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Drums", "JM Drummer"],
                    ["10", "Overhead", "2", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Drums", "JM Drummer"],
                    ["11", "Serm Rick Wa", "", "", "Sermon EN", "Rick Warren"],
                    ["12", "CD Person", "1", "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23", "Leader", "CD Person"],
                ];
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, newChannelsOfTheMixer, POSITION_SETTINGS, newPositionsNotForMixer, NAMES_FOR_NON_PCO_POSITIONS);

                describe("check exceptions", () => {
                    ["Interpreter", "ProPresenter Preparation", "Sermon Video Preparation"]
                    .forEach((pos) => {
                        it("should throw error because position '" + pos + "' is not defined", () => {
                            expect(fn()[0][0]).to.include(pos);
                            newPositionsNotForMixer.push([pos]);
                        })
                    })
                    it("should through Leader is missing on mixer setup", () => {
                        expect(fn()[0][0]).to.include("Leader");
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

    describe("test GetNextPcoPlans", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => GetNextPcoPlans(undefined, 50);
                expect(fn).to.throw("serviceType");
            })

            it("should throw an error if no number of lines is provided", () => {
                const fn = () => GetNextPcoPlans(SERVICE_TYPE, undefined);
                expect(fn).to.throw("lines");
            })
        })

        describe("check return values", () => {
            const result = GetNextPcoPlans(SERVICE_TYPE, 2);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly three columns", () => {
                expect(result[0].length).to.equal(3);
            })

            it("should equal to expected values of a table", () => {
                const values = [
                    ["Date / Time", "Plan ID", "Time ID"],
                    ["Oct 28 10:00 am", "38402157", "92596418"],
                    ["Oct 28 12:00 pm", "38402157", "92596476"],
                    ["Nov 4 11:00 am", "38579002", "93006671"],
                    ["Nov 4 01:00 pm", "38579002", "93006673"]
                ];

                expect(result).to.deep.equal(values);
            })
        })
    })

    describe("test CreateX32SceneFile", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => CreateX32SceneFile(undefined, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("serviceType");
            })

            it("should throw an error if no plan id is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, undefined, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("planId");
            })

            it("should throw an error if no time id is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, undefined, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("timeId");
            })

            it("should throw an error if no channels of the mixer are provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, undefined, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("channelsOfTheMixer");
            })

            it("should throw an error if channels of the mixer is empty", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, [], POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("channelsOfTheMixer");
            })

            it("should throw an error if no position settings are provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, undefined, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("positionSettings");
            })

            it("should throw an error if position settings is empty", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, [], POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("positionSettings");
            })

            it("should throw an error if no positions not for mixer are provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, undefined, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("positionsNotForMixer");
            })

            it("should throw an error if positions not for mixer is empty", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, [], NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("positionsNotForMixer");
            })

            it("should throw an error if no Github library folder is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, undefined, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("presetsLibraryName");
            })

            it("should throw an error if no X32 template file name is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, undefined, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("x32TemplateFileName");
            })

            it("should throw an error if no X32 general scene file name is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, undefined, GITHUB_BRANCH, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("x32GeneralSceneFileName");
            })

            it("should throw an error if no Github branch name is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, undefined, GITHUB_REPOSITORY);
                expect(fn()[0][0]).to.include("githubBranchName");
            })

            it("should throw an error if no Github repository is provided", () => {
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, undefined);
                expect(fn()[0][0]).to.include("githubRepository");
            })
        })

        describe("check return values", () => {
            describe("check exceptions and results", () => {
                const newPositionsNotForMixer = cloneObject(POSITIONS_NOT_FOR_MIXER);
                const newChannelsOfTheMixer = mapArrayToOneDimArray(CHANNELS_OF_THE_MIXER);
                const expected = [
                    ["test", "test2"],
                    ["line 2", "col 2"]
                ];
                const fn = () => CreateX32SceneFile(SERVICE_TYPE, PLAN_ID, TIME_ID, newChannelsOfTheMixer, POSITION_SETTINGS, newPositionsNotForMixer, NAMES_FOR_NON_PCO_POSITIONS, GITHUB_LIBRARY_FOLDER, X32_TEMPLATE_FILE, GENERAL_SCENE_FILE, GITHUB_BRANCH, GITHUB_REPOSITORY);

                describe("check exceptions", () => {
                    ["Interpreter", "ProPresenter Preparation", "Sermon Video Preparation"]
                    .forEach((pos) => {
                        it("should throw error because position '" + pos + "' is not defined", () => {
                            expect(fn()[0][0]).to.include(pos);
                            newPositionsNotForMixer.push([pos]);
                        })
                    })
                    it("should through Leader is missing on mixer setup", () => {
                        expect(fn()[0][0]).to.include("Leader");
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

})

export {
    PLAN_ID,
    SERVICE_TYPE,
    TIME_ID,
    CHANNELS_OF_THE_MIXER,
    POSITION_SETTINGS,
    NAMES_FOR_NON_PCO_POSITIONS,
    POSITIONS_NOT_FOR_MIXER,
    GITHUB_LIBRARY_FOLDER,
    X32_TEMPLATE_FILE,
    GENERAL_SCENE_FILE,
    GITHUB_BRANCH,
    GITHUB_REPOSITORY,
}