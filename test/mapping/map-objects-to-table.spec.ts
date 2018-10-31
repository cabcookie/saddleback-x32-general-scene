import { plansToTable, mixerPositionsToTable } from "../../gappscript-x32-preparation/mapping/map-objects-to-table";
import { IPlan, IMixerChannel } from "../../gappscript-x32-preparation/utils/interfaces";

const expect = require('chai').expect;

describe("test file map-objects-to-table", () => {
    describe("test plansToTable", () => {
        const plans: IPlan[] = [
            { planId: 38402157, date: "Oct 28", times: [{ id: 92596418, time: "10:00 am" }, { id: 92596476, time: "12:00 pm" }] },
            { planId: 38579002, date: "Nov 4", times: [{ id: 93006671, time: "11:00 am" }, { id: 93006673, time: "01:00 pm" }] },
        ];
        const fn = () => plansToTable(plans);

        it("should result in an array of objects with 5 items", () => {
            expect(fn().length).to.equal(5);
        })

        it("should map the PCO data to the correct new object", () => {
            const mapped = [
                ["Date / Time", "Plan ID", "Time ID"],
                ["Oct 28 10:00 am", "38402157", "92596418"],
                ["Oct 28 12:00 pm", "38402157", "92596476"],
                ["Nov 4 11:00 am", "38579002", "93006671"],
                ["Nov 4 01:00 pm", "38579002", "93006673"],
            ];
            expect(fn()).to.deep.equal(mapped);
        })        
    })

    describe("test mixerPositionsToTable", () => {
        const input: IMixerChannel[] = [{
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
        
        it("should return a table with the correct data", () => {
            expect(mixerPositionsToTable(input)).to.deep.equal(expected);
        })
    })
})
