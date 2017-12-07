export class Habitat {
    id: number;
    habitat_name: string;
    district_id: number;
    block_id: number;
    village_id: number;
    created_at: any;
    updated_at: any;
    
    constructor( obj: Object={} ){
        Object.assign(this, obj);
    }
}