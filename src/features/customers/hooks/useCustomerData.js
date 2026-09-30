import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "../services/customerService.js";

function useCustomersData() {
    const {
        data: customers,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["customers"],
        queryFn: fetchCustomers,
    });

    return {
        customers: customers ?? [],
        isLoading,
        isError,
        error,
    };
}

export default useCustomersData;
