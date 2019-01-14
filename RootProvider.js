import React from 'react'

import HomeContext, {HomeData, HomeTitle} from './Contexts/HomeContext'
import SettingContext from './Contexts/SettingContext'
import LinkContext from './Contexts/LinkContext'

import RootState from "./RootState"


class RootProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...RootState,
      _updateHomeData: this._updateHomeData,
      _updateHomeTitle: this._updateHomeTitle
    }
  }

  _updateHomeData = (name = HomeData.name, age = HomeData.age) => {
    this.setState({
      name: name,
      age: age
    })
  }

  _updateHomeTitle = () =>{
    this.setState({
      title: 'title value updated'
    })
  }

  render() {
    console.log('state from RootProvider.js -- -- ',this.state)
    return (
      <HomeContext.Provider value={this.state}>
        <SettingContext.Provider>
          <LinkContext.Provider>{this.props.children}</LinkContext.Provider>
        </SettingContext.Provider>
      </HomeContext.Provider>
    )
  }
}

export default RootProvider
