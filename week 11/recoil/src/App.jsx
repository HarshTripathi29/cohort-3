import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {

  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);


  return (
    <>
      <div>
       <button>My Network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
       <button>Jobs ({jobsAtomCount})</button>
       <button>Messaging ({messagingAtomCount})</button>
       <button>Notifications ({notificationAtomCount})</button>
       <ButtonUpdater/>
      </div>
    </>
  )
}

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <button onClick={()=>{
    setMessagingAtomCount(c=>c+1);
  }}>
    Click to increment message
  </button>
}

export default App
