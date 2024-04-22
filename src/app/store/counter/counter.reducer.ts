import { createReducer, on } from "@ngrx/store"
import {increaseCounter} from './counter.action'

 const inialState=0
 export const counterReducer=createReducer(
  inialState,
  on(increaseCounter,(state)=>state+1)
  )
