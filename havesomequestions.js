let questionsData = [
    {'x': 20, 'y': 220, 'color': 'black', 'text': 'what is the opposite of prayer?'},
    {'x': 10, 'y': 420, 'color': 'black', 'text': 'when the mind takes a break, where does it go?'},

  
];
let svgContainer = d3.select('body').append('svg').attr('width', 900).attr('height', 900);
let text = svgContainer.selectAll('text').data(questionsData).enter().append('text');
let textLabels = text.attr('x', function(d) {return d.x})
                    .attr('y', function(d) {return d.y})
                    .text(function(d) {return d.text})
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '15px')
                    .attr('fill', 'black');

                    d3.selectAll('text')
                     .transition()
                     .style('font-size', '40px')
                     .duration(function(d, i){
                       if (i === 0) {
                         return 2000;
                       }
                       if (i === 1) {
                         return 5000;
                       }
                    
                     });