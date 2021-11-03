import usersData from 'src/utils/users';

console.log(usersData[0]);
const initialState = {
  user: usersData[0],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
