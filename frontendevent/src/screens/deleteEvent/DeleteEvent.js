import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import "../../App.css";

import EventApiService from "../../services/EventApiService";

import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";

class DeleteEvent extends React.Component {
  state = {
    id: 0,
  };
  constructor() {
    super();
    this.service = new EventApiService();
  }
  delete = () => {
    const eventDto = {
      id: 0,
    };

    this.service
      .delete(`/${this.state.id}`, eventDto, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log("Evento deletado com sucesso:", response.data);
        showSuccessMessage("Evento deletado com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao deletar o evento:", error);
        showErrorMessage("Erro ao deletar o evento");
      });
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
        <Card title="Remover de Evento">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Id: *" htmlFor="inputId">
                  <input
                    type="text"
                    id="inputId"
                    className="form-control"
                    name="name"
                    onChange={(e) => this.setState({ id: e.target.value })}
                  />
                </FormGroup>
                <button
                  onClick={this.delete}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi pi-save"></i> Deletar
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
export default withRouter(DeleteEvent);
