$(document).ready(function(){
	localStorage.clear();
	//error 7: missing ! before localStorage
	if(!localStorage.getItem('planets')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				$("#planets").append('<tr><td>'+ p.name + '</td></tr>')
			//error: 1. missing parentheses after append
				planetsObj.planets.push(p.name)
			})
			localStorage.setItem('planets', JSON.stringify(planetsObj))
		})
	}

	if(!localStorage.getItem('wookie')){
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/planets/?format=wookiee',
		}).done(function(planets){
			let planetsObj = {
				planets : []
			}
			planets.results.forEach(function(p){
				planetsObj.planets.push(p.name)
				// error 8: p should be p.name
			})
		})
	}

	if(!localStorage.getItem('starships')){
		$.ajax({
			type: 'GET',
				//error 6: remove the 1
			url: 'https://swapi.co/api/starships/',
		}).done(function(starships){
			let shipsObj = {
				ships : []
			}
			starships.results.forEach(function(s){
				$("#starships").append('<tr><td>'+ s.name + '</td></tr>')
				shipsObj.ships.push(s.name);
			})
			localStorage.setItem('starships', JSON.stringify(shipsObj))
		})
	}

	if(!localStorage.getItem('movies')){
		let movieObj = {
			movies : []
		}
		$.ajax({
			type: 'GET',
			url: 'http://swapi.co/api/films/',
		}).done(function(films){
			films.results.forEach(function(p){
				movieObj.movies.push(p.title);
			})
			localStorage.setItem('movies', JSON.stringify(movieObj))
			// errors: 2. movies missing quote
		})
	}

	if(!localStorage.getItem('wookiePlanets')){
		let wookieObj = {
			wookies : []
		}
		for(let i = 1; i < 11; i++){
			$.ajax({
				type: 'GET',
				url: 'http://swapi.co/api/planets/'+i+'/?format=wookiee',
			}).done(function(data){
				wookieObj.wookies.push(data.whrascwo)
				localStorage.setItem('wookies', JSON.stringify(wookieObj))
			})
		}
	}
	
	let clicker = false
	$(wookie).on('click',function(){
		clicker = !clicker
		$(wookie).val("Planet Name")
		$("#planets").html("")
		if(clicker){
			$(changer).html("Wookie Planets");
			let wookieObj = JSON.parse(localStorage.getItem('wookies'));
			wookieObj.wookies.forEach(function(p){
				$("#planets").append('<tr><td>'+ p + '</td></tr>')
				//error: 4. AYYYEEEOOO is not defined (should be p)
			})
			
		} else {
			$(wookie).val("Wookie")
			$(changer).html("Planet Name")
			let planetsObj = JSON.parse(localStorage.getItem('planets'));
			planetsObj.planets.forEach(function(s){
				$("#planets").append('<tr><td>'+ s + '</td></tr>')
			})
		}
		
	})
	$(searchName).on('click', function(){

		let search = $(searchRes).val();
		$(searchRes).val("");
		$.ajax({
			type: 'GET',
			url: 'https://swapi.co/api/people/?search=' + search
		}).done(function(data){
			$("#searchResult").html("")
			for (let d in data.results[0]){
				if(d == "homeworld")
					break;
				let dataName ='<h3 class="searchRe">' + d +':</h3>'
				$(searchResult).append(dataName + "<p>" + data.results[0][d]	 + "</p>")
			}
			data.results[0].films.forEach(function(film){
			});
		})
	})

	let clicked = false;
	$(moviebtn).on('click',function(e){
		clicked = !clicked
		$(moviebtn).val("Show Ships")
		$("#starships").html("")
		if(clicked){
			$(changeName).html("StarWar Movies");
			let movieObj = JSON.parse(localStorage.getItem('movies'));
			movieObj.movies.forEach(function(p){
			$("#starships").append('<tr><td>'+ p + '</td></tr>')
			})
			
		} else {
			$(moviebtn).val("Show Movies")
			$(changeName).html("Starships Name")
			let shipsObj = JSON.parse(localStorage.getItem('starships'));
			shipsObj.ships.forEach(function(s){
				$("#starships").append('<tr><td>'+ s + '</td></tr>')
			})
		}
	})

})