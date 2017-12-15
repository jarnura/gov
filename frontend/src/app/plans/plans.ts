export class Plan {
    id: number;
    plan_title: string;
    plan_description: string;
    status: boolean;
    issue_level: number;
    issue_status: boolean;
    habitat_id: number;
    progress_count_positive: number;
    progress_count_negative: number;
    issue_prog_count_positive: number;
    issue_prog_count_negative: number;
    created_at: any;
    updated_at: any;
    
    constructor( obj: Object={} ){
        Object.assign(this, obj);
    }
}