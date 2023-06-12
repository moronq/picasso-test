type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface PostComment {
  body: string
  email: string
  id: number
  name: string
  postId: number
}
interface OutletContextProps {
  triggerModal: (message: string) => NodeJS.Timeout
}
