import config from "@/config";
import useQuery from "./core/use_query";
import EnvSensorsData from "@/types/env_sensors_data";

export default function useGetSensorsData() {
    const { isLoading, isError, refetch, data } = useQuery<EnvSensorsData>({
        url: `${config.API_URL}/sensors/environment`,
        refetchInterval: 10000,
    });

    return { isLoading, isError, refetch, data };
}
