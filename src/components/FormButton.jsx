export default function FormButton({name, isClickAble, onAction}){

return(
 <>
    <button disabled={!isClickAble } onClick={onAction}>{name}</button>

 </>   
)

}