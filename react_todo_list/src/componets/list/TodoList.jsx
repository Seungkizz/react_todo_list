import React from "react";
import TodoObject from "../ui/TodoObject";
import styled from "styled-components";

const TodoListStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 280px;
    overflow-y: auto;
`;

function TodoList(props) {

    const { todos, onRemove, onCheck } = props;

    return (
        <TodoListStyled>
            {todos.map((todo) => {
                return (
                    <TodoObject
                        key={todo.id}
                        todo={todo}
                        onRemove={onRemove}
                        onCheck={onCheck}
                    />
                );
            })}
        </TodoListStyled>
    );

}

export default TodoList;