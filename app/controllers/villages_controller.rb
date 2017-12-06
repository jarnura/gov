class VillagesController < ApplicationController
    def index
        @villages = Village.all
    
        respond_to do |wants|
            wants.html # index.html.erb
            wants.xml  { render :xml => @villages }
            wants.json { render :json => @villages }
        end
    end
    
    def new
        @village = Village.new
    
        respond_to do |wants|
            wants.html # new.html.erb
            wants.xml  { render :xml => @village }
            wants.json { render :json => @village }
        end
    end
    
    def create
        @village = Village.new(village_params)
    
        respond_to do |wants|
            if @village.save
                flash[:notice] = 'village was successfully created.'
                wants.html { redirect_to(@village) }
                wants.xml  { render :xml => @village, :status => :created, :location => @village }
                wants.json  { render :json => @village, :status => :created, :location => @village }
            else
                wants.html { render :action => "new" }
                wants.xml  { render :xml => @village.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @village.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def show
        @village = Village.find(params[:id])
    
        respond_to do |wants|
            wants.html # show.html.erb
            wants.xml  { render :xml => @village }
            wants.json { render :json => @village }
        end
    end
    
    def village_params
        params.require(:village).permit(:village_name, :district_id, :block_id)
    end
end
