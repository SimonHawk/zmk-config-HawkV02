function standoff_extrude_5_outline_fn(){
    return CAG.circle({"center":[269.9068348,-192.0976505],"radius":2.5})
.union(
    CAG.circle({"center":[212.8426427,-109.888556],"radius":2.5})
).union(
    CAG.circle({"center":[176.9774356,-160.0369552],"radius":2.5})
).union(
    CAG.circle({"center":[177.0726298,-110.6406907],"radius":2.5})
).extrude({ offset: [0, 0, 5] });
}


function mounting_extrude_5_outline_fn(){
    return CAG.circle({"center":[269.9068348,-192.0976505],"radius":1.5})
.union(
    CAG.circle({"center":[212.8426427,-109.888556],"radius":1.5})
).union(
    CAG.circle({"center":[176.9774356,-160.0369552],"radius":1.5})
).union(
    CAG.circle({"center":[177.0726298,-110.6406907],"radius":1.5})
).extrude({ offset: [0, 0, 5] });
}


function _case_xlplate_extrude_2_outline_fn(){
    return new CSG.Path2D([[176.0843363,-101.5422037],[152.4661015,-103.6085315]]).appendArc([151.5570625,-104.6918819],{"radius":1,"clockwise":false,"large":false}).appendPoint([156.4746254,-160.8998833]).appendArc([157.0481243,-161.7189992],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.3007847,-180.0269051]).appendArc([226.9683874,-187.3459795],{"radius":197.5,"clockwise":true,"large":false}).appendPoint([242.2159503,-188.8161724]).appendArc([242.6635671,-188.9722072],{"radius":1,"clockwise":true,"large":false}).appendPoint([263.5073085,-202.4713828]).appendArc([264.1019393,-202.6307307],{"radius":1,"clockwise":false,"large":false}).appendPoint([277.5274254,-201.9446317]).appendArc([273.6781696,-151.1265354],{"radius":247.5,"clockwise":true,"large":false}).appendPoint([254.6748351,-127.8820314]).appendArc([254.4548816,-127.1411184],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.3537411,-109.6574032]).appendArc([255.4727904,-108.5558589],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.6372151,-106.7516231]).appendArc([238.7536266,-105.6780115],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.8390467,-104.6142134]).appendArc([237.9554582,-103.5406018],{"radius":1,"clockwise":false,"large":false}).appendPoint([213.9337448,-100.8036733]).appendArc([213.1601272,-99.3479879],{"radius":1,"clockwise":true,"large":false}).appendPoint([219.0203923,-88.1018211]).appendArc([218.19462,-86.6415728],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.8167291,-85.2728824]).appendArc([194.7559255,-86.2488868],{"radius":1,"clockwise":false,"large":false}).appendPoint([194.6974993,-88.888329]).appendArc([193.6977442,-89.8661986],{"radius":1,"clockwise":true,"large":false}).appendPoint([174.6908537,-89.8661986]).appendArc([173.7482196,-91.2000262],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.9398147,-100.2121814]).appendArc([176.0843363,-101.5422037],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_xlplate_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[176.0843363,-101.5422037],[152.4661015,-103.6085315]]).appendArc([151.5570625,-104.6918819],{"radius":1,"clockwise":false,"large":false}).appendPoint([156.4746254,-160.8998833]).appendArc([157.0481243,-161.7189992],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.3007847,-180.0269051]).appendArc([226.9683874,-187.3459795],{"radius":197.5,"clockwise":true,"large":false}).appendPoint([242.2159503,-188.8161724]).appendArc([242.6635671,-188.9722072],{"radius":1,"clockwise":true,"large":false}).appendPoint([263.5073085,-202.4713828]).appendArc([264.1019393,-202.6307307],{"radius":1,"clockwise":false,"large":false}).appendPoint([277.5274254,-201.9446317]).appendArc([273.6781696,-151.1265354],{"radius":247.5,"clockwise":true,"large":false}).appendPoint([254.6748351,-127.8820314]).appendArc([254.4548816,-127.1411184],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.3537411,-109.6574032]).appendArc([255.4727904,-108.5558589],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.6372151,-106.7516231]).appendArc([238.7536266,-105.6780115],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.8390467,-104.6142134]).appendArc([237.9554582,-103.5406018],{"radius":1,"clockwise":false,"large":false}).appendPoint([213.9337448,-100.8036733]).appendArc([213.1601272,-99.3479879],{"radius":1,"clockwise":true,"large":false}).appendPoint([219.0203923,-88.1018211]).appendArc([218.19462,-86.6415728],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.8167291,-85.2728824]).appendArc([194.7559255,-86.2488868],{"radius":1,"clockwise":false,"large":false}).appendPoint([194.6974993,-88.888329]).appendArc([193.6977442,-89.8661986],{"radius":1,"clockwise":true,"large":false}).appendPoint([174.6908537,-89.8661986]).appendArc([173.7482196,-91.2000262],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.9398147,-100.2121814]).appendArc([176.0843363,-101.5422037],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[178.2269321,-103.3623905],[154.6328023,-105.4266094]]).appendArc([153.7237633,-106.5099598],{"radius":1,"clockwise":false,"large":false}).appendPoint([158.2930257,-158.7368672]).appendArc([158.8614946,-159.55362],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.6430459,-178.3780858]).appendArc([230.5332845,-186.4268609],{"radius":199.5,"clockwise":true,"large":false}).appendPoint([244.9908453,-188.1992892]).appendArc([245.4139273,-188.3532701],{"radius":1,"clockwise":true,"large":false}).appendPoint([262.9377516,-199.7371526]).appendArc([263.4393851,-199.897634],{"radius":1,"clockwise":false,"large":false}).appendPoint([275.2246735,-200.4064386]).appendArc([271.6438207,-152.4931968],{"radius":249.5,"clockwise":true,"large":false}).appendPoint([252.5660439,-129.653661]).appendArc([252.3388154,-128.9098491],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.1459334,-111.4134981]).appendArc([253.2644282,-110.3171873],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.4236649,-108.5123603]).appendArc([236.5400764,-107.4387487],{"radius":1,"clockwise":true,"large":false}).appendPoint([236.6254966,-106.3749508]).appendArc([235.7419081,-105.3013392],{"radius":1,"clockwise":false,"large":false}).appendPoint([211.7338535,-102.5659668]).appendArc([210.9643176,-101.1025315],{"radius":1,"clockwise":true,"large":false}).appendPoint([216.8830975,-89.9828355]).appendArc([216.0614069,-88.5148373],{"radius":1,"clockwise":false,"large":false}).appendPoint([197.7194981,-87.3929981]).appendArc([196.6584622,-88.3961446],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.6708165,-90.8611869]).appendArc([195.6708291,-91.8661986],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.7181117,-91.8661986]).appendArc([175.7816135,-93.216871],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.0762746,-102.0155234]).appendArc([178.2269321,-103.3623905],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[178.2269321,-103.3623905],[154.6328023,-105.4266094]]).appendArc([153.7237633,-106.5099598],{"radius":1,"clockwise":false,"large":false}).appendPoint([158.2930257,-158.7368672]).appendArc([158.8614946,-159.55362],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.6430459,-178.3780858]).appendArc([230.5332845,-186.4268609],{"radius":199.5,"clockwise":true,"large":false}).appendPoint([244.9908453,-188.1992892]).appendArc([245.4139273,-188.3532701],{"radius":1,"clockwise":true,"large":false}).appendPoint([262.9377516,-199.7371526]).appendArc([263.4393851,-199.897634],{"radius":1,"clockwise":false,"large":false}).appendPoint([275.2246735,-200.4064386]).appendArc([271.6438207,-152.4931968],{"radius":249.5,"clockwise":true,"large":false}).appendPoint([252.5660439,-129.653661]).appendArc([252.3388154,-128.9098491],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.1459334,-111.4134981]).appendArc([253.2644282,-110.3171873],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.4236649,-108.5123603]).appendArc([236.5400764,-107.4387487],{"radius":1,"clockwise":true,"large":false}).appendPoint([236.6254966,-106.3749508]).appendArc([235.7419081,-105.3013392],{"radius":1,"clockwise":false,"large":false}).appendPoint([211.7338535,-102.5659668]).appendArc([210.9643176,-101.1025315],{"radius":1,"clockwise":true,"large":false}).appendPoint([216.8830975,-89.9828355]).appendArc([216.0614069,-88.5148373],{"radius":1,"clockwise":false,"large":false}).appendPoint([197.7194981,-87.3929981]).appendArc([196.6584622,-88.3961446],{"radius":1,"clockwise":false,"large":false}).appendPoint([196.6708165,-90.8611869]).appendArc([195.6708291,-91.8661986],{"radius":1,"clockwise":true,"large":false}).appendPoint([176.7181117,-91.8661986]).appendArc([175.7816135,-93.216871],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.0762746,-102.0155234]).appendArc([178.2269321,-103.3623905],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _case_inner_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[179.1907642,-104.181504],[155.6078177,-106.2447445]]).appendArc([154.6987787,-107.3280949],{"radius":1,"clockwise":false,"large":false}).appendPoint([159.1113028,-157.7634752]).appendArc([159.6775547,-158.5791756],{"radius":1,"clockwise":false,"large":false}).appendPoint([199.7182834,-177.6466897]).appendArc([232.1377898,-186.0298402],{"radius":200.4,"clockwise":true,"large":false}).appendPoint([246.2393179,-187.9219357]).appendArc([246.6517827,-188.0749103],{"radius":1,"clockwise":true,"large":false}).appendPoint([262.6826788,-198.5075477]).appendArc([263.1389588,-198.6654206],{"radius":1,"clockwise":false,"large":false}).appendPoint([274.1831241,-199.6541644]).appendArc([270.7291698,-153.2028004],{"radius":250.4,"clockwise":true,"large":false}).appendPoint([251.5726392,-130.4466815]).appendArc([251.3429499,-129.6999351],{"radius":1,"clockwise":true,"large":false}).appendPoint([253.1498359,-112.2058299]).appendArc([252.2683307,-111.1095191],{"radius":1,"clockwise":false,"large":false}).appendPoint([236.4275674,-109.3046921]).appendArc([235.5439789,-108.2310805],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.629399,-107.1672825]).appendArc([234.7458105,-106.0936709],{"radius":1,"clockwise":false,"large":false}).appendPoint([210.7439922,-103.3590092]).appendArc([209.9763248,-101.8920801],{"radius":1,"clockwise":true,"large":false}).appendPoint([215.9211819,-90.8292921]).appendArc([215.1013598,-89.3578001],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.576522,-88.3470978]).appendArc([197.51563,-89.3629255],{"radius":1,"clockwise":false,"large":false}).appendPoint([197.5578446,-91.7485057]).appendArc([196.5580011,-92.7661986],{"radius":1,"clockwise":true,"large":false}).appendPoint([177.6307785,-92.7661986]).appendArc([176.6971788,-94.1245163],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.0372082,-102.8269916]).appendArc([179.1907642,-104.181504],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _usbcutout_extrude_12_outline_fn(){
    return new CSG.Path2D([[258.2151668,-137.4419888],[264.1765979,-138.1212081]]).appendArc([265.283373,-137.2408395],{"radius":1,"clockwise":false,"large":false}).appendPoint([266.1889987,-129.2922646]).appendArc([265.30863,-128.1854895],{"radius":1,"clockwise":false,"large":false}).appendPoint([259.3471989,-127.5062703]).appendArc([258.2404238,-128.3866389],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.3347981,-136.3352138]).appendArc([258.2151668,-137.4419889],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}


function feetholes_extrude_0_8_outline_fn(){
    return new CSG.Path2D.arc({"center":[209.7616363,-94.1407389],"radius":4.1,"startangle":189.180384,"endangle":523.8196162}).appendArc([205.7141534,-94.7948661],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
.union(
    new CSG.Path2D.arc({"center":[163.8595701,-147.7836249],"radius":4.1,"startangle":287.6803836,"endangle":622.319616}).appendArc([165.1047683,-151.6899635],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[261.5478045,-190.329428],"radius":4.1,"startangle":160.1803838,"endangle":494.8196165}).appendArc([257.690669,-188.9392818],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[160.7219634,-111.9206157],"radius":4.1,"startangle":17.6803836,"endangle":352.3196174}).appendArc([164.628302,-110.6754175],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[209.7436816,-174.8918649],"radius":4.1,"startangle":1.1803807,"endangle":335.8196194}).appendArc([213.8428115,-174.8074046],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[265.8243081,-136.9099482],"radius":4.1,"startangle":186.1803805,"endangle":520.8196198}).appendArc([261.7481378,-137.3513498],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).union(
    new CSG.Path2D.arc({"center":[247.1101602,-115.6548154],"radius":4.1,"startangle":186.1803805,"endangle":520.8196198}).appendArc([243.0339899,-116.096217],{"radius":4.1,"clockwise":false,"large":true}).close().innerToCAG()
).extrude({ offset: [0, 0, 0.8] });
}


