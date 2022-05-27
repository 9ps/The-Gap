function make_plot(csv_data){
    let indiaData = ["India",32.63,97]; //save computation time and dont do filtering
    let y = Array(155).fill(1);

    let data = [{
        x: csv_data.map(d => d.mort),
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
        text: [indiaData[0]],
        hovertemplate: '%{text}<extra></extra>',
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: indiaData[2],
            color: '#dd1c77',
        },  
    }];

	var layout = {
		title:'Under-five Mortality Rate *',
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
			title: 'Deaths per 1000 Births',
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

	//Draw the plot at our div
	Plotly.newPlot('js-b1', data, layout, config);
}

Plotly.d3.csv("data/b1.csv", make_plot);
