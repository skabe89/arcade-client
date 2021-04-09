export const getScores = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch("http://localhost:3001/scores")
      .then(resp => resp.json())
      .then(data => console.log(data))
  }
}