import { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { selectProducts, selectProductsLength } from '../../../store/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getProductsData } from '../../../store/products/thunks';
import { useBreakpoints } from '../../../hooks';

const ProductsRow = ({ index, style }: { index: number; style: object }) => {
  const { data } = useAppSelector(selectProducts);
  const { mdDown } = useBreakpoints();

  const {
    category: { image },
    title,
    price,
    description,
  } = data[index];

  const flexDirection = mdDown ? 'column' : 'row';

  return (
    <div style={style}>
      <Stack
        flexDirection={flexDirection}
        mx={2}
        px={{ xs: 2, md: 6 }}
        py={4}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        borderBottom={1}
        borderColor={'grey.300'}
      >
        <Stack flexDirection={'row'} alignItems={'stretch'}>
          <img src={image} width={100} alt="" />
          {mdDown && (
            <Box ml={3}>
              <Typography variant="h5">{title}</Typography>

              <Typography fontWeight={'bold'} variant="h6">
                {price}$
              </Typography>
            </Box>
          )}
        </Stack>
        <Box px={!mdDown ? 2 : undefined} flex={1}>
          {!mdDown && <Typography variant="h4">{title}</Typography>}
          <Typography color={'grey.500'}>{description}</Typography>
        </Box>
        {!mdDown && (
          <Typography fontWeight={'bold'} variant="h6">
            {price}$
          </Typography>
        )}
      </Stack>
    </div>
  );
};

const VirtualList = () => {
  const dispatch = useAppDispatch();
  const productslength = useAppSelector(selectProductsLength);

  const { mdDown } = useBreakpoints();
  const itemSize = mdDown ? 220 : 200;

  useEffect(() => {
    if (!productslength) {
      dispatch(getProductsData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productslength]);

  return (
    <Stack border={1} borderColor={'grey.300'} height={'70vh'} mt={2}>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List height={height} width={width} itemCount={productslength} itemSize={itemSize}>
            {ProductsRow}
          </List>
        )}
      </AutoSizer>
    </Stack>
  );
};

export default VirtualList;
