
const carroDesejado = {
    portas: 4, 
    cor: 'roxo',
    mecanica: {
        motorizacao :[2.0, 'turbo', '160cv']
    },
    tetoSolar:true
}

const carroAvenda = {
    portas: 4,
    cor: 'preto',
    mecanica : {
        motorizacao : [1.0, 'aspirado', '60cv']
    },
    tetoSolar: false,
    cambio: 'manual'
}
const carroOlx = {
    portas : 4, 
    cor:' roxo',
    mecanica:{
motorizacao : [2.0, 'turbo ', '160cv'],
cambio: 'automatico',
traco:'4x4'
    },
    tetoSolar: true,
    ano: 2022,
    wifi: true,
    assistenteDeEstacionamento : true, 
    centralMultimidia : true,
}


test('Caracteristica do carro desejado', ()=>{
    expect(carroAvenda).toMatchObject(carroDesejado)
})