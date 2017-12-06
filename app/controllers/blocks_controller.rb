class BlocksController < ApplicationController
    def index
        @blocks = Block.all
    
        respond_to do |wants|
            wants.html # index.html.erb
            wants.xml  { render :xml => @blocks }
            wants.json { render :json => @blocks }
        end
    end
    
    def new
        @block = Block.new
    
        respond_to do |wants|
            wants.html # new.html.erb
            wants.xml  { render :xml => @block }
            wants.json { render :json => @block }
        end
    end
    
    def create
        @block = Block.new(block_params)
    
        respond_to do |wants|
            if @block.save
                flash[:notice] = 'block was successfully created.'
                wants.html { redirect_to(@block) }
                wants.xml  { render :xml => @block, :status => :created, :location => @block }
                wants.json  { render :json => @block, :status => :created, :location => @block }
            else
                wants.html { render :action => "new" }
                wants.xml  { render :xml => @block.errors, :status => :unprocessable_entity }
                wants.json  { render :json => @block.errors, :status => :unprocessable_entity }
            end
        end
    end
    
    def show
        @block = Block.find(params[:id])
    
        respond_to do |wants|
            wants.html # show.html.erb
            wants.xml  { render :xml => @block }
            wants.json { render :json => @block }
        end
    end
    
    def block_params
        params.require(:block).permit(:block_name, :district_id)
    end
end
