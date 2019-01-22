let HomeState = {
  title: 'Default home title',
  name: 'pratik',
  age: 24
}

export const _updateHomeData = (action,state) =>{
  // switch (action.type){
  //   case "HomeState.name.UPDATE":
  //   return HomeState = {
  //     ...HomeState,
  //     name: action.value.name
  //   }
  // }
}

export const _updateHomeTitle = (action,store) =>{
  
  console.log("HomeState",store)
  switch (action.type){
    case "HomeState.title.UPDATE":
    store.setState(
      {
        title: action.value.title
      }
    )
    return HomeState
  }
}

export default HomeState;