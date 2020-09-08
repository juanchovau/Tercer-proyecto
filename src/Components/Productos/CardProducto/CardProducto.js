import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../Actions/Actions'
import './CardProducto.css'
import coin from '../../../images/coin.svg'

class CardProducto extends Component {
    redimir = (id) => {
        this.props.redimirProducto(id)
    }

    render() {
        const {
            name,
            cost,
            category,
            img,
            id,
            puntosDisponibles,
            historia,
        } = this.props
        return (
            <div className="CardProducto__contenedor">
                <img
                    className="CardProducto__contenedor--img"
                    src={img}
                    alt={`imagen de ${name}`}
                />
                <div className="CardProducto__contenedor--texto">
                    <div className="CardProducto__contenedor--nombre">
                        <p>{name}</p>
                        <p>{category}</p>
                    </div>
                    <p className="CardProducto__contenedor--puntos">
                        <img src={coin} alt="moneda" /> {cost}
                    </p>
                </div>

                <div>
                    {puntosDisponibles - cost < 0 && historia === false ? (
                        <p className="CardProducto__contenedor--textoRedimir">{`Te faltan ${
                            (puntosDisponibles - cost) * -1
                        } puntos`}</p>
                    ) : historia === false ? (
                        <button
                            className="CardProducto__contenedor--bottonRedimir"
                            onClick={() => {
                                this.redimir(id)
                            }}
                        >
                            Redimir
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    state: state,
})

const mapDispatchToProps = {
    redimirProducto: actions.redimirProducto,
}

export default connect(mapStatetoProps, mapDispatchToProps)(CardProducto)
