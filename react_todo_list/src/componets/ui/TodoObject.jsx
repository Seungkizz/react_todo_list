import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdStar } from "react-icons/md";
import styled, { css } from "styled-components";
import cn from "classnames";

const TodoObjectWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 0;
  border-bottom: 1px solid #eee;
  color: #333;

  ${(props) =>
        props.star &&
        css`
      order: -1;
    `}
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 18px;
  }

  .text {
    flex: 1;
    margin-left: 12px;
  }

  ${(props) =>
        props.checked &&
        css`
      svg {
        color: #50e3a4;
      }

      .text {
        color: #888;
        text-decoration: line-through;
      }
    `}
`;


const RemoveWrapper = styled.div`
  display: flex;
  margin-left: 5px;
  color: #ff6b6bc9;
  font-size: 21px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

function TodoObject(props) {
    const { todo, onRemove, onCheck} = props;
    const { id, text, checked} = todo;

    return (
        <TodoObjectWrapper>
            <CheckboxWrapper checked={checked} onClick={() => onCheck(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </CheckboxWrapper>
            <RemoveWrapper onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </RemoveWrapper>
        </TodoObjectWrapper>
    );
}

export default TodoObject;
