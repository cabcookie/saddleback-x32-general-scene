import { replace, toString, endsWith, flow, formatDate, formatTime, filter, filterById, cloneObject, pureUnshift, pureShift, purePop, purePush, pureSplice, pureSpliceOne, substring } from "../../gappscript-x32-preparation/utils/fp-library";

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

    describe("test substring", () => {
        const longStr = "This is a very long string with a lot of characters which should be reduced";
        const result  = "This is a very long ";
        const shortStr = "This";

        it("should only show 20 characters of a string", () => {
            expect(substring(0, 20)(longStr)).to.equal(result);
        })
        it("although I want to see 20 characters it shows only four when the string is shorter", () => {
            expect(substring(0, 20)(shortStr)).to.equal(shortStr);
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

    describe("test filter", () => {
        const data = ["filter", "away", "orange", "filter"];
        const fn = (item) => item === "filter";
        const result = ["filter", "filter"];
        it("should filter arrays to 2 items", () => {
            expect(filter(fn, data).length).to.equal(2);
        })
        it("should filter arrays to correct values", () => {
            expect(filter(fn, data)).to.deep.equal(result);
        })
    })

    describe("test filterById", () => {
        const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        const result = [{ id: 1 }];
        it("should filter array to 1 item", () => {
            expect(filterById(1, data).length).to.equal(1);
        })
        it("should filter arrays to correct values", () => {
            expect(filterById(1, data)).to.deep.equal(result);
        })

        const complexData = [{
            id: 522953880,
            attributes: { name: "CD Person" },
            relationships: {
                times: {
                    data:[
                        { id: 92596413 },
                        { id: 92596414 },
                        { id: 92596418 },
                        { id: 92596476 },
                        { id: 92596417 }
                    ]
                }
            },
        }, {
            id: 522953885,
            attributes: { name: "CD Person" },
            relationships: {
                times: {
                    data:[
                        { id: 92596414 },
                        { id: 92596418 },
                        { id: 92596476 },
                        { id: 92596417 }
                    ]
                }
            },
        }];

        const timeId = 92596413;

        const complexResult = [{
            id: 522953880,
            attributes: { name: "CD Person" },
            relationships: {
                times: {
                    data:[
                        { id: 92596413 },
                    ]
                }
            },
        }];

        const fn = () => complexData.filter((item) => (item.relationships.times.data = filterById(timeId, item.relationships.times.data)).length > 0);

        it("should filter a complex object to just one filtered item", () => {
            expect(fn().length).to.equal(1);
        })
        it("should filter a complex object to the correct values", () => {
            expect(fn()).to.deep.equal(complexResult);
        })
    })

    describe("test cloneObject", () => {
        const obj = { a: 1, b: 2 };
        it("cloned object should have the same content", () => {
            expect(cloneObject(obj)).to.deep.equal(obj);
        })
        it("but should not be the same as the original", () => {
            expect(cloneObject(obj)).to.not.equal(obj);
        })
    })

    describe("test pureUnshift", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        it("the original array has six entries", () => {
            expect(arr.length).to.equal(6);
        })
        it("should return an array with one additional element at the front", () => {
            const result = pureUnshift(arr, 2);
            const newArr = [2, 8, 6, 4, 2, 5, 7];
            expect(result).to.deep.equal(newArr);
        })
        it("but the original array should not be changed", () => {
            pureUnshift(arr, 2);
            expect(arr.length).to.equal(6);
        })
    })

    describe("test pureShift", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        const arrCopy = cloneObject(arr);
        const result = [6, 4, 2, 5, 7];
        const newArr = pureShift(arr);
        it("the original array shouldn't have changed", () => {
            expect(arr).to.deep.equal(arrCopy);
        })
        it("should have changed the array by deleting the first element", () => {
            expect(newArr).to.deep.equal(result);
        })
    })

    describe("test purePop", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        const arrCopy = cloneObject(arr);
        const result = [8, 6, 4, 2, 5];
        const newArr = purePop(arr);
        it("the original array shouldn't have changed", () => {
            expect(arr).to.deep.equal(arrCopy);
        })
        it("should have changed the array by deleting the last element", () => {
            expect(newArr).to.deep.equal(result);
        })
    })

    describe("test purePush", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        const arrCopy = cloneObject(arr);
        const element = 12;
        const result = [8, 6, 4, 2, 5, 7, 12];
        const newArr = purePush(arr, element);
        it("the original array shouldn't have changed", () => {
            expect(arr).to.deep.equal(arrCopy);
        })
        it("should have changed the array by adding an element", () => {
            expect(newArr).to.deep.equal(result);
        })
    })

    describe("test pureSplice", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        const arrCopy = cloneObject(arr);
        const result = [8, 6, 4, 7];
        const position = 3;
        const count = 2;
        const newArr = pureSplice(arr, position, count);
        it("the original array shouldn't have changed", () => {
            expect(arr).to.deep.equal(arrCopy);
        })
        it("should have changed the array by deleting specific elements", () => {
            expect(newArr).to.deep.equal(result);
        })
    })

    describe("test pureSpliceOne", () => {
        const arr = [8, 6, 4, 2, 5, 7];
        const arrCopy = cloneObject(arr);
        const result = [8, 6, 2, 5, 7];
        const position = 2;
        const newArr = pureSpliceOne(arr, position);
        it("the original array shouldn't have changed", () => {
            expect(arr).to.deep.equal(arrCopy);
        })
        it("should have changed the array by deleting a specific element", () => {
            expect(newArr).to.deep.equal(result);
        })
    })
})
