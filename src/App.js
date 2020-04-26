// src/App.js
import React from 'react';

import { API, graphqlOperation, Auth } from 'aws-amplify'
// import uuid to create a unique client ID
import uuid from 'uuid/v4'

import { listTalks as ListTalks } from './graphql/queries'
// import the mutation
import { createTalk as CreateTalk } from './graphql/mutations'

import { withAuthenticator } from 'aws-amplify-react'

const CLIENT_ID = uuid()

class App extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    name: '', description: '', speakerName: '', speakerBio: '', talks: []
  }

  async componentDidMount() {
    // add this code to componentDidMount
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
    console.log('user info:', user.signInUserSession.idToken.payload)
  }

  // execute the query in componentDidMount
  async componentDidMount2() {
    try {
      const talkData = await API.graphql(graphqlOperation(ListTalks))
      console.log('talkData:', talkData)
      this.setState({
        talks: talkData.data.listTalks.items
      })
    } catch (err) {
      console.log('error fetching talks...', err)
    }
  }
  createTalk = async() => {
    const { name, description, speakerBio, speakerName } = this.state
    if (name === '' || description === '' || speakerBio === '' || speakerName === '') return

    const talk = { name, description, speakerBio, speakerName, clientId: CLIENT_ID }
    const talks = [...this.state.talks, talk]
    this.setState({
      talks, name: '', description: '', speakerName: '', speakerBio: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateTalk, { input: talk }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating talk...', err)
    }
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <>
        <input
          name='name'
          onChange={this.onChange}
          value={this.state.name}
          placeholder='name'
        />
        <input
          name='description'
          onChange={this.onChange}
          value={this.state.description}
          placeholder='description'
        />
        <input
          name='speakerName'
          onChange={this.onChange}
          value={this.state.speakerName}
          placeholder='speakerName'
        />
        <input
          name='speakerBio'
          onChange={this.onChange}
          value={this.state.speakerBio}
          placeholder='speakerBio'
        />
        <button onClick={this.createTalk}>Create Talk</button>
        {
          this.state.talks.map((talk, index) => (
            <div key={index}>
              <h3>{talk.speakerName}</h3>
              <h5>{talk.name}</h5>
              <p>{talk.description}</p>
            </div>
          ))
        }
      </>
    )
  }
}

export default withAuthenticator(App, {includeGreetings: true})