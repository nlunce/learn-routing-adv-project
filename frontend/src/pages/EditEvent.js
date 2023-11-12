import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useLoaderData();
  const event = data.event;

  return <EventForm event={event} />;
}
