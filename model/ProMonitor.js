class ProMonitor{
    constructor(name,materia,horario,privGroup,publicGroup){
        this.name = name;
        this.materia = materia;
        this.horario = horario;
        this.privGroup = privGroup;
        this.publicGroup = publicGroup;
    }

    listMateria(){
        return ("Coe","Apo I","Ingles","Electiva")
    }

    getName(){
        return this.name;
    }
}

export default ProMonitor;