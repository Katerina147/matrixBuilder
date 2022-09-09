import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface CustomButtonIconProps {
    icon: ReactNode;
}

export const CustomButtonIcon: FC<CustomButtonIconProps> = ({ icon }) => (
    <Button>{icon}</Button>
);
