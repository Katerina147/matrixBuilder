import { FC, ChangeEvent } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type CustomInputProps = Omit<TextFieldProps, 'onChange' | 'value'> & {
    onChange: (value: string | number) => void;
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
        const { value } = event.target;
        onChange(rest?.type === 'number' ? +value : value);
    };

    return (
        <TextField className={className} onChange={handleChange} {...rest} />
    );
};
