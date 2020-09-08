import { connect } from 'react-redux';
import * as actions from '../../Actions/Actions';
import React, { Component } from 'react'

class Nevegation extends Component {

    componentDidMount(){
        this.props.traerUsuario()
       
    }


    render() {
        return (
            <div>
                  {this.props.state.usuario.name !== "" ?  this.props.state.usuario.name : ""} 
                  {this.props.state.usuario.points !== "" ?  this.props.state.usuario.points : ""} 
            </div>
        )
    }
}


const mapStatetoProps = (state) => ({

    state : state

});

const mapDispatchToProps = {

   traerUsuario: actions.traerUsuario,
   traerProductos: actions.traerProductos,

};

export default connect(mapStatetoProps, mapDispatchToProps)(Nevegation);