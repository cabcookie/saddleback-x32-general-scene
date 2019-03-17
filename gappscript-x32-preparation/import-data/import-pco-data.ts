import { PCO_APP_ID, PCO_SECRET } from "../security/tokens";
import { IUrlEncodedSecret, IUrlHeader } from "../utils/interfaces";
import { IJSONContent, Utilities } from "../utils/mock-functions";

const encodeSecret = (url: string): IUrlEncodedSecret => {
    return {
        encodedSecret: Utilities.base64Encode(PCO_APP_ID + ":" + PCO_SECRET),
        url }; };

const createPcoHeader = (urlEncodedSecret: IUrlEncodedSecret): IUrlHeader => {
    return {
        header: urlEncodedSecret.encodedSecret ?
            { headers: { Authorization: "Basic " + urlEncodedSecret.encodedSecret } } : undefined,
        url: urlEncodedSecret.url }; };

const parsePcoData = (content: IJSONContent): any[] =>
    JSON.parse(content.getContentText());

export { encodeSecret, createPcoHeader, parsePcoData };
