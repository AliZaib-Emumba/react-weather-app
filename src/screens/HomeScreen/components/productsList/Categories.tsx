import { useEffect, useState } from 'react';
import { Chip, Stack } from '@mui/material';

import { CategoryType } from '../../../../types';
import { fetchCategories } from '../../../../services';

interface CategoryProps {
  activeId: string;
}

interface CategoryItemProps {
  data: CategoryType;
  isActive: boolean;
}

const CategoryItem = (props: CategoryItemProps) => {
  const {
    data: { name },
    isActive,
  } = props;

  const categoryColor = isActive ? 'primary' : 'default';

  const scrollToElement = (id: string) => {
    const yOffset = -250;
    const element = document.getElementById(id);
    if (element) {
      const y = element.offsetTop + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  };

  return (
    <Chip
      key={name}
      color={categoryColor}
      label={name}
      sx={{ ml: 4 }}
      onClick={() => {
        scrollToElement(name);
      }}
    />
  );
};

const Categories = (props: CategoryProps) => {
  const { activeId } = props;

  const [categoriesList, setCategoriesList] = useState<CategoryType[]>([]);

  const fetchAllCategories = async () => {
    try {
      const response = await fetchCategories();
      if (response.length) {
        const othersIndex = response.findIndex((item) => item.name === 'Others');
        response.push(response.splice(othersIndex, 1)[0]); // moves other category to last
        setCategoriesList(response);
      }
    } catch (e) {
      console.log('Error fetching categories');
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <Stack flexDirection={'row'} flexWrap={'wrap'} py={2} bgcolor={'white'} position={'fixed'} width={'100%'} top={180}>
      {categoriesList.map((item) => (
        <CategoryItem data={item} isActive={item.name === activeId} />
      ))}
    </Stack>
  );
};

export default Categories;
