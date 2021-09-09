const baseURL = "https://arcade-api.herokuapp.com"

export const getScores = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(`${baseURL}/scores`)
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_SCORES", payload: data }))
  }
}

export const submitScore = (score) => {
  return (dispatch) => {
    fetch(`${baseURL}/scores`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ score })
    })
      .then(resp => resp.json())
      .then(score => {
        dispatch({ type: "ADD_SCORE", payload: score })
      })
  }
}

export const getMessages = () => {
  console.log("dispatching messages")
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch(`${baseURL}/messages`)
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_MESSAGES", payload: data }))
  }
}

export const findOrCreateUser = (username) => {
  return (dispatch) => {
    console.log(`${baseURL}/users`)
    fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: "SET_USER", payload: user })
      })
  }
}

export const submitThemeSong = (params) => {

  return (dispatch) => {
    console.log(params)
    fetch(`${baseURL}/users` + params.id, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ params })
    })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'SET_USER', payload: data }))
  }
}