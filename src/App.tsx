import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleNewTransactionModal() {
    setIsNewTransactionModal(!isNewTransactionModal);
  }

  return (
    <TransactionProvider>
      <Header onHandleNewTransitionModal={handleNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
