const initialState = {
  name: "",
  character: "",
  themeSong: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
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
    default:
      return state
  }
}

export default userReducer