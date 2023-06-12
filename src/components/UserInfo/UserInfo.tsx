import React from 'react'

interface UserInfoProps {
  user: User
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <ul className='self-start'>
    <li>
      <span>name:</span>
      <span> {user.name}</span>
    </li>
    <li>
      <span>website:</span>
      <span> {user.website}</span>
    </li>
    <li>
      <span>phone:</span>
      <span> {user.phone}</span>
    </li>
    <li>
      <span>company:</span>
      <span> {user.company && user.company.name}</span>
    </li>
    <li>
      <span>city:</span>
      <span> {user.address && user.address.city}</span>
    </li>
  </ul>
)
