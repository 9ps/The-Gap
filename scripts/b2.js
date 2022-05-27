function make_plot(csv_data){
    let indiaData = ["India",0.02,97]; //save computation time and dont do filtering
    let y = Array(155).fill(1);

    let data = [{
        x: csv_data.map(d => d.ratio),
        y: y,
        text: csv_data.map(d => d.name),
        hovertemplate: '%{text}<extra></extra>',
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: csv_data.map(d => d.pop),
            color: '#df65b0',
        },
    }, {
        x: [indiaData[1]],
        y: [1],
        mode: 'markers+text',
        text: [indiaData[0]],
		textposition: 'bottom',
		textfont: {
			size: 18,
		},
        hovertemplate: '%{text}<extra></extra>',
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: indiaData[2],
            color: '#dd1c77',
        },  
    },
];

	var layout = {
		title:'Sex Ratio of Infant Mortality *',
		height: 300,
		plot_bgcolor: "#2A1321",
		paper_bgcolor: "#2A1321",
		
		font: {
			size: 12,
			family: "Roboto Mono",
			color: "#f1eef6"
		},
		
		xaxis: {
			color: "#f1eef6",
			autotick: true,
			showticklabels: true,
			title: 'Female / Male Infant Mortality',
        },
		
		yaxis: {
            color: "#f1eef6",
            showticklabels: false,
            showgrid: false,
            range: [0.75, 1.25]
		},

		showlegend: false,
		hoverlabel: { bgcolor: "#FFF"},

        annotations: [
            {
              x: indiaData[1],
              y: 1,
              xref: 'x',
              yref: 'y',
              text: 'India',
              ax: 0,
              ay: 0,
              font: {
                size: 18,
            },
            }]
	  };
	
	const config = {displayModeBar: false, responsive: true}
	Plotly.newPlot('js-b2', data, layout, config);
}

Plotly.d3.csv("data/b2.csv", make_plot);
