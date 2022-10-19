import React, { FC } from 'react';
import './transactionCard.scss';
import { Expense } from '../../../util/expenseEntity';
import { colorType } from '../../../util/helpers';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { DispatchProp, useDispatch } from 'react-redux';
import { deleteExpense } from '../../../expense/store/action/expenseAction';

const TransactionCard: FC<{ transaction: Expense }> = ({ transaction }) => {
    const dispatch = useDispatch();
    const handleDeleteExpense = (id: string | undefined) => {
        //@ts-ignore
        dispatch<DispatchProp>(deleteExpense(id));
    }

    return (
        <div className="transactionCard" style={{ borderLeft: `3px solid ${colorType(transaction.type)}` }}>
            <div className="transactionCard__header">
                <span>
                    <h5>{transaction.item}</h5>
                    <p>${transaction.price}</p>
                </span>
            </div>
            <div>
                <span>
                    <FaEdit style={{ cursor: 'pointer' }} />{' '}
                    <FaTrash onClick={() => handleDeleteExpense(transaction.id)} style={{ cursor: 'pointer' }} />
                </span>
            </div>
        </div>
    )
}

export default TransactionCard;