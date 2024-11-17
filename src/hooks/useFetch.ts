import { useCallback, useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Response not ok ${response.status}`);
            const data = await response.json();
            if (data) setData(data);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => { fetchData() }, []);

    const refreshData = () => fetchData();
    return { data, loading, refreshData };
}