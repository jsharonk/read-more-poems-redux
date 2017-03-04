let neverData = [
    {'x': 450, 'y': 120, 'color': 'black', 'text': 'i am a never know'},
    {'x': 450, 'y': 140, 'color': 'black', 'text': 'of the you never know clan'},
    {'x': 450, 'y': 160, 'color': 'black', 'text': 'run to the ground'},
    {'x': 450, 'y': 180, 'color': 'black', 'text': 'in a short enough span'},

    {'x': 450, 'y':220, 'color': 'black', 'text': 'time'},
    {'x': 450, 'y':240, 'color': 'black', 'text': 'draped like silk'},
    {'x': 450, 'y':260, 'color': 'black', 'text': 'over mountains unseen'},
    {'x': 450, 'y':280, 'color': 'black', 'text': 'deep in the sea '},
    
    {'x': 450, 'y':320, 'color': 'black', 'text': 'and out of the sea'},
    {'x': 450, 'y':340, 'color': 'black', 'text': 'an albatross'},
    {'x': 450, 'y':360, 'color': 'black', 'text': 'waits'},
    {'x': 450, 'y':380, 'color': 'black', 'text': 'for his one'},
];
let svgContainer = d3.select('body').append('svg').attr('width', 900).attr('height', 900);
let text = svgContainer.selectAll('text').data(neverData).enter().append('text');
let textLabels = text.attr('x', function(d) {return d.x})
                    .attr('y', function(d) {return d.y})
                    .text(function(d) {return d.text})
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '15px')
                    .attr('fill', 'black')

                    d3.selectAll('text')
                     .transition()
                     .style('fill', 'white')
                     .duration(function(d, i){
                       if (i <= 3) {
                         return 6000;
                       } 
                       if (i === 4 || i === 5) {
                         return 12000;
                       }  
                      if (i === 6) {
                         return 18000;
                       }
                       if (i >= 7) {
                         return 20000;
                       }
                      
                     });