import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface GameServices {
  id: number;
  name: string;
  description: string;
}

interface ApiResponse {
  data: GameServices[];
  total: number;
  page: number;
  per_page: number;
}

const fetchGameServices = async (
  page: number,
  pageSize: number,
  filterValue: string
) => {
  const ApiKey = import.meta.env.VITE_APIKEYS;
  const Sign = import.meta.env.VITE_SIGNATURE;
  try {
    const requestDataGameServices = {
      key: ApiKey,
      sign: Sign,
      type: "services",
      filter_type: "game",
      filter_status: "available",
      filter_value: filterValue,
      page,
      per_page: pageSize,
    };
    const response = await axiosInstance.post<ApiResponse>(
      "/game-feature",
      requestDataGameServices,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const useFetchGameDiamonds = (
  page: number,
  pageSize: number,
  filterValue: string
) => {
  const queryKey = [
    "gameDiamonds",
    String(page),
    String(pageSize),
    filterValue,
  ];
  return useQuery({
    queryKey,
    queryFn: () => fetchGameServices(page, pageSize, filterValue)
  });
};
