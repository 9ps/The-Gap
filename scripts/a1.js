
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
		height: 800,
		plot_bgcolor: "#2A1321",
		paper_bgcolor: "#2A1321",
		
		font: {
			size: 12,
			family: "Roboto Mono",
			color: "#f1eef6"
		},
		
		xaxis: {
			color: "#f1eef6",
			autotick: false,
			showticklabels: false
		},
		
		yaxis: {
			title: 'Mortality Rate  ( Deaths per 1000 Infants )',
			color: "#f1eef6",
			range: [0, 50]
		},

		annotations: [{
			xref: 'paper',
			yref: 'paper',
			x: 1,
			xanchor: 'right',
			y: 0,
			yanchor: 'top',
			text: 'Female',
			showarrow: false
		  }, {
			xref: 'paper',
			yref: 'paper',
			x: 0,
			xanchor: 'left',
			y: 0,
			yanchor: 'top',
			text: 'Male',
			showarrow: false
		  }],

		showlegend: false,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };
	
	const config = {displayModeBar: false, responsive: true}
	//Draw the plot at our div
	Plotly.newPlot('divA', data, layout, config);
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
		mode: 'lines+text',
		line: {
			color: '#df65b0',
			width: 10,
		},
		text: ['India'],
		textposition: 'right',
		textfont: {
			size: 18,
		  }
    }];
    return trace;
}

Plotly.d3.csv("data/a1.csv", make_plot);