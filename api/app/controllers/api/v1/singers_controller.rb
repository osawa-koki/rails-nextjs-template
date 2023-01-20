class Api::V1::SingersController < ApplicationController
  def index
    render json: [
      { name: 'yoasobi', birthday: '2019-01-01', hit_songs: [ '夜に駆ける', '群青', '三原色'] },
      { name: 'Aimer', birthday: '2011-01-01', hit_songs: [ 'カタオモイ', 'everlasting snow', 'コイワズライ'] },
      { name: 'ヨルシカ', birthday: '2017-01-01', hit_songs: [ 'だから僕は音楽を辞めた', 'ただ君に晴れ', '言って。'] }
    ]
  end
end
