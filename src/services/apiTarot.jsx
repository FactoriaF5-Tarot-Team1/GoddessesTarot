import axios from "axios";

axios.defaults.baseURL =
  "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/";

export const apiTarot = () => {
  const getCardById = async (id) => {
    const response = await axios.get(id);
    return response.data;
  };

  return {
    getCardById,
  };
};
