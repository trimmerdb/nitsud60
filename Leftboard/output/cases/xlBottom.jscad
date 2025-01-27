function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[136.5,-80.5],[136.5,-162.5]]).appendArc([137.5,-163.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.5,-163.5]).appendArc([174.5,-164.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([174.5,-181.5]).appendArc([175.5,-182.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([276.4903076,-182.5]).appendArc([277.4903076,-181.5003077],{"radius":1,"clockwise":false,"large":false}).appendPoint([277.4999997,-150.0008391]).appendArc([277.4999987,-149.999113],{"radius":1,"clockwise":false,"large":false}).appendPoint([277.4014164,-80.4985816]).appendArc([276.4014174,-79.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.5,-79.5]).appendArc([136.5,-80.5],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        