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
    default:
      return state
  }
}

export default userReducer