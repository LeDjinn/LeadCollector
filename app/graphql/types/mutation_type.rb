module Types
  class MutationType < Types::BaseObject
    field :create_answer, mutation: Mutations::CreateAnswer
    field :create_comment, mutation: Mutations::CreateComment
    field :comment, mutation: Mutations::Comment
   
  end
end
