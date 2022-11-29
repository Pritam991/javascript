console.log('script.js loaded');

getDinoName();

  async function getDinoName(){
    const response = await fetch('/dinoname');
    const data = await response.json();
    console.log(data[0]);
}