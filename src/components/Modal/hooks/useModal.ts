import React from 'react'

interface UseModalProps {
  timeOutId: NodeJS.Timeout
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const useModal = ({ setIsModalActive, timeOutId }: UseModalProps) => {
  const onCloseClick = () => {
    setIsModalActive(false)
  }

  const hoverHandler = () => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
  }

  const leaveHandler = () => {
    setTimeout(() => {
      setIsModalActive(false)
    }, 2000)
  }

  return { onCloseClick, hoverHandler, leaveHandler }
}
