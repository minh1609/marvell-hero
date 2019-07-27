import axios from "axios";

export default axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
    params: {
        apikey: "4b06c3ba829b4f67df951727a1a31477"
    }
});
