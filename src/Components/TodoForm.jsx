import React, { useState } from "react";
import { Form, FormGroup, Input, InputGroup, Button } from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString.trim() === "") {
      return alert("Please enter a todo item.");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter a task..."
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <Button color="primary" type="submit">
            Add
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
