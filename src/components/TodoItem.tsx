import * as React from 'react';

interface ITodoItemProps {
    todo: {
        id: number;
        text: string;
        done: boolean;
    }
}

const TodoItem: React.FunctionComponent<ITodoItemProps> = (props) => {
    return (
        <li className={`TodoItem ${props.todo.done ? 'done' : ''}`}>
            <span className="text">{props.todo.text}</span>
            <span className="remove">(X)</span>
        </li>
    );
};

export default TodoItem;
