import React, {useEffect, useState, useContext} from 'react';
import Admin from '../Admin';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext from '../../hooks/ShopContext';
import {Link, Redirect} from 'react-router-dom';
import {withCenter} from '../Layout/utils';
import Layout from '../Layout';
import Table from '../core/Table';
import { API, graphqlOperation } from 'aws-amplify'
import { listOrders as ListOrders } from '../../graphql/queries';
import moment from 'moment';

const Account = props => {
    const {state, dispatch} = useContext(ShopContext);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];
                dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})

                const data = await API.graphql(graphqlOperation(ListOrders, {limit: 500}))

                const items = data.data.listOrders.items
                        .filter(obj => obj.entity.toLowerCase() === state.entity.id.toLowerCase())
                        .filter(obj => userName === obj.user)
                        . map(item => {
                                return {
                                    ...item,
                                    deliveryDT: moment(item.deliveryDT).format("MM/DD/YYYY hh:mm A"),
                                    orderDT: moment(item.orderDT).format("MM/DD/YYYY hh:mm A"),
                                }
                            });

                setOrders(items);
                dispatch({type: 'SET_ORDERS', payload: {orders: items}})

            } catch (err) {
                console.log('error fetching orders ...', err.message, err);
            }
        }
        fetch();
    }, [state.login.userName])

    return (
        <Layout>
            <h2>Account: {state.login.userName}</h2>
            <Table data={orders || []} />
        </Layout> 
    )
}

export default withCenter(withAuthenticator(Account, {includeGreetings: true}))