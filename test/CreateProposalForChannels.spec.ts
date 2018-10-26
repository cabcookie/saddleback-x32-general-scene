import {
    CreateProposalForChannels,
    GetNextPCOPlans,
    GetUnidentifiedTeamPositions,
    GetPositionTypesNotKnownInSoundbard } from "../gappscript-x32-preparation/CreateProposalForChannels";

const expect = require('chai').expect;
const SERVICE_TYPE = 309883;
const PLAN_ID = 38013798;
const TIME_ID = 91687168;
const CHANNELS_OF_THE_MIXER = ["Vocals", "Vocals", "Guitars", "Guitars", "Bass", "Keys", "Keys", "Drums", "Drums", "Drums", "Sermon EN"];
const POSITIONS = [["PCOPosition"], ["Vocal Team"], ["Keys"], ["Drums"], ["Worship Leader"], ["Acoustic Guitar"], ["Bass"], ["Sermon EN"]];
const POSITION_TYPES = [["positionType"], ["Vocals"], ["Keys"], ["Drums"], ["Leader"], ["Guitars"], ["Bass"], ["Sermon EN"]];
const POSITION_SETTINGS = [
    ["PCOPosition","channels","isPeopleSpecific","toLoadPrefsForChannels","noPCOScheduling","prefixChannelNaming","prefixFileNaming","folderGitHub","positionType"],
    ["Vocal Team","","yes","","no","","Vocals","Vocals","Vocals"],
    ["Keys","L, R","no","","no","Keys","Keys","Instruments","Keys"],
    ["Drums","Kick, Snare, Overhead","no","yes","no","","Drums","Drums and Percussion","Drums"],
    ["Worship Leader","","yes","","no","","Vocals","Vocals","Leader"],
    ["Acoustic Guitar","","yes","","no","Acc","Acoustic","Instruments","Guitars"],
    ["Bass","","yes","","no","Bass","Bass","Instruments","Bass"],
    ["Sermon EN","","yes","","yes","Serm","Sermon","Others","Sermon EN"]
];
const POSITIONS_NOT_FOR_MIXER = [["Production Lead"], ["Sound Engineer"], ["Graphics Operator"]];
const NAMES_FOR_NON_PCO_POSITIONS = [["Sermon EN", "Rick Warren"]];

