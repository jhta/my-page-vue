// require("dotenv").config();
import gql from "graphql-tag";
import { ApolloClient } from "apollo-boost";
import fetch from "cross-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const token = "fb2231a90f167c2d8bed7c5a60d73f";

const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
  fetch: fetch
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      Authorization: `Bearer ${token}`
    })
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const HOMEPAGE_QUERY = gql`
  query {
    main {
      title
      description
      links {
        link {
          label
          blank
          url
          internal
        }
      }
    }
    allJobs {
      id
      date
      title
      description
      imageUrl
      company {
        label
        url
      }
      project {
        label
        url
      }
    }
  }
`;

export const fetchHomePageData = async () => {
  try {
    const result = await client.query({
      query: HOMEPAGE_QUERY,
      fetchPolicy: "no-cache"
    });
    const { data } = result;
    return data;
  } catch (error) {
    console.log(error);
  }
};
