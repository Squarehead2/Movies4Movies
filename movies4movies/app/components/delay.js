//create a function that will delay the execution of a function

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export default delay;
