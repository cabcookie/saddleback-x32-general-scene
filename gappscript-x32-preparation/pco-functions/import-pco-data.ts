const importPCOData = (url, filterFunc) => {
  const encodedAuthInformation = Utilities.base64Encode(PCO_APP_ID + ":" + PCO_SECRET);
  const header = {headers: {Authorization: "Basic " + encodedAuthInformation}};
  const jsondata = UrlFetchApp.fetch(url, header);
  const object = JSON.parse(jsondata.getContentText());
  return filterFunc(object);
}
