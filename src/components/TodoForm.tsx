import * as React from 'react';
import { useState } from 'react';

interface ITodoFormProps {
}

const TodoForm: React.FunctionComponent<ITodoFormProps> = (props) => {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 새 항목 생성하기
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={value}
                placeholder="무엇을 하실 건가요?"
                onChange={e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
};

export default TodoForm;