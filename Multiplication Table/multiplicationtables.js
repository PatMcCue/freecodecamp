function doMultiplicationTables() {

    // get the multiplication table number from the web page
    var tableTextElement = document.getElementById("tableNumberText");
    var tableNumberText = tableTextElement.value;
    var tableNumber = Number(tableNumberText);

    // get the multiplication table list from the web page
    var multiplicationTableListElement = document.getElementById("multiplicationTableList");

    // remove all the child elements from this list
    while(multiplicationTableListElement.children.length > 0)
        multiplicationTableListElement.removeChild(multiplicationTableListElement.children[0]);    

    // count through the table producing results
    for (let i=1; i<=12;i=i+1) {
        // calculate the result
        let resultNumber = tableNumber * i;

        // create a result strung
        let resultString = tableNumber + " x " + i + " = " + resultNumber;

        // make  new list item
        let listItem = document.createElement("li");
        // set the text of the new list item to the result string
        listItem.innerText=resultString;
        // add it to the multiplication table list
        multiplicationTableListElement.appendChild(listItem);
    }
}
