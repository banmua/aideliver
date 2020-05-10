import React, {useEffect, useState, useContext} from 'react';
import Admin from '../Admin';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext from '../../hooks/ShopContext';
import {Link, Redirect} from 'react-router-dom';
import {withCenter} from '../Layout/utils';

const Account = props => {
    const {state, dispatch} = useContext(ShopContext);
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        const fetch = async () => {
            try {
                const tokens = await Auth.currentSession();
                const userName = tokens.getIdToken().payload['cognito:username'];
                dispatch({type: 'UPDATE', payload: {key: 'userName', value: userName, parent: 'login'}})
                setUserName(userName);
            } catch (err) {
                console.log('error fetching orders ...', err.message, err);
            }
        }
        fetch();
    }, [userName])

    return <h2>Account</h2>
}

export default withCenter(withAuthenticator(Account, {includeGreetings: true}))