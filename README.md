The meetup app contains the following pages (components):
- All meetups -displays all meetups details (their ids, titles, addresses, description and images) 
- Favourites - displays favourite meetups
- New Meetup - enables adding a new meetup

The input data from the New Meetup page is posted to the database.
Data about the meetups is fetched from the database and displayed on the All meetups page.

When the Favourite button is clicked on the All Meetups page, the meetup item is added to the Favourites page,
and the text on the button is updated to say if the item is already part of the favourites or not.
If the item is already added to Favourites, then when the button is clicked the item is removed from Favourites.

To run locally: 
npm install
npm start


Database: Firebase - Realtime Database

Dummy data example:
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
