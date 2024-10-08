import React, { useState } from 'react'

// Redux 활용 시
import {createStore} from "redux"
import {Provider, useSelector, useDispatch, connect } from 'react-redux'

function reducer(currentState, action) {
  if(currentState === undefined) {
    return {
      number:1,
    }
  }
  const newState = {...currentState}

  if(action.type === "PLUS") {
      newState.number++;
  }

  return newState;
}

const store = createStore(reducer);

import './App.css'


function App() {

  return (
    <div className='container' id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  )
}

export default App


function Left1(props){
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}

function Left2(props){
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(props){

  const number = useSelector(state=> state.number);

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  )
}

function Right1(props){
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

function Right2(props){
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}

function Right3(props){

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        dispatch({type:"PLUS"})
      }} />
    </div>
  )
}







// redux 미적용 시 코드

// function App() {
//   const [number, setNumber] = useState(1);


//   return (
//     <div className='container' id="container">
//       <h1>Root : {number}</h1>
//       <div id="grid">
//         <Left1 number={number}></Left1>
//         <Right1 onIncrease={()=>{
//           setNumber(number+1);
//         }}></Right1>
//       </div>
//     </div>
//   )
// }

// export default App


// function Left1(props){
//   return (
//     <div>
//       <h1>Left1 : {props.number}</h1>
//       <Left2 number={props.number}></Left2>
//     </div>
//   )
// }

// function Left2(props){
//   return (
//     <div>
//       <h1>Left2 : {props.number}</h1>
//       <Left3 number={props.number}></Left3>
//     </div>
//   )
// }

// function Left3(props){
//   return (
//     <div>
//       <h1>Left3 : {props.number}</h1>
//     </div>
//   )
// }

// function Right1(props){
//   return (
//     <div>
//       <h1>Right1</h1>
//       <Right2 onIncrease={() => {
//         props.onIncrease();
//       }}></Right2>
//     </div>
//   )
// }

// function Right2(props){
//   return (
//     <div>
//       <h1>Right2</h1>
//       <Right3 onIncrease={() => {
//         props.onIncrease();
//       }}></Right3>
//     </div>
//   )
// }

// function Right3(props){
//   return (
//     <div>
//       <h1>Right3</h1>
//       <input type="button" value="+" onClick={() => {
//         props.onIncrease();
//       }} />
//     </div>
//   )
// }