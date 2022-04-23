import React, { useEffect } from 'react';
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
    selector: (row) => row.expiry .slice(0,10),
  },
  {
    name: '20% Off Used:',
    selector: (row) => row.used.toString(),
  },
];

export default function Test({ data }) {
  // const [unused, setUsed] = useEffect(false)
  if (data) {
  data.map((e) => {
    console.log('type', typeof e.expiry)
  });}
  return (
    <section className="table">
      <DataTable
        columns={columns}
        // truth={() => { console.log(true) } }
        data={data}
        customStyles={customStyles}
        // selectableRows
      />
    </section>
  );
}
