export default function DadJokes() {
  function getJokes() {
    console.log("getting jokes");
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((result) => console.log(result.data.children[0].data));
  }
  getJokes();
  return <h1>Dad Jokes</h1>;
}
