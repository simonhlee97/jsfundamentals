
$(function () {
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/'
	}).done(function(planets){
		// planets.results.forEach(function(p){
		// 	console.log(p.name)
		// })
		
		// for( let planet in planets.results) {
		// 	console.log(planets.results[planet].name)
		// }
		
		for( let planet of planets.results) {
			$('#planetdata').append('<tr><td>' + planet.name + '</td></tr>')
		}
	}),
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/starships'
	}).done(function(starships){
		for( let ship of starships.results) {
			$('#shipname').append('<tr><td>' + ship.name + '</td></tr>')
		}
	}),
	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/people/?search=' + search
	}).done(function(people){
		console.log(people.results)
	})

	$(searchName).on('click', function(){
		let search = $(searchbox).val();
		$.ajax({
			type: 'GET',
			url: 'https://swapi.co/api/people/?search=' + search
		}).done(function(data) {
			data.results[0].film.forEach(function(film) {
				$(searchResult).append('<p>' + data.results[0].name)
			})
		})
	})

});