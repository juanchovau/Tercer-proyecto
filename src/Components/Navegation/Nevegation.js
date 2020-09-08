import { connect } from 'react-redux';
import * as actions from '../../Actions/Actions';
import React, { Component } from 'react'
import Modal from "react-modal"

class Nevegation extends Component {

    componentDidMount(){
        this.props.traerUsuario()
       
    }


    render() {
        return (
            <div>
                <button onClick={()=>{this.props.agregarMonedas(1000)}} >Agregar 1000</button>
                <button onClick={()=>{this.props.agregarMonedas(5000)}} >Agregar 5000</button>
                <button onClick={()=>{this.props.agregarMonedas(7500)}}>Agregar 7500</button>
                 <p>{this.props.state.usuario.name !== "" ?  this.props.state.usuario.name : ""}</p>  
                 <p>{this.props.state.usuario.points !== "" ?  this.props.state.usuario.points : ""}</p> 
                 <Modal isOpen={ this.props.state.nuevosPuntos !== ""  ? true :  false}>
                <p>Has Recargardo nuevos puntos!!!</p>
                 <button onClick={()=>{console.group(this.props.state) }}>log</button>
                 <button onClick={()=>{this.props.traerUsuario()}}>Cerrar</button>
            </Modal> 

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
   agregarMonedas: actions.agregarMonedas

};

export default connect(mapStatetoProps, mapDispatchToProps)(Nevegation);