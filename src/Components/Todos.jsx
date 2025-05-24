import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem
          key={todo.id}
          className="d-flex justify-content-between align-items-center"
        >
          <span>{todo.todoString}</span>
          <FaCheckDouble
            onClick={() => {
              markComplete(todo.id);
            }}
            role="button"
            className="text-success"
            title="Mark as done"
            style={{ cursor: "pointer" }}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
