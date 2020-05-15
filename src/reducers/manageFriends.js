export function manageFriends(state, action) {
  console.log(state.friends.find((friend) => friend.id === action.id));
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.id),
      };
    default:
      return state;
  }
}
