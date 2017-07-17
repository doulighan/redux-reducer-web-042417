export function manageFriends(state, action){
    switch (action.type) {

      case 'ADD_FRIEND':
        return {...state, friends: [...state.friends, action.friend]}

      case 'REMOVE_FRIEND':
        let rmIdx = state.friends.findIndex( f => f.id === action.id )
        return {...state, friends: [
            ...state.friends.slice(0, rmIdx),
            ...state.friends.slice(rmIdx + 1)
          ]}

      default:
        return state
    }
  }

