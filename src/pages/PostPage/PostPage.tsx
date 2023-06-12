import { Link } from 'react-router-dom'

import { Input } from '../../common'
import { Comment, UserInfo } from '../../components'
import { ArrowIcon } from '../../static/icons'

import { usePostPage } from './hooks/usePostPage'

export const PostPage = () => {
  const { post, user, onLinkClick, comments, onSend } = usePostPage()

  if (!post || !user) return <div>loading</div>

  return (
    <div className='flex flex-col gap-10 items-center relative'>
      <div className='absolute left-0 top-3 hover:opacity-50 '>
        <Link to='/' onClick={onLinkClick}>
          <ArrowIcon width={28} height={14} transform='rotate(90)' />
          <span>back</span>
        </Link>
      </div>
      <h2 className='font-semibold text-3xl flex justify-center px-12'>{post.title}</h2>
      <UserInfo user={user} />
      <p>{post.body}</p>
      <div>Comments</div>
      <ul className='flex flex-col'>
        {comments.map((el) => (
          <Comment key={el.id} comment={el} />
        ))}
      </ul>
      <div className='w-full h-20'>
        <Input callback={onSend} />
      </div>
    </div>
  )
}
