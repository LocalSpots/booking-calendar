const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');


const writeTrips = fs.createWriteStream('trips.csv');
writeTrips.write('id,name,description,duration,numtotal_booked\n', 'utf8');

const writeOneMillion = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;

  const thingsToDo = ['a day trip at ', 'a nice day trip at ', 'explore the beautiful ', 'a full day trip at '];

  const location = ['Chengdu', 'Macau', 'Philadelphia', 'Boston', 'Washington DC', 'Yosemite', 'Yellowstone', 'Arches'];

  const description = ['6:00 am Departure - explore beautiful Yellowstone pick up included!', '7:00 am Departure - explore beautiful Yellowstone pick up included!', '8:00 am Departure - explore beautiful Yellowstone pick up included!'];

  const duration = ['6:00am - 7:00pm', '7:00am - 5:00pm', '8:00am - 4:00pm'];


  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  function makeTitle() {
    const myLeadin = pickrand(thingsToDo);
    const myLocation = pickrand(location);
    const title = `${myLeadin} ${myLocation}}`;
    return title;
  }

  const write = () => {
    let ok = true;
    do {
<<<<<<< HEAD
      i -= 1;
      id += 1;
      const myName = makeTitle();
      const myDescription = pickrand(description);
      const myDuration = pickrand(duration);
      const numtotal_booked = _.random(2000, 3000);

      const data = `${id},${myName},${myDescription},${myDuration}, ${numtotal_booked}\n`;
=======

>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
<<<<<<< HEAD
};

writeOneMillion(writeTrips, 'utf-8', () => {
  console.log('trips.csv generation completed');
  writeTrips.end();
});
=======
}

writeOneMillion(writeTours, 'utf-8', () => {
  console.log('tours.csv generation completed');
  writeTours.end();
});



// }
>>>>>>> 61f9510c6c97baf1ac89aae15d1eedb7122dabf5
