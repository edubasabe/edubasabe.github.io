//cdn.contentful.com/spaces/0h359gwffzgr/entries?access_token=EsSExa3yg8zDrElZxJM-aS01_RkqrngKRAcGtfm-XZo
https: export function getWebsites() {
  return fetch(
    "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json"
  ).then((res) => res.json());
}

// export function postMeetup(meetup) {
//   return fetch(
//     "https://react-meetup-fe77a-default-rtdb.firebaseio.com/meetups.json",
//     {
//       method: "POST",
//       body: JSON.stringify(meetup),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
// }
