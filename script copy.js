
let task = "Städa rummet";
const listName = " Min Todo-lista";
console.log(listName);

console.log(message); //Undefined pga att message har inte fått värde än, men undefined pga var datatypen finns.


 {

    var message = "Godmorgon Saskia, följande ska du göra idag:";
    console.log(message); //Funkar också pga inuti scopet
    task = "Dammsuga och torka golvet"; //Ändrar värdet på task variabeln som är deklarerad utanför blocket.
    console.log(listName); // Testade att flytta console.log inuti blocket också.
    let task2 = "Tvätta fönstren"; // Deklarerad med let, funkar bara inuti blocket.
    const task3 = "Rensa garderoben"; // Deklarerad med const, funkar bara inuti blocket.

};

console.log(listName); // Även utanför, det funka pga att den är deklarerad innan scopet.
console.log(message); // Funka pga var deklarerad med var, som är global inom funktionen.

//var finns kvar utanför blocket, medan let och const bara gäller inuti blocket.  
// När console.log() ligger före blocket får man fel, inuti blocket funkar alla, och efter blocket syns bara var-variabeln.



console.log(task === task); // Testar bara att peka mott samma objekt för att se att den blir true

console.log("message == undefined:", message == undefined); // false, message har ju ett värde
console.log("NaN === NaN:", NaN === NaN); // false och kommer alltid vara false för att NaN är aldrig likt sig själv.
console.log("undefined == null:", undefined == null); // true, båda är "tomma" värden
//Undifend kan vi ge när vi inte vet om vi vill ha ett värde i variabeln,
//Medans null är när vi vet att vi inte vill ha något värde i variabeln.

console.log("undefined === null:", undefined === null);
//===Kollar både värde och typ, och de är olika typer. Undefined är inte samma som null. 
//Båda är tomma värden men dem är olika typer.

console.log("'3' == 3","3" == 3);   // True kolla bara värde, den ser att string 3 och number 3 är lika
console.log("'3' === 3","3" === 3); // False kolla värde och typ nu är det olika typer (string och number)

let a = 15;
console.log (a > 10 ? "Större än 10" : "Ej större än 10"); // Detta är en Ternary operator jag vill kolla om a är större än 10.
//Testade bara villkor

console.log (undefined ? "undefined är Truthy" : "undefined är Falsy"); 
//Med hjälp av en ternary operator kollar jag om undefined är truthy eller falsy. Kommer bli falsy för att det är undefined.
//Just nu så jämförs undefined inte med något annat. Då kommer vårat värde utvärdera som det är Truthy eller Falsy.
// Om man bara har ett värde så kollar den bara om just det är truthy eller falsy. Än att den kollar mellan 2 olika värden.


if (undefined) {
    console.log ("underfined: Truthy");
} else {
    console.log ("undefined : Falsy");
} // Exakt samma sak som jag gjorde tidagre, igen testade bara 1 värde i min if-sats.

//Falsy värden är: false, 0, "", null, undefined, NaN
// Allt annat är Truthy.

//uppgift 4
//Lägger in en functionsdeklaration nu med namnet greet som tar in en parameter name.
function greet (name){
 //name = "Saskia"; Behöver inte göra detta eftersom jag skickar in ett värde när jag anropar funktionen.
 console.log(name);
return "Hej " + name + ", välkommen!";
};

//Alternativ 1

console.log(greet("saskia")); //Skickar in värde "saskia" som argument till funktionen greet.
//Anropar funktionen inuti console.log

//Alternativ 2
 const greetName =greet("Saskia"); // Anropar funktionen och sparar returvärdet i en ny variabel greetName
 console.log(greetName); // Skriver ut värdet i variabeln greetName
 //Skapar en ny variabel som sen kommer lagra själva returvärdet från funktionen greet när jag anropar den med argumentet "Saskia".
//Nu att jag har sparat returvärdet i greetName så använder jag det som min parameter i console.log


 let name = "Anna";

//Kolla den globala variabeln name utanför funktionen.
console.log(name); //Skriver ut Anna
//console.log(name) kommer här att kolla på den nya deklarade variablen name.
//Men när jag lägger den inuiti funtionen så kollar den på argumentet som skickas in när jag anropar funktionen.
//Det är två olika scopes.

//Arrowfunction
const greetArrow = (name) => {
    return "Hej " + name + ", du fyller år snart!";
};  
//Arrowfunction är bara ett snabbare sätt att skriva funktioner, hade jag velat skicka in x och y 
//så hade jag skrivit (x, y) => istället för att behöva deklarera vad x och y är inuti funktionen.

//arrowfuntion kan man inte anropa innan den är skapat men med den jag gjorde tidiagre går det
















