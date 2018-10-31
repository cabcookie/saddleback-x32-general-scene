import { PCO_APP_ID, PCO_SECRET } from "../security/tokens";
import { IUrlEncodedSecret, IUrlHeader } from "../utils/interfaces";
import { IJSONContent, UrlFetchApp, Utilities } from "../utils/mock-functions";

const encodeSecret: (url: string) => IUrlEncodedSecret = (url) => {
    return {
        encodedSecret: Utilities.base64Encode(PCO_APP_ID + ":" + PCO_SECRET),
        url }; };

const createHeader: (urlEncodedSecret: IUrlEncodedSecret) => IUrlHeader = (urlEncodedSecret) => {
    return {
        header: { headers: { Authorization: "Basic " + urlEncodedSecret.encodedSecret } },
        url: urlEncodedSecret.url }; };

const fetchData: (header: IUrlHeader) => IJSONContent = (header) =>
    UrlFetchApp.fetch(header.url, header.header);

const parseData: (content: IJSONContent) => any[] = (content) =>
    JSON.parse(content.getContentText());

export { encodeSecret, createHeader, fetchData, parseData };
