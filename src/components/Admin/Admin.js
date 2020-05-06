import React, {useEffect, useState, useContext} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listOrders as ListOrders } from '../../graphql/queries';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext from '../../hooks/ShopContext';
import OrderList from './parts/OrderList';

const Admin = props => {
    const {state, dispatch} = useContext(ShopContext);
    const [orders, setOrders] = useState(null);
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];

                const data = await API.graphql(graphqlOperation(ListOrders))

                console.log('>>> USER:', userName);
                setUserName(userName);
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
            <h2>Admin</h2>
            { ['PhuongLe', 'ThanhLe', 'ThachLe'].includes(userName) 
                ? <OrderList orders={orders} state={state} /> 
                : null }
        </div>
    )
}

export default withAuthenticator(Admin, {includeGreetings: true})