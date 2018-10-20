import { loadPCOPlans } from "../../gappscript-x32-preparation/main/load-pco-plans";

const expect = require('chai').expect;
const SERVICE_TYPE = 309883;

describe("test file load-pco-plans", () => {
    describe("test loadPCOPlans", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => loadPCOPlans(undefined, 50);
                expect(fn).to.throw("serviceType");
            })
            
            it("should throw an error if no number of lines is provided", () => {
                const fn = () => loadPCOPlans(SERVICE_TYPE, undefined);
                expect(fn).to.throw("lines");
            })
        })

        describe("check return values", () => {
            const result = loadPCOPlans(SERVICE_TYPE, 2);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly three columns", () => {
                expect(result[0].length).to.equal(3);
            })

            it("should equal to expected values of a table", () => {
                const values = [
                    ["10/21/2018", "38402156", "92596410"],
                    ["10/21/2018", "38402156", "92596475"],
                    ["10/28/2018", "38402157", "92596418"],
                    ["10/28/2018", "38402157", "92596476"],
                    ["11/4/2018", "38579002", "93006671"],
                    ["11/4/2018", "38579002", "93006673"]];
                expect(result).to.deep.equal(values);
            })
        })
    })
})
