import React from 'react';
import './table.css';

interface CountTableProps {
    countCategory: any[];
}

const CountTable: React.FC<CountTableProps> = ({ countCategory }) => {
    console.log(countCategory)
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr className='trHead'>
                        <th>Category</th>
                        <th>Active</th>
                        <th>Archive</th>
                    </tr>
                </thead>
                <tbody>

                    {countCategory.map((category: any) =>
                        <tr key={category.name} className='trBody'>
                            <td>{category.name}</td>
                            <td>{category.count.active}</td>
                            <td>{category.count.archive}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default CountTable;