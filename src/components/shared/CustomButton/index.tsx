import { FC } from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({
    label,
    className,
    onClick
}) => (
    <Button variant="contained" className={className} onClick={onClick}>
        {label}
    </Button>
);
