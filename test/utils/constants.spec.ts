import { SERVICE_TYPE, LINES, PLAN_ID, URL_PLANS, URL_PLAN_TIMES, URL_PEOPLE_POSITIONS }
    from "../../gappscript-x32-preparation/utils/constants";

const expect = require('chai').expect;

describe("test file constants", () => {
    it("constant SERVICE_TYPE should exist", () => { expect(SERVICE_TYPE).to.be.a('string'); })
    it("constant LINES should exist", () => { expect(LINES).to.be.a('string'); })
    it("constant PLAN_ID should exist", () => { expect(PLAN_ID).to.be.a('string'); })
    it("constant URL_PLANS should exist", () => { expect(URL_PLANS).to.be.a('string'); })
    it("constant URL_PLAN_TIMES should exist", () => { expect(URL_PLAN_TIMES).to.be.a('string'); })
    it("constant URL_PEOPLE_POSITIONS should exist", () => { expect(URL_PEOPLE_POSITIONS).to.be.a('string'); })
})
