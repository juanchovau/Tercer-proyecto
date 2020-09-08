import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardProducto from '../Productos/CardProducto/CardProducto'
import * as actions from '../../Actions/Actions'
import './Historia.css'

class Historia extends Component {
    state = {
        paginaActual: 1,
        articulosPorPagina: 16,
    }

    componentDidMount() {
        this.props.traerHistoria()
    }
    setPagina = (e) => {
        const { value } = e.target
        if (
            parseInt(this.state.paginaActual) + parseInt(value) < 1 ||
            parseInt(this.state.paginaActual) + parseInt(value) >
                Math.ceil(this.props.state.historia.length / 16)
        ) {
            return null
        }
        this.setState({
            paginaActual: parseInt(this.state.paginaActual) + parseInt(value),
        })
    }

    render() {
        const { paginaActual, articulosPorPagina } = this.state

        const ultimoPostIndex = paginaActual * articulosPorPagina
        const primerPostIndex = ultimoPostIndex - articulosPorPagina
        const articulosPaginados = this.props.state.historia.reverse().slice(
            primerPostIndex,
            ultimoPostIndex
        )
        return (
            <>
                <div className="Historia__contenedor--filtros-ContolesPaginacion">
                <h1>Historial</h1>
                    <div className="Productos__contenedor--filtros-ContolesPaginacion">
                        
                        <p>
                            Página {paginaActual} de{' '}
                            {Math.ceil(
                                this.props.state.historia.length /
                                    articulosPorPagina
                            )}
                        </p>
                        <div>
                            <button
                                className="Productos__contenedor--filtros-ContolesPaginacion-button"
                                value={-1}
                                onClick={this.setPagina}
                            >{`<`}</button>
                            <button
                                className="Productos__contenedor--filtros-ContolesPaginacion-button"
                                value={1}
                                onClick={this.setPagina}
                            >{`>`}</button>
                        </div>
                    </div>
                </div>
                <div className="Historia-container">
                    {articulosPaginados.map((producto) => {
                        return (
                            <CardProducto
                                key={Math.random()}
                                puntosDisponibles={
                                    this.props.state.usuario.points
                                }
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
            </>
        )
    }
}

const mapStatetoProps = (state) => ({
    state: state,
})

const mapDispatchToProps = {
    traerHistoria: actions.traerHistoria,
}

export default connect(mapStatetoProps, mapDispatchToProps)(Historia)
