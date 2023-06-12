import { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { idGenerator } from '../../../utils'

export const usePostPage = () => {
  const { postId } = useParams<{ postId: string }>()

  const [post, setPost] = useState<Post | null>(null)
  const [user, setUser] = useState<User>({} as User)
  const [comments, setComments] = useState<PostComment[]>([])

  const { triggerModal } = useOutletContext<OutletContextProps>()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPost(res))
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((res) => setComments(res))
  }, [postId])

  useEffect(() => {
    if (post) {
      fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
        .then((res) => res.json())
        .then((res) => setUser(res))
    }
  }, [post])

  const onSend = (body: string) => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          body,
          email: 'some-email@lol.com',
          id: idGenerator(),
          name: 'user',
          postId
        })
      })
        .then((res) => res.json())
        .then((res) => {
          triggerModal('Comment sent')
          setComments([...comments, res])
        })
    }
  }

  const onLinkClick = () => {
    triggerModal('You jumped to all posts!')
  }
  return { post, user, onLinkClick, comments, onSend }
}
