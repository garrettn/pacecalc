// helper function to use in callbacks that need to return the value of a DOM event
const callWithValue = (fn) => (e) => fn(e.target.value)

export default callWithValue
