import useQuery from "./core/use_query";
import ServiceData from "@/types/service_data";
import getBaseUrl from "@/utils/fetch";

export default function useGetServices(searchQuery: string) {
    const { isLoading, isError, refetch, data } = useQuery<ServiceData[]>({
        url: `${getBaseUrl()}/services`,
        queryDependencyParams: [searchQuery],
        searchParams: {
            name: searchQuery,
        },
        refetchInterval: 10000,
    });

    return { isLoading, isError, refetch, data };
}
