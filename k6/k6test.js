import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 20 },
    { duration: "3m", target: 20 },
    { duration: "1m", target: 0 }
  ],
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 }
      }
    }
  }
};

export default function() {
  let response;

  response = http.get("http://localhost:3000");
  check(response, {
    "status equals 200": response => response.status.toString() === "200"
  });

  response = http.get("http://localhost:3000/api/trip/1/price");

  response = http.get(
    "http://localhost:3000/api/trip/1/calendar/?startdate=20200603&enddate=20200603&adults=2"
  );

  sleep(1);
}
