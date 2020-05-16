import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

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
                ])}>{cell.render('Cell')}</td>
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
            Header: 'Total',
            accessor: 'total',
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
            Header: 'OrderDT',
            accessor: 'orderDT',
          },
          {
            Header: 'Id',
            accessor: 'id',
          },
          {
            Header: 'Entity',
            accessor: 'entity',
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

  return (
    <Styles>
      <div style={{marginBottom: '10px'}}>Orders: {data.length}, Total: ${total.toFixed(2)}</div>
      <Table columns={columns} data={data} 
        getRowProps={row => {
          const status = row.values.status;
          return {
              style: {
                backgroundColor: status === 'canceled'
                        ? '#ffe6e6'
                        : status === 'delivered'
                            ? '#e6ffe6'
                            : status === 'ordered'
                                ? '#e6ffff'
                                : 'white'
              }
            }
          }
        } />
    </Styles>
  )
}

export default OrderTable;