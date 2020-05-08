import React, {useEffect, useState, useContext} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listOrders as ListOrders } from '../../graphql/queries';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext from '../../hooks/ShopContext';
import OrderList from './parts/OrderList';
import {Link} from 'react-router-dom';
import Table from './parts/Table';

const Admin = props => {
    const {state, dispatch} = useContext(ShopContext);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];
                dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})

                const data = await API.graphql(graphqlOperation(ListOrders))
                setOrders(data);

            } catch (err) {
                console.log('error fetching orders ...', err.message, err);
            }
        }
        fetch();
    }, [])

    return (
        <div>
            <AmplifySignOut />
            <h2><a href="/">Home</a> / Admin</h2>
            <div>
            { ['PhoBalo', 'TrangPham', 'PhuongLe', 'ThanhLe', 'ThachLe'].includes(state.login.userName) 
                    // ? <OrderList orders={orders} state={state} /> 
                    ? <Table data={orders?.data ? orders.data.listOrders.items : []} />
                    : <h2>Not Accessible.</h2> }
            </div>
            
        </div>
    )
}

export default withAuthenticator(Admin);