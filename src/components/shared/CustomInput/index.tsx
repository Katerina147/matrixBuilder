import { ChangeEvent, FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type CustomInputProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
    onChange: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    value: string | number;
};

export const CustomInput: FC<CustomInputProps> = ({
    className,
    onChange,
    ...rest
}) => <TextField className={className} onChange={onChange} {...rest} />;
