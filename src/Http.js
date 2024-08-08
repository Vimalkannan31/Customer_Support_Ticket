
import axios from "axios";


let instance = axios.create({
    baseURL: "https://api.fvth.freshvoice.app",
    headers: {
        "Content-type": "application/json"
    }
});
const isDevEnv = window.location.href.includes('localhost') ? true : false;
if (isDevEnv) {
   
}
export const Http = instance;