import {useState, useEffect} from 'react';
import { axiosInstance } from '@/lib/axios';
import{useParams} from 'react-router'

interface GameServices{
  id: number;
  name: string;
  description:string;
}

interface ApiResponse{
  data: GameServices[];
}

export const useFetchGameDiamonds = () => {
  const [gameServices, setGameServices] = useState<GameServices[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {filterValue} = useParams();
  const ApiKey = import.meta.env.VITE_APIKEYS;
  const Sign = import.meta.env.VITE_SIGNATURE;

  const fetchGames = async (filterValue: string):Promise<void> =>{
    setIsLoading(true)
    try {
      const dataGameServices = {
        key: ApiKey,
        sign: Sign,
        type: 'services',
        filter_type: 'game',
        filter_status: 'available',
        filter_value: filterValue,
      }
      const response = await axiosInstance.post<ApiResponse>('/game-feature', dataGameServices, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
      setGameServices(response.data.data);
    } catch (err) {
      console.error(err);
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if(filterValue){
      fetchGames(filterValue)
    }
  }, []);

  return{
    data: gameServices,
    isLoading: isLoading
  }

}