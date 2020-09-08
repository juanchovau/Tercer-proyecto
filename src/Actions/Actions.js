import * as actionTypes from "./ActionTpypes"


export const traerUsuario = () =>{
    
    return dispatch => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU1NjcxMDc0MjM1MjAwMWVkOTA5YTIiLCJpYXQiOjE1OTk0MzI0NjR9.yWntNtnRp4RYIy4HQ1zJ0f2enNVJSq2syLYPazrOH2s" 
      }
      fetch("https://coding-challenge-api.aerolab.co/user/me", { method: "GET", headers: headers})
        .then(res => res.json())
        .then(data =>{
            
            dispatch({
                type:actionTypes.TRAER_USUARIO,
                payload: data
            })
        })
    };
  }

  export const traerProductos = () =>{
    
    return dispatch => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU1NjcxMDc0MjM1MjAwMWVkOTA5YTIiLCJpYXQiOjE1OTk0MzI0NjR9.yWntNtnRp4RYIy4HQ1zJ0f2enNVJSq2syLYPazrOH2s" 
      }
      fetch("https://coding-challenge-api.aerolab.co/products", { method: "GET", headers: headers})
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type:actionTypes.TRAER_PRODUCTOS,
                payload: data
            })
        })
    };
  }

  export const redimirProducto = (id) =>{
    
    return dispatch => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU1NjcxMDc0MjM1MjAwMWVkOTA5YTIiLCJpYXQiOjE1OTk0MzI0NjR9.yWntNtnRp4RYIy4HQ1zJ0f2enNVJSq2syLYPazrOH2s",
            "Accept": "application/json"
        }

      fetch("https://coding-challenge-api.aerolab.co/redeem", { method: "POST", headers, body: JSON.stringify({productId: id })})
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            dispatch({
                type:actionTypes.REDIMIR_PRODUCTO,
                payload: data.error  ? "error" : "success"
            })
        })
    };
  }

export const agregarMonedas = (cantidad) =>{
    
    return dispatch => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU1NjcxMDc0MjM1MjAwMWVkOTA5YTIiLCJpYXQiOjE1OTk0MzI0NjR9.yWntNtnRp4RYIy4HQ1zJ0f2enNVJSq2syLYPazrOH2s",
            "Accept": "application/json"
        }
  

      fetch("https://coding-challenge-api.aerolab.co/user/points", { method: "POST", headers, body: JSON.stringify({amount: cantidad})})
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            dispatch({
                type:actionTypes.AGREGAR_PUNTOS,
                payload: "agregados"
            })
        })
    };
  }

  export const traerHistoria = () =>{
    
    return dispatch => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU1NjcxMDc0MjM1MjAwMWVkOTA5YTIiLCJpYXQiOjE1OTk0MzI0NjR9.yWntNtnRp4RYIy4HQ1zJ0f2enNVJSq2syLYPazrOH2s" 
      }
      fetch("https://coding-challenge-api.aerolab.co/user/history", { method: "GET", headers: headers})
        .then(res => res.json())
        .then(data =>{
            dispatch({
                type:actionTypes.TRAER_HISTORIA,
                payload: data
            })
        })
    };
  }
 
 


