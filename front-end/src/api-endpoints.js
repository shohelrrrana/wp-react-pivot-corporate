import clientConfig from "./client-config";

const apiEndpoints = {
    headerMenu: clientConfig.apiUrl + "/theme/v1/menu/HEADER_MENU",
    media: clientConfig.apiUrl + "/wp/v2/media",
    postFields: clientConfig.apiUrl + "/carbon-fields/v1/posts",
    posts: clientConfig.apiUrl + "/wp/v2/posts",
    pages: clientConfig.apiUrl + "/wp/v2/pages",
    categories: clientConfig.apiUrl + "/wp/v2/categories",
    users: clientConfig.apiUrl + "/wp/v2/users",
    contactForm: clientConfig.apiUrl + "/theme/v1/submit/contact-form",
    themeOptions: clientConfig.apiUrl + "/theme/v1/options"
};

export default apiEndpoints;