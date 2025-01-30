function plate_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[138.5,-82.5],[138.5,-160.5]]).appendArc([139.5,-161.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.5,-161.5]).appendArc([176.5,-162.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.5,-179.5]).appendArc([177.5,-180.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.504918,-180.5]).appendArc([275.504918,-179.499918],{"radius":1,"clockwise":false,"large":false}).appendPoint([275.500082,-120.499918]).appendArc([274.500082,-119.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.5,-119.5]).appendArc([256.5,-118.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.5,-82.5]).appendArc([255.5,-81.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([139.5,-81.5]).appendArc([138.5,-82.5],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function plated_case_fn() {
                    

                // creating part 0 of case plated
                let plated__part_0 = plate_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plated__part_0_bounds = plated__part_0.getBounds();
                let plated__part_0_x = plated__part_0_bounds[0].x + (plated__part_0_bounds[1].x - plated__part_0_bounds[0].x) / 2
                let plated__part_0_y = plated__part_0_bounds[0].y + (plated__part_0_bounds[1].y - plated__part_0_bounds[0].y) / 2
                plated__part_0 = translate([-plated__part_0_x, -plated__part_0_y, 0], plated__part_0);
                plated__part_0 = rotate([0,0,0], plated__part_0);
                plated__part_0 = translate([plated__part_0_x, plated__part_0_y, 0], plated__part_0);

                plated__part_0 = translate([0,0,0], plated__part_0);
                let result = plated__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plated_case_fn();
            }

        