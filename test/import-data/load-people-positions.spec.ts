import { loadPeoplePositions } from "../../gappscript-x32-preparation/import-data/load-people-positions";
import { PLAN_ID, TIME_ID, SERVICE_TYPE } from "../CreateProposalForChannels.spec";

const expect = require('chai').expect;

describe("test file load-people-positions", () => {
    describe("test loadPeoplePositions", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = loadPeoplePositions(undefined, PLAN_ID, TIME_ID);
                expect(fn).to.throw("serviceType");
            })
            
            it("should throw an error if no plan id is provided", () => {
                const fn = loadPeoplePositions(SERVICE_TYPE, undefined, TIME_ID);
                expect(fn).to.throw("planId");
            })
            
            it("should throw an error if no time id is provided", () => {
                const fn = loadPeoplePositions(SERVICE_TYPE, PLAN_ID, undefined);
                expect(fn).to.throw("timeId");
            })
        })

        describe("check return values", () => {
            const result = loadPeoplePositions(SERVICE_TYPE, PLAN_ID, TIME_ID);

            it("should return a table with at least one row", () => {
                expect(result()).to.be.an('array').that.is.not.empty;
            })

            it("should return an object with 13 entries", () => {
                expect(result().length).to.equal(13);
            })

            it("should equal to expected values of a table", () => {
                const values = [{
                    declineReason: null,
                    name: "CD Person",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Worship Leader",
                    personId: "36308664",
                }, {
                    declineReason: null,
                    name: "CD Person",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Acoustic Guitar",
                    personId: "36308664",
                
                }, {
                    declineReason: null,
                    name: "JM Drummer",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Drums",
                    personId: "16662151",
                }, {
                    declineReason: null,
                    name: "VH Keys",
                    photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23",
                    status: "C",
                    teamPositionName: "Keys",
                    personId: "39811704",
                }, {
                    declineReason: null,
                    name: "TA Singer",
                    photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/29767105-1505856373/avatar.6.jpg?g=136x136%23",
                    status: "C",
                    teamPositionName: "Vocal Team",
                    personId: "29767105",
                }, {
                    declineReason: null,
                    name: "MB Interpreter",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Interpreter",
                    personId: "33926756",
                }, {
                    declineReason: null,
                    name: "MB Slides",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "ProPresenter Preparation",
                    personId: "33926764",
                
                }, {
                    declineReason: null,
                    name: "MB Slides",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Graphics Operator",
                    personId: "33926764",
                }, {
                    declineReason: null,
                    name: "CK Video",
                    photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/11534642-1444812406/avatar.1.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Sermon Video Preparation",
                    personId: "11534642",
                
                }, {
                    declineReason: null,
                    name: "AY Producer",
                    photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/12996841-1450640184/avatar.1.jpg?g=136x136%23",
                    status: "C",
                    teamPositionName: "Production Lead",
                    personId: "12996841",
                
                }, {
                    declineReason: null,
                    name: "MG Bass",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Bass",
                    personId: "25024004",
                }, {
                    declineReason: null,
                    name: "SP Sings",
                    photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Vocal Team",
                    personId: "40587017",
                }, {
                    declineReason: null,
                    name: "MK Sound",
                    photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/12165087-1447804814/avatar.1.png?g=136x136%23",
                    status: "C",
                    teamPositionName: "Sound Engineer",
                    personId: "12165087",
                }];
                                            
                expect(result()).to.deep.equal(values);
            })
        })
    })
})

