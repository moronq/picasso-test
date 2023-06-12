import { Link, useOutletContext } from 'react-router-dom'

export const PostItem: React.FC<Post> = ({ body, id, title }) => {
  const { triggerModal } = useOutletContext<OutletContextProps>()

  const onLinkClick = () => {
    triggerModal('You discovered a new post!')
  }
  return (
    <Link onClick={onLinkClick} className='w-full' to={`posts/${id}`}>
      <li className='flex flex-col gap-2 border-2 border-gray-400 p-2 w-full rounded-xl hover:cursor-pointer hover:bg-slate-100'>
        <h3 className='capitalize'>{title}</h3>
        <p className='capitalize'>{body}</p>
      </li>
    </Link>
  )
}
