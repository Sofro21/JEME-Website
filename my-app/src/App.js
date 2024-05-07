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
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/texts?populate=*", {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setTexts(data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div className="App">
      <div>
        <h1>Text</h1>
        <ul>
          {texts.map((text) => {
            // Log the URL to the console
            console.log(
              "Image URL:",
              text.attributes.image.data.attributes.url
            );

            return (
              <li key={text.id}>
                <h2>{text.attributes.name}</h2>
                {text.attributes.image && (
                  <img
                    src={`http://localhost:1337${text.attributes.image.data.attributes.url}`}
                    alt={text.attributes.name}
                    style={{ width: "240px", height: "240px" }} 
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
