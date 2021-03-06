class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   has_one :contentweb, dependent: :destroy
   has_many :comments
   has_many :answers, through: :comment
   has_many :words
   has_many :facebookmodifs
   has_many :webmodifs
   has_many :googlemodifs
   has_many :appointements
end
