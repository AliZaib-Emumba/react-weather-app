import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { useHeadsObserver } from '../../../../hooks/useHeadsObserver';
import { ProductType, ProductWithCategory } from '../../../../types';
import { fetchProductsWithCategories } from '../../../../services';
import { groupProducts } from '../../../../utils';
import ProductCard from './ProductCard';
import Categories from './Categories';

const ProductsList = () => {
  const [productsList, setProductsList] = useState<ProductWithCategory>({});
  const [isLoaded, setIsLoaded] = useState(false);

  const { activeId } = useHeadsObserver({ isLoaded });

  const fetchProducts = async () => {
    try {
      const response = await fetchProductsWithCategories();
      let groupedList = groupProducts(response);
      setProductsList(groupedList);
      setIsLoaded(true);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="productsList">
      <Categories activeId={activeId} />
      <Stack mt={30}>
        {Object.keys(productsList).map((keyName, i) => (
          <Box key={keyName} mt={5}>
            <Typography id={keyName} variant="h4">
              Category: {keyName}
            </Typography>
            {(productsList[keyName] as unknown as ProductType[]).map((item: ProductType) => (
              <ProductCard key={item.title} data={item} />
            ))}
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default ProductsList;
