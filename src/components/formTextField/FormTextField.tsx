import { FieldProps, getIn } from 'formik';
import { TextFieldProps, TextField } from '@mui/material';

export const FormTextField: React.FC<
  FieldProps & TextFieldProps
> = props => {
  const isTouched = getIn(props.form.touched, props.field.name);
  const errorMessage = getIn(props.form.errors, props.field.name);
  const {
    error,
    helperText,
    field,
    form,
    type,
    placeholder,
    fullWidth,
    ...rest
  } = props;
  const { value, ...fieldRemain } = field;
  return (
    <TextField
      fullWidth={fullWidth?fullWidth:true}
      placeholder={placeholder ? placeholder : ''}
      variant='outlined'
      type={type ? type : 'text'}
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ??
        (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest}
      {...fieldRemain}
      value={value ?? "" }
    />
  );
};
