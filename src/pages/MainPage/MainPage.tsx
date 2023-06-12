import { UsersSelect } from '../../common'
import { Posts } from '../../components'

import { useMainPage } from './hooks/useMainPage'

export const MainPage = () => {
  const { filtered, users, setActiveUserId } = useMainPage()
  return (
    <main>
      <div className='flex justify-end py-4'>
        <UsersSelect list={users} setActiveUserId={setActiveUserId} />
      </div>
      <Posts filtered={filtered} />
    </main>
  )
}
