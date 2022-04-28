

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1597694713513-QB43HMYID7RSSUJEHW0L/The+Wrong+Missy+-+Netflix.jpg?format=1000w", "https://qph.fs.quoracdn.net/main-qimg-9f7da239334a220570376de82273086e-lq","https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX150_CR0,0,150,218_AL_.jpg"];
	 let action =["https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVg6zFS0g6Z9eEM9gzW0mXrWGxp1mv-teYd5hADozg7oPOrvqaWBXRaaLNaAvyn5Sz6Hw4oJwnNmOJdXP0kWhxaIQWaFrF6aYxto8v0vb0pB5Ch2xl6vzcECV4QU.jpg?r=15a", "https://i.pinimg.com/originals/e9/5e/ec/e95eec98bf697cd4bb6a6434a912f137.jpg","https://img.aullidos.com/imagenes/caratulas/bala-cabeza.jpg"];
	 let drama =["https://www.lafilacero.com/covers/215/129481554800192.jpg?7", "https://pics.filmaffinity.com/the_notebook-565006977-msmall.jpg","https://i.pinimg.com/474x/b1/88/c1/b188c1646080a3262c8bee775419c15a.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
   if(genreInput==="comedy"){
    for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show  of action ){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama ){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
   drama.push(suggestion);
    console.log(drama);

    
});