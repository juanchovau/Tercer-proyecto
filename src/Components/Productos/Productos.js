import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions/Actions'
import CardProducto from './CardProducto/CardProducto'
import Modal from 'react-modal'
import Header from '../../images/header.png'
import ModalExito from '../Modales/ModalExito'
import ModalFail from '../Modales/ModalFail'
import './Productos.css'

Modal.setAppElement('#root')

class Productos extends Component {
    state = {
        filtroCategoria: 'Todas',
        filtroCosto: 'Todas',
        paginaActual: 1,
        articulosPorPagina: 16,
    }

    componentDidMount() {
        this.props.traerProductos()
    }

    setSelect = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    setPagina = (longitudFiltro, value) => {
        // const { value } = e.target
        // console.log("valor", )
        if (
            parseInt(this.state.paginaActual) + parseInt(value) < 1 ||
            parseInt(this.state.paginaActual) + parseInt(value) >
                Math.ceil(longitudFiltro / 16)
        ) {
            return null
        }
        this.setState({
            paginaActual: parseInt(this.state.paginaActual) + parseInt(value),
        })
    }

    render() {
        const {
            filtroCategoria,
            filtroCosto,
            paginaActual,
            articulosPorPagina,
        } = this.state
        // Lógica filtro
        const productosFiltrados =
            this.props.state.productos.lenght !== 1
                ? this.props.state.productos.filter(
                      (producto) =>
                          producto.category ===
                              (filtroCategoria !== 'Todas'
                                  ? filtroCategoria
                                  : producto.category) &&
                          (filtroCosto === 'Todas'
                              ? producto.cost
                              : filtroCosto === 'Economicos'
                              ? producto.cost <= 900
                              : producto.cost >= 900)
                  )
                : []
        // Lógica paginación
        const ultimoPostIndex = paginaActual * articulosPorPagina
        const primerPostIndex = ultimoPostIndex - articulosPorPagina
        const articulosPaginados = productosFiltrados.slice(
            primerPostIndex,
            ultimoPostIndex
        )
        return (
            <div>
                <div>
                    <img src={Header} alt="bigHeroImg" />
                </div>
                <div className="Productos__contenedor">
                    <div className="Productos__contenedor--filtros">
                        <div className="Productos__contenedor--filtros-inputs">
                            <p>Filtros</p>

                            <div className="Productos__contenedor--filtros-inputs-casillas">
                                Categorias:
                                <select
                                    onChange={this.setSelect}
                                    name="filtroCategoria"
                                >
                                    <option value="Todas" label="Todas" />
                                    <option value="Phones" label="Phones" />
                                    <option value="Gaming" label="Gaming" />
                                    <option
                                        value={`Tablets & E-readers`}
                                        label={`Tablets & E-readers`}
                                    />
                                    <option value="Audio" label="Audio" />
                                    <option
                                        value={`Monitors & TV`}
                                        label={`Monitors & TV`}
                                    />
                                    <option
                                        value={`Smart Home`}
                                        label={`Smart Home`}
                                    />
                                    <option
                                        value={`Phone Accessories`}
                                        label={`Phone Accessories`}
                                    />
                                    <option
                                        value={`PC Accessories`}
                                        label={`PC Accessories`}
                                    />
                                    <option value="Cameras" label="Cameras" />
                                    <option value="Drones" label="Drones" />
                                </select>
                            </div>
                            <div className="Productos__contenedor--filtros-inputs-casillas">
                                Costo
                                <select
                                    onChange={this.setSelect}
                                    name="filtroCosto"
                                >
                                    <option value="Todas" label="Todas" />
                                    <option
                                        value="Economicos"
                                        label="Más económicos"
                                    />
                                    <option
                                        value="Exclusivos"
                                        label="Mas Exclusivos"
                                    />
                                </select>
                            </div>
                        </div>

                        <div className="Productos__contenedor--filtros-ContolesPaginacion">
                            <p>
                                Página {paginaActual} de
                                {Math.ceil(
                                    productosFiltrados.length / articulosPorPagina
                                )}
                            </p>
                            <div>
                                <button
                                    className="Productos__contenedor--filtros-ContolesPaginacion-button"
                                    value={-1}
                                    onClick={()=>{this.setPagina(productosFiltrados.length, -1)}}
                                >{`<`}</button>
                                <button
                                    className="Productos__contenedor--filtros-ContolesPaginacion-button"
                                    value={1}
                                    onClick={()=>{this.setPagina(productosFiltrados.length, 1)}}
                                >{`>`}</button>
                            </div>
                        </div>
                    </div>
                    <div className="Productos__contenedor--productos">
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
                                    historia={false}
                                />
                            )
                        })}
                    </div>
                </div>

                <Modal
                    isOpen={this.props.state.redencion !== '' ? true : false}
                    onRequestClose={() => {
                        console.log(this.props.state)
                    }}
                >
                    {this.props.state.redencion === 'error' ? (
                        <ModalFail />
                    ) : (
                        <ModalExito />
                    )}
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
}

export default connect(mapStatetoProps, mapDispatchToProps)(Productos)
