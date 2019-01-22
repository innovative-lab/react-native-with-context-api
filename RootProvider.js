import React from 'react'

import HomeContext, {HomeData, HomeTitle} from './Contexts/HomeContext'
import SettingContext from './Contexts/SettingContext'
import LinkContext from './Contexts/LinkContext'

import RootState from "./RootState"
import createStore from "./createStore"


class RootProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...RootState,
    }
  }


  render() {
    console.log('state from RootProvider.js -- -- ',this.state)
    return (
      <HomeContext.Provider value={createStore(this)}>
        <SettingContext.Provider>
          <LinkContext.Provider>{this.props.children}</LinkContext.Provider>
        </SettingContext.Provider>
      </HomeContext.Provider>
    )
  }
}

export default RootProvider
