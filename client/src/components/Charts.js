import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import ghgData from "../data/wid.json";
import styled from "styled-components";
import Chart from "../components/WIDchart";
import { PieChart, Pie, Sector, Cell} from 'recharts';

const DropdownWrapper = styled.div`
  .scrollable {
  height: auto;
  max-height: 200px;
  overflow-x: hidden;
}
`

const Charts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] =useState([]);
  const [name, setName] = useState("")
  const COLORS = ["#424b3f", "#3f5961", "#87a6b0", "#cb5744", "#ec9a59", "#dbaa56" ]

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
    console.log(selected)
  }

  const setTargetName = e => {
    setName({name: e.target.value})
    console.log(name)
  }

  return (
    <>
      <DropdownWrapper>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Foods
          </DropdownToggle>
          <DropdownMenu 
            
            className="scrollable">
            {data.map(item => (
                <DropdownItem 
                  onClick={(e)=> setData(e)}
                  key={item.id}
                  landUse={item.land_use}
                  animalFeed={item.animal_feed}
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
    

    </>


  );
}

export default Charts;

