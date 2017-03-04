let notTalkedAboutData = [
    {'x': 10, 'y': 20, 'color': 'black', 'text': 'not talked about as much'},
    {'x': 10, 'y': 40, 'color': 'black', 'text': 'is the way you can break a thing wrong'},
    {'x': 50, 'y': 80, 'color': 'black', 'text': 'the vase shattered alright'},
    {'x': 70, 'y': 180, 'color': 'black', 'text': 'but not in a million glittering pieces'},
    {'x': 80, 'y': 380, 'color': 'black', 'text': 'just three dullards'},
    {'x': 100, 'y':580, 'color': 'black', 'text': 'sitting in a tepid pool of water'}
  
];
let svgContainer = d3.select('body').append('svg').attr('width', 900).attr('height', 900);
let text = svgContainer.selectAll('text').data(notTalkedAboutData).enter().append('text');
let textLabels = text.attr('x', function(d) {return d.x})
                    .attr('y', function(d) {return d.y})
                    .text(function(d) {return d.text})
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '15px')
                    .attr('fill', 'black')
                    .attr('id', 'nottalkedabout');


                    d3.selectAll('text')
                     .transition()
                     .style('fill', 'white')
                     .duration(function(d, i){
                       if (i === 0) {
                         return 4000;
                       }
                       if (i === 1) {
                         return 6000;
                       }
                       if (i === 2) {
                         return 8000;
                       }
                       if (i === 3) {
                         return 10000;
                       }
                       if (i === 4) {
                         return 12000;
                       }
                        if (i === 5) {
                         return 14000;
                       }
                    
                     });