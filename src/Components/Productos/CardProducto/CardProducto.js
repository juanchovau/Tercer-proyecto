import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Actions/Actions';

class CardProducto extends Component {

    redimir =(id) =>{

        this.props.redimirProducto(id)
        
    }

    render() {
        const{name, cost, category, img, id, puntosDisponibles, historia} = this.props
        return (
            <div>
                <p>{name}</p>
                <p>{category}</p>
                <p>{cost}</p>
           
                <p> {(puntosDisponibles - cost) < 0 ? `Te faltan ${(puntosDisponibles - cost)*(-1)} puntos` : ""}</p>
                <img src={img} alt={`imagen de ${name}`} />
                { historia=== false ? <button onClick={()=>{this.redimir(id)}} >Redimir</button> : ""}
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({

    state : state

});

const mapDispatchToProps = {

   redimirProducto: actions.redimirProducto
};

export default connect(mapStatetoProps, mapDispatchToProps)(CardProducto);