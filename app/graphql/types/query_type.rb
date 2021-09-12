module Types
  class QueryType < Types::BaseObject
    field :comments, [Types::CommentType], null: false
   
   
    def comments
      Comment.where(user: current_user)
    end
    
  end
end