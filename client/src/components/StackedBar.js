import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import ghgData from "../data/wid.json";
import styled from "styled-components";

const ChartWrapper = styled.div`
  div{

    margin: 10px auto;
  }
  
`

const data = ghgData
const StackedBar = () => {

  return (
    <ChartWrapper>

    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Land use change"fill="#526254" stackId="a" />
        <Bar dataKey="Animal Feed" fill="#424b3f" stackId="a" />
        <Bar dataKey="Farm" fill="#3f5961" stackId="a" />
        <Bar dataKey="Processing" fill="#87a6b0" stackId="a" />
        <Bar dataKey="Transport" fill="#cb5744" stackId="a" />
        <Bar dataKey="Packging" fill="#ec9a59" stackId="a" />
        <Bar dataKey="Retail" fill="#dbaa56" stackId="a" />
    </BarChart>
    </ChartWrapper>
  );
}

export default StackedBar;
 
 