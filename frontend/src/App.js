// Importing necessary modules from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Importing different page components
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

// Creating a router configuration using createBrowserRouter
const router = createBrowserRouter([
  // Top-level route configuration
  {
    path: "/",
    element: <RootLayout />, // Root layout for the entire app
    errorElement: <ErrorPage />, // Error page to display if a route encounters an error
    children: [
      { index: true, element: <HomePage /> }, // Home page as the default (index) page
      {
        path: "events",
        element: <EventsRootLayout />, // Layout for the events section
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader, // Loader function for fetching events data
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader, // Loader function for fetching detailed event data
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction, // Action to perform when loading the event detail page
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction, // Action to perform when editing an event
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction, // Action to perform when creating a new event
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction, // Action to perform when accessing the newsletter page
      },
    ],
  },
]);

// Function component representing the main App, wrapping it with RouterProvider and passing the router configuration
function App() {
  return <RouterProvider router={router} />;
}

// Exporting the App component as the default export
export default App;
