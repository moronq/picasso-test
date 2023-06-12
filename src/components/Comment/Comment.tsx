import React from 'react'

import { UserIcon } from '../../static/icons/UserIcon'

interface CommentProps {
  comment: PostComment
}

export const Comment: React.FC<CommentProps> = ({ comment }) => (
  <li className='border-t flex gap-3 items-center p-3'>
    <div className='flex items-center justify-center'>
      <UserIcon width={40} height={40} />
    </div>
    <div>
      <p className='font-semibold'>{comment.name}</p>
      <div>{comment.body}</div>
    </div>
  </li>
)
