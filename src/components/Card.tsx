import { ReactNode } from 'react'

type CardProps = {
    bg?: string,
    children: ReactNode
}


const Card = ({ children, bg='bg-gray-100' }: CardProps) => {
  return (

    // Dynamic Class Name
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

export default Card