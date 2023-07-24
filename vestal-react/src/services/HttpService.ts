import axios from "axios";
import Query from "../model/Query";

class HttpService {

constructor(){}

backendApi = 'http://localhost:5219';

 async search(query: Query) {
    axios.get(this.backendApi + "/search", { params: query })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch(function (error) {
        console.log(error.response.data)
    })
}

}

const httpService = new HttpService()

export default httpService;