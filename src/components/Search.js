import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  const [results, setResults] = useState([]);

  /**
   * You're not allowed to use async-await inside
   * the useeffect hook.
   * * There are other ways to do this.. Like declareing a helper function
   * * This is they React want to you to do...
   */
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };


    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
            if (term) {
              search();
            }
          }, 1000);
        /**
         * * Clean up function
         *
         */
        return () => {
          clearTimeout(timeoutId);
        };
    }
    
  }, [term]);

  /**
   * ! {dangerouslySetInnerHTML}
   *  * This feature exists in React and it has some
   *  * security concerns around it.
   */
  const renderedResult = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className='right floated content'>
          <a className='ui button'
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >Go</a>
        </div>
        <div className="content">
          <div className="header"> {result.title} </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter search word"
          />
        </div>
      </div>

      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};

export default Search;
