import {useState, useEffect} from 'react';
import { axiosInstance } from '../lib/axios';

export const useFetchGameDiamonds = () => {
  const [gameServices, setGameServices] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const ApiKey = import.meta.env.VITE_APIKEYS;
  const Sign = import.meta.env.VITE_SIGNATURE;

  const dataGameServices = {
    key: ApiKey,
    sign: Sign,
    type: 'services',
    filter_type: 'game',
    filter_status: 'available',
    filter_value: 'Mobile Legends B',
  }

  const fetchGames = async () =>{
    setIsLoading(true)
    try {
      const response = await axiosInstance.post('/game-feature', dataGameServices, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      console.log(response.data)
      setGameServices(response.data.data)
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return{
    data: gameServices,
    isLoading: isLoading
  }

}