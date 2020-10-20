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

}