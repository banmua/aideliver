import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import ShopContext from '../../hooks/ShopContext';
import Layout from '../Layout';

export default (props) => {
    const {state, dispatch} = useContext(ShopContext);
    const orders = state.admin.orders;
    const emails = state.admin.orders.map(obj => obj.email);
    const arr2 = emails.reduce((acc, item) => {
        const str = item.toLowerCase();
        if (acc && !acc.includes(str)) return [...acc, str];
        return acc;
    }, [])

    const arr = arr2.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)

    return (
        <Layout>
            <pre>{JSON.stringify(emails, null, 2)}</pre>
            <dev><h2>{`Arr (${arr.length})`}</h2></dev>
            <pre>{JSON.stringify(arr, null, 2)}</pre>
        </Layout>  
    )
}