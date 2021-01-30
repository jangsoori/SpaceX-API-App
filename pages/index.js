import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import React from "react";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  const { response, error, isLoading } = useFetch(
    `https://api.spacexdata.com/v4/launches/next`
  );

  return (
    <Layout>
      <HomePage nextLaunch={response && response} />
    </Layout>
  );
}
