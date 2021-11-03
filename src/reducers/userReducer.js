import usersData from 'src/utils/users';

const initialState = {
  user: usersData[0],
  isConnected: true,
  // isConnected: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default userReducer;
