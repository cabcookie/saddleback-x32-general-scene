import { IKeyValuePair } from "./interfaces";

const replace = (keyvalues: IKeyValuePair[]) => (str: string): string =>
    keyvalues.reduce((prev, curr) => prev.replace(toString(curr.orgVal), toString(curr.newVal)), str);

const toString = (value: any): string =>
    typeof value === "string" ?
    value :
    (typeof value.toString === "function" ?
        (value.toString() === "[object Object]" ?
            JSON.stringify(value) :
            value.toString()) :
        JSON.stringify(value));

const endsWith = (str: string, end: string): boolean =>
    str.indexOf(end, str.length - end.length) > 0;

const flow = (...fns) => fns.reduce((result, fn) => (...args) => fn(result(...args)));

const setLocaleDate = (date: string | Date): Date => {
    const d: Date = typeof date === "string" ? new Date(date) : date;
    const offs: number = d.getTimezoneOffset() / 60;
    d.setHours(d.getHours() + offs - 7);
    return d;
};

const formatDate = (date: string | Date): string => {
    const d = setLocaleDate(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const mmm = months[d.getMonth()];
    const dd = d.getDate();
    return mmm + " " + (dd < 10 ? "0" : "") + dd;
};

const formatTime = (date: string | Date): string => {
    const d = setLocaleDate(date);
    let hh = d.getHours();
    const ampm = hh > 11 ? "pm" : "am";
    hh -= hh > 12 ? 12 : 0;
    const mm = d.getMinutes();
    return (hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm + " " + ampm;
};

const filter = (fn: (item: any) => boolean, arr: any[]): any[] => arr.filter((item) => fn(item));

const filterById = (id: number | string, arr: any[]): any[] => filter((i) => toString(i.id) === toString(id), arr);

const cloneObject = (obj: any): any => JSON.parse(JSON.stringify(obj));

const pureUnshift = (arr: any[], elem: any): any[] => {
    const newArr = cloneObject(arr);
    newArr.unshift(elem);
    return newArr;
};

const purePop = (arr: any[]): any[] => {
    const newArr = cloneObject(arr);
    newArr.pop();
    return newArr;
};

const pureShift = (arr: any[]): any[] => {
    const newArr = cloneObject(arr);
    newArr.shift();
    return newArr;
};

const purePush = (arr: any[], elem: any): any[] => {
    const newArr = cloneObject(arr);
    newArr.push(elem);
    return newArr;
};

const pureSplice = (arr: any[], position: number, count: number): any[] => {
    const newArr = cloneObject(arr);
    newArr.splice(position, count);
    return newArr;
};

const pureSpliceOne = (arr: any[], position: number): any[] => pureSplice(arr, position, 1);

export {
    replace,
    toString,
    endsWith,
    flow,
    IKeyValuePair,
    formatDate,
    formatTime,
    filter,
    filterById,
    cloneObject,
    pureUnshift,
    purePop,
    purePush,
    pureShift,
    pureSplice,
    pureSpliceOne,
};
