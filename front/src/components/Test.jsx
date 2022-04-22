import React from "react";
import './Test.css'
import DataTable from 'react-data-table-component';


let columns = [
  {
      name: 'Name:',
      selector: row => row.name,
  },
  {
      name: 'Expiry:',
      selector: row => row.expiry,
  },
];

let data = [
  {
    id: 1,
    name: 'Hanah',
    expiry: '04/03/2023'
  },
  {
    id: 2,
    name: 'Olivia',
    expiry: '11/23/2022'
  }
]

export default function test() {
  return (
    <section className="table">
      <DataTable
    columns={columns}
    data={data}
/>
</section>
  )
}