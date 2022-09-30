import React from 'react';
import TableItem from './TableItem';

import './table.css';
import { ITask } from '../../types/task';

interface TableProps {
    tasks: ITask[];
}

const Table: React.FC<TableProps> = ({ tasks }) => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr className='trHead'>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Dates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => <TableItem key={task.id} task={task} />)}
                </tbody>
            </table>
        </div>
    );
};

export default Table;