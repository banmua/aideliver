import React, {useEffect, useState, useContext} from 'react';
import Admin from '../Admin';
import { withAuthenticator, AmplifySignOut, AmplifySignIn } from '@aws-amplify/ui-react'
import { Auth} from 'aws-amplify';
import ShopContext from '../../hooks/ShopContext';
import {Link} from 'react-router-dom';

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

    return (
        <div>
            <AmplifySignOut/>
            <Link to="/admin">Admin</Link>
        </div>
    )

    // return (
    //     <div>
    //         <AmplifySignOut/>
    //         { ['PhuongLe', 'ThanhLe', 'ThachLe'].includes(userName) 
    //             ? <Admin /> 
    //             : <h2>(This page is under construction.)</h2> }
    //     </div>
    // )
}

export default withAuthenticator(Account, {includeGreetings: true})