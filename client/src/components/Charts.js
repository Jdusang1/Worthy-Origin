import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import ghgData from "../data/wid.json";
import styled from "styled-components";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';


const DropdownWrapper = styled.div`
  .scrollable {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
  }

  .button {
    padding: 10px 40px;
    font-size: 20px;
    border: none;
    font-size: 16px;
    background-color: #cb5744;

  }
`
const ChartWrapper = styled.div`
  div{
    margin: 10px auto;
  }
  
`

const Charts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] =useState([]);
  
  const data = ghgData;
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const setData = e => {
    const dropdownItem = e.target
   
    setSelected([{
      landUse: dropdownItem.getAttribute("landUse"),
      animalFeed: dropdownItem.getAttribute("animalFeed"),
      farm: dropdownItem.getAttribute("farm"), 
      processing: dropdownItem.getAttribute("processing"),
      transport: dropdownItem.getAttribute("transport"), 
      packaging: dropdownItem.getAttribute("packaging"), 
      retail: dropdownItem.getAttribute("retail"), 
      name: dropdownItem.getAttribute("name")
    }])

  }


const renderChart=(

      <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
        <BarChart
          data={selected}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="retail"  stroke="#8884d8" fill="#424b3f" />
          <Bar type="monotone" dataKey="packaging"  stroke="#82ca9d" fill="#3f5961" />
          <Bar type="monotone" dataKey="farm"  stroke="#ffc658" fill="#87a6b0" />
          <Bar type="monotone" dataKey="landUse"  stroke="#ffc658" fill="#cb5744" />
          <Bar type="monotone" dataKey="animalFeed"  stroke="#ffc658" fill="#ec9a59" />
          <Bar type="monotone" dataKey="transport"  stroke="#ffc658" fill="#ffc658" />
          <Bar type="monotone" dataKey="processing"  stroke="#ffc658" fill="#ffc658" />
      </BarChart>
          
        </ResponsiveContainer>
      </div>
)
  
  return (
    <>
      <DropdownWrapper>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="button">
            Foods
          </DropdownToggle>
          <DropdownMenu 
            
            className="scrollable">
            {data.map(item => (
                <DropdownItem 
                  onClick={(e)=> setData(e)}
                  key={item.id}
                  landuse={item.land_use}
                  animalfeed={item.animal_feed}
                  farm={item.Farm}
                  processing={item.Processing}
                  transport={item.Transport}
                  packaging={item.Packging}
                  retail={item.Retail}
                  name={item.name}
                  value={item.name}
                >
                  {item.name}
                </DropdownItem>
            ))}
      
          </DropdownMenu>
        </Dropdown>

      </DropdownWrapper>
    
      <ChartWrapper>
        {selected.length ? renderChart : <div></div>}
      </ChartWrapper>        
    </>
  );
}

export default Charts;

