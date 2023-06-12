import React from 'react'

import { useUsersSelect } from './hooks/useUsersSelect'

import styles from './UsersSelect.module.css'

interface UsersSelectProps {
  list: User[]
  setActiveUserId: React.Dispatch<React.SetStateAction<number | null>>
}

export const UsersSelect: React.FC<UsersSelectProps> = ({ list, setActiveUserId }) => {
  const filterListRef = React.useRef<HTMLDivElement>(null)

  const { active, activeUser, filterList, onClickHandler, onSelectHandler } = useUsersSelect({
    list,
    setActiveUserId,
    filterListRef
  })

  return (
    <div ref={filterListRef} className='relative'>
      <div className='flex w-72 border rounded-md p-2 justify-between gap-4'>
        <button className='flex justify-between gap-2 w-full' onClick={onClickHandler}>
          <div className={`${styles.select_icon_container} ${active ? styles.active : ''}`} />
          {activeUser || 'All users'}
        </button>
        {activeUser && (
          <button
            className=' w-6'
            onClick={(e) => {
              e.stopPropagation()
              onSelectHandler(null, null)
            }}
          >
            <div className={styles.clear_icon_container} />
          </button>
        )}
      </div>

      <ul className={`${styles.coin_list_container} ${active ? styles.active : ''}`}>
        {filterList &&
          filterList.map((el, index) => (
            <li
              className='cursor-pointer p-2 hover:text-white hover:bg-slate-500'
              key={index}
              aria-hidden
              onClick={() => onSelectHandler(el.username, el.userId)}
            >
              {el.username}
            </li>
          ))}
      </ul>
    </div>
  )
}
