export default (set, get) => ({
    addTodo: (payload) => {
        get().reducers.addTodo(payload)
    },
    deleteTodo: (payload) => {
        get().reducers.deleteTodo(payload)
    }
})

