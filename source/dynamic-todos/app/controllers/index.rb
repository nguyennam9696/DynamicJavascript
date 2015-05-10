get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/add_todo' do
  todo = Todo.new(
    todo_content: params[:todo_content],
    todos: params[:todos],
    completed: params[:completed],
    boolean: params[:boolean]
    )
  if todo.save
    redirect '/'
  else
    erb :index
  end
end

