// -- Prismic Repo Name
export const repoName = "marley-spoon-project2";

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  "MC5ZaVRNN0JFQUFDZ0FHZzEx.77-9PVRSFmNL77-9YwZ877-977-977-9J--_vVLvv70QRe-_vVMwYDc9TzTvv73vv73vv71o";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: { type: string; uid: any }) => {
  console.log("linkResolver", doc);
  if (doc.type === "home_page") {
    return `/${doc.uid}`;
  }
  return "/";
};

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      type: "home_page",
      path: "/:uid",
    },
  ],
};
