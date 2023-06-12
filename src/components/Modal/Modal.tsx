import React from 'react'

import { useModal } from './hooks/useModal'

import styles from './Modal.module.css'

interface ModalProps {
  action: string | null
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
  timeOutId: NodeJS.Timeout
}

export const Modal: React.FC<ModalProps> = ({ action, setIsModalActive, timeOutId }) => {
  const { hoverHandler, leaveHandler, onCloseClick } = useModal({ setIsModalActive, timeOutId })

  return (
    <div onMouseEnter={hoverHandler} onMouseLeave={leaveHandler} className={styles.container}>
      <div>{action}</div>
      <button onClick={onCloseClick}>
        <div className={styles.close} />
      </button>
    </div>
  )
}
