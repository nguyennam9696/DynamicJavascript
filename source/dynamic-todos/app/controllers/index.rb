get '/' do
  @todos = Todo.all.reverse
  erb :index
end

post '/add_todo' do
  @todo = Todo.create!(
    todo_content: params[:todo_content],
    )
  content_type :json
  return @todo.to_json
end

put '/complete/:id' do
  todo = Todo.where(id: params[:id]).first
  todo.completed = true
  todo.save
end

delete '/delete/:id' do
  todo = Todo.where(id: params[:id]).first
  todo.destroy
  redirect '/'
end

