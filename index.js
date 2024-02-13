class modeloHeroi {
    constructor(nome, idade, tipoHeroi) {
        this.nome = nome;
        this.idade = idade;
        this.tipoHeroi = tipoHeroi;
    }

    definirAtaque() {
        let ataque;
        if (this.tipoHeroi == "mago") {
            ataque = "magia"
        } else if (this.tipoHeroi == "guereiro") {
            ataque = "espada"
        } else if (this.tipoHeroi == "monge") {
            ataque = "artes marciais"
        } else if (this.tipoHeroi == "ninja") {
            ataque = "shuriken"
        }

        return ataque;
    }

    atacar(ataque) {
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
}

let tiposHerois = ["mago", "guereiro", "monge", "ninja"]
let nomesHerois = ["Superman", "Tempestade", "Hulk", "Tocha Humana", "Magneto", "Homem-Areia", "Batman", "Homem de Ferro"]

for (const tipos of tiposHerois) {
    for (const nomes of nomesHerois) {
        let heroi = new modeloHeroi(nomes, 25, tipos)
        heroi.atacar(heroi.definirAtaque())

    }
}



