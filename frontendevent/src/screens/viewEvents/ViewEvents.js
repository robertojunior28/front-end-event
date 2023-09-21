import React from 'react';

import { withRouter } from 'react-router-dom';
import axios from 'axios'

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import TableEvent from '../../components/TableEvent';


class ViewEvents extends React.Component {

    state = {
        eventDtos: []
      };
    
      componentDidMount() {
        axios
        .get('http://localhost:8080/event')
        .then((response) => {
        console.log(response.data);
        this.setState({
          eventDtos: response.data
          });
        })
      .catch((error) => {
        this.setState({
          eventDtos: [],
        });
      });
      }
    
      render() {
        const {eventDtos} = this.state;
    
        return (
          <div className="container">
            <br/><br/><br/><br/>
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