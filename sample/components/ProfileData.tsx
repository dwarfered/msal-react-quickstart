import { fetcher } from "@/utils/msGraphFetcher";
import { graphConfig } from "@/authConfig";
import React from "react";
import useSWR from 'swr'

export type GraphData = {
  displayName: string;
  jobTitle: string;
  mail: string;
  businessPhones: string[];
  officeLocation: string;
};

export const ProfileData = () => {

  
  const { data, error, isLoading } = useSWR<GraphData>(graphConfig.graphMeEndpoint, fetcher );

  if (error) {
    console.log(error);
    return <div>Failed to fetch users.</div>;
  } 
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <ul>
    

    <li>displayName: {data?.displayName!}</li>
    <li>jobTitle: {data?.jobTitle}</li>
    <li>mail: {data?.mail}</li>
    <li>phone: {data?.businessPhones[0]}</li>
    <li>location: {data?.officeLocation}</li>
  </ul>
  );
};
