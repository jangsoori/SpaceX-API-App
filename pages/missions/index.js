import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Layout from "../../components/Layout";
import MissionsPage from "../../components/Missions/MissionsPage";
import useFetch from "../../hooks/useFetch";

export default function index() {
  const { isLoading, error, data, isFetching } = useQuery("pastMissions", () =>
    fetch("https://api.spacexdata.com/v4/launches/past").then((res) =>
      res.json()
    )
  );
  console.log(data);
  return (
    <Layout>
      <MissionsPage pastMissions={data && data} />
    </Layout>
  );
}
