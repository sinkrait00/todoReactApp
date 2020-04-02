
import axios from 'axios';

class Api{


    _apiBase = "https://my-json-server.typicode.com/sinkrait00/dbJSON/db/";


getResourses(){
    return axios.get(this._apiBase);
}

createTask(task){
   return axios.post(this._apiBase,task);
}
edtiTask(id,task){
   return axios.patch(this._apiBase+id,task);
}
deleteTask(id){
    return axios.delete(this._apiBase+id);
}
}

export default Api;