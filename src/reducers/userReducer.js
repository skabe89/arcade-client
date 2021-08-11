const initialState = {
  user: {},
  scores: [],
  loading: true,
  scoresFetched: false,
  messages: []
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
      return {
        ...state,
        user: action.payload
      }
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
        game_id: action.payload.game_id,
        user_id: action.payload.user_id,
        user_name: action.payload.user_name,
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
    case 'SET_MESSAGES':
      console.log(state)
      return {
        ...state,
        loading: false,
        messages: action.payload
      }
    default:
      return state
    }
  }
        
export default userReducer