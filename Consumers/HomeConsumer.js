import React from 'react'

import HomeContext from '../Contexts/HomeContext'
import HomeScreen from '../screens/HomeScreen'

class HomeConsumer extends React.Component {
  render() {
    return (
      <HomeContext.Consumer>
        {value => {
          return <HomeScreen value={value} />
        }}
      </HomeContext.Consumer>
    )
  }
}

export default HomeConsumer
