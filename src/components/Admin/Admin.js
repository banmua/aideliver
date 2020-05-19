import React, {useEffect, useState, useContext} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listOrders as ListOrders } from '../../graphql/queries';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext, {getAdmins} from '../../hooks/ShopContext';
import Table from './parts/Table';
import moment from 'moment';

const Admin = props => {
    const {state, dispatch} = useContext(ShopContext);
    const [orders, setOrders] = useState(null);

    const userName = state.login.userName;

    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];
                dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})

                const data = await API.graphql(graphqlOperation(ListOrders, {limit: 500}))

                const items = data.data.listOrders.items
                        .filter(obj => obj.entity.toLowerCase() === state.entity.id.toLowerCase())
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
        <div>
            <div>
            { getAdmins().includes(state.login.userName) 
                    ? <Table data={orders || []} />
                    : <h2>Not Accessible.</h2> }
            </div>
            {/* <AmplifySignOut /> */}
        </div>
    )
}

export default withAuthenticator(Admin);