export default function PracticalExperience(props){
    return(
        <fieldset>
            <legend>Practical Experience</legend>
            <div className="form-input">
                <label htmlFor='company-name'>Company name: </label>
                <input type="text" placeholder='Company name' id="company-name" value={props.clickIndex===0?  props.practicalExp.company:''} onChange={props.onType}/>
            </div>
            
        <div className="form-input">
            <label htmlFor='position-title'>Position title: </label>
                <input type="text" placeholder='Position title' id="position-title" value={props.clickIndex===0? props.practicalExp.position:''} onChange={props.onType}/>
        </div>

        <div className="form-input">
            <label htmlFor='main-responsibilities'>Main responsibilities: </label>
            <input type="text" placeholder='Main responsibilities' id="main-responsibilities" value={props.clickIndex===0? props.practicalExp.mainResponsibilities:''} onChange={props.onType}/>
        </div>

          <div className="form-input">
            <label htmlFor='date-from'>Date from: </label>
            <input type="date" id="date-from" value={props.clickIndex===0? props.practicalExp.dateFrom:''} onChange={props.onType}/>
        </div>

         <div className="form-input">
            <label htmlFor='date-until'>Date until: </label>
            <input type="date" id="date-until" value={props.clickIndex===0? props.practicalExp.dateUntil:''} onChange={props.onType}/>
        </div>

        </fieldset>
    )
}