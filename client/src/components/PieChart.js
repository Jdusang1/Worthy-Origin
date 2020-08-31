import React from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import ghgData from "../data/wid.json";


const PieChartWID = () => {



  const data = [
    ghgData
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



  
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data[0]}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="Processing"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie> */}
      </PieChart>
    );
  
}

export default PieChartWID;