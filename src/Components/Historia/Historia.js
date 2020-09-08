import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardProducto from "../Productos/CardProducto/CardProducto"
import * as actions from '../../Actions/Actions';

class Historia extends Component {

componentDidMount(){
    this.props.traerHistoria()
}

    render() {
        return (
            <div>

                {this.props.state.historia.map((producto) => {
                    return (
                        <CardProducto
                            key={Math.random()}
                            puntosDisponibles={this.props.state.usuario.points}
                            id={producto._id}
                            name={producto.name}
                            cost={producto.cost}
                            category={producto.category}
                            img={producto.img.url}
                            historia={true}
                        />
                    )
                })}
                
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({

    state : state

});

const mapDispatchToProps = {

    traerHistoria: actions.traerHistoria

};

export default connect(mapStatetoProps, mapDispatchToProps)(Historia );