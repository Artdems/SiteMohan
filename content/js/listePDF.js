var test1 = "Le seigneur des anneaux I/Héroique Fantasy/JRR Tolkien";
var test2 = "Le seigneur des anneaux II/Héroique Fantasy/JRR Tolkien";
var test3 = "Le seigneur des anneaux III/Héroique Fantasy/JRR Tolkien";
var test4 = "In Tenebrisse/Thriller/Maxime Chatame";


var ListeLivre = [test1,test2,test3,test4];

document.addEventListener('DOMContentLoaded', function() {
	var result = "";
	for(var i = 0; i<ListeLivre.length; i++){
		var livre = ListeLivre[i].split('/');
		result = result + "<tr><th scope='row'>" + livre[0] + "</td><td>" + livre[1] + "</td><td>" + livre[2] + "</td><td><a class='btn btn-secondary' role='button' href='NouvelleView.html'>Lire</a></tr>";
	}
	var tableau = document.getElementById('tableNouvel');
	tableau.innerHTML = result;
});