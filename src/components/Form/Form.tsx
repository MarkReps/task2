import React from 'react';
import { ITask } from '../../types/task';
import './form.css';

interface FormProps {
    task?: ITask;
    setActive: (arg1: boolean) => void;
    actionFunc: (arg1: any) => void;
}

const Form: React.FC<FormProps> = ({ setActive, task, actionFunc }) => {


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { name, content, category } = event.target as typeof event.target & {
            name: { value: string };
            content: { value: string };
            category: { value: string };
        }
        actionFunc({ ...task, name: name.value, category: category.value, content: content.value })
        event.currentTarget.reset()
        setActive(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task Name:</label>
                <input name='name' defaultValue={task?.name} required />
            </div>

            <div>
                <label>Task Category:</label>
                <select name='category' defaultValue={task?.category}>
                    <option>Task</option>
                    <option>Idea</option>
                    <option>Quote</option>
                    <option>Random Thought</option>
                </select>
            </div>
            <div>
                <label>Task Content:</label>
                <textarea defaultValue={task?.content} name='content' rows={5} cols={30} required></textarea>
            </div>
            <div className='form-btn-container'>
                <button className='create-btn' type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default Form;