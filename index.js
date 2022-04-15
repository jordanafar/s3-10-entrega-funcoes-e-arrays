function positions(firstPlace, secondPlace, lastPlace) {

    let participante = [firstPlace, secondPlace, lastPlace]

    
if("Daniel"==participante[1]){
    x=participante.shift()
    y=participante.shift()

    participante.unshift(x)
    participante.unshift(y)
}

if("Daniel"==participante[2]){
    x = participante.pop()
    y = participante.pop()

    participante.push(x)
    participante.push(y)   
}

console.log(`1ª - Colocado: ${participante[0]}`)   
console.log(`2ª - Colocado: ${participante[1]}`)
console.log(`3ª - Colocado: ${participante[2]}`)

}
positions("Rafael", "Manoel","Daniel")
