import { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import { When } from 'react-if';

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel = (props: PropsWithChildren<TabPanelProps>) => {
  const { children, value, index, ...other } = props;

  const isHidden = value !== index;

  return (
    <When condition={!isHidden}>
      <Box role="tabpanel" {...other}>
        {children}
      </Box>
    </When>
  );
};

export default TabPanel;
