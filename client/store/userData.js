/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_USERS = 'GET_USERS'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

/* ------------   ACTION CREATORS     ------------------ */

const getUsers = users => ({type: GET_USERS, users})
const updateUser = userId => ({type: UPDATE_USER, userId})
const deleteUser = userId => ({type: DELETE_USER, userId})


/* ------------       THUNK CREATORS     ------------------ */

export const fetchUsersThunk = () => dispatch => {
  axios.get(`/api/users`)
    .then(res => dispatch(getUsers(res.date)))
    .catch(err => console.log(err))
}

export const updateUsersThunk = () => dispatch => {
  axios.get(`/api/users`)
    .then(res => dispatch(getUsers(res.date)))
    .catch(err => console.log(err))
}

/* ------------       REDUCERS     ------------------ */

export default function users (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case UPDATE_USER:
      return [...state, action.userId];
    case DELETE_USER:
      return state.filter(({id}) => id !== action.userId);
    default:
      return state;
  }
}
