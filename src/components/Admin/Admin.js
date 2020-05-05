import React, {useEffect, useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listOrders as ListOrders } from '../../graphql/queries';
import { withAuthenticator } from 'aws-amplify-react'

const Admin = props => {
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
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
            <h2>Admin</h2>
            <pre>{JSON.stringify(orders, null, 2)}</pre>
        </div>
    )
}

export default withAuthenticator(Admin, {includeGreetings: true})