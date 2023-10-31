import { api } from "../../utils/axios"



export const newArrivalProductsList = async () => {
  try {
    const response = await api.get('?limit=4')
    return response
  } catch (error) {
    console.log(error, "error");
  }
}