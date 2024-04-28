function Hello(){
  let number = 456;
  let fullName = () => {
    return 'Antanu Dutta'
  }
  return <h2>Message No :{number}   I am your student {fullName()}</h2>
}
export default Hello;