let cloudData = [
    {'x': 10, 'y': 100, 'text': "i'm trying to pin my own skirt down"},
    {'x': 10, 'y': 150, 'text': 'by one corner'},
    {'x': 10, 'y': 200, 'text': "so i'll billow in the wind"},
    {'x': 10, 'y': 250,  'text': "without skittering across the sky"},
    {'x': 10, 'y': 300, 'text': "and leaving you, my love"},
    {'x': 10, 'y': 350, 'text': "desolate"},
    {'x': 10, 'y': 400, 'text': "and wanting for dew"},
    
];


let svgContainer = d3.select('body').append('svg')
                                    .attr('width', 800)
                                    .attr('height', 800);

let text = svgContainer.selectAll('text')
                       .data(cloudData)
                       .enter()
                       .append('text');

let textLabels = text.attr('x', function(d) {return d.x})
                      .attr('y', function(d) {return d.y})
                      .text(function(d) {return d.text})
                      .attr('font-family', 'georgia')
                      .attr('font-size', '12px')
                      .attr('fill', 'dark gray')
                      .attr('class', 'thoughts');
                    
                    d3.selectAll('text')
                     .transition()
                     .styleTween('fill', function() {return d3.interpolate('darkgray', 'lightgray'); })
                     .duration(function(d, i) {
                       if (i === 0 || 1 || 2) {
                          return 6000;
                        }
                        if (i === 3 ) {
                          return 8000;
                        }
                        if (i === 4) {
                          return 9000;
                        }
                      
                        return 11000;
                        
                       
                      });
