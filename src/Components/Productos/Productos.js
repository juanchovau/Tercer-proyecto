import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions/Actions'
import CardProducto from './CardProducto/CardProducto'
import Modal from 'react-modal'

class Productos extends Component {
    state = {
        filtroCategoria: 'Todas',
        filtroCosto: 'Todas',
        paginaActual: 1,
        articulosPorPagina:16
    }

    componentDidMount() {
        this.props.traerProductos()
    }

    setSelect = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    setPagina = (e) => {
        const { value} = e.target;
        this.setState({ paginaActual: value })
        
    }

    render() {
        const { filtroCategoria, filtroCosto, paginaActual, articulosPorPagina } = this.state
// Lógica filtro 
        const productosFiltrados =
            this.props.state.productos.lenght !== 1
                ? this.props.state.productos.filter(
                      (producto) =>
                          producto.category ===
                              (filtroCategoria !== 'Todas'
                                  ? filtroCategoria
                                  : producto.category) &&
                          (filtroCosto === "Todas"
                              ? producto.cost
                              : filtroCosto === 'Economicos'
                              ? producto.cost <= 900
                              : producto.cost >= 900)
                  )
                : []
    // Lógica paginación 
    const ultimoPostIndex =  paginaActual * articulosPorPagina;
    const primerPostIndex =  ultimoPostIndex - articulosPorPagina;
    const articulosPaginados= productosFiltrados.slice(primerPostIndex, ultimoPostIndex)
        return (
            <div>


                <select onChange={this.setSelect} name="filtroCategoria">
                    <option value="Todas" label="Todas" />
                    <option value="Phones" label="Phones" />
                    <option value="Gaming" label="Gaming" />
                    <option
                        value={`Tablets & E-readers`}
                        label={`Tablets & E-readers`}
                    />
                    <option value="Audio" label="Audio" />
                    <option value={`Monitors & TV`} label={`Monitors & TV`} />
                    <option value={`Smart Home`} label={`Smart Home`} />
                    <option
                        value={`Phone Accessories`}
                        label={`Phone Accessories`}
                    />
                    <option value={`PC Accessories`} label={`PC Accessories`} />
                    <option value="Cameras" label="Cameras" />
                    <option value="Drones" label="Drones" />
                </select>
                <select onChange={this.setSelect} name="filtroCosto">
                    <option value="Todas" label="Todas" />
                    <option value="Economicos" label="Más económicos" />
                    <option value="Exclusivos" label="Mas Exclusivos" />
                </select>
                <div>
                <button value={1} onClick={this.setPagina}  >{`<`}</button>
                <button value={2} onClick={this.setPagina}  >{`>`}</button>

                <p>Página {paginaActual} de {(Math.ceil(productosFiltrados.lenght / articulosPorPagina )) || 2}  </p>
                </div>
                {articulosPaginados.map((producto) => {
                    return (
                        <CardProducto
                            key={Math.random()}
                            puntosDisponibles={this.props.state.usuario.points}
                            id={producto._id}
                            name={producto.name}
                            cost={producto.cost}
                            category={producto.category}
                            img={producto.img.url}
                            historia={false}
                        />
                    )
                })}
                <Modal
                    isOpen={this.props.state.redencion !== '' ? true : false}
                >
                    {this.props.state.redencion === 'error' ? 'oh no' : 'yeaa'}
                    <button
                        onClick={() => {
                            console.log(this.props.state)
                        }}
                    >
                        log
                    </button>
                    <button
                        onClick={() => {
                            this.props.traerUsuario()
                        }}
                    >
                        Cerrar
                    </button>
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
