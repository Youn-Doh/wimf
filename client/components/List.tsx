import { useQuery } from '@tanstack/react-query'

import { getIngredients } from '../apis/wimf'
import Details from './Details'
import { useParams } from 'react-router-dom'

export default function List() {
  const { list } = useParams()
  const { data } = useQuery(['ingredients', list], () =>
    getIngredients(list as string)
  )
  return (
    data && (
      <>
        <ul className="ingredients-list">
          {data.map((item) => (
            <div key={item.id}>
              <Details name={item.name} image={item.image} units={item.units} />
            </div>
          ))}
        </ul>
      </>
    )
  )
}
