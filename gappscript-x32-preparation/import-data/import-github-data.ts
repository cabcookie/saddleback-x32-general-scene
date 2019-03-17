import { IUrlHeader } from "../utils/interfaces";
import { IJSONContent } from "../utils/mock-functions";

const createGithubHeader = (url: string): IUrlHeader => {
    return { url };
};

const parseGithubData = (content: IJSONContent): string[] =>
    content.data;

export { createGithubHeader, parseGithubData };
