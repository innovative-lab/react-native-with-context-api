import React from 'react'

import HomeState from "../states/homeState"


const HomeContext = React.createContext({
  ...HomeState,
  _updateHomeTitle: () => {},
  _updateHomeData: () => {}
})



export default HomeContext
