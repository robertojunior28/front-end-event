import React from 'react'

import 'bootswatch/dist/flatly/bootstrap.css';
import './Home.css'

import { withRouter  } from 'react-router-dom';

import Card from '../../components/Card';

class Home extends React.Component{

    render(){
        return (
            <div className='container' id="sistema">
                <br/><br/><br/><br/>
                <Card title="Sistema de Eventos">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="bs-component">
                                
                                <label>Projeto criado para a disciplina de DAC - IFPB Campus Monteiro</label>
                                <br />
                                <label>Aluno José Roberto - jose.farias@academico.ifpb.edu.br</label>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default withRouter(Home);