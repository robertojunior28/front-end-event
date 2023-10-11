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
    title: '',
    description: '',
    date: '',
    time: '',
    eventDtos: [],
  };

  constructor() {
    super();
    this.service = new EventApiService();
  }
  componentWillUnmount() {
    const queryParams = new URLSearchParams(window.location.search);
    const updateSuccess = queryParams.get('updateSuccess');
    const createSuccess = queryParams.get('createSuccess');

    if (updateSuccess === 'true') {
      showSuccessMessage('Evento atualizado com sucesso');
    }else if(createSuccess === 'true'){
      showSuccessMessage('Evento criado com sucesso');
    }
  }

  componentDidMount() {
    this.find();
    
  }

  find = () => {
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
      });

  }
  delete = (eventId) => {
    this.service.delete(eventId
    ).then( response => 
        {
            showSuccessMessage(`Evento ${eventId} deletado com sucesso`);
            this.find();
        }
    ).catch( error => 
        {
            console.log(error.response);
        }
    );
}

edit = (eventId) => {
    this.props.history.push(`/updateEvent/${eventId}`);
    window.location.reload();
}


  render() {

    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Consulta Evetos">
          <div className="row">
            <TableEvent events={this.state.eventDtos}
                delete={this.delete}
                edit={this.edit} />
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(ViewEvents);
