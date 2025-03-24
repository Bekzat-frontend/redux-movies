import styled from "styled-components";

const Input = ({ type, placeholder, value, onChange, ...rest }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  height: 50px;
  border-radius: 8px;
  border: "#BDBDBD";
  color: "#757575";
  font-size: 20px;
`;
