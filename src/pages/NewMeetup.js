import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // object that enables to manipulate the browser history
  const history = useHistory();
  // post the input data about the new meetup
  // to the database to meetups table;
  // after the form is submitted, execute function
  // when the promis completed
  // to navigate to the starting page
  function addMeetupHandler(meetupData) {
    fetch(
      "",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup </h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
