const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');


const writePrices = fs.createWriteStream('prices.csv');
writePrices.write('id,id_Trips,trip_date,trip_availability,price,fee_cancel\n', 'utf8');

const writeOneMillion = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 0;

  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  function makeDate() {
    const myYear = _.random(2020, 2021);
    const myMonth = _.random(1, 9);
    const myDay = _.random(10, 30);
    const Date = `${myYear}0${myMonth}${myDay}`;
    return Date;
  }

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const myid_Trips = _.random(1, 999999);
      const mytrip_date = makeDate();
      const mytrip_availability = _.random(10, 20);
      const myprice = _.random(199, 499);
      const myfee_cancel = _.random(25, 50);

      const data = `${id},${myid_Trips},${mytrip_date},${mytrip_availability},${myprice},${myfee_cancel}\n`;
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
};

writeOneMillion(writePrices, 'utf-8', () => {
  console.log('prices.csv generation completed');
  writePrices.end();
});

