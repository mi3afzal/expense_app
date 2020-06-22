import React from 'react';
import './ExpenseApp.css';
import ExpenseApp from './ExpenseApp';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <ExpenseApp />
    </TransactionProvider>
  );
}

export default App;
