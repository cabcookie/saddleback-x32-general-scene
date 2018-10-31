import { createX32Proposal } from "../../gappscript-x32-preparation/x32/create-x32-proposal";
import { PLAN_ID, TIME_ID, CHANNELS_OF_THE_MIXER, SERVICE_TYPE, POSITIONS_NOT_FOR_MIXER, POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS } from "../CreateProposalForChannels.spec";
import { cloneObject } from "../../gappscript-x32-preparation/utils/fp-library";

const expect = require('chai').expect;

describe("test file create-x32-proposal", () => {
    describe("test createX32Proposal", () => {
        describe("check exceptions and results", () => {
            const newPositionsNotForMixer: string[][] = cloneObject(POSITIONS_NOT_FOR_MIXER);
            const newChannelsOfTheMixer = cloneObject(CHANNELS_OF_THE_MIXER);
            const values = [
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
            const fn = () => createX32Proposal(SERVICE_TYPE, PLAN_ID, TIME_ID, newChannelsOfTheMixer, POSITION_SETTINGS, newPositionsNotForMixer, NAMES_FOR_NON_PCO_POSITIONS);

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
                    expect(fn()).to.deep.equal(values);
                })
            })
        })
    })
})