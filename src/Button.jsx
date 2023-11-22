
export default function Button({value, onButtonClick}) {
  let num = "0123456789"
  let op = "+-x/="
  let type = "C"
  if (num.indexOf(value)!=-1) {
    type = "number";
  }else if (op.indexOf(value)!=-1){
    type = "operator"
  }
  return (
    <>
      <div className={type} onClick={onButtonClick} >{value}</div>
    </>
  );
}


