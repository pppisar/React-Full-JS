function Button() {
  // const handleClick = () => console.log("OUCH!");

  // let counter = 0;
  // const handleClick = (name) => {
  //   if (counter < 3) {
  //     counter++;
  //     console.log(`You clicked me ${counter} time/s!`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

  const handleClick = (e) => {
    console.log(e);
    e.target.textContent = "I've been clicked!";
  };

  return <button onClick={(e) => handleClick(e)}>Click me 😀</button>;
}

export default Button;
