import React from 'react';
import {
  Tooltip, Funnel, FunnelChart, LabelList
} from 'recharts';
import ghgData from "../data/wid.json";

const Pyramid = () => {
  return (

    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel
        dataKey="value"
        data={ghgData[0]}
        isAnimationActive
      >
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  )
}

export default Pyramid;

