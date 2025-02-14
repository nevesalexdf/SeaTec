describe('Adicionar Funcionário sem uso de EPI', () => {
  it('Deve adicionar funcionário sem uso de epi com sucesso', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    cy.get('.c-kUQtTK').click()//Botão adicionar Funcionário

    //Preencher campos do formulário conforme necesário
    //Dados do novo funcionario 
    cy.get(':nth-child(1) > .c-jzRMpM').type('Marcelo da Silva')
    cy.get(':nth-child(3) > .c-jzRMpM').type('12323434556')
    cy.get(':nth-child(4) > .c-jzRMpM').type('1987-04-14')
    cy.get(':nth-child(5) > .c-jzRMpM').type('1234567')

    //Sem uso de EPIs utiliza na atividade
    cy.get('.ant-checkbox-input').click()

    //Adicionar atestado de saúde ocupacional
    cy.get('input[type="file"]').selectFile('atestado.jpg', {force: true})

    //Botão salvar 
    cy.get('.save').click()

   //Verificar se o funcionário foi adicionado
   cy.get('.c-gJFkWm > :nth-child(2) > span').should('be.visible') 

   //Etapa está concluida 
   
   cy.get('.ant-switch-inner').click()

   //Captura screenshot após a subimissão
   cy.screenshot('adicionar_funcionario_sem_uso_epi_submit')
  })
})