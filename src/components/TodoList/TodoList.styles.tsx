import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #dd9b98;
  padding: 20px;
  font-size: 30px;
`;

export const TodoListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  margin-top: 86px;
  width: 50%;
  border: 1px solid #dd9b98;
  background-color: #fff;
  border-radius: 4px;
  max-height: 550px;
  overflow: auto;

  &:hover {
    box-shadow: 10px 10px 5px lightgray;
  }
`;

export const TodosWrapper = styled.ul`
  list-style-type: none;
`;

export const InputWrapper = styled.div`
  border: 1px solid #dd9b98;
  padding: 5px;
  border-radius: 5px;
`;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const InputStyle = styled.input`
  border: none;
  outline: none;
`;
