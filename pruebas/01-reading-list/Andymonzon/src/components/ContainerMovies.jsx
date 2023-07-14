import { CardMovie } from './CardMovie'
import { useBookContext } from '../hooks/useBookContext'

function ContainerMovies () {
  const { book } = useBookContext()

  return (
        <div className='flex gap-5 flex-col'>
            <main className='w-full grid grid-cols-[repeat(auto-fill,minmax(135px,1fr))] gap-3 grid-rows-[repeat(auto-fill,minmax(240px,240px))] p-5'>
                {
                    book.map((book, index) => (
                        <CardMovie book={book.book} key={index} />
                    ))
                }
            </main>
        </div >
  )
}

export { ContainerMovies }
