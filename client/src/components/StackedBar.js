import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, Area, AreaChart
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
      <div style={{ width: '100%', height: 500 }}>
        <h4>Product Life Cycle Greenhouse Gas Emissions</h4>
        <h6>Hover over the chart to see emissions per lifecycle for each product in kg C02</h6>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
              <Area dataKey="land_use" fill="#E94128" stackId="a" />
              <Area dataKey="animal_feed" fill="#F18229" stackId="a" />
              <Area dataKey="Farm" fill="#EDD569" stackId="a" />
              <Area dataKey="Processing" fill="#458955" stackId="a" />
              <Area dataKey="Transport" fill="#3F628F" stackId="a" />
              <Area dataKey="Packging" fill="##E941289" stackId="a" />
              <Area dataKey="Retail" fill="#F18229" stackId="a" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

export default StackedBar;
 
 