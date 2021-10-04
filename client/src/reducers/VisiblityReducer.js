const VisibilityReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {
        ...state,
        [action.payload] : !state.payload
      }

    default:
      throw new Error();
  }
}

export default VisibilityReducer;