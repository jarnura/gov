export class District {
    id: number;
    district_name: string;
    created_at: any;
    updated_at: any;
    
    constructor(obj: Object={}){
        Object.assign(this, obj);
    }
}