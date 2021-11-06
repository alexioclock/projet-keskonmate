import userListsData from 'src/utils/userlists';

const initialState = {
  userLists: userListsData,

};

function userListsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default userListsReducer;
