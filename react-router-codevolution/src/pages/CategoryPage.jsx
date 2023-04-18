import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import MenCategoryPage from './MenCategoryPage';
import WomenCategoryPage from './WomenCategory';

function CategoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showCategory = searchParams.get('filter');
  return (
    <div>
      <h1> Category</h1>
      <button onClick={() => setSearchParams({ filter: 'men' })}>Men</button>
      <button onClick={() => setSearchParams({ filter: 'women' })}>
        Women
      </button>
      <button onClick={() => setSearchParams({})}>Reset</button>
      <Outlet />
      {showCategory === 'men' ? (
        <MenCategoryPage />
      ) : showCategory === 'women' ? (
        <WomenCategoryPage />
      ) : (
        <h3>All Categories</h3>
      )}
    </div>
  );
}

export default CategoryPage;
