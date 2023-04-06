import { Reducer,legacy_createStore } from "redux";

const reduce=(state={counter:0},action)=>{
  if(action.type==='increment'){
    return{
        counter:state.counter+2
    }
  }
  if(action.type==='decrement'){
    return{
        counter:state.counter-2
    }
  }

  if(action.type==='incrementby5'){
    return{
        counter:state.counter+5
    }
  }

  if(action.type==='decrementby5'){
    return{
        counter:state.counter-5
    }
  }
  return state
}

const store=legacy_createStore(reduce)

// const counterSubscriber=()=>{
//     const latestState=store.getState()
//     console.log(latestState)
// }

// store.subscribe(counterSubscriber)

// store.dispatch({type:'increment'})

export default store