function make_plot(csv_data) {
  //Filter our csv data for a particular country
  //Try logging country_data to the console to see what's in it

  let australia_data = csv_data.filter(d => d.country == "Australia");
  let china_data = csv_data.filter(d => d.country == "China");
  let india_data = csv_data.filter(d => d.country == "India");
  let world_data = csv_data.filter(d => d.country == "World");

  //Add our main data trace
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
      // text: ["hiii"],
      // textposition: 'top',
      // textfont: {
      //   size: 18,
      // }
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
    width: 600,
    height: 600,
		plot_bgcolor: "#2A1321",
		paper_bgcolor: "#2A1321",

    font: {
      size: 16,
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

  const config = {displayModeBar: false}
  //Draw the plot at our div
  Plotly.newPlot('divB', data, layout, config);
}

//Load the csv data and when loaded: run the make_plot function with that data
Plotly.d3.csv("data/a2.csv", make_plot);