import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  // find out if the item is favourite
  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);
  // if the item is already favourite remove the item from favourites
  // otherwise re-create the meetup item and add it to favourites
  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  /** When the button is clicked the meetup item 
     is added to the context and the text on the button 
     is updated to say if the item is already part of the context or not.
     If the item is already added to Favourites array, then when 
     the button is clicked the item should be removed from 
     Favourites array in the Context
      */
  return (
    <li classes={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>props.description</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
