const initialState = {
  name: "",
  character: "",
  themeSong: [],
  scores: [],
  loading: true
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case 'SET_NAME':
      console.log(state)
      console.log(action)
      return {
        ...state,
        name: action.payload
      }
      case 'SET_THEME_SONG':
        console.log(state)
        return {
          ...state,
          themeSong: action.payload
        }
        case 'ADD_BOUNCE_SCORE':
          console.log("In the reducer")
          console.log(state)
          return {
            ...state,
            scores: [...state.scores, action.payload]
          }
          default:
            return state
          }
        }
        
export default userReducer