import React from "react";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import root from "./index"
function App() {
  console.log("Redux Store:", appStore);

    return (
      
        (
          <Provider store={appStore}> 
            <Body />
          </Provider>
        ) 
    )
}

export default App;