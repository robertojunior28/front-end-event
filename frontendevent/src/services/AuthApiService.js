import ApiService, {LOGGED_USER, TOKEN} from "./ApiServices";
import StorageService from "./StorageService";

export default class AuthApiService extends ApiService {

    constructor(){
        super('/auth');
        this.storageService = new StorageService();
    }

    async login(email, password){
        const loginDto = {
            "email": email,
            "password": password
        };

        try{
            const response = await this.post('/login', loginDto);

            const user = response.data.loginDto;
            const token = response.data.token;

            this.storageService.setItem(LOGGED_USER, user);
            this.storageService.setItem(TOKEN, token);

            this.registerToken(token);
            return user;
        } catch(error){
            return null;
        }
    }

    async create(name, email, password){
        const registerDto = {
            "name": name,
            "email": email,
            "password": password
        };

        try{
            const response = await this.post('/register', registerDto);

            const user = response.data.loginDto;
            const token = response.data.token;

            this.storageService.setItem(LOGGED_USER, user);
            this.storageService.setItem(TOKEN, token);

            this.registerToken(token);
            return user;
        } catch(error){
            return null;
        }
    }

    isTokenValid(token){
        return this.post('/isTokenValid', token);
    }

    logout(){
        this.storageService.removeItem(LOGGED_USER);
        this.storageService.removeItem(TOKEN);

        return this.post('/logout');
    }

    getLoggedUser(){
        return this.storageService.getItem(LOGGED_USER);
    }

    getToken(){
        return this.storageService.getItem(TOKEN);
    }

    async isAuthenticated(){
        const user = this.getLoggedUser();
        const token = this.getToken();

        if(!user || !token){
            return false;
        }

        const tokenDTO = {
            "token": token
        };

        const response = await this.isTokenValid(tokenDTO);
        return response.data;
    }

}