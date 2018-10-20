function loadPCOPlans(serviceType: number, lines: number): string[][] {
    if (!(serviceType && serviceType > 0)) { throw new Error("serviceType is not defined"); }
    if (!(lines && lines > 0)) { throw new Error("lines are not defined"); }

    return [
        ["10/21/2018", "38402156", "92596410"],
        ["10/21/2018", "38402156", "92596475"],
        ["10/28/2018", "38402157", "92596418"],
        ["10/28/2018", "38402157", "92596476"],
        ["11/4/2018", "38579002", "93006671"],
        ["11/4/2018", "38579002", "93006673"]];
}

export { loadPCOPlans };
