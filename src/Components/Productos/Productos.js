import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../Actions/Actions';
import CardProducto from "./CardProducto/CardProducto";
import Modal from "react-modal"


 class Productos extends Component {

    componentDidMount(){

        this.props.traerProductos()       
    }

   

    render() {
        return (
            <div>
               {this.props.state.productos.lenght !== 1 ?  this.props.state.productos.map(producto =>{
                   return <CardProducto key={Math.random()} id={producto._id} name={producto.name} cost={producto.cost} category={producto.category} img={producto.img.url} />
               }): ""} 
            <Modal isOpen={ this.props.state.redencion !== ""  ? true :  false}>
                {
                    this.props.state.redencion === "error" ? "oh no" : "yeaa"
                }
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

};

export default connect(mapStatetoProps, mapDispatchToProps)(Productos);