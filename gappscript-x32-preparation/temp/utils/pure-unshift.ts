const pureUnshift = (arr, elem) => {
    const newArr = cloneObject(arr);
    newArr.unshift(elem);
    return newArr;
};
