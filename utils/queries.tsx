import Prismic from "@prismicio/client";
import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";
import { Client } from "./prismicHelpers";

// Order by last publication date from most recent to oldest
const articlesOrderings = "[document.first_publication_date desc]";

export const fetchArticle = async (type: string) => {
  return await Client().query(Prismic.Predicates.at("document.type", type));
};

export const fetchArticles = async () => {
  return Client().query(Prismic.Predicates.at("document.type", "article"));
};

export const fetchDocs = async (page = 1, routes = []): Promise<any> => {
  const response: any = await Client().query("", {
    pageSize: 100,
    lang: "*",
    page,
  });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...Array.from(new Set(allRoutes))];
};
