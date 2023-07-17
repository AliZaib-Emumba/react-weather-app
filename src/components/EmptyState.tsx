import { Stack, Typography, Box } from '@mui/material';

interface EmptyStateProps {
  title: string;
}

const EmptyState = (props: EmptyStateProps) => {
  const { title } = props;
  return (
    <Stack justifyContent={'center'} alignItems={'center'} py={4}>
      <Box>
        <img
          height={250}
          src="https://cdn.dribbble.com/users/310943/screenshots/2792692/empty-state-illustrations.gif"
          alt="Empty State"
          style={{ objectFit: 'fill' }}
        />
      </Box>
      <Typography color={'gray'} variant="h6" textAlign={'center'}>
        {title}
      </Typography>
    </Stack>
  );
};

export default EmptyState;
