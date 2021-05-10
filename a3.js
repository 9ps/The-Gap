function make_plot(csv_data){

    country = [];
    gii = [];
    diff = [];

    for(var i = 0; i < csv_data.length; i++){
        country.push(csv_data[i].country);
        gii.push(csv_data[i].gii);
        diff.push(csv_data[i].diff * 100 + 100);
    }

    let data = [
    {
        text: country,
        x: gii,
        y: diff,
        mode: 'markers',
        marker: {
            size: 10,
            color: ['#dd1c77', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8', '#d7b5d8']
        }
    }];

      var layout = {
        title:'GII compared to M : F Infant Mortality',
		width: 700,
		height: 600,
		plot_bgcolor: "#242424",
		paper_bgcolor: "#242424",

		font: {
			size: 16,
			family: "Lato, sans-serif",
			color: "#f1eef6"
		},
		
		xaxis: {
            title: ' (<-- Less Unequal)              Gender Inequality Index                (More Unequal -->)',
			color: "#f1eef6"
		},
		
		yaxis: {
			title: 'M : F Infant Mortality',
			color: "#f1eef6"
		},
		
		showlegend: false,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };

    Plotly.newPlot('divC', data, layout);
}

Plotly.d3.csv("a3.csv", make_plot);
