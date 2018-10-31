const mapArrayToOneDimArray = (rows: any[]): any[] => {
    const result = [];
    rows.forEach((row) => {
        if (row instanceof Array) {
            if (row.length > 1) {
                if (rows.length > 1) {
                    // tslint:disable-next-line:max-line-length
                    // it("if it's an array with more than one row and more than one column it should throw an exception", () => {
                    //     const input = [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]];
                    //     const fn = () => mapArrayToOneDimArray(input);
                    throw new Error(
                        "Input should be an array with not more than one column or row but has "
                        + rows.length + " rows and "
                        + row.length + " columns.");
                }
                // tslint:disable-next-line:max-line-length
                // it("2 dimensional array with one row and several columns should be transformed into 1 dimensional array", () => {
                //     const input = [[1, 2, 3, 4, 5, 6, 7, 8]];
                //     const expected = [1, 2, 3, 4, 5, 6, 7, 8];
                row.forEach((col) => result.push(col));
            } else {
                // tslint:disable-next-line:max-line-length
                // it("2 dimensional array with one column and several rows should be transformed into 1 dimensional array", () => {
                //     const input = [[1], [2], [3], [4], [5], [6], [7], [8]];
                //     const expected = [1, 2, 3, 4, 5, 6, 7, 8];
                result.push(row[0]);
            }
        } else {
            result.push(row);
        }
    });
    return result;
};

const mapColumnsToRows = (arr: any[]): any[][] => {
    const result = [];
    try {
        arr.forEach((row, line) => row.forEach((col, index) => {
            if (line === 0) {
                result[index] = [col];
            } else {
                result[index].push(col);
            }
        }));
    } catch (error) {
        throw new Error("Array is not two dimensional: " + JSON.stringify(arr));
    }
    return result;
};

export {
    mapArrayToOneDimArray,
    mapColumnsToRows,
};
