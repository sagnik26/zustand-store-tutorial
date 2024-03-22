import state from "./state";

export default (set, get) => ({
    addTodo: (payload) => {
        state.todos = [...state.todos, { id: new Date().getTime(), data: payload }];
        set(state);
    },
    deleteTodo: (payload) => {
        state.todos = state.todos.filter((todo) => todo.id !== payload)
        set(state);
    }
})


