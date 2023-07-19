import { useTheme, useMediaQuery } from '@mui/material';

export function useBreakpoints() {
  const {
    breakpoints: { up, down },
  } = useTheme();

  const lgDown = useMediaQuery(down('lg'));
  const mdDown = useMediaQuery(down('md'));
  const smDown = useMediaQuery(down('sm'));
  const lgUp = useMediaQuery(up('lg'));
  const mdUp = useMediaQuery(up('md'));
  const smUp = useMediaQuery(up('sm'));

  return { lgDown, mdDown, smDown, lgUp, mdUp, smUp };
}
