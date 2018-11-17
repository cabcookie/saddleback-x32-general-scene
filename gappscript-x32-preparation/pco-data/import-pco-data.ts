import { PCO_APP_ID, PCO_SECRET } from "../security/tokens";
import { IUrlEncodedSecret, IUrlHeader } from "../utils/interfaces";
import { IJSONContent, UrlFetchApp, Utilities } from "../utils/mock-functions";

const encodeSecret = (url: string): IUrlEncodedSecret => {
    return {
        encodedSecret: Utilities.base64Encode(PCO_APP_ID + ":" + PCO_SECRET),
        url }; };

const createHeader = (urlEncodedSecret: IUrlEncodedSecret): IUrlHeader => {
    return {
        header: urlEncodedSecret.encodedSecret ?
            { headers: { Authorization: "Basic " + urlEncodedSecret.encodedSecret } } : undefined,
        url: urlEncodedSecret.url }; };

const fetchData = (header: IUrlHeader): IJSONContent =>
    header.header ?
        UrlFetchApp.fetch(header.url, header.header) :
        UrlFetchApp.fetch(header.url);

const parseData = (content: IJSONContent): any[] =>
    JSON.parse(content.getContentText());

export { encodeSecret, createHeader, fetchData, parseData };
