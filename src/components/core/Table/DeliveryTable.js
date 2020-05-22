import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table';
import {Link} from 'react-router-dom';

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`

const getBackgroundColor = status => {
  switch(status) {
    case 'canceled': return '#ffe6e6';
    case 'delivered': return '#e6ffe6';
    case 'completed': return '#ebebe0';
    case 'paid': return '#e6ffe6';
    case 'ordered': return '#e6ffff';
    case 'reordered': return '#fff9e6';
    case 'confirmed': return '#ffe6cc';
    case 'in-transit': return '#f5e6ff';
    default: return 'white';
  }
}

// Create a default prop getter
const defaultPropGetter = () => ({})

function Table({ columns, data, 
    getHeaderProps = defaultPropGetter,
    getColumnProps = defaultPropGetter,
    getRowProps = defaultPropGetter,
    getCellProps = defaultPropGetter,
  }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps(getRowProps(row))}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps([
                  {
                    className: cell.column.className,
                    style: cell.column.style,
                  },
                  getColumnProps(cell.column),
                  getCellProps(cell),
                ])}>{cell.column.Header === 'Id' ? <Link to={`/admin/${cell.value}`}>{cell.render('Cell')}</Link> : cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const OrderTable = ({data = []})  => {
  const columns = React.useMemo(() => [
      {
        Header: 'Orders',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'Products',
            accessor: 'products',
          },
          {
            Header: 'Phone',
            accessor: 'phone',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'DeliveryDT',
            accessor: 'deliveryDT',
          },
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
        ],
      },
    ],
    []
  )

  const total = data.reduce((acc, item) => item.status === 'canceled' ? acc : acc + Number(item.total), 0);
  const ordered = data.reduce((acc, item) => item.status === 'ordered' ? acc + 1 : acc, 0);
  const confirmed = data.reduce((acc, item) => item.status === 'confirmed' ? acc + 1 : acc, 0);
  const canceled = data.reduce((acc, item) => item.status === 'canceled' ? acc + 1 : acc, 0);


  return (
    <Styles>
      <div style={{marginBottom: '10px'}}>
            Orders: {data.length}, 
            Total: ${total.toFixed(2)}, 
            Ordered: {ordered}, 
            Confirm: {confirmed}, 
            Canceled: {canceled}, <Link to="/admin/today">Today</Link>, <Link to="/admin/tomorrow">Tomorrow</Link>,
            <Link to={`/admin/range?fr=00:00:00&to=12:00:00`}>Trip A</Link>
            <Link to={`/admin/range?fr=11:59:00&to=14:00:00`}>Trip B</Link>
            {/* <Link to={`/admin/range?fr=12:30:00&to=13:31:00`}>Trip C</Link> */}
            <Link to={`/admin/range?fr=13:59:00&to=17:00:00`}>Trip C</Link>
            <Link to={`/admin/range?fr=16:59:00&to=18:00:00`}>Trip D</Link>
            <Link to={`/admin/range?fr=17:59:00&to=23:59:00`}>Trip E</Link>
      </div>
      <Table columns={columns} data={data} 
        getRowProps={row => {
          const status = row.values.status;
          return {
              style: {backgroundColor: getBackgroundColor(status)}
            }
          }
        } />
    </Styles>
  )
}

export default OrderTable;