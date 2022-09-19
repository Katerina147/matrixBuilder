import { FC } from 'react';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

interface CustomTypographyProps {
    variant?: Variant;
    label: string;
    className?: string;
}

export const CustomTypography: FC<CustomTypographyProps> = ({
    variant,
    label,
    className
}) => (
    <Typography variant={variant} className={className}>
        {label}
    </Typography>
);
