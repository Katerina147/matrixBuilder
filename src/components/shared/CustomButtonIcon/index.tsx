import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface CustomButtonIconProps {
    icon: ReactNode;
    onClick?: () => void;
}

export const CustomButtonIcon: FC<CustomButtonIconProps> = ({
    icon,
    onClick
}) => <Button onClick={onClick}>{icon}</Button>;
