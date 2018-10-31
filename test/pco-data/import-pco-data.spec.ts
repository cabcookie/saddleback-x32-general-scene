import { encodeSecret, createHeader, fetchData, parseData } from "../../gappscript-x32-preparation/pco-data/import-pco-data";
import { TEST_URL_PLANS } from "../../gappscript-x32-preparation/utils/mock-functions";
import { TEST_PCO_PLANS } from "./results/pco-data-plans";

const expect = require('chai').expect;

describe("test file import-pco-data", () => {
    const url = TEST_URL_PLANS;
    const secret = "secret";
    const input = { encodedSecret: secret, url };
    const header = {
        header: { headers: { Authorization: "Basic " + input.encodedSecret } },
        url: input.url
    };

    describe("test encodeSecret", () => {
        const result = encodeSecret(url);
        it("should return object with attribute encodedSecret", () => {
            expect(result).to.have.property("encodedSecret");
        })

        it("should return object with url as given", () => {
            expect(result).to.include({url: url});
        })
    })

    describe("test createHeader", () => {
        it("should return header information as expected", () => {
            expect(createHeader(input)).to.deep.equal(header);
        })
    })

    describe("test fetchData and parseData", () => {
        it("should fetch data as expected", () => {
            const result = parseData(fetchData(header));
            expect(result).to.deep.equal(TEST_PCO_PLANS);
        })
    })
})
