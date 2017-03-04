let smallData = [
    {'x': 450, 'y': 20, 'color': 'black', 'text': 'i had a small thought'},
    {'x': 450, 'y': 40, 'color': 'black', 'text': 'about small thoughts'},
    {'x': 450, 'y': 60, 'color': 'black', 'text': 'that are big'},
    {'x': 450, 'y': 80, 'color': 'black', 'text': 'when viewed from the side'},

    {'x': 450, 'y':180, 'color': 'black', 'text': 'so'},
     {'x': 450, 'y':240, 'color': 'black', 'text': 'so if a cosmos lives in me'},

    {'x': 450, 'y':300, 'color': 'black', 'text': 'it could be that the universe too'},
    {'x': 450, 'y':320, 'color': 'black', 'text': 'fell asleep last night '},
    {'x': 450, 'y':340, 'color': 'black', 'text': 'comforted by the small thought'},
    {'x': 450, 'y':360, 'color': 'black', 'text': 'that was me'},
    {'x': 450, 'y':560, 'color': 'black', 'text': 'since'},
    {'x': 450, 'y':580, 'color': 'black', 'text': 'as it turns out, i myself am'},
    {'x': 450, 'y':600, 'color': 'black', 'text': 'a small thought with a large turning radius'},
];
let svgContainer = d3.select('body').append('svg').attr('width', 900).attr('height', 900);
let text = svgContainer.selectAll('text').data(smallData).enter().append('text');
let textLabels = text.attr('x', function(d) {return d.x})
                    .attr('y', function(d) {return d.y})
                    .text(function(d) {return d.text})
                    .attr('font-family', 'sans-serif')
                    .attr('font-size', '15px')
                    .attr('fill', 'black')
                    .attr('id', 'small');

                    d3.selectAll('text')
                     .transition()
                     .style('font-size', '19px')
                     .duration(function(d, i){
                       if (i <= 3) {
                         return 6000;
                       } 
                       if (i === 4 || i === 5) {
                         return 12000;
                       }  
                       if (i >= 6) {
                         return 20000;
                       }
                      
                     });