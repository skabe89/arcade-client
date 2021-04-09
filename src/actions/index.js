export const getScores = () => {
  console.log("wow")
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch("http://localhost:3001/scores")
      .then(resp => resp.json())
      .then(data => dispatch({type: "ADD_SCORE", payload: data}))
  }
}

export const sumbitScore = (score) => {
  return dispatch => {
    fetch('http://localhost:3001/scores', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(score)
    })
      .then(resp => resp.json())
      .then(score => {
        dispatch({type: "ADD_SCORE", payload: score})
      })
  }
}