import { useState } from 'react'

export const useApp = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState<null | string>(null)
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout | null>(null)

  const triggerModal = (message: string) => {
    setNotificationMessage(message)
    setIsModalActive(true)
    const timeOutId = setTimeout(() => {
      setIsModalActive(false)
    }, 2000)
    setTimeOutId(timeOutId)
  }
  return {
    triggerModal,
    isModalActive,
    setIsModalActive,
    notificationMessage,
    setNotificationMessage,
    timeOutId
  }
}
