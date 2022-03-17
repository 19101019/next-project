import React from 'react';
import CategoryCard from '../assets/CategoryCard';

export default function BrowseByCategory() {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:p-10 md:grid-cols-2 gap-x-4'>
      <CategoryCard title='Art' />
      <CategoryCard title='collectibles' />
      <CategoryCard title='Domain names' />
      <CategoryCard title='Music' />
      <CategoryCard title='Photography' />
      <CategoryCard title='Sports' />
      <CategoryCard title='Trading cards' />
      <CategoryCard title='Utility' />
      <CategoryCard title='Virtual Worlds' />
      <CategoryCard title='Trading cards' />
    </div>
  );
}
