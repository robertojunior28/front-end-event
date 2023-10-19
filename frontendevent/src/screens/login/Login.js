import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import "../../App.css";
import { AuthContext } from "../../main/SessionProvider";

import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";

import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    
  };



  login = () => {
    const errors = this.validate();

    if (errors.length > 0) {
      errors.forEach((message, index) => {
        showErrorMessage(message);
      });
      return false;
    }

    const loginDto = {
      email: this.state.email,
      password: this.state.password,
      
    
    };

    this.context
      .login(loginDto, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log("Usário logado com sucesso:", response.data);

        this.props.history.push('/viewEvents?createSuccess=true');
        window.location.reload();
        
      })
      .catch((error) => {
        console.error("Login inválido:", error);
        showErrorMessage("Login inválido");
      });
  };

  validate = () => {
    const errors = [];

    if (!this.state.email) {
      errors.push("Campo email é obrigatório e válido!");
    }
    if (!this.state.password) {
      errors.push("Campo senha é obrigatório!");
    }


    return errors;
  };

  cancel = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Login de Usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Email: *" htmlFor="inputEmail">
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    name="email"
                    onChange={(e) =>
                      this.setState({ email: e.target.value })
                    }
                  />
                </FormGroup>
                <FormGroup label="Senha: *" htmlFor="inputPassword">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="password"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
                
                
                <button
                  onClick={this.login}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi pi-save"></i> Entrar
                </button>
                <button
                  onClick={this.cancel}
                  type="button"
                  className="btn btn-danger"
                >
                  <i className="pi pi-times"></i> Cancelar
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
Login.contextType = AuthContext;
export default withRouter (Login);