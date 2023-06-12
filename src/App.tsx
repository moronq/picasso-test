import { Outlet } from 'react-router-dom'

import { Modal } from './components'
import { useApp } from './useApp'

const App = () => {
  const { triggerModal, isModalActive, notificationMessage, setIsModalActive, timeOutId } = useApp()
  return (
    <div className='max-w-6xl mx-auto p-4 relative'>
      <Outlet context={{ triggerModal }} />
      {isModalActive && timeOutId && (
        <div className='fixed bottom-10 right-10'>
          <Modal
            action={notificationMessage}
            setIsModalActive={setIsModalActive}
            timeOutId={timeOutId}
          />
        </div>
      )}
    </div>
  )
}

export default App
