import React, { RefObject } from 'react'

import { useOnClickOutside } from '../../../utils'

interface UseUsersSelectProps {
  list: User[]
  setActiveUserId: React.Dispatch<React.SetStateAction<number | null>>
  filterListRef: RefObject<HTMLDivElement>
}

export const useUsersSelect = ({ list, setActiveUserId, filterListRef }: UseUsersSelectProps) => {
  const [active, setActive] = React.useState(false)
  const [activeUser, setActiveUser] = React.useState<string | null>(null)

  const filterList = list.map((el) => ({
    username: el.username,
    userId: el.id
  }))

  useOnClickOutside(filterListRef, () => setActive(false))

  const onSelectHandler = (user: string | null, userId: number | null) => {
    setActiveUserId(userId)
    setActiveUser(user)
    setActive(false)
  }

  const onClickHandler = () => setActive(!active)

  return { active, activeUser, filterList, onClickHandler, onSelectHandler }
}
