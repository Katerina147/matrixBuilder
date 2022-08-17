import { FC } from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    label: string;
    className?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ label, className }) => (
    <Button variant="contained" className={className}>
        {label}
    </Button>
);
