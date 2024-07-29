// src/components/Search.js
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Index } from 'flexsearch';

const Search = () => {
  const data = useStaticQuery(graphql`
    query {
      localSearchPosts {
        index
        store
      }
    }
  `);

  const { index, store } = data.localSearchBlogs;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = (event) => {
    const query = event.target.value;
    setQuery(query);

    if (query.length > 2) {
      const idx = Index.load(index);
      const searchResults = idx.search(query, { limit: 10 }).map(({ id }) => store[id]);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={search} placeholder="Search" />
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.path}>{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
