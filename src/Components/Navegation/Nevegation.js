import { connect } from 'react-redux'
import * as actions from '../../Actions/Actions'
import React, { Component } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import logo from '../../images/energy.svg'
import coin from '../../images/coin.svg'
import perfil from '../../images/perfil.jpg'
import './Navegation.css'
import ModalCoins from "../Modales/ModalCoins"

Modal.setAppElement('#root')

class Nevegation extends Component {
    componentDidMount() {
        this.props.traerUsuario()
    }

    render() {
        return (
            <div className="Navegation__containder">
                <img src={logo} alt="logo" />
                <div className="Navegation__containder--links">
                    <Link
                        className="Navegation__containder--links--enlaces"
                        to="/Tercer-proyecto/"
                    >
                        Inicio
                    </Link>
                    <Link
                        className="Navegation__containder--links--enlaces"
                        to="/Tercer-proyecto/historia"
                    >
                        Historial
                    </Link>
                </div>
                <div className="Navegation__containder--monedas">
                    <p> Redimir Monedas: </p>
                    <button
                        onClick={() => {
                            this.props.agregarMonedas(1000)
                        }}
                    >
                        {' '}
                        <img src={coin} alt="moneda" /> 1000
                    </button>
                    <button
                        onClick={() => {
                            this.props.agregarMonedas(5000)
                        }}
                    >
                        <img src={coin} alt="moneda" /> 5000
                    </button>
                    <button
                        onClick={() => {
                            this.props.agregarMonedas(7500)
                        }}
                    >
                        <img src={coin} alt="moneda" /> 7500
                    </button>
                </div>
                <div className="Navegation__containder--perfil">
                    <img src={perfil} alt="perfil" />
                    <div className="Navegation__containder--perfil--texto">
                        <p className="Navegation__containder--perfil--texto-nombre">
                            {this.props.state.usuario.name !== ''
                                ? this.props.state.usuario.name
                                : ''}
                        </p>
                        <p className="Navegation__containder--perfil--texto-puntos">
                            <img src={coin} alt="moneda-perfil" />
                            {this.props.state.usuario.points !== ''
                                ? this.props.state.usuario.points
                                : ''}
                        </p>
                    </div>
                </div>

                <Modal
                    isOpen={this.props.state.nuevosPuntos !== '' ? true : false}
                >
                    <ModalCoins/>

                    <div className="boton-modal--container">
                        <button
                            className="boton-modal"
                            onClick={() => {
                                this.props.traerUsuario()
                            }}
                        >
                            Ok
                        </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    state: state,
})

const mapDispatchToProps = {
    traerUsuario: actions.traerUsuario,
    traerProductos: actions.traerProductos,
    agregarMonedas: actions.agregarMonedas,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Nevegation)
