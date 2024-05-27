export default function ListItem({todo, onCompleted, onDeleted}) {   
   const d = new Date(todo.id);
   const formattedDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDay()).padStart(2, '0')}`;
   const formattedTime = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
   return (
      <div className="list-item">
         <p className="list-item-title">{todo.title}</p>
         <p className="list-item-date">{formattedDate + ' ' + formattedTime}</p>
         <div className="list-item-buttons">
            <input className="checkbox" type="checkbox" onChange={() => onCompleted(todo.id)} checked={todo.completed ? true : false} />
            <button className="btn-delete" type="button" onClick={() => onDeleted(todo.id)} >Delete</button>
         </div>
      </div>
   )
}