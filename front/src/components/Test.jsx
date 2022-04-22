import React from 'react';
import './Test.css';
import DataTable, { defaultThemes } from 'react-data-table-component';

const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headCells: {
    style: {
      borderColor: defaultThemes.default.divider.default,
      borderWidth: '2px',
      borderStyle: 'solid',
      fontSize: '1.35em',
      fontWeight: 'bolder',
    },
  },
  cells: {
    style: {
      borderColor: defaultThemes.default.divider.default,
      borderWidth: '2px',
      borderStyle: 'solid',
      fontWeight: 'bold',
    },
  },
};

let columns = [
  {
    name: 'Name:',
    selector: (row) => row.name,
  },
  {
    name: 'Expiry:',
    selector: (row) => row.expiry,
  },
  {
    name: '20% Off Used:',
    selector: (row) => row.used,
  },
];



export default function Test( {data} ) {
  

  return (
    <section className="table">
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    {/* <h4>{props.data}</h4> */}
    </section>
  );
}
