class Dado{
    tirar(){
        return Math.ceil(Math.random()*6)
    }
}

class Jugador{
    constructor(nombre, color){
        this.nombre = nombre
        this.color = color
        this.tiros = 0
        this.recorrido = 0
    }

    tirarDado(){
        let dado = new Dado()
        return this.recorrido += dado.tirar()
    }
}

class Tablero{
    constructor(){
        this.casillas = []
        this.meta = 100
    }

    rellenar(){
        for(let i = 1; i<=100; i++){
            if(i == 5){
                this.casillas[i] = 35
            } else if(i == 17){
                this.casillas[i] = 3
            } else if(i == 28){
                this.casillas[i] = 14
            } else if(i == 39){
                this.casillas[i] = 21
            } else if(i == 43){
                this.casillas[i] = 80
            } else if(i == 50){
                this.casillas[i] = 69
            } else if(i == 55){
                this.casillas[i] = 47
            } else if(i == 65){
                this.casillas[i] = 95
            } else if(i == 70){
                this.casillas[i] = 92
            } else if(i == 78){
                this.casillas[i] = 64
            } else if(i == 85){
                this.casillas[i] = 97
            } else if(i == 88){
                this.casillas[i] = 74
            } else if(i == 99){
                this.casillas[i] = 81
            } else{
                this.casillas[i] = i
            }
        }
    }

    revCasilla(casilla){
        return this.casillas[casilla]
    }

    verTablero(){
        console.log(this.casillas)
    }
}

class Juego{
    constructor(){
        this.jugadores = []
        this.tablero = new Tablero()
        this.tablero.rellenar()
    }

    anadirJugador(jugador){
        this.jugadores.push(jugador)
    }

    iniciar(){
        let end = false
        let nJugadores = this.jugadores.length
        while(end == false){
            let i = 0
            while(i<nJugadores && end == false){
                let turno = this.jugadores[i].tirarDado()
                this.jugadores[i].tiros += 1
                if (turno<100){
                    this.jugadores[i].recorrido = this.tablero.revCasilla(turno)
                }else{
                    end = true
                    console.log("El ganador: ", this.jugadores[i].nombre, "y su color es: ", this.jugadores[i].color)
                }
                i++
            }
        }
    }

mostrarJugadores(){
    console.log(this.jugadores)
}

mostrarJugador(jugador){
    console.log(this.jugadores[jugador])
}

}

let juego = new Juego()
let ju1 = new Jugador("Carlos", "amarillo")
let ju2 = new Jugador("Martin", "verde")
let ju3 = new Jugador("Roman", "rojo")
let ju4 = new Jugador("Fernanda", "azul")
juego.anadirJugador(ju1)
juego.anadirJugador(ju2)
juego.anadirJugador(ju3)
juego.anadirJugador(ju4)
juego.iniciar()
juego.mostrarJugadores()
