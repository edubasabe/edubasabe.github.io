import React, { useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputField from "../UI/InputField/InputField";
import { validateCAPTCHA, sendEmail } from "../../api/index";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isValidCAPTCHA, setIsValidCAPTCHA] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  async function handleCAPTCHAChange(token) {
    try {
      const { status } = await validateCAPTCHA(token);
      if (status === 200) {
        setIsValidCAPTCHA(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleFormSubmit = async ({ full_name, email, message }) => {
    setLoading(true);

    try {
      await sendEmail({ full_name, email, message });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      maxW="xl"
      bgColor="white"
      p={["8", "10"]}
      rounded="md"
      boxShadow="md"
      direction={"column"}
      minWidth={"md"}
    >
      {!submitted && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputField
            name="full_name"
            label="Name"
            errors={errors}
            register={register}
            disabled={loading}
          />
          <FormControl mb="6" isInvalid={errors.email && errors.email.message}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <Text mb="2" fontWeight="medium">
            Message
          </Text>
          <Textarea
            placeholder="Your message"
            isInvalid={errors.message && errors.message.message}
            mb="4"
            {...register("message", { required: "This field is required" })}
          />
          <Flex mb="4">
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
              onChange={handleCAPTCHAChange}
            />
          </Flex>
          <Button
            type="submit"
            colorScheme="blue"
            disabled={loading || !isValidCAPTCHA}
            isLoading={loading}
          >
            Send message
          </Button>
        </form>
      )}
      {submitted && (
        <Alert status="success" rounded="lg" mt="4">
          <AlertIcon />
          <AlertTitle mr={2} fontWeight={"normal"}>
            Your message was sent
          </AlertTitle>
          <CloseButton
            onClick={() => setSubmitted(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
    </Flex>
  );
};

export default ContactForm;
