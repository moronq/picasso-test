import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

export const useMainPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [filtered, setFiltered] = useState<Post[]>([])
  const [activeUserId, setActiveUserId] = useState<null | number>(null)
  const { triggerModal } = useOutletContext<OutletContextProps>()

  useEffect(() => {
    setFiltered(posts)
  }, [posts])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => setUsers(res))
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res))
  }, [])

  useEffect(() => {
    if (activeUserId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${activeUserId}`)
        .then((res) => res.json())
        .then((res) => {
          setFiltered(res)
          triggerModal('Filter was changed')
        })
    } else {
      setFiltered(posts)
    }
  }, [activeUserId, posts])

  return { filtered, users, setActiveUserId }
}
