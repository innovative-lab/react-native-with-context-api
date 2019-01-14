import React from "react";

const LinkContext = React.createContext({
  links:{},
  title: '',
  _updateOptions: ()=>{}
})

export default LinkContext