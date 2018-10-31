import { mapArrayToOneDimArray, mapColumnsToRows } from "../../gappscript-x32-preparation/mapping/map-arrays";

const expect = require('chai').expect;

describe("test file map-arrays", () => {
    describe("test mapArrayToOneDimArray", () => {
        it("2 dimensional array with one column and several rows should be transformed into 1 dimensional array", () => {
            const input = [[1], [2], [3], [4], [5], [6], [7], [8]];
            const expected = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(mapArrayToOneDimArray(input)).to.deep.equal(expected);
        })
        it("A one dimensional array should just be returned as is", () => {
            const input = [1, 2, 3, 4, 5, 6, 7, 8];
            const expected = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(mapArrayToOneDimArray(input)).to.deep.equal(expected);
        })
        it("2 dimensional array with one row and several columns should be transformed into 1 dimensional array", () => {
            const input = [[1, 2, 3, 4, 5, 6, 7, 8]];
            const expected = [1, 2, 3, 4, 5, 6, 7, 8];
            expect(mapArrayToOneDimArray(input)).to.deep.equal(expected);
        })
        it("if it's an array with more than one row and more than one column it should throw an exception", () => {
            const input = [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]];
            const fn = () => mapArrayToOneDimArray(input);
            expect(fn).to.throw("more than one column or row");
        })
    })

    describe("test mapColumnsToRows", () => {
        it("should throw an exception if it is not a two dimensional array", () => {
            const input = [1, 2, 3, 4, 5, 6];
            const fn = () => mapColumnsToRows(input);
            expect(fn).to.throw("not two dimensional");
        })
        it("should swap columns and rows of a two dimensional array", () => {
            const input = [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]];
            const expected = [
                [1, 2, 3, 4, 5, 6, 7, 8],
                [5, 5, 5, 5, 5, 5, 5, 5]];
            expect(mapColumnsToRows(input)).to.deep.equal(expected);
        })
    })
})