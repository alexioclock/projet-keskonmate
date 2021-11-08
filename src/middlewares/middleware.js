import { LOG_IN } from 'src/actions/actions';

const middleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case LOG_IN:
      console.log('on a mis en place le middleware');
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default middleware;
