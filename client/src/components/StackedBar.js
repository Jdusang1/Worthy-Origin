import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, Area, AreaChart
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
              <Area dataKey="Land use change" fill="#526254" stackId="a" />
              <Area dataKey="Animal Feed" fill="#424b3f" stackId="a" />
              <Area dataKey="Farm" fill="#3f5961" stackId="a" />
              <Area dataKey="Processing" fill="#87a6b0" stackId="a" />
              <Area dataKey="Transport" fill="#cb5744" stackId="a" />
              <Area dataKey="Packging" fill="#ec9a59" stackId="a" />
              <Area dataKey="Retail" fill="#dbaa56" stackId="a" />
          </AreaChart>

        </ResponsiveContainer>
      </div>
    </ChartWrapper>
  );
}

export default StackedBar;
 
 