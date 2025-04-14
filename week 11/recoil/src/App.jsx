import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

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
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  const totalNotifications = useMemo(()=>{
    return networkNotificationCount+jobsAtomCount+notificationAtomCount+messagingAtomCount;
  },[networkNotificationCount, jobsAtomCount,notificationAtomCount, messagingAtomCount])

  return (
    <>
      <div>
       <button>My Network ({networkNotificationCount>=100?"99+":networkNotificationCount})</button>
       <button>Jobs ({jobsAtomCount})</button>
       <button>Messaging ({messagingAtomCount})</button>
       <button>Notifications ({notificationAtomCount})</button>
       <button>total notifications using memo {totalNotifications}</button>
       <button>total notifications using selector {totalNotificationCount}</button>
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
    increment message
  </button>
}

export default App
