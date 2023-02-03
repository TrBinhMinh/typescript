const form = document.querySelector("form");
const addressInput = <HTMLInputElement>document.getElementById("address");

const searchAddressHandler = (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressInput.value;
};

form?.addEventListener("submit", searchAddressHandler);
