export default function EducationalExperience(props){
    return(
        <fieldset>
            <legend>Educational Experience</legend>
            <div className="form-input">
                <label htmlFor='school-name'>School name: </label>
                <input type="text" placeholder='School name' id="school-name" value={props.clickIndex===0? props.eduExp.school:''} onChange={props.onType}/>
            </div>
            
        <div className="form-input">
            <label htmlFor='title-of-study'>Title of study: </label>
                <input type="text" placeholder='Title of study' id="title-of-study" value={props.clickIndex===0? props.eduExp.study:''} onChange={props.onType}/>
        </div>

        <div className="form-input">
            <label htmlFor='date-of-study'>Date of study: </label>
                <input type="date" placeholder='' id="date-of-study" value={props.clickIndex===0? props.eduExp.dateStudy:''} onChange={props.onType}/>
        </div>

        </fieldset>
    )
}