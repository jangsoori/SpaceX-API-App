import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import React from "react";
import HomePage from "../components/Home/HomePage";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function Home() {
  const { isLoading, error, data, isFetching } = useQuery("nextMission", () =>
    fetch("https://api.spacexdata.com/v4/launches/next").then((res) =>
      res.json()
    )
  );
  return <Layout>{data && <HomePage nextLaunch={data && data} />}</Layout>;
}
