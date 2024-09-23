function attachGradientEvents() {

    const resultElement = document.getElementById('result');   //get the result reference
    const gradientElement = document.getElementById('gradient');    //get the gradientElement box

    //add event listener for when the mouse is over the gradient Element    
    gradientElement.addEventListener('mousemove', event => {
        const currentMousePosition = event.offsetX;             //get the offsetX axis from the event
        const percent = Math.trunc(currentMousePosition / 3);   //offsetX is from 0 to 300, so when can divie by three

        resultElement.textContent = `${percent}%`
    });
    
    // add event listener for when the mouse is out of the element to remove the percent 
    gradientElement.addEventListener('mouseout', event => {
        resultElement.textContent = "";
    })
}