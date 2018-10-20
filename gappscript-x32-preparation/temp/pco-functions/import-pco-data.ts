const importPCOData = (url) => {
  const encodedAuthInformation: string = Utilities.base64Encode(PCO_APP_ID + ":" + PCO_SECRET);
  const header: IHeader = { headers: { Authorization: "Basic " + encodedAuthInformation }};
  const jsondata: IJSONContent = UrlFetchApp.fetch(url, header);
  const object: IAnyObject = JSON.parse(jsondata.getContentText());
  return object;
};
