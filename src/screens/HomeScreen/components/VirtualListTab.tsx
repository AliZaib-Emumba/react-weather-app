import { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getProductsData } from '../../../store/products/thunks';
import { selectProducts } from '../../../store/products/productsSlice';

const VirtualList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  const productsRow = ({ index, style }: { index: number; style: object }) => {
    const imageSrc = products.data[index].category.image;
    const title = products.data[index].title;
    const price = products.data[index].price;
    const description = products.data[index].description;

    return (
      <div style={style}>
        <Stack
          flexDirection={'row'}
          mx={2}
          px={6}
          py={4}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          borderBottom={1}
          borderColor={'grey.300'}
        >
          <img src={imageSrc} width={100} alt="" />
          <Box px={2} flex={1}>
            <Typography variant="h4">{title}</Typography>
            <Typography color={'grey.500'}>{description}</Typography>
          </Box>
          <Typography fontWeight={'bold'} variant="h6">
            {price}$
          </Typography>
        </Stack>
      </div>
    );
  };

  useEffect(() => {
    if (!products.data.length) {
      dispatch(getProductsData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.data.length]);

  return (
    <Stack border={1} borderColor={'grey.300'} height={'70vh'} mt={2}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List height={height} width={width} itemCount={products.data.length} itemSize={200}>
            {productsRow}
          </List>
        )}
      </AutoSizer>
    </Stack>
  );
};

export default VirtualList;
