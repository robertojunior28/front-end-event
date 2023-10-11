import React from "react";

import { withRouter } from "react-router-dom";

import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import TableLocals from "../../components/TableLocals";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";
import LocalApiService from "../../services/LocalApiService";

class ViewLocals extends React.Component {
  state = {
    street: '',
    number: '',
    city: '',
    uf: '',
    localDtos: [],
  };
  constructor() {
    super();
    this.service = new LocalApiService();
  }

  componentWillUnmount() {
    const queryParams = new URLSearchParams(window.location.search);
    const updateSuccess = queryParams.get('updateSuccess');
    const createSuccess = queryParams.get('createSuccess');

    if (updateSuccess === 'true') {
      showSuccessMessage('Local atualizado com sucesso');
    }else if(createSuccess === 'true'){
      showSuccessMessage('Local criado com sucesso');
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
          localDtos: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          localDtos: [],
        });
      });

  }

  delete = (localId) => {
    this.service.delete(localId
    ).then( response => 
        {
            showSuccessMessage(`Local ${localId} deletado com sucesso`);
            this.find();
        }
    ).catch( error => 
        {
            console.log(error.response);
        }
    );
}

edit = (localId) => {
    this.props.history.push(`/updateLocal/${localId}`);
    window.location.reload();
}

  render() {
    

    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Consulta Locais">
          <div className="row">
          <TableLocals locals={this.state.localDtos}
                delete={this.delete}
                edit={this.edit} />
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(ViewLocals);
