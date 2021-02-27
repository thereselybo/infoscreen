import { useState, useEffect } from "react";

export default function DadJokes() {
  const [joke, setJoke] = useState(false);

  useEffect(() => {
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((result) => setJoke(result.data.children[0].data))
      .catch((error) => console.log(error));
  }, []);

  return joke.title ? (
    <div className="joke">
      <h2>Dad Joke of the day</h2>
      <h3>{joke.title}</h3>
      <p>{joke.selftext}</p>
    </div>
  ) : (
    <div className="joke">
      <h2>Dad Joke of the day</h2>
      <h3>Sorry, no joke today :(</h3>
    </div>
  );
}
