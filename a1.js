
function make_plot(csv_data){
    // console.log(csv_data.length);

    let data = [];

	row = csv_data[0];
	data.push(...getObjIndia(row['country'], row['male'], row['female']));

    for (var i = 1; i < csv_data.length; i++){
        row = csv_data[i];
		data.push(...getObj(row['country'], row['male'], row['female']));
    }

	var layout = {
		title:'Male to Female Infant Morality per Country *',
		width: 600,
		height: 800,
		plot_bgcolor: "#242424",
		paper_bgcolor: "#242424",

		font: {
			size: 16,
			family: "Lato, sans-serif",
			color: "#f1eef6"
		},
		
		xaxis: {
            title: 'Male                                                                                              Female',
			color: "#f1eef6",
			autotick: false
		},
		
		yaxis: {
			title: 'Mortality Rate     ( Deaths per 100,000 Infants )',
			color: "#f1eef6",
			range: [0, 70]
		},

		showlegend: false,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };
	
	//Draw the plot at our div
	Plotly.newPlot('divA', data, layout);
}

function getObj(country, male, female) {
    var trace = [{
        x: [0, 1],
        y: [male, female],
        name: country,
		mode: 'lines',
		line: {
			color: '#d7b5d844'
		},
    }];
    return trace;
}

function getObjIndia(country, male, female) {
    var trace = [{
        x: [0, 1],
        y: [male, female],
        name: country,
		mode: 'lines',
		line: {
			color: '#df65b0',
			width: 10
		}
    }];
    return trace;
}

Plotly.d3.csv("a1.csv", make_plot);