import { useState, useEffect } from "react";

export default function DadJokes() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((result) => setJoke(result.data.children[0].data))
      .catch((error) => console.log(error));
  }, []);

  console.log(joke);

  return (
    <div className="joke">
      <h1>Dad Joke of the day</h1>
      <h2>{joke.title}</h2>
      <p>{joke.selftext}</p>
    </div>
  );
}
