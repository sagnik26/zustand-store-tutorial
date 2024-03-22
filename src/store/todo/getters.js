export default (get) => ({
    getTodos: () => {
        const { state } = get();
        return state.todos
    }
})

