import ListItem from './ListItem';

export default function TodoList({todos, onCompleted, onDeleted}) {
   if (!todos) return;
   if (todos.length === 0) return <p>There are NO tasks to show</p>;

   const todosList = todos.map(todo => <li key={todo.id}><ListItem todo={todo} onCompleted={onCompleted} onDeleted={onDeleted} /></li>);

   return (
      <div>
         <h1>Tasks to do:</h1>
         <ul className="tasks">
            {todosList}
         </ul>
      </div>      
   )
}