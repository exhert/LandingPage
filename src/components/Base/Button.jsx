/* eslint-disable react/prop-types */
import { Button as ChakraButton, Flex, Spinner } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Button({ href, ...rest }) {
  return (
    <>
      {href ? (
        <NavLink to={href}>
          <ButtonComponent {...rest} />
        </NavLink>
      ) : (
        <ButtonComponent {...rest} />
      )}
    </>
  );
}

const ButtonComponent = ({
  onClick,
  loading,
  loadingText,
  children,
  disabled,
  ...rest
}) => {
  return (
    <ChakraButton
    rounded={'full'}
      variant="yellow"
      onClick={onClick}
      isDisabled={disabled}
      {...rest}
    >
      <Flex gap="2" alignItems="center">
        {loading && <Spinner color="#ffffff" />}
        {loading ? loadingText : children}
      </Flex>
    </ChakraButton>
  );
};
