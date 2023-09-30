import React from "react";

import { withRouter } from "react-router-dom";

import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import TableEvent from "../../components/TableEvent";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";
import EventApiService from "../../services/EventApiService";

class ViewEvents extends React.Component {
  state = {
    eventDtos: [],
  };

  constructor() {
    super();
    this.service = new EventApiService();
  }

  componentDidMount() {
    var params = "?";
    this.service
      .find(params)
      .then((response) => {
        console.log(response.data);
        this.setState({
          eventDtos: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          eventDtos: [],
        });
        showWarningMessage("Estamos passando por um erro no servidor");
      });
  }

  render() {
    const { eventDtos } = this.state;

    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Consulta Evetos">
          <div className="row">
            <TableEvent eventDtos={eventDtos} />
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(ViewEvents);
