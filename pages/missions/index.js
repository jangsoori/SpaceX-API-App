import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import MissionsPage from "../../components/Missions/MissionsPage";
import useFetch from "../../hooks/useFetch";

export default function index() {
  const { response, error, isLoading } = useFetch(
    `https://api.spacexdata.com/v4/launches/past`
  );

  return (
    <Layout>
      <MissionsPage pastMissions={response && response} />
    </Layout>
  );
}
