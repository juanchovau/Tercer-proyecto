import * as actionsTypes from '../Actions/ActionTpypes'

const INITIAL_STATE = {
    productos: [{ name: '', cost: '', category: '', img: { url: '' } }],
    usuario: { name: '', points: '' },
    redencion: ""
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionsTypes.TRAER_PRODUCTOS:
            return { ...state, productos: payload }

        case actionsTypes.TRAER_USUARIO:
            return { ...state, usuario: payload, redencion: "" }

        case actionsTypes.REDIMIR_PRODUCTO:
            return { ...state, redencion: payload }

        default:
            return state
    }
}

export default reducer
