function make_plot(csv_data){
    //Filter our csv data for a particular country
    //Try logging country_data to the console to see what's in it

    let male = csv_data.filter(d => d.group == "male");
    let female = csv_data.filter(d => d.group == "female");
    let both = csv_data.filter(d => d.group == "both");
    let world = csv_data.filter(d => d.group == "world");

    let malep = csv_data.filter(d => d.group == "malep");
    let femalep = csv_data.filter(d => d.group == "femalep");
    let bothp = csv_data.filter(d => d.group == "bothp");
    let worldp = csv_data.filter(d => d.group == "worldp");

    //Add our main data trace
    let data = [
    {
        x: male.map(d => d.year),
        y: male.map(d => d.rate),
        mode: 'lines',
        name: "Indian Male Infants",
        line: {
			color: '#d95f02',
            width: 2
		}
    },
    {
        x: malep.map(d => d.year),
        y: malep.map(d => d.rate),
        mode: 'lines',
        name: "predicted",
        line: {
            dash: 'dot',
			color: '#d95f02',
            width: 2
		}
    },

    {
        x: female.map(d => d.year),
        y: female.map(d => d.rate),
        mode: 'lines',
        name: "Indian Female Infants",
        line: {
			color: '#7570b3',
            width: 2
		}
    },
    {
        x: femalep.map(d => d.year),
        y: femalep.map(d => d.rate),
        mode: 'lines',
        name: "predicted",
        line: {
            dash: 'dot',
			color: '#7570b3',
            width: 2
		}
    },

    {
        x: both.map(d => d.year),
        y: both.map(d => d.rate),
        mode: 'lines',
        name: "Indian Infants",
        line: {
			color: '#e7298a',
            width: 2
		}
    },
    {
        x: bothp.map(d => d.year),
        y: bothp.map(d => d.rate),
        mode: 'lines',
        name: "predicted",
        line: {
            dash: 'dot',
			color: '#e7298a',
            width: 2
		}
    },

    {
        x: world.map(d => d.year),
        y: world.map(d => d.rate),
        mode: 'lines',
        name: "World Infants",
        line: {
			color: '#1b9e77',
            width: 2
		}
    },
    {
        x: worldp.map(d => d.year),
        y: worldp.map(d => d.rate),
        mode: 'lines',
        name: "predicted",
        line: {
            dash: 'dot',
			color: '#1b9e77',
            width: 2
		}
    }];

    var legend = window.innerWidth > 600 ? true : false; 
    var ll = 80
    var rr = 80;
    if(!legend){
        ll = 50;
        rr = 20;
    }

      var layout = {
        title:'Predicted Infant Mortality Rates *',
		height: 600,
		plot_bgcolor: "#C6C6BE",
		paper_bgcolor: "#C6C6BE",

        margin: {
            l: ll,
            r: rr,
        },

		font: {
			size: 12,
			family: "Roboto Mono, monospaced",
			color: "#000"
		},
		
		xaxis: {
            range: [1990, 2030],
			color: "#000"
		},
		
		yaxis: {
			title: 'Mortality Rate  ( Deaths per 1000 Infants )',
			color: "#000"
		},
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1
          },
        showlegend: legend,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };

      const config = {displayModeBar: false, responsive: true}
      //Draw the plot at our div
    Plotly.newPlot('js-a5', data, layout, config);
}

//Load the csv data and when loaded: run the make_plot function with that data
Plotly.d3.csv("data/a5.csv", make_plot);
