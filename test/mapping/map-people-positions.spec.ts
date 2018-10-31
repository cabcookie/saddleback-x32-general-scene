import { IPeoplePosition } from "../../gappscript-x32-preparation/utils/interfaces";
import { mapPeoplePositions } from "../../gappscript-x32-preparation/mapping/map-people-positions";
import { mapArrayToOneDimArray } from "../../gappscript-x32-preparation/mapping/map-arrays";
import { POSITIONS_NOT_FOR_MIXER, POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS } from "../CreateProposalForChannels.spec";

const expect = require('chai').expect;

const people: IPeoplePosition[] = [{
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

const result: IPeoplePosition[] = [{
        name: "CD Person",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        channelName: "CD Person",
        positionType: "Leader",
        presetFileName: "Vocals CD Person 36308664",
        teamPositionName: "Worship Leader",
        folderGithub: "Vocals",
        noPcoScheduling: false,
        personId: "36308664",
    }, {
        name: "CD Person",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        channelName: "Acc CD Perso",
        positionType: "Guitars",
        presetFileName: "Acoustic CD Person 36308664",
        teamPositionName: "Acoustic Guitar",
        folderGithub: "Instruments",
        noPcoScheduling: false,
        personId: "36308664",
    }, {
        name: "JM Drummer",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        positionType: "Drums",
        channelName: "Kick",
        presetFileName: "Drums Kick",
        teamPositionName: "Drums",
        folderGithub: "Drums and Percussion",
        noPcoScheduling: false,
        personId: "16662151",
    }, {
        name: "JM Drummer",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        positionType: "Drums",
        channelName: "Snare",
        presetFileName: "Drums Snare",
        teamPositionName: "Drums",
        folderGithub: "Drums and Percussion",
        noPcoScheduling: false,
        personId: "16662151",
    }, {
        name: "JM Drummer",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        positionType: "Drums",
        channelName: "Overhead",
        presetFileName: "Drums Overhead",
        teamPositionName: "Drums",
        folderGithub: "Drums and Percussion",
        noPcoScheduling: false,
        personId: "16662151",
    }, {
        name: "VH Keys",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23",
        channelName: "Keys L",
        positionType: "Keys",
        presetFileName: "Keys",
        teamPositionName: "Keys",
        folderGithub: "Instruments",
        noPcoScheduling: false,
        personId: "39811704",
    }, {
        name: "VH Keys",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/39811704-1532821102/avatar.1.jpg?g=136x136%23",
        channelName: "Keys R",
        positionType: "Keys",
        presetFileName: "Keys",
        teamPositionName: "Keys",
        folderGithub: "Instruments",
        noPcoScheduling: false,
        personId: "39811704",
    }, {
        name: "TA Singer",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://avatars.planningcenteronline.com/uploads/person/29767105-1505856373/avatar.6.jpg?g=136x136%23",
        channelName: "TA Singer",
        positionType: "Vocals",
        presetFileName: "Vocals TA Singer 29767105",
        teamPositionName: "Vocal Team",
        folderGithub: "Vocals",
        noPcoScheduling: false,
        personId: "29767105",
    }, {
        name: "MG Bass",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        channelName: "Bass MG Bass",
        positionType: "Bass",
        presetFileName: "Bass MG Bass 25024004",
        teamPositionName: "Bass",
        folderGithub: "Instruments",
        noPcoScheduling: false,
        personId: "25024004",
    }, {
        name: "SP Sings",
        declineReason: null,
        status: "C",
        photoThumbnail: "https://people.planningcenteronline.com/static/no_photo_thumbnail_gray.png?g=136x136%23",
        channelName: "SP Sings",
        positionType: "Vocals",
        presetFileName: "Vocals SP Sings 40587017",
        teamPositionName: "Vocal Team",
        folderGithub: "Vocals",
        noPcoScheduling: false,
        personId: "40587017",
    }, {
        name: "Rick Warren",
        declineReason: null,
        status: "C",
        photoThumbnail: "",
        channelName: "Serm Rick Wa",
        positionType: "Sermon EN",
        presetFileName: "Sermon Rick Warren",
        teamPositionName: "Sermon EN",
        folderGithub: "Others",
        noPcoScheduling: true,
        personId: "",
    }];

describe("test file map-people-positions", () => {
    describe("test mapPeoplePositions", () => {
        const posNotForMixer: string[] = mapArrayToOneDimArray(POSITIONS_NOT_FOR_MIXER);

        describe("check exceptions", () => {
            const fn = () => mapPeoplePositions(POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS, posNotForMixer)(people);
            ["Interpreter", "ProPresenter Preparation", "Sermon Video Preparation"].forEach((pos) =>
                it("should throw " + pos, () => {
                    expect(fn).to.throw(pos);
                    posNotForMixer.push(pos);
                })
            );
        })

        describe("check return values", () => {
            it("should result in an array with the correct length", () => {
                const fn = mapPeoplePositions(POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS, posNotForMixer);
                expect(fn(people).length).to.equal(result.length);
            })
            it("should create the expected array of objects", () => {
                const fn = mapPeoplePositions(POSITION_SETTINGS, NAMES_FOR_NON_PCO_POSITIONS, posNotForMixer);
                expect(fn(people)).to.deep.equal(result);
            })    
        })
    })
})
