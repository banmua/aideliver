import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table';
import {Link} from 'react-router-dom';
import ShopContext, {getAdmins} from '../../../hooks/ShopContext';
import {Styles} from './style';

import makeData from './makeData';

const genColumnInfo = () => [
  {
    Header: 'Orders',
    columns: [
      {
        Header: 'user',
        accessor: 'user',
      },
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
        Header: 'DeliveryDT',
        accessor: 'deliveryDT',
      },
      {
        Header: 'OrderDT',
        accessor: 'orderDT',
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
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Entity',
        accessor: 'entity',
      },
      {
        Header: 'Coupon',
        accessor: 'referrer',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
  },
];

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

function Table({ columns, data, clickHeader,
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
              <th {...column.getHeaderProps()}><span onClick={() => clickHeader(column.id)} 
                    style={{
                      cursor: 'pointer'
                    }}
                >{column.render('Header')}</span></th>
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

const OrderTable = ({data: inputData = []})  => {
  const sortColumn = (data, column) => {
    const sortedData = data.sort((a, b) => {
      const aval = a[column];
      const bval = b[column];

      if (aval === bval) return 0;

      if (sort.direction === 'asc') {
        if (aval > bval) return 1;
        return -1;
      }

      if (bval > aval) return 1;
      return -1;
    });
    return [...sortedData]
  }

  const {state, dispatch} = useContext(ShopContext);
  const [sort, setSort] = useState({heading: 'orderDT', direction: 'desc'});
  const [data, setData] = useState(inputData);

  useEffect(() => {
    setData(sortColumn(inputData, sort.heading));
  }, [sort])

  const clickHeader = (columnId) => {
    setSort({...sort, heading: columnId, direction: sort.direction === 'asc' ? 'desc' : 'asc'});
    setData(sortColumn(data, sort.heading));
    dispatch({type: 'UPDATE', payload: {key: 'orders', value: sortColumn(data, columnId), parent: 'admin'}})
  }
  
  const columns = React.useMemo(genColumnInfo,[])

  const total = data.reduce((acc, item) => item.status === 'canceled' ? acc : acc + Number(item.total), 0);
  const ordered = data.reduce((acc, item) => item.status === 'ordered' ? acc + 1 : acc, 0);
  const confirmed = data.reduce((acc, item) => item.status === 'confirmed' ? acc + 1 : acc, 0);
  const canceled = data.reduce((acc, item) => item.status === 'canceled' ? acc + 1 : acc, 0);


  return (
    <Styles>
      <div>Search: {sort.heading}</div>
      <div style={{marginBottom: '10px'}}>
            *** Orders: {data.length}, 
            Total: ${total.toFixed(2)}, 
            Ordered: {ordered}, 
            Confirmed: {confirmed}, 
            Canceled: {canceled}, 
            { getAdmins().includes(state.login.userName) ? 
              <>
                <div><Link to="/admin">All</Link>,</div>
                <div><Link to="/admin/today">Today</Link>,</div>
                <div><Link to="/admin/tomorrow">Tomorrow</Link>,</div>
                <div><Link to={`/admin/range?fr=00:00:00&to=12:00:00`}>Trip A [before noon], </Link></div>
                <div><Link to={`/admin/range?fr=11:59:00&to=14:00:00`}>Trip B [12-2pm], </Link></div>
                <div><Link to={`/admin/range?fr=13:59:00&to=17:00:00`}>Trip C [2-5pm], </Link></div>
                <div><Link to={`/admin/range?fr=16:59:00&to=18:00:00`}>Trip D [5-6pm], </Link></div>
                <div><Link to={`/admin/range?fr=17:59:00&to=23:59:00`}>Trip E [after 6pm]</Link></div>
              </>
              : null }
      </div>
      <Table columns={columns} data={data?.length > 0 ? data : inputData} clickHeader={clickHeader}
        getRowProps={row => {
          const status = row.values.status;
          return {style: {backgroundColor: getBackgroundColor(status)}}
          }
        } />
    </Styles>
  )
}

export default OrderTable;