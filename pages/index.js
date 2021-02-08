import Layout from "../components/Layout";
import React from "react";
import HomePage from "../components/Home/HomePage";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, error, data, isFetching } = useQuery("nextMission", () =>
    fetch("https://api.spacexdata.com/v4/launches/next").then((res) =>
      res.json()
    )
  );
  return <Layout>{data && <HomePage nextLaunch={data && data} />}</Layout>;
}
