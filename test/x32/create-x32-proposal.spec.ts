import { createX32Proposal } from "../../gappscript-x32-preparation/x32/create-x32-proposal";

const expect = require('chai').expect;

const SERVICE_TYPE = 309883;
const PLAN_ID = 38013798;
const TIME_ID = 91687168;
const CHANNELS_OF_THE_MIXER = ["Vocals", "Vocals", "Guitars", "Guitars", "Bass", "Keys", "Keys", "Drums", "Drums", "Drums", "Sermon EN"];
// const POSITIONS = [["pcoPosition"], ["Vocal Team"], ["Keys"], ["Drums"], ["Worship Leader"], ["Acoustic Guitar"], ["Bass"], ["Sermon EN"]];
// const POSITION_TYPES = [["positionType"], ["Vocals"], ["Keys"], ["Drums"], ["Leader"], ["Guitars"], ["Bass"], ["Sermon EN"]];
const POSITION_SETTINGS = [
    ["pcoPosition","channels","isPeopleSpecific","toLoadPrefsForChannels","noPcoScheduling","prefixChannelNaming","prefixFileNaming","folderGitHub","positionType"],
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

describe("test file create-x32-proposal", () => {
    describe("test createX32Proposal", () => {
        describe("check exceptions and results", () => {
            const newPositionsNotForMixer: string[][] = JSON.parse(JSON.stringify(POSITIONS_NOT_FOR_MIXER));
            const values = [
                ["Channel", "Type", "Name", "In Ear"],
                ["1", "Vocals", "Birgit Engel", "1"],
                ["2", "Vocals", "SP Sings", "2"],
                ["3", "Guitars", "Lynne Armstrong", "3"],
                ["4", "Guitars", "", ""],
                ["5", "Bass", "", ""],
                ["6", "Keys", "Brian Miller", "4"],
                ["7", "Keys", "Brian Miller", "4"],
                ["8", "Drums", "Dave Schnitter", "5"],
                ["9", "Drums", "Dave Schnitter", "5"],
                ["10", "Drums", "Dave Schnitter", "5"],
                ["11", "Sermon EN", "Rick Warren", ""]];
            const fn = () => createX32Proposal(SERVICE_TYPE, PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, POSITION_SETTINGS, POSITIONS_NOT_FOR_MIXER, NAMES_FOR_NON_PCO_POSITIONS);

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
                    expect(fn()).to.deep.equal(values);
                })
            })
        })
    })
})