class PlacesController < ApplicationController
  def index # returns HTML, need json
    render 'pages/places/index'
  end
end
