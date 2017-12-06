class DistrictsController < ApplicationController
    def index
        @districts = District.all
    
        respond_to do |wants|
            wants.html # index.html.erb
            wants.xml  { render :xml => @districts }
            wants.json { render :json => @districts }
        end
    end
    
    def new
        @district = District.new
    
        respond_to do |wants|
            wants.html # new.html.erb
            wants.xml  { render :xml => @district }
            wants.json { render :json => @district }
        end
    end
    
    def create
        @district = District.new(district_params)
    
        respond_to do |wants|
            if @district.save
                flash[:notice] = 'district was successfully created.'
                wants.html { redirect_to(@district) }
                wants.xml  { render :xml => @district, :status => :created, :location => @district }
                wants.json  { render :json => @district, :status => :created, :location => @district }
            else
                wants.html { render :action => "new" }
                wants.xml  { render :xml => @district.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @district.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def show
        @district = District.find(params[:id])
    
        respond_to do |wants|
            wants.html # show.html.erb
            wants.xml  { render :xml => @district }
            wants.json { render :json => @district }
        end
    end
    
    def loadblocks
        @district = District.find(params[:id])
        @blocks = @district.blocks
        
        respond_to do |wants|
            wants.json { render :json => @blocks }
        end
    end
    
    def district_params
       params.require(:district).permit(:district_name) 
    end
end
