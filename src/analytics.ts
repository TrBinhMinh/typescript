let logged;

const sendAnalytics: (data: string) => void = (data) => {
  console.log(data);
  logged = true;
};

sendAnalytics("The Data!");
