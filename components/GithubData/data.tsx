// components/GithubData/data.tsx
"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface GitHubDataContextProps {
  pinnedItems: any[];
}

const GitHubDataContext = createContext<GitHubDataContextProps | undefined>(undefined);

export const useGitHubData = () => {
  const context = useContext(GitHubDataContext);
  if (!context) {
    throw new Error('useGitHubData musí být použito uvnitř GitHubDataProvider');
  }
  return context;
};

interface GitHubDataProviderProps {
  children: ReactNode;
}

const GitHubDataProvider: React.FC<GitHubDataProviderProps> = ({ children }) => {
  const [pinnedItems, setPinnedItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
      });

      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
        };
      });

      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({
        query: gql`
          {
            user(login: "thomastomanec") {
              pinnedItems(first: 6) {
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      description
                      url
                      primaryLanguage {
                        name
                      }
                      forks {
                        totalCount
                      }
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      });

      const pinnedItemsData = data?.user?.pinnedItems?.edges?.map((edge: any) => edge.node) || []; // Handle case where data structure may be undefined or null
      setPinnedItems(pinnedItemsData);
    };

    fetchData();
  }, []);

  return (
    <GitHubDataContext.Provider value={{ pinnedItems }}>
      {children}
    </GitHubDataContext.Provider>
  );
};

export default GitHubDataProvider;
