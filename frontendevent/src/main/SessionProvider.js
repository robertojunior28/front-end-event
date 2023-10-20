import React from "react";

import AuthApiService from "../services/AuthApiService";

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer;
const AuthProvider = AuthContext.Provider;

export default class SessionProvider extends React.Component{

    constructor(props) {
        super(props);
        this.service = new AuthApiService();
      }
    
      state = {
        loggedUser: null,
        loading: true,
      };
    
      async componentDidMount() {
        this.checkAuthentication();
      }
    
      checkAuthentication = async () => {
        const isAuthenticated = await this.service.isAuthenticated();
        if (isAuthenticated) {
          this.start();
        }
        this.setState({ loading: false });
      };
    
      login = async (email, password) => {
        try {
          const user = await this.service.login(email, password);
          if (user) {
            this.start();
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Erro ao fazer login:", error);
          return null;
        }
      };
    
      start = () => {
        const loggedUser = this.service.getLoggedUser();
        const token = this.service.getToken();
        
        this.setState({ loggedUser });
        this.service.registerToken(token);
      };
    
      end = () => {
        console.log('Encerrando sessão');
        this.service.logout();
        
        this.setState({ loggedUser: null });
      };
    
      isAuthenticated = () => {
        return this.state.loggedUser !== null;
      };
    
      isAdmin = () => {
        return this.state.loggedUser && this.state.loggedUser.userRole === "ADMIN";
      };
    
      render() {
        if (this.state.loading) {
          return null;
        }
    
        const context = {
          loggedUser: this.state.loggedUser,
          isAuthenticated: this.isAuthenticated(),
          isAdmin: this.isAdmin(),
          start: this.start,
          end: this.end,
          login: this.login,
        };

        return(
            <AuthProvider value={context} >
                {this.props.children}
            </AuthProvider>
        )
    }
}