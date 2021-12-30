import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

const InputField = ({ name, label, register, errors, ...props }) => {
  return (
    <FormControl mb="6" isInvalid={errors[name] && errors[name].message}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        type="text"
        id={name}
        placeholder="Your name"
        {...register(name, {
          required: "This field is required",
        })}
        {...props}
      />

      {errors[name] && (
        <FormErrorMessage>{errors[name].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
