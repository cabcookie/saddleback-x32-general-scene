import { TEST_PCO_PLANS } from "../import-data/results/pco-data-plans";
import { TEST_PCO_TIME1 } from "../import-data/results/pco-data-times";
import { mapPlans, mapPlanTimes, mapPeople } from "../../gappscript-x32-preparation/mapping/map-pco-data-to-object";
import { SERVICE_TYPE } from "../CreateProposalForChannels.spec";
import { TEST_PCO_PEOPLE_POSITIONS } from "../import-data/results/pco-people-positions";

const expect = require('chai').expect;

describe("test file map-pco-data-to-object", () => {
    describe("test mapPlans", () => {
        const plans = JSON.parse(JSON.stringify(TEST_PCO_PLANS));
        const fn = () => mapPlans(SERVICE_TYPE)(plans);

        it("should result in an array of objects with 2 items", () => {
            expect(fn().length).to.equal(2);
        })

        it("should map the PCO data to the correct new object", () => {
            const mapped = [
                { planId: "38402157", date: "Oct 28", times: [{ id: "92596418", time: "10:00 am" }, { id: "92596476", time: "12:00 pm" }] },
                { planId: "38579002", date: "Nov 4", times: [{ id: "93006671", time: "11:00 am" }, { id: "93006673", time: "01:00 pm" }] },
            ];
            expect(fn()).to.deep.equal(mapped);
        })
    })

    describe("test mapPlanTimes", () => {
        const time = JSON.parse(JSON.stringify(TEST_PCO_TIME1));
        const fn = () => mapPlanTimes(time);

        it("should result in an array with 2 items", () => {
            expect(fn().length).to.equal(2);
        })

        it("should map the PCO data to the correct new object", () => {
            const mapped = [
                { id: "92596418", time: "10:00 am" },
                { id: "92596476", time: "12:00 pm" },
            ];
            expect(fn()).to.deep.equal(mapped);
        })
    })

    describe("test mapPeople", () => {
        const timeId = 92596418;
        const data = JSON.parse(JSON.stringify(TEST_PCO_PEOPLE_POSITIONS));
        const fn = () => mapPeople(timeId)(data);
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

        it("should result in an array with 16 items", () => {
            expect(fn().length).to.equal(13);
        })

        it("should create an array of objects of people positions", () => {
            expect(fn()).to.deep.equal(values);
        })
    })
})
