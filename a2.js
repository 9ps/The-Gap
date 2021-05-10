function make_plot(csv_data){
    //Filter our csv data for a particular country
    //Try logging country_data to the console to see what's in it

    let australia_data = csv_data.filter(d => d.country == "Australia");
    let china_data = csv_data.filter(d => d.country == "China");
    let india_data = csv_data.filter(d => d.country == "India");
    let world_data = csv_data.filter(d => d.country == "World");

    //Add our main data trace
    let data = [
    {
        x: australia_data.map(d => d.year),
        y: australia_data.map(d => d.diff * 100 + 100),
        name: "australia",
        line: {
			color: '#f1eef6',
            width: 2
		}
    },
    {
        x: china_data.map(d => d.year),
        y: china_data.map(d => d.diff * 100 + 100),
        name: "china",
        line: {
			color: '#d7b5d8',
            width: 2
		}
    },
    {
        x: india_data.map(d => d.year),
        y: india_data.map(d => d.diff * 100 + 100),
        name: "india",
        line: {
			color: '#dd1c77',
            width: 4
		}
    },
    {
        x: world_data.map(d => d.year),
        y: world_data.map(d => d.diff * 100 + 100),
        name: "world",
        line: {
			color: '#df65b0',
            width: 2
		}
    }];

      var layout = {
        title:'Male to Female Infant Mortality',
		// width: 600,
		height: 600,
		plot_bgcolor: "#242424",
		paper_bgcolor: "#242424",

		font: {
			size: 16,
			family: "Lato, sans-serif",
			color: "#f1eef6"
		},
		
		xaxis: {
			color: "#f1eef6"
		},
		
		yaxis: {
			title: 'M : F Infant Mortality',
			color: "#f1eef6"
		},
		
		showlegend: true,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };

    //Draw the plot at our div
    Plotly.newPlot('divB', data, layout);
}

//Load the csv data and when loaded: run the make_plot function with that data
Plotly.d3.csv("a2.csv", make_plot);
