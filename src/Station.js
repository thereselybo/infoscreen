export default function Station({ station, bikesAvailable, spacesAvailable }) {
  return (
    <div className="station">
      <h3>{station}</h3>
      <p>There are {bikesAvailable} bikes available</p>
      <p>There are {spacesAvailable} spaces available </p>
    </div>
  );
}
