import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import { __deleteTodos, __toggleTodos } from "../../redux/modules/todos";
import { toggleAni } from "../../redux/modules/animation";
import CheckSvg from "../../styles/svg/CheckSvg";
import DeleteSvg from "../../styles/svg/DeleteSvg";
import EditSvg from "../../styles/svg/EditSvg";
import timeCheck from "../util/timeCheck";
import { memo } from "react";

const boxAni = {
  initial: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

const btnStyle = {
  _width: "30px",
  _bgColor: "white",
  borderRadius: "50%",
  _padding: "8px",
};

/** Todo 하나 하나의 컴포넌트 */
function Todo({ id, title, content, color, createdAt, isDone, setLayId }) {
  const dispatch = useDispatch();
  const { boxAni: fadeOut, isLayout } = useSelector((state) => state.animation);
  const onToggle = () => {
    dispatch(toggleAni(boxAni));
    dispatch(
      __toggleTodos({ id, title, content, color, createdAt, isDone: !isDone })
    );
  };

  const onDelete = () => {
    dispatch(__deleteTodos(id));
    dispatch(toggleAni(boxAni));
  };

  const onEdit = () => {
    setLayId(id);
  };
  return (
    <ListItem
      variants={fadeOut}
      initial="initial"
      exit="exit"
      bgcolor={color}
      layoutId={id + ""}
      layout={isLayout}
    >
      <TodoItem>
        <div>
          <Link to={`/todoList/${id}`}>
            <h3>{title}</h3>
          </Link>
          <EditBtn onClick={onEdit}>
            <EditSvg />
          </EditBtn>
        </div>
        <p>{content}</p>
      </TodoItem>
      <TodoUtils>
        <span>{timeCheck(createdAt)}</span>
        <TodoBtns>
          <Button {...btnStyle} _onClick={onToggle}>
            <CheckSvg />
          </Button>
          <Button {...btnStyle} _onClick={onDelete}>
            <DeleteSvg />
          </Button>
        </TodoBtns>
      </TodoUtils>
    </ListItem>
  );
}
export default memo(Todo);

const ListItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  justify-self: center;
  width: 100%;
  max-width: 180px;
  aspect-ratio: 1/1;
  padding: 20px;
  border-radius: 15px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 690px) {
    max-width: 240px;
  }
`;

const TodoItem = styled.div`
  position: relative;
  a {
    width: 100%;
    h3 {
      width: 100%;
      margin-bottom: 7px;
      overflow: hidden;
      color: #262626;
      font-weight: 700;
      font-size: 22px;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: color 1s linear;
      transition: transform 0.3s linear;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &:hover {
      h3 {
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
      }
    }
  }

  p {
    display: -webkit-box;
    overflow: hidden;
    color: #565656;
    font-weight: 500;
    font-size: 15px;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 780px) {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 690px) {
    h3 {
      font-size: 25px;
    }
    p {
      margin-top: 10px;
      overflow: visible;
      font-size: 18px;
    }
  }
`;

const EditBtn = styled.span`
  position: absolute;
  right: 0;
  width: 15px;
  height: 15px;

  cursor: pointer;
  svg {
    color: rgba(0, 0, 0, 0.4);
    transition: color 1s linear;
    transition: transform 0.3s linear;
  }
  &:hover {
    svg {
      color: rgba(0, 0, 0, 0.8);
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
      transform: translateY(-3px);
    }
  }
`;

const TodoUtils = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 13px;
  }
  @media screen and (max-width: 780px) {
    span {
      opacity: 0;
    }
  }
  @media screen and (max-width: 690px) {
    span {
      font-size: 15px;
      opacity: 1;
    }
  }
`;

const TodoBtns = styled.div`
  display: flex;
  justify-content: end;
  button {
    margin-left: 5px;
    svg {
      width: 18px;
      color: black;
    }
    &:last-child {
      background-color: rgba(0, 0, 0, 0.6);
      &:hover {
        background-color: #242424;
      }
      svg {
        color: white;
      }
    }
    &:first-child {
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        svg {
          color: white;
        }
      }
    }
  }
`;
