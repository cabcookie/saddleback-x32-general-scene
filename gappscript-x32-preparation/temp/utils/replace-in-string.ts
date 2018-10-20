const replaceInStrings = (original, keyValues) => {
    const str: string = cloneObject(original);
    keyValues.forEach((item) => str.replace(item.key, item.value));
    return str;
};
