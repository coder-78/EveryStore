import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createBrowserHistory } from 'history';

import monitorReducerEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import RootReducer from './RootReducer/RootReducer'

export const history = createBrowserHistory();
export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(RootReducer(history), preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./RootReducer/RootReducer', () => store.replaceReducer(RootReducer))
  }

  return store
}