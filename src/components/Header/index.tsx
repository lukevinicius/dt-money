import { useState } from 'react'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  onHandleNewTransitionModal: () => void
}

export function Header({onHandleNewTransitionModal}: HeaderProps) {
  return(
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="dt money" />
          <button type="button" onClick={onHandleNewTransitionModal}>Nova transação</button>
        </Content>
      </Container>
    </>
  )
}