function magnetholes_extrude_1_outline_fn(){
    return CAG.circle({"center":[263.0099352,-180.5897065],"radius":5.1})
.union(
    CAG.circle({"center":[209.9768795,-163.7139573],"radius":5.1})
).union(
    CAG.circle({"center":[234.5960248,-128.3195861],"radius":5.1})
).union(
    CAG.circle({"center":[195.9312043,-107.3209951],"radius":5.1})
).union(
    CAG.circle({"center":[166.5370127,-132.4920814],"radius":5.1})
).extrude({ offset: [0, 0, 1] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = _case_xlplate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _xlbottom__part_0_bounds = _xlbottom__part_0.getBounds();
                let _xlbottom__part_0_x = _xlbottom__part_0_bounds[0].x + (_xlbottom__part_0_bounds[1].x - _xlbottom__part_0_bounds[0].x) / 2
                let _xlbottom__part_0_y = _xlbottom__part_0_bounds[0].y + (_xlbottom__part_0_bounds[1].y - _xlbottom__part_0_bounds[0].y) / 2
                _xlbottom__part_0 = translate([-_xlbottom__part_0_x, -_xlbottom__part_0_y, 0], _xlbottom__part_0);
                _xlbottom__part_0 = rotate([0,0,0], _xlbottom__part_0);
                _xlbottom__part_0 = translate([_xlbottom__part_0_x, _xlbottom__part_0_y, 0], _xlbottom__part_0);

                _xlbottom__part_0 = translate([0,0,0], _xlbottom__part_0);
                let result = _xlbottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = _case_xlplate_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = _case_pcb_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _shelf_case_fn() {
                    

                // creating part 0 of case _shelf
                let _shelf__part_0 = _outerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_0_bounds = _shelf__part_0.getBounds();
                let _shelf__part_0_x = _shelf__part_0_bounds[0].x + (_shelf__part_0_bounds[1].x - _shelf__part_0_bounds[0].x) / 2
                let _shelf__part_0_y = _shelf__part_0_bounds[0].y + (_shelf__part_0_bounds[1].y - _shelf__part_0_bounds[0].y) / 2
                _shelf__part_0 = translate([-_shelf__part_0_x, -_shelf__part_0_y, 0], _shelf__part_0);
                _shelf__part_0 = rotate([0,0,0], _shelf__part_0);
                _shelf__part_0 = translate([_shelf__part_0_x, _shelf__part_0_y, 0], _shelf__part_0);

                _shelf__part_0 = translate([0,0,0], _shelf__part_0);
                let result = _shelf__part_0;
                
            

                // creating part 1 of case _shelf
                let _shelf__part_1 = _innerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_1_bounds = _shelf__part_1.getBounds();
                let _shelf__part_1_x = _shelf__part_1_bounds[0].x + (_shelf__part_1_bounds[1].x - _shelf__part_1_bounds[0].x) / 2
                let _shelf__part_1_y = _shelf__part_1_bounds[0].y + (_shelf__part_1_bounds[1].y - _shelf__part_1_bounds[0].y) / 2
                _shelf__part_1 = translate([-_shelf__part_1_x, -_shelf__part_1_y, 0], _shelf__part_1);
                _shelf__part_1 = rotate([0,0,0], _shelf__part_1);
                _shelf__part_1 = translate([_shelf__part_1_x, _shelf__part_1_y, 0], _shelf__part_1);

                _shelf__part_1 = translate([0,0,0], _shelf__part_1);
                result = result.subtract(_shelf__part_1);
                
            
                    return result;
                }
            
            

                function _outerShelf_case_fn() {
                    

                // creating part 0 of case _outerShelf
                let _outerShelf__part_0 = _case_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _outerShelf__part_0_bounds = _outerShelf__part_0.getBounds();
                let _outerShelf__part_0_x = _outerShelf__part_0_bounds[0].x + (_outerShelf__part_0_bounds[1].x - _outerShelf__part_0_bounds[0].x) / 2
                let _outerShelf__part_0_y = _outerShelf__part_0_bounds[0].y + (_outerShelf__part_0_bounds[1].y - _outerShelf__part_0_bounds[0].y) / 2
                _outerShelf__part_0 = translate([-_outerShelf__part_0_x, -_outerShelf__part_0_y, 0], _outerShelf__part_0);
                _outerShelf__part_0 = rotate([0,0,0], _outerShelf__part_0);
                _outerShelf__part_0 = translate([_outerShelf__part_0_x, _outerShelf__part_0_y, 0], _outerShelf__part_0);

                _outerShelf__part_0 = translate([0,0,0], _outerShelf__part_0);
                let result = _outerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _innerShelf_case_fn() {
                    

                // creating part 0 of case _innerShelf
                let _innerShelf__part_0 = _case_inner_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _innerShelf__part_0_bounds = _innerShelf__part_0.getBounds();
                let _innerShelf__part_0_x = _innerShelf__part_0_bounds[0].x + (_innerShelf__part_0_bounds[1].x - _innerShelf__part_0_bounds[0].x) / 2
                let _innerShelf__part_0_y = _innerShelf__part_0_bounds[0].y + (_innerShelf__part_0_bounds[1].y - _innerShelf__part_0_bounds[0].y) / 2
                _innerShelf__part_0 = translate([-_innerShelf__part_0_x, -_innerShelf__part_0_y, 0], _innerShelf__part_0);
                _innerShelf__part_0 = rotate([0,0,0], _innerShelf__part_0);
                _innerShelf__part_0 = translate([_innerShelf__part_0_x, _innerShelf__part_0_y, 0], _innerShelf__part_0);

                _innerShelf__part_0 = translate([0,0,0], _innerShelf__part_0);
                let result = _innerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _usbcutout_case_case_fn() {
                    

                // creating part 0 of case _usbcutout_case
                let _usbcutout_case__part_0 = _usbcutout_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _usbcutout_case__part_0_bounds = _usbcutout_case__part_0.getBounds();
                let _usbcutout_case__part_0_x = _usbcutout_case__part_0_bounds[0].x + (_usbcutout_case__part_0_bounds[1].x - _usbcutout_case__part_0_bounds[0].x) / 2
                let _usbcutout_case__part_0_y = _usbcutout_case__part_0_bounds[0].y + (_usbcutout_case__part_0_bounds[1].y - _usbcutout_case__part_0_bounds[0].y) / 2
                _usbcutout_case__part_0 = translate([-_usbcutout_case__part_0_x, -_usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = rotate([0,0,0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = translate([_usbcutout_case__part_0_x, _usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);

                _usbcutout_case__part_0 = translate([0,0,5], _usbcutout_case__part_0);
                let result = _usbcutout_case__part_0;
                
            
                    return result;
                }
            
            

                function _feet_holes_case_fn() {
                    

                // creating part 0 of case _feet_holes
                let _feet_holes__part_0 = feetholes_extrude_0_8_outline_fn();

                // make sure that rotations are relative
                let _feet_holes__part_0_bounds = _feet_holes__part_0.getBounds();
                let _feet_holes__part_0_x = _feet_holes__part_0_bounds[0].x + (_feet_holes__part_0_bounds[1].x - _feet_holes__part_0_bounds[0].x) / 2
                let _feet_holes__part_0_y = _feet_holes__part_0_bounds[0].y + (_feet_holes__part_0_bounds[1].y - _feet_holes__part_0_bounds[0].y) / 2
                _feet_holes__part_0 = translate([-_feet_holes__part_0_x, -_feet_holes__part_0_y, 0], _feet_holes__part_0);
                _feet_holes__part_0 = rotate([0,0,0], _feet_holes__part_0);
                _feet_holes__part_0 = translate([_feet_holes__part_0_x, _feet_holes__part_0_y, 0], _feet_holes__part_0);

                _feet_holes__part_0 = translate([0,0,0], _feet_holes__part_0);
                let result = _feet_holes__part_0;
                
            
                    return result;
                }
            
            

                function _magnet_holes_case_fn() {
                    

                // creating part 0 of case _magnet_holes
                let _magnet_holes__part_0 = magnetholes_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _magnet_holes__part_0_bounds = _magnet_holes__part_0.getBounds();
                let _magnet_holes__part_0_x = _magnet_holes__part_0_bounds[0].x + (_magnet_holes__part_0_bounds[1].x - _magnet_holes__part_0_bounds[0].x) / 2
                let _magnet_holes__part_0_y = _magnet_holes__part_0_bounds[0].y + (_magnet_holes__part_0_bounds[1].y - _magnet_holes__part_0_bounds[0].y) / 2
                _magnet_holes__part_0 = translate([-_magnet_holes__part_0_x, -_magnet_holes__part_0_y, 0], _magnet_holes__part_0);
                _magnet_holes__part_0 = rotate([0,0,0], _magnet_holes__part_0);
                _magnet_holes__part_0 = translate([_magnet_holes__part_0_x, _magnet_holes__part_0_y, 0], _magnet_holes__part_0);

                _magnet_holes__part_0 = translate([0,0,1], _magnet_holes__part_0);
                let result = _magnet_holes__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _xlbottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            

                // creating part 4 of case case
                let case__part_4 = _shelf_case_fn();

                // make sure that rotations are relative
                let case__part_4_bounds = case__part_4.getBounds();
                let case__part_4_x = case__part_4_bounds[0].x + (case__part_4_bounds[1].x - case__part_4_bounds[0].x) / 2
                let case__part_4_y = case__part_4_bounds[0].y + (case__part_4_bounds[1].y - case__part_4_bounds[0].y) / 2
                case__part_4 = translate([-case__part_4_x, -case__part_4_y, 0], case__part_4);
                case__part_4 = rotate([0,0,0], case__part_4);
                case__part_4 = translate([case__part_4_x, case__part_4_y, 0], case__part_4);

                case__part_4 = translate([0,0,0], case__part_4);
                result = result.union(case__part_4);
                
            

                // creating part 5 of case case
                let case__part_5 = _usbcutout_case_case_fn();

                // make sure that rotations are relative
                let case__part_5_bounds = case__part_5.getBounds();
                let case__part_5_x = case__part_5_bounds[0].x + (case__part_5_bounds[1].x - case__part_5_bounds[0].x) / 2
                let case__part_5_y = case__part_5_bounds[0].y + (case__part_5_bounds[1].y - case__part_5_bounds[0].y) / 2
                case__part_5 = translate([-case__part_5_x, -case__part_5_y, 0], case__part_5);
                case__part_5 = rotate([0,0,0], case__part_5);
                case__part_5 = translate([case__part_5_x, case__part_5_y, 0], case__part_5);

                case__part_5 = translate([0,0,0], case__part_5);
                result = result.subtract(case__part_5);
                
            

                // creating part 6 of case case
                let case__part_6 = _feet_holes_case_fn();

                // make sure that rotations are relative
                let case__part_6_bounds = case__part_6.getBounds();
                let case__part_6_x = case__part_6_bounds[0].x + (case__part_6_bounds[1].x - case__part_6_bounds[0].x) / 2
                let case__part_6_y = case__part_6_bounds[0].y + (case__part_6_bounds[1].y - case__part_6_bounds[0].y) / 2
                case__part_6 = translate([-case__part_6_x, -case__part_6_y, 0], case__part_6);
                case__part_6 = rotate([0,0,0], case__part_6);
                case__part_6 = translate([case__part_6_x, case__part_6_y, 0], case__part_6);

                case__part_6 = translate([0,0,0], case__part_6);
                result = result.subtract(case__part_6);
                
            

                // creating part 7 of case case
                let case__part_7 = _magnet_holes_case_fn();

                // make sure that rotations are relative
                let case__part_7_bounds = case__part_7.getBounds();
                let case__part_7_x = case__part_7_bounds[0].x + (case__part_7_bounds[1].x - case__part_7_bounds[0].x) / 2
                let case__part_7_y = case__part_7_bounds[0].y + (case__part_7_bounds[1].y - case__part_7_bounds[0].y) / 2
                case__part_7 = translate([-case__part_7_x, -case__part_7_y, 0], case__part_7);
                case__part_7 = rotate([0,0,0], case__part_7);
                case__part_7 = translate([case__part_7_x, case__part_7_y, 0], case__part_7);

                case__part_7 = translate([0,0,0], case__part_7);
                result = result.subtract(case__part_7);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        