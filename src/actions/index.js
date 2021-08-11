
export const getScores = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch("http://localhost:3001/scores")
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_SCORES", payload: data }))
  }
}

export const submitScore = (score) => {
  return (dispatch) => {
    fetch('http://localhost:3001/scores', {
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
    fetch("http://localhost:3001/messages")
      .then(resp => resp.json())
      .then(data => dispatch({ type: "SET_MESSAGES", payload: data }))
  }
}

export const findOrCreateUser = (username) => {
  return (dispatch) => {
    console.log("user-2")
    fetch('http://localhost:3001/users', {
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
    fetch('http://localhost:3001/users/' + params.userId, {
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