import axios from 'axios';

export const getHits = async (userInput = null) => {
  const query = userInput ? userInput.split(" ").join("+") : null;
  const isValidQuery = query != null && query.length <= 100;
  const res = await axios.get(`https://pixabay.com/api/?key=13055488-7e28d181f3875eee86a83eee3${isValidQuery ? "&q=" + query : ""}&orientation=horizontal`)

  return res.data;
}

