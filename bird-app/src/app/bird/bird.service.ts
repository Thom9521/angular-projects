export class BirdService {
  getBirds() {
    return [
      {
        imageUrl: "https://loremflickr.com/200/200/bird=1",
        birdName: "Bird 1",
        releasedDate: "May 31, 2016",
        description:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: "https://loremflickr.com/200/200/bird=2",
        birdName: "Bird 2",
        releasedDate: "October 31, 2016",
        description:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        rating: 2,
        numOfReviews: 12
      },
      {
        imageUrl: "https://loremflickr.com/200/200/bird=3",
        birdName: "Bird 3",
        releasedDate: "July 30, 2016",
        description:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        rating: 5,
        numOfReviews: 2
      }
    ];
  }
}
