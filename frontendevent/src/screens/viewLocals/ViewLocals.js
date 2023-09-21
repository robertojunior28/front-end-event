import React from 'react';

import { withRouter } from 'react-router-dom';
import axios from 'axios'

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import TableLocals from '../../components/TableLocals'


class ViewLocals extends React.Component {

    state = {
        localDtos: []
      };
    
      componentDidMount() {
        axios
        .get('http://localhost:8080/local')
        .then((response) => {
        console.log(response.data);
        this.setState({
          localDtos: response.data
          });
        })
      .catch((error) => {
        this.setState({
          localDtos: [],
        });
      });
      }
    
      render() {
        const {localDtos} = this.state;
    
        return (
          <div className="container">
            <br/><br/><br/><br/>
            <Card title="Consulta Locais">
                <div className="row">
                    <TableLocals localDtos={localDtos} />
                </div>          
            </Card>
          </div>
        );
    }
}

export default withRouter(ViewLocals);