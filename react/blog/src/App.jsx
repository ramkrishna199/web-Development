import { useEffect, useState } from 'react'
import './App.css'
import conf from './conf/conf'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'

function App() {
const [loading,setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
    dispatch(login({userData}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))
})
  return (
    <>
      {
      !loading?<>hiiiiii</>
      :null
      }
    </>
  )
}

export default App
