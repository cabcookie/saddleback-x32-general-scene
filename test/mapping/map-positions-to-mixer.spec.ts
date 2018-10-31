import { mapPositionsToMixer } from "../../gappscript-x32-preparation/mapping/map-positions-to-mixer";
import { IPeoplePosition, IMixerChannel } from "../../gappscript-x32-preparation/utils/interfaces";
import { mapArrayToOneDimArray } from "../../gappscript-x32-preparation/mapping/map-arrays";
import { CHANNELS_OF_THE_MIXER } from "../CreateProposalForChannels.spec";
const expect = require('chai').expect;

const input: IPeoplePosition[] = [{
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

describe("test file map-positions-to-mixer", () => {
    describe("test mapPositionsToMixer", () => {
        const channelsOfTheMixer = mapArrayToOneDimArray(CHANNELS_OF_THE_MIXER);
        it("should throw an expections missing the Leader", () => {
            const fn = () => mapPositionsToMixer(channelsOfTheMixer)(input);
            expect(fn).to.throw("Leader");
            channelsOfTheMixer.push("Leader");
        })
        it("should return the expected object", () => {
            const fn = mapPositionsToMixer(channelsOfTheMixer);
            expect(fn(input)).to.deep.equal(expected);
        })
    })
})