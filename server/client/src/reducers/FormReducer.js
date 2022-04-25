const FormReducer = (state, action) => {
  switch (action.type) {
    case 'ON CHANGE':
      return {
        ...state,
        [action.field] : [action.payload]
      }

    default:
      throw new Error();
  }
}

export default FormReducer;