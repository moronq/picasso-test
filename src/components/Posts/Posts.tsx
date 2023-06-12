import { PostItem } from '..'

interface CarsViewProps {
  filtered: Post[]
}

export const Posts: React.FC<CarsViewProps> = ({ filtered }) => (
  <ul className='flex flex-wrap gap-4 justify-items-center'>
    {filtered.map((el) => (
      <PostItem key={el.id} body={el.body} id={el.id} title={el.title} userId={el.userId} />
    ))}
  </ul>
)
