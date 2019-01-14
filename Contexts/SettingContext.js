import React from "react";

const SettingContext = React.createContext({
  options:{},
  title: '',
  _updateOptions: ()=>{}
})

export default SettingContext