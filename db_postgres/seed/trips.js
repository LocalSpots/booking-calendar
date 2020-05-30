const faker = require('faker');
const fs = require('fs');
const _ = require('underscore');

// module.exports = function (models) {

const writeTours = fs.createWriteStream('tours.csv');
writeTours.write('id,name,overview,cancellation_policy,return_details,created_at,updated_at\n', 'utf8');

// const randomReviewId = () => Math.floor(Math.random() * Math.floor(100));


const writeOneMillion = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 0;


  const write = () => {
    let ok = true;
    do {

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
}

writeOneMillion(writeTours, 'utf-8', () => {
  console.log('tours.csv generation completed');
  writeTours.end();
});



// }