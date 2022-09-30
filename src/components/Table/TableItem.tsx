import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BiArchiveIn } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { ITask } from '../../types/task';
import './tableitem.css';
import { useActions } from '../../hooks/useActions';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

interface TableItemProps {
    task: ITask;
}

const TableItem: React.FC<TableItemProps> = ({ task }) => {

    const [active, setActive] = useState(false)

    const { deleteTask, archiveTask, editTask } = useActions()

    const OnClickDelete = () => {
        deleteTask(task.id);
    }

    const OnClickArchive = () => {
        archiveTask(task.id)
    }

    return (

        <tr className='trBody'>
            <td>{task.name}</td>
            <td>{task.created}</td>
            <td>{task.category}</td>
            <td>{task.content}</td>
            <td>{task.dates}</td>
            <td>
                <button className="table-btn" onClick={() => setActive(true)}>
                    <FaEdit />
                </button>
                <button className="table-btn" onClick={OnClickArchive}>
                    <BiArchiveIn />
                </button>
                <button className="table-btn" onClick={OnClickDelete}>
                    <MdDelete />
                </button>
                <Modal active={active} setActive={setActive}>
                    <Form actionFunc={editTask} task={task} setActive={setActive} />
                </Modal>
            </td>
        </tr >

    );
};

export default TableItem;