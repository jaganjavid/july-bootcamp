

import React from 'react'

import Header from './component/Header'

const App = () => {


  return (
    <div>
       
       <Header/>

       <Header title="jagan" bgColor="red" textColor="white"/>

       <div className='container'>
          <h1>Hello World</h1>    
       </div>
    </div>
  )
}

export default App


function add(x){
  console.log(x + 5);
}




