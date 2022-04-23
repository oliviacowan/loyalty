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
  </span>
  )
}