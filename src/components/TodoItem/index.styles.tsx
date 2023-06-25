import styled, { css } from "styled-components";

interface TodoItemWrapperProps {
  completed: boolean;
}

export const TodoItemWrapper = styled.li<TodoItemWrapperProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  margin: 10px;
  width: 400px;
  padding: 10px;
  gap: 15px;

  ${({ completed }) => css`
    ${completed &&
    css`
      text-decoration: line-through;
      color: #b5b5b5;
    `}
  `}
`;

export const ButtonTrash = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
