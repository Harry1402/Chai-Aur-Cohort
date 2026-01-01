import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
      .then((response) => response.json())
      .then((result) => {
        setQuote(result.data); // storing the full object
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
   
      {quote && (
        <>
          <p>"{quote.content}"</p>
          <p>— {quote.author}</p>
        </>
      )}
    </>
  );
}

export default App;
