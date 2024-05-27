export default function TodoForm({onSubmit, todo, onTodoChange}) {
   return (
      <form onSubmit={onSubmit}>
         <label htmlFor="add-task">Enter task: </label>
         <input id="add-task" type="text" value={todo} placeholder="Enter new task..." onChange={onTodoChange} />
         <button type="submit">Add new task</button> 
      </form>
   )
}