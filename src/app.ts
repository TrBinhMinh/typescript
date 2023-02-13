import axios from "axios";

const form = document.querySelector("form");
const addressInput = <HTMLInputElement>document.getElementById("address");

const GOOGLE_API_KEY = "AIzaSyDTmLJfm50StOtarxxbgA9L18euQ41fdA8";

declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );
      new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    })
    .catch((err: { message: string }) => {
      alert(err.message);
      console.log(err);
    });
};

form?.addEventListener("submit", searchAddressHandler);
