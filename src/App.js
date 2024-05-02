import React, { useEffect, useState } from "react";

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = { "Content-Type": "application/json" };

function App() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/items?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setItems(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="App">
      <div>
        <h1>Items</h1>
        <ul>
          {items.map((item) => {
            // Log the URL to the console
            console.log(
              "Image URL:",
              item.attributes.Profile.data.attributes.url
            );

            return (
              <li key={item.id}>
                <h2>{item.attributes.Name}</h2>
                {item.attributes.Profile && (
                  <img
                    src={`http://localhost:1337${item.attributes.Profile.data.attributes.url}`}
                    alt={item.attributes.Name}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
