const INITIAL_STATE = {
    moviesName: [],
    favNumber:0
  };
  
  export function MovieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "DELETE_MOVIE":
          for (let index = 0; index < state.moviesName.length; index++) {
              if(state.moviesName[index].id === action.payload.id){
                  state.moviesName.splice(index,1);
                  state.favNumber = state.favNumber - 1;
              }
          }
        return {
          ...state,
        };
      case "ADD_MOVIE":
          state.moviesName.push(action.payload);
          state.favNumber = state.favNumber + 1;
        return {
          ...state
        };
      default:
        return state;
    }
  }