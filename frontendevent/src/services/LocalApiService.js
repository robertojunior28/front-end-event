import ApiService from "./ApiServices";

export default class LocalApiService extends ApiService{
    constructor(){
        super('/local');
    }

    create(object){
        return this.post('', object);
    }

    update(id, object){
        return this.put(`/${id}`, object);
    }

    delete(id){
        return super.delete(`/${id}`);
    }

    find(params){
        return this.get(`${params}`);
    }
}