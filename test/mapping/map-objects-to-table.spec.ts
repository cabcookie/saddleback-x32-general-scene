import { plansToTable } from "../../gappscript-x32-preparation/mapping/map-objects-to-table";
import { IPlan } from "../../gappscript-x32-preparation/utils/interfaces";

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
})
