function Random(){
  let number = Math.floor(Math.random() * 100);
  return <h1 style={{backgroundColor: '#776691'}}>Randome Number is {number}</h1>
}
export default Random;