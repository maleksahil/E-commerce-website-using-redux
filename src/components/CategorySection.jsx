import React from 'react'
import ManCategory from '../assets/images/man.jpg'
import WomanCategory from '../assets/images/woman.jpg'
import KidCategory from '../assets/images/kid.jpg'

const Categories = [
    {
        title: 'Men',
        imageUrl: ManCategory,
    },
    {
        title: 'Women',
        imageUrl: WomanCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidCategory,
    },
]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {Categories.map((category,index)=> (
        <div key={index} className='relative h-64 transform transition-transform duration-100 hover:scale-105'>
              <img src={category.imageUrl} alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
              <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold'>{category.title}</p>
                <p className='text-gray-600'>View All</p>
              </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
