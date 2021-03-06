import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  // start a loading state as true until we load the data
  const [isLoading, setIsLoading] = useState(true);

  // set the initial loaded meetups state to an empty array
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // define the condition when the fetch function is run
  useEffect(() => {
    // whenever the effect runs again the Loading screen shows
    setIsLoading(true);
    // fetch data from the database and convert json into
    // plain Javascript object; extract the array of meetups data from
    // the response and pass that as a value
    // to the meetups prop on the MeetupList;

    fetch(
      ""
    )
      .then((response) => {
        return response.json();
        // set isLoading state to false once the data is loaded
      })
      .then((data) => {
        // transform the data from an object with nested objects that
        // is received from the database
        const meetups = [];

        for (const key in data) {
          const meetup = {
            // set id to the autogenerated key by the database
            // and distribute data into this object
            id: key,
            ...data[key],
          };

          // add the meetups into the helper meetups array
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    // there are no external dependencies so we use an empty array
    // therefore the fetch function will run only once when
    // the component is rendered for the first time
  }, []);

  // whilst the data is being loaded return a section that says Loading...
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  // pass the loaded meetups data to the meetups props
  return (
    <section>
      <h1>All Meetups </h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
