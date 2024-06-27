import useQuery from "./core/use_query";
import EnvSensorsData from "@/types/env_sensors_data";
import getBaseUrl from "@/utils/fetch";

export default function useGetSensorsData() {
    const { isLoading, isError, refetch, data } = useQuery<EnvSensorsData>({
        url: `${getBaseUrl()}/sensors/environment`,
        refetchInterval: 10000,
    });

    return { isLoading, isError, refetch, data };
}
