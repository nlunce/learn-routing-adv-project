import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "EVENT 1" },
  { id: "e2", title: "EVENT 2" },
  { id: "e3", title: "EVENT 3" },
];
export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
