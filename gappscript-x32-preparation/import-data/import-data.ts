import { IUrlHeader } from "../utils/interfaces";
import { IJSONContent, UrlFetchApp } from "../utils/mock-functions";

const fetchData = (header: IUrlHeader): IJSONContent =>
    header.header ?
        UrlFetchApp.fetch(header.url, header.header) :
        UrlFetchApp.fetch(header.url);

export { fetchData };
