import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  // current context snapshot
  const favouritesCtx = useContext(FavouritesContext);

  // check if there are favourites or not; display favourites
  // or a message that there are no favourites yet
  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
