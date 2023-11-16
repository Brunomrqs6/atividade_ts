const multi = (numero1:number, numero2: number) => {
    return numero1 * numero2
}

console.log(multi(5, 10))

const saudacao = (nome: string) => {
    return `Olá ${nome as string}`
}

console.log(saudacao('bruno'))