import React, { Fragment } from "react";
import EachMember from "../EachMember";
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import './Members.css'

let data = [
  {
    name: 'Hanah',
    expiry: '04/03/2023'
  },
  {
    name: 'Olivia',
    expiry: '11/23/2022'
  }
]
export default function(){
  // const tableRef = React.createRef();
return (
  <span className="member">
    <span className="all-members">
    <h4 className="table-title">ALL MEMEBERS:</h4>
    </span>
  {/* <Table
        virtualized
        height={400}
        data={data}
        // ref={tableRef}
        onRowClick={data => {
          console.log(data);
        }}
      >
        
        <Column width={100} align="center" fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column width={350}>
          <HeaderCell>Expires</HeaderCell>
          <Cell dataKey="expiry" />
        </Column> 

  </Table> */}
  </span>
)
}