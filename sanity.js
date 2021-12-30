import { createImageUrlBuilder } from "next-sanity";

import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: "czsgg5qx",
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2021-08-31",
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const client = sanityClient(config);



// import { createImageUrlBuilder } from "next-sanity";

// import sanityClient from "@sanity/client";

// const config = {
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   useCdn: process.env.NODE_ENV === "production",
//   apiVersion: "2021-08-31",
// };

// console.log(process.env.SANITY_API_VERSION);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
// export const client = sanityClient(config);
