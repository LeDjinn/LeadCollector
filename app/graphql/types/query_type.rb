module Types
  class QueryType < Types::BaseObject
    field :comments, [Types::CommentType], null: false
    def comments
      Comment.all
    end
  end
end