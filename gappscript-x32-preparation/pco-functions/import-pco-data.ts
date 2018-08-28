const importPCOData = (url, user, pwd, filterFunc) => {
  const encodedAuthInformation = Utilities.base64Encode(user + ":" + pwd);
  const header = {headers: {Authorization: "Basic " + encodedAuthInformation}};
  const jsondata = UrlFetchApp.fetch(url, header);
  const object = JSON.parse(jsondata.getContentText());
  return filterFunc(object);
}
