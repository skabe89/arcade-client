const initialState = {
  user: {},
  scores: [],
  loading: true,
  scoresFetched: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOADING":
      console.log("wow-2")
      return {
        ...state,
        loading: true
      }
    case 'SET_USER':
      console.log(state)
      console.log(action)
      // if(action.payload.themeSong === null)
      return {
        ...state,
        user: action.payload
      }
      // else{
      // return {
      //   ...state,
      //   name: action.payload.name,
      //   userId: action.payload.id,
      //   themeSong: action.payload.song
      // }
      // }
    case 'SET_THEME_SONG':
      console.log(state)
      return {
        ...state,
        themeSong: action.payload
      }
    case 'ADD_SCORE':
      console.log("In the reducer")
      console.log(state)
      console.log(action)
      let newScore = {
        id: action.payload.id,
        gameId: action.payload.game_id,
        userId: action.payload.user_id,
        userName: action.payload.user_name,
        score: action.payload.score
      }
      return {
        ...state,
        scores: [...state.scores, newScore]
      }
    case 'SET_SCORES':
      console.log(state)
      return {
        ...state,
        loading: false,
        scores: action.payload
      }
    default:
      return state
    }
  }
        
export default userReducer