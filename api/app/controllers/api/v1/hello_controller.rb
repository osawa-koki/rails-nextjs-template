class Api::V1::HelloController < ApplicationController
  def index
    render json: { text: "hello" }
  end
end