function board_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[138.5,-82.5],[138.5,-160.5]]).appendArc([139.5,-161.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.5,-161.5]).appendArc([176.5,-162.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.5,-179.5]).appendArc([177.5,-180.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.504836,-180.5]).appendArc([275.504836,-179.4998361],{"radius":1,"clockwise":false,"large":false}).appendPoint([275.5,-150.0000044]).appendPoint([275.5002956,-82.5000044]).appendArc([274.5002956,-81.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([139.5,-81.5]).appendArc([138.5,-82.5],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = board_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        