import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Actions/Actions';

class CardProducto extends Component {

    redimir =(id) =>{

        this.props.redimirProducto(id)
        
    }

    render() {
        const{name, cost, category, img, id} = this.props
        return (
            <div>
                <p>{name}</p>
                <p>{cost}</p>
                <p>{category}</p>
                <img src={img} alt={`imagen de ${name}`} />
                <button onClick={()=>{this.redimir(id)}} >Redimir</button>
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