import { loadPcoPlans } from "../../gappscript-x32-preparation/pco-data/load-pco-plans";
import { SERVICE_TYPE } from "../CreateProposalForChannels.spec";

const expect = require('chai').expect;

describe("test file load-pco-plans", () => {
    describe("test loadPcoPlans", () => {
        describe("all parameters should be provided correctly", () => {
            it("should throw an error if no service type is provided", () => {
                const fn = () => loadPcoPlans(undefined, 50);
                expect(fn).to.throw("serviceType");
            })
            
            it("should throw an error if no number of lines is provided", () => {
                const fn = () => loadPcoPlans(SERVICE_TYPE, undefined);
                expect(fn).to.throw("lines");
            })
        })

        describe("check return values", () => {
            const result = loadPcoPlans(SERVICE_TYPE, 2);

            it("should return a table with at least one row", () => {
                expect(result).to.be.an('array').that.is.not.empty;
            })

            it("should return a table that has exactly three columns", () => {
                expect(result[0].length).to.equal(3);
            })

            it("should equal to expected values of a table", () => {
                const values = [
                    ["Date / Time", "Plan ID", "Time ID"],
                    ["Oct 28 10:00 am", "38402157", "92596418"],
                    ["Oct 28 12:00 pm", "38402157", "92596476"],
                    ["Nov 4 11:00 am", "38579002", "93006671"],
                    ["Nov 4 01:00 pm", "38579002", "93006673"]];

                expect(result).to.deep.equal(values);
            })
        })
    })
})
