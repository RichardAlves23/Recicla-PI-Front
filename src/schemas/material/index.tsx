import TypeMaterial from "../typeMaterial";

class Material{
    id:number
    name:string;
    typeMaterial:TypeMaterial[];
    description:string;

    constructor(id:number,name:string,typeMaterial:TypeMaterial[],description:string){
        this.id = id;
        this.name = name;
        this.typeMaterial = typeMaterial;
        this.description = description;
    }
}

export default Material;