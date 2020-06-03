const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');


const writeTrip = fs.createWriteStream('trip.csv');
writeTrip.write('id,num_adult,num_child,id_account,id_Prices,created_at,updated_at\n', 'utf8');


const writeOneMillion = (writer, encoding, callback) => {
  // let i = 1000000;
  let i = 10000000;
  let id = 0;

  function pickrand(array) {
    const max = array.length -1;
    const i = _.random(0, max);
    return array[i];
  }

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const num_adult = _.random(1, 2);
      const num_child = _.random(0, 4);
      const id_account = _.random(1, 5000);
      const id_Prices = _.random(1, 999999);
      const created_at = faker.date.past();
      const updated_at = faker.date.future();

      const data = `${id},${num_adult},${num_child},${id_account},${id_Prices},${created_at},${updated_at}\n`;
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

writeOneMillion(writeTrip, 'utf-8', () => {
  console.log('trip.csv generation completed');
  writeTrip.end();
});
