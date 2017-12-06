export class Village {
    id: number;
    village_name: string;
    district_id: number;
    block_id: number;
    created_at: any;
    updated_at: any;
    
    constructor(obj: Object={}){
        Object.assign(this, obj);
    }
}