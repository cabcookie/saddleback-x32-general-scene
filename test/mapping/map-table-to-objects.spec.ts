import { posSettingsTableToObject } from "../../gappscript-x32-preparation/mapping/map-table-to-objects";
import { POSITION_SETTINGS_KEYS } from "../../gappscript-x32-preparation/utils/constants";
import { IPositionSettings } from "../../gappscript-x32-preparation/utils/interfaces";
import { cloneObject, pureSpliceOne } from "../../gappscript-x32-preparation/utils/fp-library";

const expect = require('chai').expect;

describe("test file map-table-to-objects", () => {
    describe("test posSettingsTableToObject", () => {
        const positionSettings: string[][] = [
            ["pcoPosition", "channels", "isPeopleSpecific", "toLoadPrefsForChannels", "noPcoScheduling", "prefixChannelNaming", "prefixFileNaming", "folderGitHub", "positionType"],
            ["Vocal Team", "", "yes", "", "no", "", "Vocals", "Vocals", "Vocals"],
            ["Keys", "L, R", "no", "", "no", "Keys", "Keys", "Instruments", "Keys"],
            ["Drums", "Kick, Snare, Overhead", "no", "yes", "no", "", "Drums", "Drums and Percussion", "Drums"],
            ["Worship Leader", "", "yes", "", "no", "", "Vocals", "Vocals", "Leader"],
            ["Acoustic Guitar", "", "yes", "", "no", "Acc", "Acoustic", "Instruments", "Guitars"],
            ["Bass", "", "yes", "", "no", "Bass", "Bass", "Instruments", "Bass"],
            ["Sermon EN", "", "yes", "", "yes", "Serm", "Sermon", "Others", "Sermon EN"]
        ];
        const result: IPositionSettings[] = [{
                pcoPosition: "Vocal Team",
                channels: "",
                isPeopleSpecific: "yes",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "no",
                prefixChannelNaming: "",
                prefixFileNaming: "Vocals",
                folderGitHub: "Vocals",
                positionType: "Vocals"
            }, {
                pcoPosition: "Keys",
                channels: "L, R",
                isPeopleSpecific: "no",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "no",
                prefixChannelNaming: "Keys",
                prefixFileNaming: "Keys",
                folderGitHub: "Instruments",
                positionType: "Keys"
            }, {
                pcoPosition: "Drums",
                channels: "Kick, Snare, Overhead",
                isPeopleSpecific: "no",
                toLoadPrefsForChannels: "yes",
                noPcoScheduling: "no",
                prefixChannelNaming: "",
                prefixFileNaming: "Drums",
                folderGitHub: "Drums and Percussion",
                positionType: "Drums"
            }, {
                pcoPosition: "Worship Leader",
                channels: "",
                isPeopleSpecific: "yes",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "no",
                prefixChannelNaming: "",
                prefixFileNaming: "Vocals",
                folderGitHub: "Vocals",
                positionType: "Leader"
            }, {
                pcoPosition: "Acoustic Guitar",
                channels: "",
                isPeopleSpecific: "yes",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "no",
                prefixChannelNaming: "Acc",
                prefixFileNaming: "Acoustic",
                folderGitHub: "Instruments",
                positionType: "Guitars"
            }, {
                pcoPosition: "Bass",
                channels: "",
                isPeopleSpecific: "yes",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "no",
                prefixChannelNaming: "Bass",
                prefixFileNaming: "Bass",
                folderGitHub: "Instruments",
                positionType: "Bass"
            }, {
                pcoPosition: "Sermon EN",
                channels: "",
                isPeopleSpecific: "yes",
                toLoadPrefsForChannels: "",
                noPcoScheduling: "yes",
                prefixChannelNaming: "Serm",
                prefixFileNaming: "Sermon",
                folderGitHub: "Others",
                positionType: "Sermon EN"
            }];

        describe("check exception handling", () => {
            const keys: string[] = POSITION_SETTINGS_KEYS;
            const smallList: string[][] = [];
            smallList.push(keys);
            smallList.push(keys.map((item) => "value for " + item));
            const line = {};
            keys.forEach((item) => line[item] = "value for " + item);
            const smallResult = [line];

            keys.forEach((item, index) =>
                it("should raise exception for " + item + " is missing", () => {
                    let cpList: string[][] = cloneObject(smallList);
                    cpList = cpList.map((item) => pureSpliceOne(item, index));
                    const fn = () => posSettingsTableToObject(cpList);
                    expect(fn).to.throw(item);
                })
            )
        })

        describe("check value mapping", () => {
            it("should result in an array of the correct length", () => {
                expect(posSettingsTableToObject(positionSettings).length).to.equal(result.length);
            })
            it("should result in an array with the correct values", () => {
                expect(posSettingsTableToObject(positionSettings)).to.deep.equal(result);
            })
        })
    })
})