class Api::V1::NoteController < ApplicationController
  def index
    notes = Note.all
    render json: notes
  end

  def create
    # json形式でnameとcontentを受け取る
    note = Note.new(name: params[:name], content: params[:content])
    note.save

    # 保存したデータを返す
    render json: note
  end

  def update
    note = Note.find(params[:id])
    note.update(name: params[:name], content: params[:content])
    render json: note
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
  end
end
