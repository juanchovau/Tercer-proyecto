import * as actionsTypes from '../Actions/ActionTpypes'

const INITIAL_STATE = {
    productos: [{ name: '', cost: '', category: '', img: { url: '' } }],
    usuario: { name: '', points: '' },
    redencion: '',
    nuevosPuntos: '',
    historia: []
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionsTypes.TRAER_PRODUCTOS:
            return { ...state, productos: payload }

        case actionsTypes.TRAER_USUARIO:
            return {
                ...state,
                usuario: payload,
                redencion: '',
                nuevosPuntos: '',
            }

        case actionsTypes.REDIMIR_PRODUCTO:
            return { ...state, redencion: payload }

        case actionsTypes.AGREGAR_PUNTOS:
            return { ...state, nuevosPuntos: payload }

        case actionsTypes.TRAER_HISTORIA:
            return { ...state, historia: payload }

        default:
            return state
    }
}

export default reducer
