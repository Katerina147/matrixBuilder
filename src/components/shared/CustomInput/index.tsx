import { FC, ChangeEvent } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type CustomInputProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
    onChange: (value: string | number) => void | any;
    value: string | number;
};

export const CustomInput: FC<CustomInputProps> = ({
    className,
    onChange,
    ...rest
}) => {
    const handleChange = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
        onChange(event.target.value);
    };

    return (
        <TextField className={className} onChange={handleChange} {...rest} />
    );
};
