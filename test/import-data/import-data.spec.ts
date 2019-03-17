import { fetchData } from "../../gappscript-x32-preparation/import-data/import-data";
import { TEST_URL_FETCH, TEST_FETCH_RESULT } from "../../gappscript-x32-preparation/utils/mock-functions";

const expect = require('chai').expect;

describe("test file import-pco-data", () => {
    const url = TEST_URL_FETCH;
    const secret = "secret";
    const input = { encodedSecret: secret, url };
    const header = {
        header: { headers: { Authorization: "Basic " + input.encodedSecret } },
        url: input.url
    };

    describe("test fetchData", () => {
        it("should fetch data as expected", () => {
            const result = fetchData(header);
            expect(result).to.equal(TEST_FETCH_RESULT);
        })
    })
})
