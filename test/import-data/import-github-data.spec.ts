import { createGithubHeader, parseGithubData } from "../../gappscript-x32-preparation/import-data/import-github-data";
import { URL_GENERAL_SCENE_FILE } from "../../gappscript-x32-preparation/utils/mock-functions";
import { fetchData } from "../../gappscript-x32-preparation/import-data/import-data";
import { GITHUB_GENERAL_SCENE } from "./results/github-general-scene";

const expect = require('chai').expect;

describe("test file import-github-data", () => {
    describe("test createGithubHeader", () => {
        const testUrl = "http://test.url";

        it("should return header information as expected", () => {
            expect(createGithubHeader(testUrl).url).to.equal(testUrl);
        })
    })

    describe("test fetchData and parseGithubData", () => {
        const testUrl = URL_GENERAL_SCENE_FILE;
        const header = createGithubHeader(testUrl);

        it("should fetch data as expected", () => {
            const result = parseGithubData(fetchData(header));
            expect(result).to.deep.equal(GITHUB_GENERAL_SCENE);
        })
    })
})
