import { replace, toString, endsWith, flow, formatDate, formatTime } from "../../gappscript-x32-preparation/utils/fp-library";

const expect = require('chai').expect;

describe("test file fp-library", () => {
    describe("test replace", () => {
        it("should replace text and numbers succesfully", () => {
            const str = "This text is to replace something with 1 number";
            const kv = [{
                orgVal: 1,
                newVal: 5
            }, {
                orgVal: "number",
                newVal: "numbers"
            }, {
                orgVal: "text",
                newVal: "number"
            }];
            const newStr = "This number is to replace something with 5 numbers";
            const result = replace(kv)(str);
            expect(result).to.equal(newStr);
        })
    })

    describe("test toString", () => {
        it("should transform a number into a string", () => {
            expect(toString(5)).to.equal("5");
        })
        it("should transform a string into a string", () => {
            expect(toString("5")).to.equal("5");
        })
        it("should call an object's toString function to create a string", () => {
            const obj = { toString: () => "should work" };
            expect(toString(obj)).to.equal("should work");
        })
        it("should transform an object to a JSON if it has no toString", () => {
            const obj = { a: "1", b: "2" };
            expect(toString(obj)).to.equal('{"a":"1","b":"2"}');
        })
    })

    describe("test endsWith", () => {
        it("should be true if text ends with the search text", () => {
            expect(endsWith("ends with FUN", "FUN")).to.equal(true);
        })

        it("should be false when search text isn't included in the text", () => {
            expect(endsWith("ends with FUN", "NOFUN")).to.equal(false);
        })

        it("should be false when the search text is in the text but not at the end", () => {
            expect(endsWith("FUN is at start", "FUN")).to.equal(false);
        })
    })

    describe("test flow", () => {
        const minus = (v2: number) => (v1: number): number => v1 - v2;

        it("3 - 2 - 1 should be 0", () => {
            const pipe = flow(
                minus(2),
                minus(1)
            );
            expect(pipe(3)).to.equal(0);
        })

        it("5 - 1 - 3 should be 1", () => {
            const pipe = flow(
                minus(1),
                minus(3)
            );
            expect(pipe(5)).to.equal(1);
        })
    })

    describe("test formatDate", () => {
        it("should convert a string into the correct timezone", () => {
            expect(formatDate("2018-10-28T17:00:00Z")).to.equal("Oct 28");
        })

        it("should convert a date into the correct timezone", () => {
            expect(formatDate(new Date("2018-10-28T17:00:00Z"))).to.equal("Oct 28");
        })
    })

    describe("test formatTime", () => {
        describe("should create the right time strings", () => {
            it("should convert a string (17:00:00Z) to 10:00 am", () => {
                expect(formatTime("2018-10-28T17:00:00Z")).to.deep.equal("10:00 am");
            })
            
            it("should convert a date (17:00:00Z) to 10:00 am", () => {
                expect(formatTime(new Date("2018-10-28T17:00:00Z"))).to.deep.equal("10:00 am");
            })
            
            it("should convert a string (15:00:00Z) to 08:00 am", () => {
                expect(formatTime("2018-10-28T15:00:00Z")).to.deep.equal("08:00 am");
            })
            
            it("should convert a date (15:00:00Z) to 08:00 am", () => {
                expect(formatTime(new Date("2018-10-28T15:00:00Z"))).to.deep.equal("08:00 am");
            })
            
            it("should convert a string (03:00:00Z) to 08:00 pm", () => {
                expect(formatTime("2018-10-28T03:00:00Z")).to.deep.equal("08:00 pm");
            })
            
            it("should convert a date (03:00:00Z) to 08:00 pm", () => {
                expect(formatTime(new Date("2018-10-28T03:00:00Z"))).to.deep.equal("08:00 pm");
            })
            
            it("should convert a string (05:00:00Z) to 10:00 pm", () => {
                expect(formatTime("2018-10-28T05:00:00Z")).to.deep.equal("10:00 pm");
            })
            
            it("should convert a date (05:00:00Z) to 10:00 pm", () => {
                expect(formatTime(new Date("2018-10-28T05:00:00Z"))).to.deep.equal("10:00 pm");
            })          

            it("should convert a string (19:00:00Z) to 12:00 pm", () => {
                expect(formatTime("2018-10-28T19:00:00Z")).to.deep.equal("12:00 pm");
            })
            
            it("should convert a date (19:00:00Z) to 12:00 pm", () => {
                expect(formatTime(new Date("2018-10-28T19:00:00Z"))).to.deep.equal("12:00 pm");
            })          
        })
    })
})