import React, { useState } from 'react';


import ICON_NAME from '@common/Icon/enum';
import Category from './partials/Category';

import styles from './index..scss';

const CATEGORIES = [{
  id: 'home',
  icon: ICON_NAME.HOME,
  displayName: 'Main',
}, {
  id: 'news',
  icon: ICON_NAME.NEWS,
  displayName: 'News',
}, {
  id: 'video',
  icon: ICON_NAME.VIDEO,
  displayName: 'Videos',
}, {
  id: 'music',
  icon: ICON_NAME.MUSIC,
  displayName: 'Music',
}];

function Categories() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const handleCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.container}>
      {CATEGORIES.map(category => (
        <Category
          activeCategory={activeCategory}
          key={category.id}
          onClick={handleCategory}
          {...category}
        />
      ))}
    </div>
  );
}
export default Categories;
