import useSWR from "swr";

type Method = "GET" | "POST" | "PUT" | "DELETE";

export default function useSWRHook(url: string, method?: Method, body?: any) {
  const res = useSWR(
    url,
    (url: string) =>
      fetch(`${process.env.BASE_URL}/${url}`, {
        method: method ?? "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    {
      keepPreviousData: true,
      
    },
  );

  const { data, error, isLoading } = res;

  return {
    data,
    error,
    isLoading,
  };
}
