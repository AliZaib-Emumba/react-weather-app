import { Box, Card, Stack, Typography } from '@mui/material';

import { ProductType } from '../../../../types';

interface ProductCardProps {
  data: ProductType;
}

const ProductCard = (props: ProductCardProps) => {
  const {
    data: {
      title,
      description,
      price,
      category: { name, image },
    },
  } = props;
  return (
    <Card sx={{ mt: 5, p: 8 }}>
      <Stack flexDirection={'row'} alignItems={'center'}>
        <img width={80} height={80} src={image} alt={title} style={{ borderRadius: 40 }} />
        <Box ml={5} width={'100%'}>
          <Box>
            <Typography fontWeight={'bold'} variant="h6">
              {title}
            </Typography>
            <Typography color={'grey.500'} noWrap maxWidth={500} textOverflow={'ellipsis'}>
              {description}
            </Typography>
          </Box>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} pr={2}>
            <Typography> Price: {price}</Typography>
            <Typography>Category: {name}</Typography>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default ProductCard;
