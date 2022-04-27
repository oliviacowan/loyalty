import React, { useState } from 'react';
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


  
  
  export default function Test({ data }) {
    const [unused, setUsed] = useState(false);
    
    let columns = [
      {
        name: 'Name:',
        selector: (row) => row.name,
      },
      {
        name: 'Expiry:',
        selector: (row) => row.expiry.slice(0, 10),
      },
      {
        name: '20% Used:',
        button: true,
        selector: (row) => row.used.toString(),
        // cell: function handleRowClick = () => row => {
          //   console.log(row);
          //  }
        },
        {
          button: true,
      cell: () => (
        <button
        type="button"
        className="use-now-btn"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        >
          Use Now
        </button>
      ),
      
    },
  ];
  const conditionalStyles = [ 
  {
    when: row => (row.used === 'false'),
    style: {
      backgroundColor: "green",
      userSelect: "none"
    }
  }
];
  return (
    <section className="table">
      <DataTable columns={columns} data={data} customStyles={customStyles} conditionalStyles={conditionalStyles}/>
    </section>
  );
}
