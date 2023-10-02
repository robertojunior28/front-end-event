import ApiService from "./ApiServices";

export default class EventApiService extends ApiService{
    constructor(){
        super('/event');
    }

    create(object){
        return this.post('', object);
    }

    update(id, object){
        return this.put(`/${id}`, object);
    }

    delete(id){
        return super.delete(`${id}`);
    }

    find(params){
        return this.get(`${params}`);
    }
}