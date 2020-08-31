import axios from "axios";

export default axios.create({
  headers: {
    baseURL: "https://api.unsplash.com/",
    Authorization: "Client-ID db9aotefoPQj59ZrCt1rauRMSyo6uUslWA4kT-pKQXY",
  },
});
