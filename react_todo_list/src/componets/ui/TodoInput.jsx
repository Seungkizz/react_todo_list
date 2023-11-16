import React from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAddCircleOutline } from "react-icons/md";

const TodoAddFormStyled = styled.form`
    display: flex;
    padding: 12px 0 20px;
`;

const InputStyled = styled.input`
    flex: 1;
    line-height: 1.5;
    outline: none;
    border: none;
    border-bottom: 1px solid #aaa;
    color: #333;
    font-size: 17px;

    &::placeholder {
        font-weight: 300;
      }

`;

const ButtonStyled = styled.button`
    display: flex;
    padding-right: 0;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    svg {
        color: #50e3a4;
        font-size: 23px;
      }
`;

function TodoInput(props) {

    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const { onAdd } = props;

    const onChange = useCallback(event => {
        setInputValue(event.target.value);
    }, []); // 컴포넌트가 렌더링될 때 단 한번만 함수 생성

    const onSubmit = useCallback(
        event => {
            event.preventDefault();
            onAdd(inputValue);
            setInputValue(""); // 입력창 값 비우기
        },
        [onAdd, inputValue]
    );
    return (
        <TodoAddFormStyled onSubmit={onSubmit}>
            <InputStyled
                placeholder="추가할 일 일을 입력하세요."
                value={inputValue}
                onChange={onChange}
            />

            <ButtonStyled type="submit">
                <MdAddCircleOutline />
            </ButtonStyled>
        </TodoAddFormStyled>
    );
}

export default TodoInput;