import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'

function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleNewTransactionModal() {
    setIsNewTransactionModal(!isNewTransactionModal)
  }

  return (
    <>
      <Header onHandleNewTransitionModal={handleNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleNewTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}

export default App
