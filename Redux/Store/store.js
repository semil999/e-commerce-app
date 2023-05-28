import { createWrapper } from "next-redux-wrapper";

const { createStore, applyMiddleware } = require("redux");
const { rootReducer } = require("../Reducer/rootReducer");
const { default: thunk } = require("redux-thunk");

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);