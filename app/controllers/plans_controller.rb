class PlansController < ApplicationController
    def index
        @plans = Plan.all
    
        respond_to do |wants|
            wants.html # index.html.erb
            wants.xml  { render :xml => @plans }
            wants.json { render :json => @plans }
        end
    end
    
    def new
        @plan = Plan.new
    
        respond_to do |wants|
            wants.html # new.html.erb
            wants.xml  { render :xml => @plan }
            wants.json { render :json => @plan }
        end
    end
    
    def create
        @plan = Plan.new(plan_params)
    
        respond_to do |wants|
            if @plan.save
                flash[:notice] = 'plan was successfully created.'
                wants.html { redirect_to(@plan) }
                wants.xml  { render :xml => @plan, :status => :created, :location => @plan }
                wants.json  { render :json => @plan, :status => :created, :location => @plan }
            else
                wants.html { render :action => "new" }
                wants.xml  { render :xml => @plan.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @plan.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def show
        @plan = Plan.find(params[:id])
    
        respond_to do |wants|
            wants.html # show.html.erb
            wants.xml  { render :xml => @plan }
            wants.json { render :json => @plan }
        end
    end
    
    def edit
        @plan = Plan.find(params[:id])
    end
    
    def update
        @plan = Plan.find(params[:id])
    
        respond_to do |wants|
            if @plan.update_attributes(plan_params)
                flash[:notice] = 'plan was successfully updated.'
                wants.html { redirect_to(@plan) }
                wants.xml  { head :ok }
                wants.json { head :ok }
            else
                wants.html { render :action => "edit" }
                wants.xml  { render :xml => @plan.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @plan.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def plan_params
        params.require(:plan).permit(:plan_title, :plan_description, :status, :issue_level, :issue_status, :habitat_id, :progress_count_positive, :progress_count_negative, :issue_prog_count_positive, :issue_prog_count_negative)
    end
end
