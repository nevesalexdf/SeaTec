describe('limpar filtros', () => {
  it('Deve limpar filtros selecionado', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')

    //Apenas funcionarios ativos 
    cy.get('.c-hfAyug > :nth-child(1)').click

    //Limpar filtros
    cy.get('.clear').click()

    //Captura screenshot após a subimissão
    cy.screenshot('limpar_filtros_submit')
  })
})