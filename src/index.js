import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"


const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Júlia', 8, 'gelo', 7, 10)
const arqueiroJoao = new Arqueiro('João', 6, 6)
const arqueiroMagoMatheus = new ArqueiroMago('Matheus', 7, 10, 'ar', 4, 8)
const guerreiroJeferson = new Guerreiro('Jeferson', 8)

const personagens = [magoAntonio, magaJulia, arqueiroJoao, arqueiroMagoMatheus, guerreiroJeferson]

new PersonagemView(personagens).render()