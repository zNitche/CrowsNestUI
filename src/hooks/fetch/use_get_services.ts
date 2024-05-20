import config from "@/config";
import useQuery from "./core/use_query";
import ServiceData from "@/types/service_data";

export default function useGetServices(searchQuery: string) {
    const { isLoading, isError, refetch, data } = useQuery<ServiceData[]>({
        url: `${config.API_URL}/services`,
        queryDependencyParams: [searchQuery],
        searchParams: {
            name: searchQuery,
        },
    });

    return { isLoading, isError, refetch, data: data ? data : [] };
}
