import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, RadialBar, RadialBarChart} from 'recharts';
import ghgData from "../data/wid.json";
import styled from "styled-components";

const ChartWrapper = styled.div`
  div{

    margin: 10px auto;
  }
  
`


const Chart = () => {

  const data = [ghgData];
  console.log(data);
  

  const renderBarChart = (
 

    <BarChart width={1000} height={500} data={data[0]} >
      <XAxis  dataKey="name" stroke="#3f5961" />
      <YAxis label={{ value: 'GHG emissions per kg of food item', angle: -90, position: 'insideLeft' }} />
      <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
      {/* <Legend width={100} verticalAlign="top" /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="Transport" fill="#cb5744"  />
       

    </BarChart>

  );

  return (
    <ChartWrapper>
      <div>

        {renderBarChart}
      </div>
    
    </ChartWrapper>
  )
}
export default Chart