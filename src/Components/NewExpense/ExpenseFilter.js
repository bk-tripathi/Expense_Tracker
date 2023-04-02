 
import './ExpenseFilter.css';

const ExpenseFilter=(props) =>{
   
    const dropDownChangeHandler=(event) =>{
        props.onChangeFilter(event.target.value);
    }
    return(
    <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter by Year</label>
            <select value={props.defaultSelect} onChange={dropDownChangeHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </div>        
    
    );
 }
 export default ExpenseFilter;