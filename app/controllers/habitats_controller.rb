class HabitatsController < ApplicationController
    def index
        @habitats = Habitat.all
    
        respond_to do |wants|
            wants.html # index.html.erb
            wants.xml  { render :xml => @habitats }
            wants.json { render :json => @habitats }
        end
    end
    
    def new
        @habitat = Habitat.new
    
        respond_to do |wants|
            wants.html # new.html.erb
            wants.xml  { render :xml => @Habitat }
            wants.json { render :json => @Habitat }
        end
    end
    
    def create
        @habitat = Habitat.new(habitat_params)
    
        respond_to do |wants|
            if @habitat.save
                flash[:notice] = 'Habitat was successfully created.'
                wants.html { redirect_to(@habitat) }
                wants.xml  { render :xml => @habitat, :status => :created, :location => @habitat }
                wants.json  { render :json => @habitat, :status => :created, :location => @habitat }
            else
                wants.html { render :action => "new" }
                wants.xml  { render :xml => @habitat.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @habitat.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def show
        @habitat = Habitat.find(params[:id])
    
        respond_to do |wants|
            wants.html # show.html.erb
            wants.xml  { render :xml => @habitat }
            wants.json { render :json => @habitat }
        end
    end
    
    def habitat_params
       params.require(:habitat).permit(:habitat_name, :district_id, :block_id, :village_id) 
    end
end
