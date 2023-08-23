export const showPreloaderError = () => {
    document.getElementById("c-splash").remove()
    const errorDiv = document.createElement("div");
    errorDiv.setAttribute("id", "preload-failed")
    const errorText = document.createTextNode("Unable to boot CinelarTV: Essential preloaded data not found");
    errorDiv.appendChild(errorText)
    document.body.appendChild(errorDiv)
}
  
  let preloaded;
  const preloadedDataElement = document.getElementById("data-preloaded");
  
  if (preloadedDataElement) {
    preloaded = JSON.parse(preloadedDataElement.dataset.preloaded);
  }
  else {
    showPreloaderError()
    throw "Unable to boot CinelarTV: Essential preloaded data not found";
  }
  
  let preloadedData = {
    currentUser: preloaded.currentUser,
    SiteSettings: preloaded.SiteSettings,
    isMobile: preloaded.isMobile,
    homepageData: preloaded.homepageData || null,
  };
  
  
  export default {
    install: (app) => {
      Object.assign(app.config.globalProperties, preloadedData);
      app.provide("currentUser", preloadedData.currentUser);
      app.provide("SiteSettings", preloadedData.SiteSettings);
      app.provide("isMobile", preloadedData.isMobile);
      app.provide("homepageData", preloadedData.homepageData);
    }
  }
  
  export const { SiteSettings, currentUser, isMobile, homepageData } = preloadedData;

  
  export const Language = {
    current: preloadedData.currentUser?.locale || preloadedData.SiteSettings.default_locale,
    default: preloadedData.SiteSettings.default_locale
  }