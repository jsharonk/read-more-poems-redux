let poemData = [
    {'x': 450, 'y': 150, 'text': "please look back and see if you've left parts of yourself behind"},
    {'x': 550, 'y': 200, 'text': 'secrets that should be kept'},
    {'x': 370, 'y': 240, 'text': "in the toilet"},
    {'x': 290, 'y': 260,  'text': 'wrapped up in tissue'},
    {'x': 270, 'y': 280, 'text': 'and blown through the pipes'},
    {'x': 240, 'y': 350, 'text': 'below the surface of the ground'},
    {'x': 240, 'y': 390, 'text': 'where whales watch'},
    {'x': 240, 'y': 430, 'text': 'the destruction of their world'},
    {'x': 240, 'y': 470, 'text': 'which says nothing about them'},
    {'x': 240, 'y': 510, 'text': 'but everything about us'}
];


let svgContainer = d3.select('body').append('svg')
                                    .attr('width', 900)
                                    .attr('height', 900);

let text = svgContainer.selectAll('text')
                       .data(poemData)
                       .enter()
                       .append('text');

let textLabels = text.attr('x', function(d) {return d.x})
                      .attr('y', function(d) {return d.y})
                      .text(function(d) {return d.text})
                      .attr('font-family', 'georgia')
                      .attr('font-size', '15px')
                      .attr('fill', 'white')
                      .attr('class', 'syria');
                    
                    d3.selectAll('.syria')
                     .transition()
                     .styleTween('fill', function() {return d3.interpolate('white', 'black'); })
                     .duration(function(d, i) {
                       if (i === 0) {
                          return 6000;
                        }
                        if (i === 1) {
                          return 8000;
                        }
                        if (i === 2) {
                          return 9000;
                        }
                        if (i === 3) {
                          return 11000;
                        }
                        if (i === 4 || 5 || 6 || 7 || 8 || 9 || 10) {
                          return 20000;
                        }
                      });



             