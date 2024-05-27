export default function TodoFilter({filterText, selectedCompletedValue, onTextInput, onCompletedChange, onReset}) {
   return (
      <div className="filter">
         <span>Filter: </span>
         <div className="filter-fields">
            <input type="text" value={filterText} onChange={onTextInput} placeholder="Type filter text" />
            <select id="filter-dropdown" value={selectedCompletedValue} onChange={onCompletedChange}>
               <option value='All'>All</option>
               <option value='Completed'>Completed</option>
               <option value='Uncompleted'>In process</option>
            </select>
         </div>         
         <input type="button" onClick={onReset} value="Reset" />
      </div>
   )
}