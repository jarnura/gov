export class Block {
    id: number;
    block_name: string;
    district_id: number;
    created_at: any;
    updated_at: any;
    
    constructor(obj: Object={}){
        Object.assign(this, obj);
    }
}