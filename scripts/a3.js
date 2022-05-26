function make_plot(csv_data){

    let sa = csv_data.filter(d => d.region == "South Asia");
    let ea = csv_data.filter(d => d.region == "East Asia");
    let aa = csv_data.filter(d => d.region == "Other Asia");
    let eu = csv_data.filter(d => d.region == "Europe");
    let af = csv_data.filter(d => d.region == "Africa");
    let am = csv_data.filter(d => d.region == "Americas");
    let au = csv_data.filter(d => d.region == "Australia");

    let data = [
    {   
        name: "South Asia",
        text: sa.map(d => d.country),
        x: sa.map(d => d.gii),
        y: sa.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#e7298a'
        }
    },
    {
        name: "East Asia",
        text: ea.map(d => d.country),
        x: ea.map(d => d.gii),
        y: ea.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#7570b3'
        }
    },
    {
        name: "Other Asia",
        text: aa.map(d => d.country),
        x: aa.map(d => d.gii),
        y: aa.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#d95f02'
        }
    },
    {
        name: "Europe",
        text: eu.map(d => d.country),
        x: eu.map(d => d.gii),
        y: eu.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#1b9e77'
        }
    },
    {
        name: "Americas",
        text: am.map(d => d.country),
        x: am.map(d => d.gii),
        y: am.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#66a61e'
        }
    },
    {
        name: "Africa",
        text: af.map(d => d.country),
        x: af.map(d => d.gii),
        y: af.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#e6ab02'
        }
    },
    {
        name: "Australia",
        text: au.map(d => d.country),
        x: au.map(d => d.gii),
        y: au.map(d => d.diff * 100 + 100),
        mode: 'markers',
        marker: {
            size: 10,
            color: '#66C7F4'
        }
    },
    {
        name: "trend",
        text: "trend",
        x: [0.04, 0.7],
        y: [118.4, 114],
        mode: 'lines',
        line: {
            dash: 'dot',
			color: '#980043',
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
        title:'GII correlation',
		height: 600,
		plot_bgcolor: "#2A1321",
		paper_bgcolor: "#2A1321",

        margin: {
            l: ll,
            r: rr,
        },

		font: {
			size: 12,
			family: "Roboto Mono, monospace",
			color: "#f1eef6"
		},
		
		xaxis: {
            title: 'Gender Inequality Index',
			color: "#f1eef6",
		},
		
		yaxis: {
			title: 'Sex Ratio of Infant Mortality',
			color: "#f1eef6"
		},	
		showlegend: legend,
		hovermode: "closest",
		hoverlabel: { bgcolor: "#FFF"},
	  };
      const config = {displayModeBar: false, responsive: true}

    Plotly.newPlot('divC', data, layout, config);
}

Plotly.d3.csv("data/a3.csv", make_plot);
