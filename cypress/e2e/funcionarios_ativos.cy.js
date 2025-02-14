describe('funcionários ativos', () => {
  it('Deve apresentar somente funcinários ativos', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    //Apenas funcionarios ativos 
    cy.get('.c-hfAyug > :nth-child(1)').click

    //Captura screenshot após a subimissão
    cy.screenshot('funcionario_Ativos_submit')
  })
})