import dataGenres from "../utils/genres";

const initialState = {
  // ici le state initial

    genreList: dataGenres,
};

function reducer(state = initialState, action) {
  switch (action.type) {

        
        


    default:
      return state;
  }
}

export default reducer;
