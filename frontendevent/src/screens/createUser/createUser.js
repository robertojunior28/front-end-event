import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import "../../App.css";


import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";

import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";
import AuthApiService from "../../services/AuthApiService";

class createUser extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    
  };

  constructor() {
    super();
    this.service = new AuthApiService();
  }

  create = async () => {
    const errors = this.validate();

    if (errors.length > 0) {
      errors.forEach((message, index) => {
        showErrorMessage(message);
      });
      return false;
    }

    const eventDto = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      
    
    };

    await this.service
      .create(eventDto, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log("Usário criado com sucesso:", response.data);

        showSuccessMessage("Usuário criado com sucesso!");
        this.props.history.push("/login");
        window.location.reload();
        
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error);
        showErrorMessage("Erro ao criar usuário");
      });
  };

  validate = () => {
    const errors = [];

    if (!this.state.name) {
      errors.push("Campo nome é obrigatório!");
    }

    if (!this.state.email) {
      errors.push("Campo email é obrigatório e válido!");
    }
    if (!this.state.password) {
      errors.push("Campo senha é obrigatório!");
    }

    if (!this.state.repeatPassword) {
      errors.push("Campo repetir senha é obrigatório!");
    }
    if (this.state.repeatPassword != this.state.password) {
        errors.push("A senhas estão diferentes!");
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
        <Card title="Cadastro de Usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="inputName">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    name="name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </FormGroup>
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
                <FormGroup label="Repetir senha: *" htmlFor="inputRepeatPassword">
                  <input
                    type="password"
                    id="inputRepeatPassword"
                    className="form-control"
                    name="repeatPassword"
                    onChange={(e) => this.setState({ repeatPassword: e.target.value })}
                  />
                </FormGroup>
                
                <button
                  onClick={this.create}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi pi-save"></i> Salvar
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
export default withRouter(createUser);