describe("test main function (callable in Google Sheet)", () => {
    describe("test CreateProposalForChannels", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => CreateProposalForChannels(undefined, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("serviceType");
            })
        
            it("should throw an error if no plan id is provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, undefined, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("planId");
            })
        
            it("should throw an error if no time id is provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, undefined, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("timeId");
            })
        
            it("should throw an error if no channels of the mixer are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, undefined, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("channelsOfTheMixer");
            })
        
            it("should throw an error if channels of the mixer is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, [], POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("channelsOfTheMixer");
            })
        
            it("should throw an error if no position settings are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, undefined, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("positionSettings");
            })
        
            it("should throw an error if position settings is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, [], POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("positionSettings");
            })
        
            it("should throw an error if no positions not for mixer are provided", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, undefined, NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("positionsNotForMixer");
            })
        
            it("should throw an error if positions not for mixer is empty", () => {
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, [], NAMES_FOR_NON_PCO_POSITIONS);
                expect(fn).to.throw("positionsNotForMixer");
            })
        })

        describe("check return values", () => {
            const result = CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly four columns", () => {
                expect(result[0].length).to.equal(4);
            })

            describe("more sophisticated value tests", () => {
                const newPositionsNotForMixer: string[][] = JSON.parse(JSON.stringify(POSITIONS_NOT_FOR_MIXER));
                const values = [
                    ["1", "Vocals", "Birgit Engel", "1"],
                    ["2", "Vocals", "Sarah Pitts", "2"],
                    ["3", "Guitars", "Lynne Armstrong", "3"],
                    ["4", "Guitars", "", ""],
                    ["5", "Bass", "", ""],
                    ["6", "Keys", "Brian Miller", "4"],
                    ["7", "Keys", "Brian Miller", "4"],
                    ["8", "Drums", "Dave Schnitter", "5"],
                    ["9", "Drums", "Dave Schnitter", "5"],
                    ["10", "Drums", "Dave Schnitter", "5"],
                    ["11", "Sermon EN", "Rick Warren", ""]];
                const fn = () => CreateProposalForChannels(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, newPositionsNotForMixer, NAMES_FOR_NON_PCO_POSITIONS);

                describe("check exceptions", () => {
                    ["Sermon Video Preparation", "ProPresenter Preparation", "Interpreter", "Violin", "Stage Team"]
                        .forEach((pos) => {
                            it("should throw error because position '" + pos + "' is not defined", () => {
                                expect(fn).to.throw(pos);
                            })
                            newPositionsNotForMixer.push([pos]);
                        })
                })

                describe("now check values", () => {
                    it("should equal to expected values of a table", () => {
                        const CHANNELS_OF_THE_MIXER = ["Vocals", "Vocals", "Guitars", "Guitars", "Bass", "Keys", "Keys", "Drums", "Drums", "Drums", "Sermon EN"];
                        expect(fn()).to.deep.equal(values);
                    })
                })
            })            
        })
    })

    describe("test GetNextPCOPlans", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => GetNextPCOPlans(undefined, 50);
                expect(fn).to.throw("serviceType");
            })
            
            it("should throw an error if no number of lines is provided", () => {
                const fn = () => GetNextPCOPlans(SERVICE_TYPE, undefined);
                expect(fn).to.throw("lines");
            })
        })

        describe("check return values", () => {
            const result = GetNextPCOPlans(SERVICE_TYPE, 2);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly three columns", () => {
                expect(result[0].length).to.equal(4);
            })

            it("should equal to expected values of a table", () => {
                const values = [
                    ["Date", "Time", "Plan ID", "Time ID"],
                    ["Oct 28", "10:00 am", "38402157", "92596418"],
                    ["Oct 28", "12:00 pm", "38402157", "92596476"],
                    ["Nov 4", "11:00 am", "38579002", "93006671"],
                    ["Nov 4", "01:00 pm", "38579002", "93006673"]];

                expect(result).to.deep.equal(values);
            })
        })
    })

    describe("test GetUnidentifiedTeamPositions", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if service type is not provided", () => {
                const fn = () => GetUnidentifiedTeamPositions(undefined, PLAN_ID, TIME_ID, POSITIONS, POSITIONS_NOT_FOR_MIXER);
                expect(fn).to.throw("serviceType");
            })
            
            it("should throw an error if plan id is not provided", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, undefined, TIME_ID, POSITIONS, POSITIONS_NOT_FOR_MIXER);
                expect(fn).to.throw("planId");
            })
            
            it("should throw an error if time id is not provided", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, undefined, POSITIONS, POSITIONS_NOT_FOR_MIXER);
                expect(fn).to.throw("timeId");
            })
            
            it("should throw an error if positions are not provided", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, TIME_ID, undefined, POSITIONS_NOT_FOR_MIXER);
                expect(fn).to.throw("positions");
            })
            
            it("should throw an error if positions are empty", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, TIME_ID, [], POSITIONS_NOT_FOR_MIXER);
                expect(fn).to.throw("positions");
            })
            
            it("should throw an error if positions not for mixer are not provided", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, TIME_ID, POSITIONS, undefined);
                expect(fn).to.throw("positionsNotForMixer");
            })
            
            it("should throw an error if positions not for mixer are empty", () => {
                const fn = () => GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, TIME_ID, POSITIONS, []);
                expect(fn).to.throw("positionsNotForMixer");
            })
        })

        describe("check return values", () => {
            const result = GetUnidentifiedTeamPositions(SERVICE_TYPE, PLAN_ID, TIME_ID, POSITIONS, POSITIONS_NOT_FOR_MIXER);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly one column", () => {
                expect(result[0].length).to.equal(1);
            })

            it("should equal to expected values of a table", () => {
                const values = [
                    ["Sermon Video Preparation"],
                    ["ProPresenter Preparation"],
                    ["Interpreter"],
                    ["Violin"],
                    ["Stage Team"]];
                expect(result).to.deep.equal(values);
            })
        })
    })

    describe("test GetPositionTypesNotKnownInSoundbard", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if position types are not provided", () => {
                const fn = () => GetPositionTypesNotKnownInSoundbard(undefined, CHANNELS_OF_THE_MIXER);
                expect(fn).to.throw("positionTypes");
            })
            
            it("should throw an error if position types are empty", () => {
                const fn = () => GetPositionTypesNotKnownInSoundbard([], CHANNELS_OF_THE_MIXER);
                expect(fn).to.throw("positionTypes");
            })
            
            it("should throw an error if channels of the mixer are not provided", () => {
                const fn = () => GetPositionTypesNotKnownInSoundbard(POSITION_TYPES, undefined);
                expect(fn).to.throw("channelsOfTheMixer");
            })
            
            it("should throw an error if channels of the mixer are empty", () => {
                const fn = () => GetPositionTypesNotKnownInSoundbard(POSITION_TYPES, []);
                expect(fn).to.throw("channelsOfTheMixer");
            })
        })

        describe("check return values", () => {
            const result = GetPositionTypesNotKnownInSoundbard(POSITION_TYPES, CHANNELS_OF_THE_MIXER);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly one column", () => {
                expect(result[0].length).to.equal(1);
            })

            it("should equal to expected values of a table", () => {
                const values = [["Leader"]];
                expect(result).to.deep.equal(values);
            })
        })
    })
})
