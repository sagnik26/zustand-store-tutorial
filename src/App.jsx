import useTodoStore from "./store/todo"

function App() {
  const { actions: todoActions, getters: todoGetters } = useTodoStore();
  const deleteTodoItem = (id) => {
    todoActions.deleteTodo(id);
  }

  return (
    <>
    <div>

    </div>

    <div>
      <h2 style={{ textAlign: 'center' }}>My Todos</h2>
      <ul>
        {
          todoGetters.getTodos()?.map((todoItem) => {
            return (
              <li key={todoItem.id}>
                <h2>{todoItem.data}</h2> 
                <button onClick={() => deleteTodoItem(todoItem.id)}>
                  delete
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App
