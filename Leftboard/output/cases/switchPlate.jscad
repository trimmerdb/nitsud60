function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[138.5,-82.5],[138.5,-160.5]]).appendArc([139.5,-161.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.5,-161.5]).appendArc([176.5,-162.5],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.5,-179.5]).appendArc([177.5,-180.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.504836,-180.5]).appendArc([275.504836,-179.4998361],{"radius":1,"clockwise":false,"large":false}).appendPoint([275.5,-150.0000044]).appendPoint([275.5002956,-82.5000044]).appendArc([274.5002956,-81.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([139.5,-81.5]).appendArc([138.5,-82.5],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function keysMX_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[247,-176],[261,-176]]).appendPoint([261,-162]).appendPoint([247,-162]).appendPoint([247,-176]).close().innerToCAG()
.union(
    new CSG.Path2D([[219,-176],[233,-176]]).appendPoint([233,-162]).appendPoint([219,-162]).appendPoint([219,-176]).close().innerToCAG()
).union(
    new CSG.Path2D([[200,-176],[214,-176]]).appendPoint([214,-162]).appendPoint([200,-162]).appendPoint([200,-176]).close().innerToCAG()
).union(
    new CSG.Path2D([[181,-176],[195,-176]]).appendPoint([195,-162]).appendPoint([181,-162]).appendPoint([181,-176]).close().innerToCAG()
).union(
    new CSG.Path2D([[257,-138],[271,-138]]).appendPoint([271,-124]).appendPoint([257,-124]).appendPoint([257,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[257,-157],[271,-157]]).appendPoint([271,-143]).appendPoint([257,-143]).appendPoint([257,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[238,-100],[252,-100]]).appendPoint([252,-86]).appendPoint([238,-86]).appendPoint([238,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[238,-119],[252,-119]]).appendPoint([252,-105]).appendPoint([238,-105]).appendPoint([238,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[238,-138],[252,-138]]).appendPoint([252,-124]).appendPoint([238,-124]).appendPoint([238,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[238,-157],[252,-157]]).appendPoint([252,-143]).appendPoint([238,-143]).appendPoint([238,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[219,-100],[233,-100]]).appendPoint([233,-86]).appendPoint([219,-86]).appendPoint([219,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[219,-119],[233,-119]]).appendPoint([233,-105]).appendPoint([219,-105]).appendPoint([219,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[219,-138],[233,-138]]).appendPoint([233,-124]).appendPoint([219,-124]).appendPoint([219,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[219,-157],[233,-157]]).appendPoint([233,-143]).appendPoint([219,-143]).appendPoint([219,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[200,-100],[214,-100]]).appendPoint([214,-86]).appendPoint([200,-86]).appendPoint([200,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[200,-119],[214,-119]]).appendPoint([214,-105]).appendPoint([200,-105]).appendPoint([200,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[200,-138],[214,-138]]).appendPoint([214,-124]).appendPoint([200,-124]).appendPoint([200,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[200,-157],[214,-157]]).appendPoint([214,-143]).appendPoint([200,-143]).appendPoint([200,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[181,-100],[195,-100]]).appendPoint([195,-86]).appendPoint([181,-86]).appendPoint([181,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[181,-119],[195,-119]]).appendPoint([195,-105]).appendPoint([181,-105]).appendPoint([181,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[181,-138],[195,-138]]).appendPoint([195,-124]).appendPoint([181,-124]).appendPoint([181,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[181,-157],[195,-157]]).appendPoint([195,-143]).appendPoint([181,-143]).appendPoint([181,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[162,-100],[176,-100]]).appendPoint([176,-86]).appendPoint([162,-86]).appendPoint([162,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[162,-119],[176,-119]]).appendPoint([176,-105]).appendPoint([162,-105]).appendPoint([162,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[162,-138],[176,-138]]).appendPoint([176,-124]).appendPoint([162,-124]).appendPoint([162,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[162,-157],[176,-157]]).appendPoint([176,-143]).appendPoint([162,-143]).appendPoint([162,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-100],[157,-100]]).appendPoint([157,-86]).appendPoint([143,-86]).appendPoint([143,-100]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-119],[157,-119]]).appendPoint([157,-105]).appendPoint([143,-105]).appendPoint([143,-119]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-138],[157,-138]]).appendPoint([157,-124]).appendPoint([143,-124]).appendPoint([143,-138]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-157],[157,-157]]).appendPoint([157,-143]).appendPoint([143,-143]).appendPoint([143,-157]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.5] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            

                function _key_case_fn() {
                    

                // creating part 0 of case _key
                let _key__part_0 = keysMX_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _key__part_0_bounds = _key__part_0.getBounds();
                let _key__part_0_x = _key__part_0_bounds[0].x + (_key__part_0_bounds[1].x - _key__part_0_bounds[0].x) / 2
                let _key__part_0_y = _key__part_0_bounds[0].y + (_key__part_0_bounds[1].y - _key__part_0_bounds[0].y) / 2
                _key__part_0 = translate([-_key__part_0_x, -_key__part_0_y, 0], _key__part_0);
                _key__part_0 = rotate([0,0,0], _key__part_0);
                _key__part_0 = translate([_key__part_0_x, _key__part_0_y, 0], _key__part_0);

                _key__part_0 = translate([0,0,0], _key__part_0);
                let result = _key__part_0;
                
            
                    return result;
                }
            
            

                function switchPlate_case_fn() {
                    

                // creating part 0 of case switchPlate
                let switchPlate__part_0 = bottom_case_fn();

                // make sure that rotations are relative
                let switchPlate__part_0_bounds = switchPlate__part_0.getBounds();
                let switchPlate__part_0_x = switchPlate__part_0_bounds[0].x + (switchPlate__part_0_bounds[1].x - switchPlate__part_0_bounds[0].x) / 2
                let switchPlate__part_0_y = switchPlate__part_0_bounds[0].y + (switchPlate__part_0_bounds[1].y - switchPlate__part_0_bounds[0].y) / 2
                switchPlate__part_0 = translate([-switchPlate__part_0_x, -switchPlate__part_0_y, 0], switchPlate__part_0);
                switchPlate__part_0 = rotate([0,0,0], switchPlate__part_0);
                switchPlate__part_0 = translate([switchPlate__part_0_x, switchPlate__part_0_y, 0], switchPlate__part_0);

                switchPlate__part_0 = translate([0,0,0], switchPlate__part_0);
                let result = switchPlate__part_0;
                
            

                // creating part 1 of case switchPlate
                let switchPlate__part_1 = _key_case_fn();

                // make sure that rotations are relative
                let switchPlate__part_1_bounds = switchPlate__part_1.getBounds();
                let switchPlate__part_1_x = switchPlate__part_1_bounds[0].x + (switchPlate__part_1_bounds[1].x - switchPlate__part_1_bounds[0].x) / 2
                let switchPlate__part_1_y = switchPlate__part_1_bounds[0].y + (switchPlate__part_1_bounds[1].y - switchPlate__part_1_bounds[0].y) / 2
                switchPlate__part_1 = translate([-switchPlate__part_1_x, -switchPlate__part_1_y, 0], switchPlate__part_1);
                switchPlate__part_1 = rotate([0,0,0], switchPlate__part_1);
                switchPlate__part_1 = translate([switchPlate__part_1_x, switchPlate__part_1_y, 0], switchPlate__part_1);

                switchPlate__part_1 = translate([0,0,0], switchPlate__part_1);
                result = result.subtract(switchPlate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchPlate_case_fn();
            }

        