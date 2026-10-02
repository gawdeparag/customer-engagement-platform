import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "../services/customerService.js";

function useCustomersData() {
    const {
        data: customers,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["customers"],
        queryFn: fetchCustomers,
        staleTime: 5 * 60 * 1000,
    });

    return {
        customers: customers ?? [],
        isLoading,
        isError,
        error,
        refetch,
    };
}

export default useCustomersData;
