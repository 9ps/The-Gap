function make_plot(csv_data) {
  // filter into seperate countries
  let australia_data = csv_data.filter(d => d.country == "Australia");
  let china_data = csv_data.filter(d => d.country == "China");
  let india_data = csv_data.filter(d => d.country == "India");
  let world_data = csv_data.filter(d => d.country == "World");

  //main data trace
  let data = [{
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
      },
    },
    {
      x: world_data.map(d => d.year),
      y: world_data.map(d => d.diff * 100 + 100),
      name: "world",
      line: {
        color: '#df65b0',
        width: 2
      }
    }
  ];

  var layout = {
    
    title: 'Sex Ratio of Infant Mortality *',
    height: 600,
		plot_bgcolor: "#2A1321",
		paper_bgcolor: "#2A1321",

    font: {
      size: 12,
      family: "Roboto Mono, monospace",
      color: "#f1eef6"
    },

    xaxis: {
      color: "#f1eef6"
    },

    yaxis: {
      title: 'Number of Boys per 100 Infant Girls Dying',
      color: "#f1eef6",
      range: [85, 130]
    },
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1
    },
    showlegend: true,
    hovermode: "closest",
    hoverlabel: {
      bgcolor: "#FFF"
    },
  };

  //remove annoying display, allow resizing
	const config = {displayModeBar: false, responsive: true}
  
  //make plot
  Plotly.newPlot('divB', data, layout, config);
}

//load
Plotly.d3.csv("data/a2.csv", make_plot);