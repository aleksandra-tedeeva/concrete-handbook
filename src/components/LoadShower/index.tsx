import { Chip } from '@mui/material';
import { LoadType } from '../../pages/6_Calculations/1-bending-rc-strength';

export interface LoadShowerProps {
  load: LoadType;
  color?: string;
}

export default function LoadShower({ load, color }: LoadShowerProps) {
  return <Chip label={load} sx={{ color: color ? color : 'red' }} />;
}
