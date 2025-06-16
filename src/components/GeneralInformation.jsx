export default function GeneralInformation(props){
    return(
        <fieldset>
            <legend>General Information</legend>
            <div className="form-input">
                <label htmlFor='your-name'>Name: </label>
                <input type="text" placeholder='Yourname' id="your-name" value={props.clickIndex===0? props.generalInfo.name:''} onChange={props.onType} />
            </div>
            
        <div className="form-input">
            <label htmlFor='your-email'>Email: </label>
                <input type="email" placeholder='youremail@gmail.com' id="your-email"  value={props.clickIndex===0? props.generalInfo.email:''} onChange={props.onType}/>
        </div>

        <div className="form-input">
            <label htmlFor='phone-number'>Phone: </label>
                <input type="tel" placeholder='0123456789' id="phone-number" value={props.clickIndex===0? props.generalInfo.phone:''} onChange={props.onType}/>
        </div>

        </fieldset>
    )
}