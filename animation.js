(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.GroupofPeople = function() {
	this.spriteSheet = ss["animation_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.startButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6).p("AiGjZID0DdIj0DW");
	this.shape.setTransform(48.6,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#593E87").s().p("Am7G8IAAt3IN3AAIAAN3g");
	this.shape_1.setTransform(44.4,44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.8,88.9);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(0,0,0.544,0.544);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.6,154.1);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GroupofPeople();
	this.instance.setTransform(0,0,0.207,0.207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,148.6);


(lib.lab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0,0,0.387,0.387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.7,159.7);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#593E87").ss(4).p("AyOyOMAkdAAAMAAAAkdMgkdAAAg");
	this.shape.setTransform(118.8,118.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyOSPMAAAgkdMAkdAAAMAAAAkdg");
	mask.setTransform(118.8,118.8);

	// Layer 3
	this.instance = new lib.Image_3();
	this.instance.setTransform(2,2,0.389,0.389);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.6,237.6);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#593E87").ss(5).p("AyOyOMAkdAAAMAAAAkdMgkdAAAg");
	this.shape_1.setTransform(119.3,119.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AyOSPMAAAgkdMAkdAAAMAAAAkdg");
	mask_1.setTransform(119.3,119.3);

	// Layer 3
	this.instance_1 = new lib.Image_2();
	this.instance_1.setTransform(2.5,2.5,0.389,0.389);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.5,238.6);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#593E87").ss(4).p("AyOyOMAkdAAAMAAAAkdMgkdAAAg");
	this.shape_2.setTransform(118.8,118.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AyOSPMAAAgkdMAkdAAAMAAAAkdg");
	mask_2.setTransform(118.8,118.8);

	// Layer 3
	this.instance_2 = new lib.Image_1();
	this.instance_2.setTransform(2,2,0.389,0.389);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237.6,237.6);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai();
	this.instance.setTransform(0,0,0.409,0.409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.7,91.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.pic_1 = new lib.people();
	this.pic_1.setTransform(121.6,74.3,1,1,0,0,0,121.6,74.3);

	this.timeline.addTween(cjs.Tween.get(this.pic_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,148.6);


(lib.Support = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(80.6,80.6,0.69,0.69,0,0,0,118.8,118.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,163.9,163.9);


(lib.Research = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(80.6,80.6,0.69,0.69,0,0,0,118.8,118.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,163.9,163.9);


(lib.About = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(80.6,80.6,0.69,0.69,0,0,0,119.3,119.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,164.5,164.6);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_22 = function() {
		this.stop();
		
		this.button_2.addEventListener("click", f2_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function f2_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(24);
		}
		
		this.button_3.addEventListener("click", f3_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function f3_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(39);
		}
		
		this.button_4.addEventListener("click", f4_ClickToGoToAndPlayFromFrame_52.bind(this));
		
		function f4_ClickToGoToAndPlayFromFrame_52()
		{
			this.gotoAndPlay(52);
		}
	}
	this.frame_37 = function() {
		this.stop();
		
		this.button_5.addEventListener("click", f5_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function f5_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(3);
		}
	}
	this.frame_51 = function() {
		this.stop();
		
		this.button_5.addEventListener("click", f5_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function f5_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(3);
		}
	}
	this.frame_63 = function() {
		this.stop();
		
		this.button_5.addEventListener("click", f5_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function f5_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(15).call(this.frame_37).wait(14).call(this.frame_51).wait(12).call(this.frame_63).wait(1));

	// Layer 5
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-158.9,296,1,1,0,0,0,121.6,74.3);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330066").s().p("AgIAJIAAgSIASAAIAAASg");
	this.shape.setTransform(146.4,177);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330066").s().p("AglBGIgCgQIAKABQAHAAADgCQAEgCACgDQACgDADgKIACgFIgohlIATAAIAWA8IAGAWIAGgWIAXg8IARAAIgnBnIgIAYQgFAIgGAEQgGAEgIAAQgFAAgHgCg");
	this.shape_1.setTransform(138.7,174.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330066").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_2.setTransform(130.9,171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330066").s().p("AgHBHIAAhmIAPAAIAABmgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_3.setTransform(125.8,170.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330066").s().p("AgbA0IAAhlIAQAAIAAAPQAGgKAFgEQADgEAHAAQAIAAAKAGIgGARQgHgEgGgBQgGAAgDAEQgEAEgCAGQgDAJAAALIAAA0g");
	this.shape_4.setTransform(121.1,172.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_5.setTransform(111.4,172.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#330066").s().p("AgHBHIAAhmIAPAAIAABmgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_6.setTransform(103.6,170.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330066").s().p("AgbA0IAAhlIAQAAIAAAPQAGgKAFgEQADgEAHAAQAIAAAKAGIgGARQgHgEgGgBQgGAAgDAEQgEAEgCAGQgDAJAAALIAAA0g");
	this.shape_7.setTransform(98.9,172.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330066").s().p("AgrBIIAAiNIAQAAIAAAOQAGgIAGgEQAIgEAIAAQANAAAKAHQALAGAEANQAGAMAAAPQgBAQgFALQgGANgLAGQgKAHgMAAQgIAAgGgEQgHgDgEgGIAAAygAgSgvQgJAKAAAUQAAATAIAJQAIAKALAAQAKAAAIgKQAJgKAAgTQAAgUgJgKQgIgKgKAAQgKAAgIALg");
	this.shape_8.setTransform(89.5,174.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330066").s().p("AgkBGIgDgQIAKABQAHAAADgCQADgCACgDQACgDAEgKIACgFIgohlIATAAIAWA8IAGAWIAHgWIAVg8IASAAIgnBnIgIAYQgFAIgGAEQgGAEgIAAQgGAAgFgCg");
	this.shape_9.setTransform(73.2,174.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_10.setTransform(62.5,172.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330066").s().p("AAVBHIggg1IgNAMIAAApIgRAAIAAiNIARAAIAABQIAogpIAWAAIgmAlIAqBBg");
	this.shape_11.setTransform(52.6,170.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_12.setTransform(486.5,148.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_13.setTransform(469.9,148.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330066").s().p("AgbA5IAAANIgRAAIAAiNIASAAIAAAzQALgOAPAAQAKAAAIAEQAJADAGAHQAGAHADAKQACAIAAALQABAbgNAPQgOAOgSAAQgQAAgLgPgAgTgKQgIAKAAARQAAATAFAIQAIAOAOAAQAKAAAIgKQAIgKAAgUQABgTgJgJQgIgKgKAAQgKAAgJAKg");
	this.shape_14.setTransform(459.1,146.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_15.setTransform(442.2,148.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#330066").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_16.setTransform(434,146.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330066").s().p("AAYBHIAAhBQAAgMgFgGQgGgGgLAAQgFAAgHAEQgHAEgDAHQgDAFAAANIAAA4IgSAAIAAiNIASAAIAAAzQAMgOARAAQAMAAAIAFQAJAEADAIQAEAIAAAOIAABBg");
	this.shape_17.setTransform(420,146.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#330066").s().p("AgfAoQgNgOABgaQgBgPAGgNQAFgMAMgGQALgHALAAQARAAALAJQALAIADAQIgRADQgDgLgFgFQgHgFgJAAQgLAAgIAJQgJAKABATQgBAUAJAKQAHAJALAAQAKAAAIgGQAGgHADgNIARADQgDARgMALQgMAKgRAAQgTAAgNgOg");
	this.shape_18.setTransform(409.8,148.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330066").s().p("AgbA1IAAhmIAQAAIAAAQQAGgMAFgDQADgDAHAAQAIAAAKAFIgGAQQgHgDgGAAQgGAAgDADQgEAEgCAFQgDAKAAALIAAA1g");
	this.shape_19.setTransform(401.9,148.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_20.setTransform(392.2,148.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_21.setTransform(381.1,148.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#330066").s().p("AgcAtQgLgIgDgRIASgCQABAKAHAGQAHAFAKAAQAMAAAGgFQAFgFAAgGQAAgGgFgEQgDgCgPgEQgRgFgHgCQgIgDgEgGQgEgGAAgIQAAgHAEgGQADgGAFgEQAEgDAHgCQAHgCAJAAQAKAAAJAEQAJADAFAGQAEAGACAKIgSADQgBgIgFgFQgGgEgJAAQgLAAgFAEQgGAEAAAFQAAADACADQADADAEACIAOAEQASAFAIAEQAHABAEAGQAFAGAAAJQAAAJgGAHQgFAIgJAEQgKAFgMAAQgSAAgLgJg");
	this.shape_22.setTransform(370.5,148.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_23.setTransform(360,148.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#330066").s().p("AgbA1IAAhmIAQAAIAAAQQAGgMAFgDQADgDAHAAQAIAAAKAFIgGAQQgHgDgGAAQgGAAgDADQgEAEgCAFQgDAKAAALIAAA1g");
	this.shape_24.setTransform(352,148.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330066").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_25.setTransform(340,146.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_26.setTransform(332.2,148.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330066").s().p("AgeAoQgOgOAAgaQAAgPAGgNQAFgMAMgGQALgHAMAAQAQAAALAJQALAIADAQIgRADQgCgLgHgFQgGgFgIAAQgMAAgJAJQgHAKgBATQABAUAHAKQAJAJALAAQAJAAAHgGQAIgHABgNIARADQgCARgMALQgMAKgQAAQgUAAgMgOg");
	this.shape_27.setTransform(322.1,148.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#330066").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_28.setTransform(314.5,146.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330066").s().p("AgWBBQgKgHgGgMQgGgMAAgQQABgQAEgKQAFgNALgHQALgGAMAAQAHAAAIAEQAHAEAFAGIAAgzIARAAIAACNIgQAAIAAgNQgKAPgSAAQgMAAgKgHgAgSgKQgHAJgBATQAAAUAJAKQAIAKAKAAQALAAAJgKQAHgJABgUQAAgTgJgKQgIgKgMAAQgKAAgIAKg");
	this.shape_29.setTransform(306.4,146.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_30.setTransform(295.6,148.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#330066").s().p("AA0A1IAAhAQAAgKgBgFQgCgEgEgDQgFgDgGAAQgLgBgHAIQgHAHAAAQIAAA7IgQAAIAAhCQAAgLgEgHQgFgFgJAAQgIAAgGADQgGAEgDAIQgDAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAPQAFgJAIgEQAIgEALAAQALAAAIAEQAFAFADAJQAMgSAUAAQAPAAAJAIQAIAIAAATIAABFg");
	this.shape_31.setTransform(281.8,148.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#330066").s().p("AgNBIIAAhYIgQAAIAAgNIAQAAIAAgLQAAgLABgFQADgHAGgEQAFgEALAAIARABIgDAQIgKgBQgIAAgEADQgDAEAAAJIAAAKIAUAAIAAANIgUAAIAABYg");
	this.shape_32.setTransform(265.6,146.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_33.setTransform(256.8,148.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#330066").s().p("AgeBBQgLgIAAgRIARADQABAHAFAEQAHAFALAAQAKAAAHgFQAHgFACgIQABgGAAgRQgLAOgQAAQgVAAgMgQQgLgPAAgUQAAgPAFgMQAFgNALgGQAKgIANABQARgBAMAQIAAgNIAQAAIAABXQAAAZgFAKQgFAKgKAGQgLAFgOAAQgSAAgMgIgAgSgwQgIAJAAATQAAAUAIAHQAIAKAKAAQAMAAAIgKQAJgHAAgTQAAgUgJgJQgIgKgMAAQgKAAgIAKg");
	this.shape_34.setTransform(239.8,150.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330066").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_35.setTransform(229,148.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#330066").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_36.setTransform(221.3,146.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#330066").s().p("AgWBBQgKgHgGgMQgGgMAAgQQABgQAFgKQAEgNALgHQALgGAMAAQAHAAAIAEQAHAEAFAGIAAgzIARAAIAACNIgQAAIAAgNQgKAPgSAAQgLAAgLgHgAgSgKQgHAJgBATQAAAUAJAKQAIAKAJAAQAMAAAJgKQAHgJABgUQAAgTgJgKQgIgKgMAAQgKAAgIAKg");
	this.shape_37.setTransform(213.2,146.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#330066").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_38.setTransform(202.4,148.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#330066").s().p("AgXAxQgHgEgEgFQgEgFgCgIIgBgQIAAg+IASAAIAAA3IABASQABAIAGADQAFAEAJAAQAFAAAHgEQAHgEADgHQADgHAAgNIAAg1IASAAIAABlIgQAAIAAgPQgMARgUAAQgIAAgJgDg");
	this.shape_39.setTransform(191.3,148.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#330066").s().p("AgNBIIAAhYIgQAAIAAgNIAQAAIAAgLQAAgLABgFQADgHAGgEQAFgEALAAIARABIgDAQIgKgBQgIAAgEADQgDAEAAAJIAAAKIAUAAIAAANIgUAAIAABYg");
	this.shape_40.setTransform(183.4,146.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#330066").s().p("AgWBBQgKgHgGgMQgFgMgBgQQAAgQAGgKQAEgNALgHQALgGAMAAQAIAAAHAEQAHAEAFAGIAAgzIASAAIAACNIgRAAIAAgNQgKAPgSAAQgLAAgLgHgAgRgKQgJAJABATQAAAUAIAKQAIAKAJAAQAMAAAIgKQAJgJgBgUQAAgTgIgKQgIgKgMAAQgKAAgHAKg");
	this.shape_41.setTransform(168.8,146.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#330066").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_42.setTransform(158,148.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_43.setTransform(146.8,148.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#330066").s().p("AAYA1IAAg9QAAgMgCgEQgCgGgFgDQgFgDgHAAQgKgBgIAIQgIAHAAAUIAAA3IgSAAIAAhmIAQAAIAAAPQAMgRATAAQAKAAAIADQAHADAEAFQAEAGACAIIABARIAAA+g");
	this.shape_44.setTransform(130.2,148.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_45.setTransform(119.1,148.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#330066").s().p("AgHBHIAAhlIAPAAIAABlgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_46.setTransform(111.4,146.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#330066").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_47.setTransform(106.5,146.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_48.setTransform(98,148.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#330066").s().p("AA0A1IAAhAQAAgKgBgFQgCgEgEgDQgFgDgGAAQgLgBgHAIQgHAHAAAQIAAA7IgQAAIAAhCQAAgLgEgHQgFgFgJAAQgIAAgGADQgGAEgDAIQgDAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAPQAFgJAIgEQAIgEALAAQALAAAIAEQAFAFADAJQAMgSAUAAQAPAAAJAIQAIAIAAATIAABFg");
	this.shape_49.setTransform(84.2,148.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_50.setTransform(70.3,148.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#330066").s().p("AgbA1IAAhmIAQAAIAAAQQAGgMAFgDQADgDAHAAQAIAAAKAFIgGAQQgHgDgGAAQgGAAgDADQgEAEgCAFQgDAKAAALIAAA1g");
	this.shape_51.setTransform(62.2,148.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#330066").s().p("AgrBIIAAiNIAPAAIAAAOQAGgIAIgEQAHgEAIAAQANAAAKAHQALAGAEANQAFAMABAPQAAAQgGALQgGANgLAGQgLAHgLAAQgHAAgHgEQgHgDgEgGIAAAygAgTgvQgIAKgBAUQABATAHAJQAJAKALAAQAKAAAJgKQAIgKAAgTQAAgUgIgKQgJgKgKAAQgKAAgJALg");
	this.shape_52.setTransform(52.8,150.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_53.setTransform(442.3,124.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#330066").s().p("AAYBHIAAhCQAAgLgFgGQgGgGgLAAQgFAAgHAEQgHAEgDAHQgDAFAAAMIAAA5IgSAAIAAiNIASAAIAAAzQAMgOARAAQAMAAAIAEQAJAFADAIQAEAIAAANIAABCg");
	this.shape_54.setTransform(431.2,122.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#330066").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_55.setTransform(423,122.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#330066").s().p("AgWBBQgKgHgGgMQgGgMABgQQAAgQAEgKQAGgNAKgHQAKgGANAAQAIAAAHAEQAHAEAFAGIAAgzIASAAIAACNIgRAAIAAgNQgKAPgSAAQgMAAgKgHgAgSgKQgHAJAAATQgBAUAJAKQAIAKAKAAQALAAAJgKQAHgJABgUQAAgTgJgKQgIgKgMAAQgKAAgIAKg");
	this.shape_56.setTransform(408.7,122.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_57.setTransform(397.9,124.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#330066").s().p("AgWBBQgKgHgGgMQgFgMAAgQQAAgQAEgKQAGgNAKgHQAKgGANAAQAIAAAHAEQAHAEAFAGIAAgzIASAAIAACNIgRAAIAAgNQgKAPgSAAQgLAAgLgHgAgRgKQgJAJABATQAAAUAIAKQAIAKAJAAQAMAAAIgKQAJgJgBgUQAAgTgIgKQgIgKgMAAQgKAAgHAKg");
	this.shape_58.setTransform(386.5,122.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#330066").s().p("AgbA0IAAhlIAQAAIAAAPQAGgKAFgEQADgEAHAAQAIAAAKAGIgGARQgHgFgGAAQgGAAgDAEQgEADgCAHQgDAJAAALIAAA0g");
	this.shape_59.setTransform(378.7,124);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_60.setTransform(369,124.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#330066").s().p("AgeBCQgLgJAAgRIARACQABAJAFADQAHAFALAAQAKAAAHgFQAHgEACgKQABgFAAgRQgLANgQAAQgVAAgMgPQgLgQAAgTQAAgPAFgNQAFgMALgHQAKgGANgBQARAAAMAQIAAgNIAQAAIAABYQAAAXgFALQgFAKgKAFQgLAHgOAAQgSgBgMgHgAgSgxQgIAKAAATQAAAUAIAHQAIAKAKAAQAMAAAIgKQAJgHAAgUQAAgSgJgLQgIgJgMAAQgKAAgIAJg");
	this.shape_61.setTransform(357.6,126.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_62.setTransform(346.8,124.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#330066").s().p("AgbA0IAAhlIAQAAIAAAPQAGgKAFgEQADgEAHAAQAIAAAKAGIgGARQgHgFgGAAQgGAAgDAEQgEADgCAHQgDAJAAALIAAA0g");
	this.shape_63.setTransform(338.8,124);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#330066").s().p("AgcAtQgLgIgDgRIASgCQABAKAHAGQAHAFAKAAQAMAAAGgFQAFgFAAgGQAAgGgFgEQgDgCgPgEQgRgFgHgCQgIgDgEgGQgEgGAAgIQAAgHAEgGQADgGAFgEQAEgDAHgCQAHgCAJAAQAKAAAJAEQAJADAFAGQAEAGACAKIgSADQgBgIgFgFQgGgEgJAAQgLAAgFAEQgGAEAAAFQAAADACADQADADAEACIAOAEQASAFAIAEQAHABAEAGQAFAGAAAJQAAAJgGAHQgFAIgJAEQgKAFgMAAQgSAAgLgJg");
	this.shape_64.setTransform(324,124.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#330066").s().p("AglBGIgCgQIAKABQAHAAADgCQAEgCACgDQACgDADgKIACgFIgohlIATAAIAWA8IAGAWIAGgWIAXg8IARAAIgnBnIgIAYQgFAIgGAEQgGAEgIAAQgGAAgGgCg");
	this.shape_65.setTransform(314.2,126.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_66.setTransform(303.5,124.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#330066").s().p("AAUAzIgRg8IgDgSIgUBOIgSAAIgghlIATAAIAQA5IAGAXIAGgWIAQg6IAQAAIAQA6IAFAUIAGgUIASg6IARAAIghBlg");
	this.shape_67.setTransform(290.7,124.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#330066").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_68.setTransform(281.3,122.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_69.setTransform(273.5,124.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#330066").s().p("AgcAtQgLgIgDgRIASgCQABAKAHAGQAHAFAKAAQAMAAAGgFQAFgFAAgGQAAgGgFgEQgDgCgPgEQgRgFgHgCQgIgDgEgGQgEgGAAgIQAAgHAEgGQADgGAFgEQAEgDAHgCQAHgCAJAAQAKAAAJAEQAJADAFAGQAEAGACAKIgSADQgBgIgFgFQgGgEgJAAQgLAAgFAEQgGAEAAAFQAAADACADQADADAEACIAOAEQASAFAIAEQAHABAEAGQAFAGAAAJQAAAJgGAHQgFAIgJAEQgKAFgMAAQgSAAgLgJg");
	this.shape_70.setTransform(257.4,124.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_71.setTransform(246.8,124.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#330066").s().p("AAYBHIAAhCQAAgLgFgGQgGgGgLAAQgFAAgHAEQgHAEgDAHQgDAFAAAMIAAA5IgSAAIAAiNIASAAIAAAzQAMgOARAAQAMAAAIAEQAJAFADAIQAEAIAAANIAABCg");
	this.shape_72.setTransform(235.8,122.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#330066").s().p("AAYA0IAAg9QAAgKgCgGQgCgFgFgDQgFgDgHAAQgKAAgIAHQgIAHAAAUIAAA2IgSAAIAAhlIAQAAIAAAOQAMgRATAAQAKAAAIAEQAHADAEAGQAEAFACAHIABARIAAA+g");
	this.shape_73.setTransform(219.1,124);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_74.setTransform(208,124.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#330066").s().p("AgHBHIAAhmIAPAAIAABmgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_75.setTransform(200.3,122.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#330066").s().p("AgBBDQgGgDgCgFQgCgFAAgQIAAg5IgNAAIAAgOIANAAIAAgaIAQgKIAAAkIARAAIAAAOIgRAAIAAA6IABAKQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIAHgBIADAQIgNABQgKAAgDgDg");
	this.shape_76.setTransform(195.4,122.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#330066").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_77.setTransform(186.9,124.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#330066").s().p("AgHBHIAAhmIAPAAIAABmgAgHgyIAAgUIAPAAIAAAUg");
	this.shape_78.setTransform(179.2,122.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#330066").s().p("AgfAoQgNgOABgaQAAgPAFgNQAFgMAMgGQALgHALAAQARAAALAJQALAIADAQIgRADQgDgLgFgFQgHgFgJAAQgLAAgIAJQgJAKABATQgBAUAJAKQAHAJALAAQAKAAAHgGQAIgHACgNIARADQgDARgMALQgMAKgRAAQgTAAgNgOg");
	this.shape_79.setTransform(172.3,124.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#330066").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_80.setTransform(161.4,124.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#330066").s().p("AgcAtQgLgIgDgRIASgCQABAKAHAGQAHAFAKAAQAMAAAGgFQAFgFAAgGQAAgGgFgEQgDgCgPgEQgRgFgHgCQgIgDgEgGQgEgGAAgIQAAgHAEgGQADgGAFgEQAEgDAHgCQAHgCAJAAQAKAAAJAEQAJADAFAGQAEAGACAKIgSADQgBgIgFgFQgGgEgJAAQgLAAgFAEQgGAEAAAFQAAADACADQADADAEACIAOAEQASAFAIAEQAHABAEAGQAFAGAAAJQAAAJgGAHQgFAIgJAEQgKAFgMAAQgSAAgLgJg");
	this.shape_81.setTransform(150.8,124.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#330066").s().p("AgcAtQgLgIgDgRIASgCQABAKAHAGQAHAFAKAAQAMAAAGgFQAFgFAAgGQAAgGgFgEQgDgCgPgEQgRgFgHgCQgIgDgEgGQgEgGAAgIQAAgHAEgGQADgGAFgEQAEgDAHgCQAHgCAJAAQAKAAAJAEQAJADAFAGQAEAGACAKIgSADQgBgIgFgFQgGgEgJAAQgLAAgFAEQgGAEAAAFQAAADACADQADADAEACIAOAEQASAFAIAEQAHABAEAGQAFAGAAAJQAAAJgGAHQgFAIgJAEQgKAFgMAAQgSAAgLgJg");
	this.shape_82.setTransform(140.8,124.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#330066").s().p("AAtBHIgRgrIg5AAIgQArIgUAAIA3iNIASAAIA6CNgAgIgcIgQAoIAvAAIgPglIgIgeQgDAOgFANg");
	this.shape_83.setTransform(129.2,122.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#330066").s().p("Ag0BHIAAiNIBmAAIAAARIhTAAIAAArIBNAAIAAAPIhNAAIAAAxIBWAAIAAARg");
	this.shape_84.setTransform(110.5,122.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#330066").s().p("AAxBHIAAh2IgpB2IgPAAIgqh4IAAB4IgSAAIAAiNIAdAAIAhBjIAFAVIAIgWIAihiIAaAAIAACNg");
	this.shape_85.setTransform(95.3,122.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#330066").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_86.setTransform(75.8,124.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#330066").s().p("AAYBHIAAhCQAAgLgFgGQgGgGgLAAQgFAAgHAEQgHAEgDAHQgDAFAAAMIAAA5IgSAAIAAiNIASAAIAAAzQAMgOARAAQAMAAAIAEQAJAFADAIQAEAIAAANIAABCg");
	this.shape_87.setTransform(64.7,122.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#330066").s().p("AgIBHIAAh8IgvAAIAAgRIBvAAIAAARIgvAAIAAB8g");
	this.shape_88.setTransform(53.1,122.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#330066").s().p("AAoB2IAAhtQAAgTgJgLQgJgKgSAAQgLAAgLAIQgLAGgGAMQgEAIAAAVIAABeIgdAAIAAjrIAdAAIAABVQAUgXAdgBQATAAAOAIQAOAHAGANQAGAOAAAXIAABtg");
	this.shape_89.setTransform(326,55.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#330066").s().p("AgzBCQgWgXAAgrQAAgZAJgWQAJgUATgKQATgLAUAAQAcAAASAOQARAOAFAaIgcAEQgEgQgKgKQgKgIgPAAQgUAAgOAPQgOAQAAAhQAAAiAOAPQANAQAUAAQARAAALgKQALgLAEgWIAcAEQgEAegUARQgTAQgcAAQgiAAgUgXg");
	this.shape_90.setTransform(309.1,59.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#330066").s().p("AgtBXIAAipIAaAAIAAAaQAKgTAIgFQAHgGAKAAQAPAAAPAKIgKAbQgLgHgLAAQgJAAgGAGQgHAGgDAJQgFAQAAASIAABYg");
	this.shape_91.setTransform(296.2,58.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#330066").s().p("Ag+BLQgPgOAAgVQAAgMAFgLQAGgKAJgHQAKgEALgDIAagFQAhgEARgGIAAgHQAAgSgIgHQgLgKgVAAQgUAAgJAHQgKAIgFARIgcgDQAEgTAIgLQAJgLARgGQARgGAUAAQAWAAANAFQAOAGAHAHQAGAIADAMQABAHAAAUIAAAkQAAAoACAMQACAKAFAKIgeAAQgFgJgBgMQgQANgPAGQgNAGgRAAQgcAAgPgOgAgGAKQgSADgHADQgHADgEAHQgEAFAAAIQAAALAIAIQAJAIARAAQAPAAANgHQANgIAGgMQAFgKAAgTIAAgKQgQAGgeAEg");
	this.shape_92.setTransform(280.1,59.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#330066").s().p("Ag4BCQgWgYABgpQAAgpAWgYQAWgYAhAAQAjAAAWAXQAVAYAAApIAAAHIh9AAQABAcAPAPQAOAPAUAAQAPAAAMgJQALgIAHgSIAdADQgHAbgTAOQgTAPgeAAQgjAAgXgXgAgegzQgOAOgCAWIBeAAQgCgVgJgMQgOgQgWAAQgSAAgNANg");
	this.shape_93.setTransform(261.8,59.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#330066").s().p("AgvBLQgSgOgFgbIAdgFQADASALAJQALAJARAAQAUAAAKgIQAKgJAAgKQAAgKgJgGQgGgDgXgHQgegHgNgFQgMgFgGgKQgHgLAAgNQAAgLAGgKQAFgJAJgHQAHgFALgEQAMgDANAAQASAAAQAGQAPAFAHAKQAHAKADARIgcAEQgCgNgJgIQgKgHgPAAQgUAAgIAGQgJAHAAAJQAAAGAEAEQADAFAIADIAYAHQAeAIANAGQAMADAHAKQAHAKAAAPQAAAOgJANQgIANgQAHQgQAHgUAAQggAAgRgOg");
	this.shape_94.setTransform(244.3,59.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#330066").s().p("Ag3BCQgXgYAAgpQABgpAWgYQAWgYAhAAQAjAAAVAXQAXAYAAApIgBAHIh9AAQABAcAOAPQAPAPATAAQAQAAALgJQAMgIAGgSIAfADQgIAbgTAOQgTAPgeAAQgkAAgVgXgAgegzQgOAOgCAWIBdAAQgBgVgJgMQgOgQgWAAQgSAAgNANg");
	this.shape_95.setTransform(226.9,59.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#330066").s().p("ABBB2IgggyQgOgVgIgLQgKgLgEgFQgIgFgHgCIgRgBIglAAIAABqIgeAAIAAjrIBmAAQAgABAQAFQARAHAKAQQAKAQAAAUQAAAZgRARQgRAQgiAEQANAGAHAGQAOAMALATIApBBgAhIgMIBEAAQAUgBAMgEQALgEAHgKQAGgKAAgLQAAgRgMgLQgMgLgaAAIhKAAg");
	this.shape_96.setTransform(207,55.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#330066").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_97.setTransform(414.4,181.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#330066").s().p("AA3A3IAAhCQAAgLgCgFQgCgFgFgDQgEgDgHAAQgLAAgIAIQgHAHAAARIAAA9IgRAAIAAhFQAAgMgEgGQgFgGgKAAQgIAAgGAEQgHAEgDAIQgDAIAAAOIAAA3IgSAAIAAhrIAQAAIAAAQQAFgIAJgFQAIgFALAAQAMAAAIAFQAGAFADAJQANgTAVAAQAQAAAIAJQAJAJAAASIAABJg");
	this.shape_98.setTransform(402.7,176.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#330066").s().p("AguBMIAAiVIARAAIAAAPQAGgIAHgFQAIgEAIAAQAOAAALAIQALAGAFANQAGAOAAAPQAAARgGAMQgGANgMAHQgLAHgMAAQgIAAgHgEQgIgEgEgGIAAA1gAgUgxQgJALAAAUQAAAUAIAKQAJAKAMAAQAKAAAJgKQAJgLAAgUQAAgVgJgKQgIgLgLABQgLAAgJALg");
	this.shape_99.setTransform(388.3,178.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#330066").s().p("AggBDQgLgKgCgSIASgCQACANAHAFQAFAGALAAQAGAAAGgEQAHgEAEgGQAEgHADgLQADgLAAgLIAAgEQgGAJgJAFQgKAGgJAAQgTAAgNgOQgNgLAAgWQAAgXAOgOQANgOAVAAQAMAAANAIQAMAIAGAOQAGAPAAAcQAAAagGARQgGARgNAJQgMAJgPAAQgRAAgMgJgAgTgyQgKAKAAAQQAAAPAJAJQAJAGALAAQAMAAAIgGQAIgJAAgQQAAgQgIgKQgJgJgLAAQgLAAgIAKg");
	this.shape_100.setTransform(376.3,174.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#330066").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape_101.setTransform(367,176.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#330066").s().p("AgaBKQAAgSAHgZQAGgZANgWQAKgXAOgQIhHAAIAAgSIBfAAIAAAPQgOAPgOAZQgPAYgFAaQgGATgBAXg");
	this.shape_102.setTransform(357.7,174.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#330066").s().p("AgXBFQgLgHgGgNQgGgNAAgRQAAgQAGgMQAFgMALgIQALgHANAAQAIAAAIAEQAIAFAFAGIAAg2IASAAIAACUIgRAAIAAgNQgLAQgTAAQgMAAgLgHgAgSgKQgJAKAAATQAAAVAJALQAJAKAKAAQAMAAAJgKQAIgKAAgVQAAgUgJgKQgIgKgNAAQgKAAgIAKg");
	this.shape_103.setTransform(339.7,174.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_104.setTransform(328.4,176.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#330066").s().p("AgnAvQgKgIAAgNQAAgIAEgHQAEgHAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAFQgGAEgDALIgSgCQACgLAGgIQAFgGALgEQALgEAMgBQAOAAAIAEQAJADAEAFQAEAFACAHIABASIAAAXQAAAZABAHQABAGAEAHIgUAAQgDgFAAgJQgLAKgJADQgIADgKAAQgSABgKgKgAgDAHQgLABgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgHAAgMIAAgGQgKADgSAEg");
	this.shape_105.setTransform(316.6,176.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#330066").s().p("AA3A3IAAhCQAAgLgCgFQgCgFgFgDQgEgDgHAAQgLAAgIAIQgHAHAAARIAAA9IgRAAIAAhFQAAgMgEgGQgFgGgKAAQgIAAgGAEQgHAEgDAIQgDAIAAAOIAAA3IgSAAIAAhrIAQAAIAAAQQAFgIAJgFQAIgFALAAQAMAAAIAFQAGAFADAJQANgTAVAAQAQAAAIAJQAJAJAAASIAABJg");
	this.shape_106.setTransform(296.3,176.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#330066").s().p("AguBMIAAiVIARAAIAAAPQAGgIAHgFQAIgEAIAAQAOAAALAIQALAGAFANQAGAOAAAPQAAARgGAMQgGANgMAHQgLAHgMAAQgIAAgHgEQgIgEgEgGIAAA1gAgUgxQgJALAAAUQAAAUAIAKQAJAKAMAAQAKAAAJgKQAJgLAAgUQAAgVgJgKQgIgLgLABQgLAAgJALg");
	this.shape_107.setTransform(281.9,178.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#330066").s().p("AANBLIAAgkIhAAAIAAgRIBEhgIAPAAIAABgIAUAAIAAARIgUAAIAAAkgAggAWIAtAAIAAhCg");
	this.shape_108.setTransform(269.6,174.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#330066").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape_109.setTransform(260.6,176.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#330066").s().p("AgwBLQAAgHACgGQAEgKAIgKQAJgJAQgNQAWgUAJgLQAIgLAAgKQAAgLgHgIQgIgHgNAAQgLgBgIAJQgIAHAAAOIgTgBQACgWAMgLQANgLATAAQAWAAANAMQAMAMAAASQAAAJgDAJQgEAJgJAHQgIAJgUASIgTATQgFAEgDAGIBHAAIAAARg");
	this.shape_110.setTransform(251,174.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#330066").s().p("AgKARQAGgCADgFQABgFAAgIIgJAAIAAgVIAUAAIAAAVQgBAKgEAHQgEAHgGAEg");
	this.shape_111.setTransform(236.6,182.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_112.setTransform(227.8,176.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#330066").s().p("AgkAqQgOgPAAgbQAAgcARgPQAPgNASAAQAWAAAOAPQAPAPAAAaQgBATgGAMQgGAMgMAHQgMAGgOAAQgWAAgOgOgAgVgeQgJAKAAAUQAAAUAJALQAIALANgBQANABAKgLQAIgKABgVQgBgTgIgLQgKgKgNAAQgNAAgIAKg");
	this.shape_113.setTransform(216.1,176.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#330066").s().p("AgkAqQgOgPAAgbQAAgcARgPQAPgNASAAQAWAAAOAPQAPAPAAAaQgBATgGAMQgGAMgMAHQgMAGgOAAQgWAAgOgOgAgVgeQgJAKAAAUQAAAUAJALQAIALANgBQANABAKgLQAIgKABgVQgBgTgIgLQgKgKgNAAQgNAAgIAKg");
	this.shape_114.setTransform(204.4,176.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_115.setTransform(192.7,176.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#330066").s().p("AgwBLQAAgHACgGQAEgKAIgKQAJgJAQgNQAWgUAJgLQAIgLAAgKQAAgLgHgIQgIgHgNAAQgLgBgIAJQgIAHAAAOIgTgBQACgWAMgLQANgLATAAQAWAAANAMQAMAMAAASQAAAJgDAJQgEAJgJAHQgIAJgUASIgTATQgFAEgDAGIBHAAIAAARg");
	this.shape_116.setTransform(180.8,174.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#330066").s().p("AAJBLIAAhzQgHAFgIAHQgLAGgJADIAAgRQAPgHALgLQAKgKAGgKIALAAIAACVg");
	this.shape_117.setTransform(168.6,174.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#330066").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape_118.setTransform(160,176.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#330066").s().p("AA3A3IAAhCQAAgLgCgFQgCgFgFgDQgEgDgHAAQgLAAgIAIQgHAHAAARIAAA9IgRAAIAAhFQAAgMgEgGQgFgGgKAAQgIAAgGAEQgHAEgDAIQgDAIAAAOIAAA3IgSAAIAAhrIAQAAIAAAQQAFgIAJgFQAIgFALAAQAMAAAIAFQAGAFADAJQANgTAVAAQAQAAAIAJQAJAJAAASIAABJg");
	this.shape_119.setTransform(147.8,176.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#330066").s().p("AgnAvQgKgIAAgNQAAgIAEgHQAEgHAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAFQgGAEgDALIgSgCQACgLAGgIQAFgGALgEQALgEAMgBQAOAAAIAEQAJADAEAFQAEAFACAHIABASIAAAXQAAAZABAHQABAGAEAHIgUAAQgDgFAAgJQgLAKgJADQgIADgKAAQgSABgKgKgAgDAHQgLABgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgHAAgMIAAgGQgKADgSAEg");
	this.shape_120.setTransform(133.1,176.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#330066").s().p("AggA9QgQgTABgqQgBgZAHgQQAFgRAKgIQALgJAPAAQAMAAAJAFQAJAFAGAJQAGAJADANQAEANAAAVQAAAagGAQQgFARgLAIQgLAJgQAAQgUAAgMgPgAgTgxQgJAOgBAjQAAAlAKAMQAIAMALAAQANAAAIgMQAJgMAAglQAAgkgJgMQgIgMgNAAQgLAAgIALg");
	this.shape_121.setTransform(121.4,174.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#330066").s().p("AAJBLIAAhzQgHAFgIAHQgLAGgJADIAAgRQAPgHALgLQALgKAEgKIAMAAIAACVg");
	this.shape_122.setTransform(109,174.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#330066").s().p("AgJA2IAAgVIATAAIAAAVgAgJggIAAgVIATAAIAAAVg");
	this.shape_123.setTransform(95.2,176.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#330066").s().p("AgeAvQgLgIgDgSIASgCQACAKAHAHQAHAFALAAQAMABAHgGQAGgFAAgHQAAgGgGgEQgEgDgPgDQgSgGgIgCQgIgDgEgGQgEgHAAgIQAAgHAEgHQADgGAGgEQAEgDAHgCQAIgDAIAAQALABAKAEQAKADAEAGQAFAHACAKIgSACQgCgHgGgFQgGgFgJAAQgMAAgFAEQgGAEAAAGQAAADACADQADAEAEABIAPAFQATAFAIADQAIACAEAGQAFAGAAAKQAAAJgGAIQgFAJgKAEQgKAEgNAAQgTABgMgKg");
	this.shape_124.setTransform(86.9,176.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#330066").s().p("AgjAqQgOgPAAgaQAAgaAPgPQAOgPAUgBQAWAAAOAPQAOAPAAAaIAAAEIhPAAQABASAJAJQAJAKALAAQALABAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgNgGgIQgIgKgOAAQgLAAgJAIg");
	this.shape_125.setTransform(75.8,176.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#330066").s().p("AA3A3IAAhCQAAgLgCgFQgCgFgFgDQgEgDgHAAQgLAAgIAIQgHAHAAARIAAA9IgRAAIAAhFQAAgMgEgGQgFgGgKAAQgIAAgGAEQgHAEgDAIQgDAIAAAOIAAA3IgSAAIAAhrIAQAAIAAAQQAFgIAJgFQAIgFALAAQAMAAAIAFQAGAFADAJQANgTAVAAQAQAAAIAJQAJAJAAASIAABJg");
	this.shape_126.setTransform(61.3,176.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#330066").s().p("AgIBLIAAhrIARAAIAABrgAgIg0IAAgWIARAAIAAAWg");
	this.shape_127.setTransform(50.2,174.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#330066").s().p("AgBBHQgGgEgCgFQgDgFAAgRIAAg8IgNAAIAAgPIANAAIAAgbIARgLIAAAmIASAAIAAAPIgSAAIAAA9QAAAIABADIADADIAGABIAIAAIADAQIgOACQgKAAgDgDg");
	this.shape_128.setTransform(45,174.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_129.setTransform(488.7,151.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#330066").s().p("AgeAvQgLgIgDgSIASgDQACAMAHAGQAHAFALABQAMAAAHgGQAGgFAAgHQAAgGgGgEQgEgCgPgEQgSgFgIgDQgIgDgEgGQgEgHAAgIQAAgIAEgFQADgHAGgEQAEgDAHgCQAIgCAIAAQALAAAKADQAKAEAEAGQAFAHACAKIgSACQgCgHgGgFQgGgFgJAAQgMAAgFAEQgGAEAAAGQAAADACAEQADADAEABIAPAFQATAFAIAEQAIABAEAGQAFAHAAAJQAAAJgGAIQgFAJgKAEQgKAFgNgBQgTAAgMgJg");
	this.shape_130.setTransform(477.6,151.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_131.setTransform(466.5,151.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#330066").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_132.setTransform(454.8,149.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#330066").s().p("AgBBHQgGgEgCgFQgDgFAAgRIAAg8IgNAAIAAgPIANAAIAAgbIARgLIAAAmIASAAIAAAPIgSAAIAAA9QAAAIABADIADADIAGABIAIAAIADAQIgOACQgKAAgDgDg");
	this.shape_133.setTransform(446.2,149.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_134.setTransform(431.4,151.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_135.setTransform(419.7,151.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_136.setTransform(408,151.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#330066").s().p("AAVA2IgRg/IgEgTIgVBSIgTAAIghhrIATAAIARA9IAHAYIAFgXIASg+IARAAIAQA9IAFAVIAHgVIASg9IASAAIgiBrg");
	this.shape_137.setTransform(394.6,151.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#330066").s().p("AgBBHQgGgEgCgFQgDgFAAgRIAAg8IgNAAIAAgPIANAAIAAgbIARgLIAAAmIASAAIAAAPIgSAAIAAA9QAAAIABADIADADIAGABIAIAAIADAQIgOACQgKAAgDgDg");
	this.shape_138.setTransform(384.2,149.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_139.setTransform(375.3,151.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#330066").s().p("AgcA8IAAAOIgSAAIAAiVIATAAIAAA2QAMgPAQAAQAKAAAJAEQAJAEAGAIQAFAHAEALQADAIAAALQAAAcgOAPQgOAQgTAAQgRAAgLgQgAgUgKQgJAKAAASQAAAUAGAJQAIAOAPAAQAKAAAJgLQAJgKAAgVQAAgUgIgJQgJgLgLABQgLAAgJAKg");
	this.shape_140.setTransform(363.9,149.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_141.setTransform(346,151.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_142.setTransform(334.4,151.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#330066").s().p("AgjAqQgPgPAAgbQAAgcARgQQAPgLASAAQAWAAAOAOQAPAPAAAaQAAATgHAMQgGAMgMAHQgMAHgOgBQgWAAgNgOgAgWgdQgIAJgBAUQABAVAIAKQAKALAMAAQANAAAKgLQAIgLABgUQgBgUgIgJQgKgLgNAAQgMAAgKALg");
	this.shape_143.setTransform(322.7,151.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#330066").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_144.setTransform(311,149.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#330066").s().p("AguBMIAAiVIARAAIAAAPQAGgJAHgDQAIgFAIAAQAOAAALAHQALAIAFAMQAGAOAAAPQAAARgGAMQgGANgMAHQgLAHgMAAQgIAAgHgEQgIgEgEgGIAAA1gAgUgxQgJALAAAVQAAASAIAKQAJALAMAAQAKAAAJgLQAJgKAAgUQAAgVgJgKQgIgKgLAAQgLgBgJAMg");
	this.shape_145.setTransform(299.6,153.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_146.setTransform(281.7,151.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#330066").s().p("AgeAvQgLgIgDgSIASgDQACAMAHAGQAHAFALABQAMAAAHgGQAGgFAAgHQAAgGgGgEQgEgCgPgEQgSgFgIgDQgIgDgEgGQgEgHAAgIQAAgIAEgFQADgHAGgEQAEgDAHgCQAIgCAIAAQALAAAKADQAKAEAEAGQAFAHACAKIgSACQgCgHgGgFQgGgFgJAAQgMAAgFAEQgGAEAAAGQAAADACAEQADADAEABIAPAFQATAFAIAEQAIABAEAGQAFAHAAAJQAAAJgGAIQgFAJgKAEQgKAFgNgBQgTAAgMgJg");
	this.shape_147.setTransform(270.6,151.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#330066").s().p("AgnAvQgKgIAAgNQAAgIAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAFQgGAEgDAMIgSgDQACgLAGgIQAFgHALgEQALgDAMAAQAOgBAIAEQAJADAEAFQAEAFACAHIABASIAAAWQAAAaABAHQABAHAEAGIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKgBQgSAAgKgJgAgDAHQgLABgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgFAEgHQADgHAAgMIAAgGQgKAEgSADg");
	this.shape_148.setTransform(259.5,151.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWAAAOAOQAOAPAAAaIAAAFIhPAAQABARAJAKQAJAJALABQALAAAHgGQAHgFAEgMIATACQgEARgNAJQgMAJgTAAQgWAAgOgOgAgTggQgJAJAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAIg");
	this.shape_149.setTransform(247.8,151.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#330066").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_150.setTransform(239.6,149.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#330066").s().p("Ag4BLIAAiVIA4AAQAOAAAIACQALACAIAFQAHAFAEAJQAFAKAAALQAAATgNALQgLAOghAAIgkAAIAAA9gAgkgCIAlAAQATAAAJgHQAHgHAAgNQAAgKgEgHQgFgGgIgCQgFgCgOAAIgkAAg");
	this.shape_151.setTransform(230.7,149.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#330066").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_152.setTransform(214.6,155.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#330066").s().p("AghA7QgPgRAAgnQAAgpAQgUQAOgRAWAAQASAAALAKQALAKADARIgTACQgCgLgFgFQgHgIgLAAQgHAAgHAFQgJAGgEAMQgGANAAAWQAHgKAKgFQAJgFAJAAQASAAANAOQANALAAAWQAAAOgGAMQgGAMgKAHQgMAGgNAAQgVAAgOgRgAgSACQgJAIAAAPQAAAKAEAIQAEAJAHAFQAIAEAGAAQALAAAJgJQAIgKABgQQgBgQgIgIQgJgHgMAAQgKAAgJAHg");
	this.shape_153.setTransform(205.7,149.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#330066").s().p("AgwBLQAAgGACgHQAEgKAIgKQAJgKAQgMQAWgUAJgLQAIgLAAgKQAAgLgHgIQgIgHgNgBQgLAAgIAJQgIAHAAAOIgTgCQACgUAMgMQANgLATAAQAWAAANAMQAMAMAAASQAAAJgDAJQgEAJgJAHQgIAKgUARIgTASQgFAFgDAFIBHAAIAAASg");
	this.shape_154.setTransform(193.8,149.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#330066").s().p("AghBBQgNgMgCgTIATgCQADAPAHAHQAIAHALAAQALAAAJgJQAJgJAAgNQAAgNgIgIQgJgIgMAAQgEAAgIACIADgPIACABQAKAAAKgHQAJgGAAgNQAAgKgHgGQgHgHgIAAQgLAAgHAHQgIAHgCANIgSgDQADgTAMgKQAMgKASAAQAKAAALAFQAKAFAGAKQAFAJAAAKQAAAKgFAIQgFAIgLAEQAOADAHAIQAIAKAAAOQAAAUgPAOQgOANgUAAQgUAAgNgLg");
	this.shape_155.setTransform(182.4,149.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#330066").s().p("AghBAQgOgMgCgTIAUgBQACANAIAIQAIAHALAAQALAAAKgKQAJgKAAgRQAAgQgJgHQgJgJgNAAQgIAAgHAEQgHAEgFAFIgRgCIAOhMIBJAAIAAASIg5AAIgJApQAOgKANAAQATAAAOAOQANALAAAWQABAUgMAPQgPASgXAAQgVAAgMgLg");
	this.shape_156.setTransform(170.7,149.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#330066").s().p("AghA7QgPgRAAgnQAAgpAQgUQAOgRAWAAQARAAAMAKQALAKADARIgTACQgCgLgFgFQgHgIgLAAQgHAAgHAFQgJAGgEAMQgGANAAAWQAHgKAKgFQAJgFAJAAQASAAANAOQANALAAAWQAAAOgGAMQgGAMgKAHQgMAGgNAAQgVAAgOgRgAgSACQgJAIAAAPQAAAKAEAIQAEAJAHAFQAIAEAGAAQALAAAJgJQAIgKAAgQQAAgQgIgIQgJgHgMAAQgKAAgJAHg");
	this.shape_157.setTransform(153.1,149.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#330066").s().p("AgaBKQAAgSAHgZQAGgZANgWQAKgXAOgQIhHAAIAAgSIBfAAIAAAPQgOAPgOAZQgPAYgFAaQgGATgBAXg");
	this.shape_158.setTransform(141.5,149.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#330066").s().p("AghBAQgOgMgCgTIAUgBQACANAIAIQAIAHALAAQALAAAJgKQAKgKAAgRQAAgQgJgHQgJgJgNAAQgIAAgHAEQgHAEgFAFIgRgCIAOhMIBJAAIAAASIg5AAIgJApQAOgKANAAQATAAAOAOQANALAAAWQABAUgMAPQgPASgXAAQgVAAgMgLg");
	this.shape_159.setTransform(129.8,149.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#330066").s().p("AANBLIAAgkIhAAAIAAgRIBDhgIAQAAIAABgIAUAAIAAARIgUAAIAAAkgAggAWIAtAAIAAhCg");
	this.shape_160.setTransform(111.8,149.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#330066").s().p("AANBLIAAgkIhAAAIAAgRIBDhgIAQAAIAABgIATAAIAAARIgTAAIAAAkgAggAWIAtAAIAAhCg");
	this.shape_161.setTransform(100.1,149.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#330066").s().p("AgjA/QgNgNAAgUQAAgOAHgKQAIgIAOgEQgMgEgFgIQgGgIAAgKQAAgRAMgLQALgLATAAQATAAAMALQAMAMAAAQQAAALgGAHQgFAIgLAEQAOAFAHAIQAHAKAAAOQAAATgOANQgNANgWAAQgVAAgOgNgAgUAJQgJAIAAANQAAAIAEAIQADAHAIAEQAHAEAHAAQANAAAJgIQAIgJAAgNQAAgNgIgJQgJgJgNAAQgMAAgIAJgAgQg1QgHAHAAAJQAAALAHAGQAGAHAKAAQAKAAAHgHQAHgGAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHg");
	this.shape_162.setTransform(88.8,149.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#330066").s().p("AggA9QgPgTgBgqQAAgZAHgQQAEgRAMgIQAKgJAPAAQAMAAAJAFQAJAFAGAJQAGAJAEANQACANABAVQAAAagGAQQgFARgLAIQgLAJgQAAQgUAAgMgPgAgTgxQgKAOAAAjQABAlAIAMQAJAMALAAQANAAAIgMQAJgMAAglQAAgkgJgMQgIgMgNAAQgLAAgIALg");
	this.shape_163.setTransform(77,149.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_164.setTransform(59.5,151.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#330066").s().p("AgkAqQgOgPAAgbQAAgcARgQQAPgLASAAQAWAAAOAOQAPAPAAAaQgBATgGAMQgGAMgMAHQgMAHgOgBQgWAAgOgOgAgVgdQgJAJAAAUQAAAVAJAKQAIALANAAQANAAAKgLQAIgLABgUQgBgUgIgJQgKgLgNAAQgNAAgIALg");
	this.shape_165.setTransform(47.8,151.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#330066").s().p("AgOBMIAAhcIgQAAIAAgPIAQAAIAAgLQAAgMACgFQADgHAGgEQAFgFAMAAQAIAAAJACIgCAQIgLgBQgJAAgDAEQgEADAAAKIAAAKIAWAAIAAAPIgWAAIAABcg");
	this.shape_166.setTransform(504.6,123.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#330066").s().p("AgkAqQgNgPAAgbQgBgdASgPQAOgMASABQAWgBAOAQQAOAOAAAaQAAATgGAMQgGAMgMAHQgMAHgOAAQgVAAgPgPgAgVgdQgKAKABATQgBAUAKALQAIALANAAQANAAAKgLQAJgLAAgUQAAgTgJgKQgKgLgNAAQgNAAgIALg");
	this.shape_167.setTransform(495.3,125.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#330066").s().p("AgnBKIgCgSQAGACAFAAQAGABAEgDQADgCADgEIAFgNIACgFIgphrIAUAAIAWA/IAGAXQADgLAFgMIAXg/IASAAIgpBtQgHASgBAGQgFAKgHAEQgGAEgJAAQgFAAgHgCg");
	this.shape_168.setTransform(478.5,128);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#330066").s().p("AgnAwQgKgJAAgOQAAgHAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAGQgLACgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgGAAgNIAAgGQgKAEgSACg");
	this.shape_169.setTransform(467.2,125.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#330066").s().p("AgXBFQgLgIgGgMQgGgNAAgRQAAgQAGgMQAFgNALgHQALgHANAAQAIAAAIAFQAIADAFAHIAAg2IASAAIAACVIgRAAIAAgOQgLAQgTAAQgMAAgLgHgAgSgLQgJALAAATQAAAVAJAKQAJALAKAAQAMAAAJgKQAIgKAAgUQAAgVgJgKQgIgLgNAAQgKAAgIAKg");
	this.shape_170.setTransform(455.2,123.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#330066").s().p("AgnBKIgCgSQAGACAFAAQAGABAEgDQADgCADgEIAFgNIACgFIgphrIAUAAIAWA/IAGAXQADgLAFgMIAXg/IASAAIgpBtQgHASgBAGQgFAKgHAEQgGAEgJAAQgFAAgHgCg");
	this.shape_171.setTransform(438.7,128);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#330066").s().p("AgcA3IAAhrIAQAAIAAARQAHgMAFgDQAEgEAGAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgDAEQgFADgCAHQgDAKAAALIAAA3g");
	this.shape_172.setTransform(430.7,125.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_173.setTransform(420.5,125.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#330066").s().p("AgHA2IgphrIATAAIAYA/IAFAXIAGgVIAZhBIASAAIgpBrg");
	this.shape_174.setTransform(409.5,125.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_175.setTransform(398.3,125.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_176.setTransform(380.7,125.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#330066").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_177.setTransform(372.6,123.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#330066").s().p("AgcA8IAAAOIgSAAIAAiVIATAAIAAA2QAMgPAQAAQAKAAAJAEQAJAEAGAHQAFAIAEAKQADAJAAAMQAAAcgOAOQgOAQgTAAQgRAAgLgQgAgUgKQgJAKAAASQAAAUAGAJQAIAOAPAAQAKAAAJgLQAJgKAAgVQAAgTgIgLQgJgKgLAAQgLAAgJALg");
	this.shape_178.setTransform(364.7,123.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#330066").s().p("AgnAwQgKgJAAgOQAAgHAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAGQgLACgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgGAAgNIAAgGQgKAEgSACg");
	this.shape_179.setTransform(352.7,125.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#330066").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_180.setTransform(344.5,123.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#330066").s().p("AgIBLIAAhrIARAAIAABrgAgIg0IAAgWIARAAIAAAWg");
	this.shape_181.setTransform(339.9,123.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#330066").s().p("AgnAwQgKgJAAgOQAAgHAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAGQgLACgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgGAAgNIAAgGQgKAEgSACg");
	this.shape_182.setTransform(331.7,125.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#330066").s().p("AgHA2IgqhrIAUAAIAXA/IAGAXIAHgVIAXhBIATAAIgoBrg");
	this.shape_183.setTransform(320.7,125.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#330066").s().p("AgnAwQgKgJAAgOQAAgHAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAGQgLACgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgGAAgNIAAgGQgKAEgSACg");
	this.shape_184.setTransform(309.5,125.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#330066").s().p("AgeAwQgLgJgDgRIASgEQACAMAHAFQAHAHALAAQAMgBAHgFQAGgFAAgHQAAgGgGgEQgEgDgPgDQgSgGgIgCQgIgDgEgGQgEgHAAgIQAAgIAEgFQADgGAGgFQAEgDAHgCQAIgDAIABQALAAAKADQAKAEAEAGQAFAHACAKIgSADQgCgJgGgFQgGgEgJAAQgMAAgFAEQgGAEAAAGQAAAEACADQADADAEABIAPAFQATAFAIAEQAIABAEAGQAFAHAAAJQAAAJgGAJQgFAHgKAFQgKAFgNAAQgTgBgMgIg");
	this.shape_185.setTransform(292.5,125.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#330066").s().p("AgIBLIAAhrIARAAIAABrgAgIg0IAAgWIARAAIAAAWg");
	this.shape_186.setTransform(285,123.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_187.setTransform(270.9,125.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_188.setTransform(259.3,125.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#330066").s().p("AgIBLIAAhrIARAAIAABrgAgIg0IAAgWIARAAIAAAWg");
	this.shape_189.setTransform(251.1,123.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#330066").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_190.setTransform(246.4,123.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#330066").s().p("AguBMIAAiUIARAAIAAAOQAGgJAHgDQAIgFAIAAQAOAAALAHQALAIAFAMQAGANAAAQQAAARgGALQgGANgMAIQgLAHgMAAQgIAAgHgEQgIgEgEgGIAAA1gAgUgyQgJALAAAWQAAASAIAKQAJALAMAAQAKAAAJgLQAJgKAAgUQAAgVgJgKQgIgLgLABQgLgBgJALg");
	this.shape_191.setTransform(238.6,127.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#330066").s().p("AgIBLIAAiVIARAAIAACVg");
	this.shape_192.setTransform(230.1,123.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_193.setTransform(221.9,125.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#330066").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_194.setTransform(210.2,123.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#330066").s().p("AgBBHQgGgEgCgFQgDgFAAgRIAAg8IgNAAIAAgPIANAAIAAgbIARgLIAAAmIASAAIAAAPIgSAAIAAA9QAAAIABADIADADIAGABIAIAAIADAQIgOACQgKAAgDgDg");
	this.shape_195.setTransform(195.7,123.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#330066").s().p("AggAqQgOgPAAgbQAAgQAGgNQAGgNAMgGQAMgIAMABQARgBAMAKQALAJADAQIgSADQgCgLgHgGQgGgFgKAAQgMAAgIAKQgJAKAAAUQAAAWAJAKQAIAKALAAQAMAAAGgIQAIgGACgOIASACQgDATgMALQgMALgTAAQgTAAgOgPg");
	this.shape_196.setTransform(187.8,125.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#330066").s().p("AgjAqQgOgPAAgbQAAgZAPgPQAOgPAUAAQAWgBAOAQQAOAPAAAZIAAAFIhPAAQABARAJAKQAJAKALAAQALgBAHgFQAHgGAEgLIATADQgEAQgNAJQgMAKgTAAQgWAAgOgPgAgTgfQgJAIAAAOIA6AAQgBgOgGgGQgIgLgOAAQgLAAgJAJg");
	this.shape_197.setTransform(176.3,125.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_198.setTransform(164.6,125.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#330066").s().p("AAZA3IAAhAQAAgLgCgGQgCgFgGgEQgFgDgIAAQgJAAgJAHQgIAIAAAVIAAA5IgTAAIAAhrIARAAIAAAQQAMgSAUAAQAKAAAJADQAIAEAEAGQAEAFACAIIABASIAABBg");
	this.shape_199.setTransform(152.9,125.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#330066").s().p("AgjAqQgOgPgBgbQABgdAQgPQAOgMATABQAWgBAOAQQAPAOAAAaQAAATgHAMQgGAMgMAHQgMAHgOAAQgWAAgNgPgAgWgdQgIAKgBATQABAUAIALQAKALAMAAQAOAAAIgLQAJgLAAgUQAAgTgJgKQgJgLgNAAQgMAAgKALg");
	this.shape_200.setTransform(141.2,125.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#330066").s().p("AgiBDQgPgJgIgTQgIgTAAgUQAAgXAJgRQAJgSAQgJQARgJASAAQAWAAAQALQAPAMAHAVIgUAEQgGgQgJgIQgLgHgPAAQgPAAgLAIQgMAIgFAPQgFANABAPQgBASAGAOQAFAOAMAHQAMAHAMAAQARAAALgJQAMgKAEgTIAUAFQgHAZgPAMQgRANgYAAQgWAAgPgKg");
	this.shape_201.setTransform(128,123.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#330066").s().p("Ag3BLIAAiVIBrAAIAAASIhXAAIAAAuIBRAAIAAAQIhRAAIAAAzIBbAAIAAASg");
	this.shape_202.setTransform(107.7,123.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#330066").s().p("AA0BLIAAh8IgsB8IgQAAIgrh+IAAB+IgTAAIAAiVIAeAAIAjBpIAGAWIAIgYIAkhnIAaAAIAACVg");
	this.shape_203.setTransform(91.6,123.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#330066").s().p("AgcA3IAAhrIAQAAIAAARQAHgMAFgDQAEgEAGAAQAJAAAKAGIgGARQgHgEgHAAQgGAAgDAEQgFADgCAHQgDAKAAALIAAA3g");
	this.shape_204.setTransform(74.4,125.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#330066").s().p("AgYA0QgIgEgEgGQgEgFgCgIIgBgSIAAhBIATAAIAAA6IABAUQACAHAFAEQAGAEAJAAQAFAAAIgEQAHgEAEgHQACgIAAgOIAAg4IASAAIAABrIgQAAIAAgQQgMASgVAAQgJAAgJgDg");
	this.shape_205.setTransform(64.1,125.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#330066").s().p("AgkBDQgRgKgIgSQgKgSABgTQAAgkATgVQAVgVAeAAQAUAAARAKQARAKAJARQAIASABAVQAAAXgKASQgJASgRAJQgRAJgTAAQgUAAgQgKgAgigtQgQAPAAAgQAAAbAPAQQAOAPAVAAQAWAAAPgPQAOgQAAgdQAAgRgGgNQgGgOgMgIQgMgHgPAAQgUAAgOAOg");
	this.shape_206.setTransform(50.2,123.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#330066").s().p("AgEByQgIgFgEgIQgDgIAAgbIAAhkIgXAAIAAgXIAXAAIAAgsIAbgSIAAA+IAeAAIAAAXIgeAAIAABlQAAANACAEQACADADADQAEACAGAAIANgBIAFAaQgNADgKAAQgRAAgHgGg");
	this.shape_207.setTransform(332.5,69.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#330066").s().p("AgvBaIAAivIAbAAIAAAbQALgTAIgGQAHgGALAAQAPAAAPAKIgKAcQgLgHgLAAQgKAAgGAGQgHAGgEALQgEAQAAASIAABbg");
	this.shape_208.setTransform(323.3,72.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#330066").s().p("Ag6BEQgXgYAAgsQAAgvAbgYQAXgUAfAAQAkAAAXAYQAXAYAAAqQAAAggKAUQgLATgTALQgUALgWAAQgjAAgXgYgAgkgxQgOARAAAgQAAAhAOARQAPARAVAAQAVAAAPgRQAQgRgBghQABgggQgRQgPgRgVAAQgVAAgPARg");
	this.shape_209.setTransform(306.8,72.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#330066").s().p("AhLB8IAAjyIAbAAIAAAWQAKgNAMgHQAMgHAPAAQAXABARAMQARALAJAVQAJAVAAAZQAAAbgKAVQgJAVgTALQgTAMgTAAQgOAAgLgHQgMgFgIgLIAABXgAghhRQgPASAAAiQAAAgAOAQQAOAQATABQASgBAOgRQAOgQAAgiQAAgigOgQQgOgRgRAAQgTAAgOASg");
	this.shape_210.setTransform(288.4,76.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#330066").s().p("AhLB8IAAjyIAbAAIAAAWQAKgNAMgHQAMgHAPAAQAXABARAMQARALAJAVQAJAVAAAZQAAAbgKAVQgJAVgTALQgTAMgTAAQgOAAgLgHQgMgFgIgLIAABXgAgihRQgOASAAAiQAAAgAOAQQAOAQATABQASgBAOgRQAOgQAAgiQAAgigOgQQgOgRgRAAQgTAAgPASg");
	this.shape_211.setTransform(269.5,76.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#330066").s().p("AgmBUQgOgGgGgJQgIgJgCgNQgCgJAAgTIAAhsIAeAAIAABgQAAAYACAIQADAMAJAGQAJAHAOAAQALAAALgHQAMgHAFgMQAGgMAAgWIAAhdIAdAAIAACvIgbAAIAAgaQgUAegiAAQgPAAgNgGg");
	this.shape_212.setTransform(250,73.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#330066").s().p("AgvB0QgWgKgNgTQgNgUAAgYIAegDQACATAIALQAIAMAQAHQARAIATAAQASAAAOgGQAOgFAHgKQAHgKAAgLQAAgLgGgJQgHgIgPgGQgKgEgggIQghgIgOgFQgRgJgJgOQgIgNAAgRQAAgTAKgQQALgQAUgIQAUgIAYAAQAaAAAUAJQAVAIALARQALARABAVIgfADQgCgXgPgMQgOgMgbAAQgcAAgOALQgNALAAAPQAAANAJAIQAKAJAlAJQAnAIAPAHQAVAIAKAPQAKAPAAAUQAAATgLARQgLARgVAKQgVAJgaAAQgfAAgWgJg");
	this.shape_213.setTransform(229.2,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({x:-101.3,y:295.8},0).wait(1).to({x:-43.6,y:295.6},0).wait(1).to({x:14,y:295.4},0).wait(1).to({x:71.6,y:295.2},0).wait(1).to({x:129.2,y:295},0).wait(1).to({x:186.8,y:294.8},0).wait(1).to({x:244.4,y:294.6},0).wait(1).to({x:302.1,y:294.4},0).wait(1).to({x:359.7,y:294.2},0).wait(1).to({x:337.9,y:294},0).wait(1).to({x:316,y:293.8},0).wait(1).to({x:294.2,y:293.6},0).wait(1).to({x:272.4,y:293.4},0).wait(1).to({_off:true},1).wait(26));

	// Layer 3
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#330066").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_214.setTransform(475.5,176.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#330066").s().p("AgcA+QgLgIABgQIAPADQACAHAEAEQAHAEAKAAQAKAAAGgEQAHgFACgJQABgEAAgRQgLANgPAAQgUAAgKgOQgMgPAAgTQAAgOAFgMQAGgMAJgGQAKgHAMAAQAQAAALAPIAAgNIAQAAIAABUQAAAXgFAKQgEAJgKAFQgLAGgNAAQgRAAgLgIgAgRguQgIAJAAASQAAATAIAIQAHAIAKAAQAMAAAHgIQAJgIgBgSQABgTgJgIQgHgKgMAAQgJAAgIAJg");
	this.shape_215.setTransform(467.2,174.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJgBgIAIQgIAHAAASIAAA0IgQAAIAAhhIAOAAIAAAOQAMgQASAAQAJAAAIAEQAHADAEAFQADAFACAHIABARIAAA6g");
	this.shape_216.setTransform(457,172.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_217.setTransform(449.6,170.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJgBgIAIQgIAHAAASIAAA0IgQAAIAAhhIAPAAIAAAOQAKgQATAAQAJAAAIAEQAHADADAFQAEAFACAHIABARIAAA6g");
	this.shape_218.setTransform(442.2,172.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_219.setTransform(434.9,170.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#330066").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAFgDAKIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDAEQgCADAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgGAAgKIAAgGQgJADgRADg");
	this.shape_220.setTransform(427.4,172.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAPQAFgKAFgDQADgEAGAAQAIAAAJAGIgGAPQgGgDgGgBQgFABgDADQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_221.setTransform(419.8,172.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#330066").s().p("AgCBAQgEgDgCgFQgCgFgBgPIAAg2IgMAAIAAgNIAMAAIAAgZIAPgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAFABIAIgBIACAPIgMACQgJAAgEgDg");
	this.shape_222.setTransform(413.4,171.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgLAAgQQAAgPAFgKQAFgLAJgHQAKgHAMABQAHAAAHADQAHAEAFAGIAAgwIAQAAIAACGIgPAAIAAgNQgKAOgRAAQgLAAgJgGgAgRgKQgHAKAAARQAAAUAIAJQAIAJAJAAQALAAAHgJQAIgJAAgSQAAgTgIgJQgIgKgLAAQgJABgIAIg");
	this.shape_223.setTransform(399.7,171);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJgBgIAIQgIAHAAASIAAA0IgQAAIAAhhIAOAAIAAAOQAMgQASAAQAJAAAIAEQAHADAEAFQADAFACAHIABARIAAA6g");
	this.shape_224.setTransform(389.5,172.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#330066").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAFgDAKIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDAEQgCADAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgGAAgKIAAgGQgJADgRADg");
	this.shape_225.setTransform(378.9,172.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHABQgJgBgHAIQgIAHAAASIAAA0IgRAAIAAhhIAPAAIAAAOQAMgQASAAQAJAAAHAEQAIADAEAFQADAFABAHIABARIAAA6g");
	this.shape_226.setTransform(363.1,172.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#330066").s().p("AggAmQgNgNABgZQAAgZAOgOQANgLARAAQAUAAAMAOQANANABAXQgBARgFALQgGALgLAGQgLAGgMAAQgTAAgNgNgAgUgaQgHAJgBARQABASAHAKQAJAJALAAQAMAAAIgJQAJgJAAgTQAAgRgJgJQgIgKgMAAQgLAAgJAKg");
	this.shape_227.setTransform(352.5,172.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_228.setTransform(345.2,170.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#330066").s().p("AgCBAQgEgDgDgFQgBgFgBgPIAAg2IgLAAIAAgNIALAAIAAgZIAPgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIACAPIgMACQgKAAgDgDg");
	this.shape_229.setTransform(340.5,171.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#330066").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAFgDAKIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDAEQgCADAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgGAAgKIAAgGQgJADgRADg");
	this.shape_230.setTransform(332.4,172.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#330066").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgFQALgHALAAQAQAAAKAIQAKAJADAPIgQACQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAATAHAJQAIAKAKgBQAKABAHgHQAGgFACgNIAQACQgCARgLAKQgLAJgRAAQgSAAgMgNg");
	this.shape_231.setTransform(322.7,172.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#330066").s().p("AgVAvQgHgEgEgFQgEgFgCgHIgBgQIAAg7IARAAIAAA1IABARQACAHAFAEQAFAEAHAAQAGAAAHgEQAHgEACgHQADgGAAgNIAAgzIARAAIAABhIgQAAIAAgPQgLARgRAAQgKAAgHgDg");
	this.shape_232.setTransform(312.4,172.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgLAAgQQAAgPAFgKQAFgLAJgHQAKgHAMABQAHAAAHADQAHAEAFAGIAAgwIAQAAIAACGIgPAAIAAgNQgKAOgRAAQgLAAgJgGgAgRgKQgHAKAAARQAAAUAIAJQAIAJAJAAQALAAAHgJQAIgJAAgSQAAgTgIgJQgIgKgLAAQgJABgIAIg");
	this.shape_233.setTransform(301.5,171);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#330066").s().p("AggAmQgMgNAAgYQAAgYANgNQAMgOATAAQAUAAAMAOQANANAAAXIAAAEIhIAAQABAQAJAJQAHAIALAAQAJAAAHgEQAGgFAEgKIARABQgEAQgLAIQgLAIgRAAQgTAAgOgNgAgRgcQgIAHgBAOIA1AAQgBgNgFgGQgIgKgNAAQgJAAgIAIg");
	this.shape_234.setTransform(291.3,172.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#330066").s().p("AgJAPQAFgCADgFQABgEAAgGIgIAAIAAgTIASAAIAAATQgBAIgEAHQgDAGgGAEg");
	this.shape_235.setTransform(278.1,178.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#330066").s().p("AgBBAQgFgDgDgFQgBgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIAOgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIADAPIgNACQgKAAgCgDg");
	this.shape_236.setTransform(272.9,171.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAPQAFgKAFgDQADgEAGAAQAIAAAJAGIgGAPQgGgDgGgBQgFABgDADQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_237.setTransform(267.8,172.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#330066").s().p("AggAmQgMgNAAgZQAAgZAOgOQANgLARAAQAUAAAMAOQANANABAXQgBARgFALQgGALgLAGQgKAGgNAAQgTAAgNgNgAgUgaQgHAJAAARQAAASAHAKQAJAJALAAQAMAAAIgJQAIgJAAgTQAAgRgIgJQgIgKgMAAQgLAAgJAKg");
	this.shape_238.setTransform(258.6,172.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#330066").s().p("AgpBFIAAiHIAPAAIAAAOQAFgIAHgEQAHgEAIAAQAMAAAKAHQAJAGAFAMQAFAMAAAOQAAAPgFALQgGAMgKAGQgKAGgLAAQgHAAgHgEQgGgDgFgFIAAAwgAgSgsQgIAKAAATQAAAQAIAJQAHAKALgBQAJAAAIgJQAIgJAAgSQAAgTgHgJQgIgJgKAAQgKAAgIAKg");
	this.shape_239.setTransform(248.3,174.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#330066").s().p("AgpBFIAAiHIAPAAIAAAOQAFgIAHgEQAHgEAIAAQAMAAAKAHQAJAGAFAMQAFAMAAAOQAAAPgFALQgGAMgKAGQgKAGgLAAQgHAAgHgEQgGgDgFgFIAAAwgAgSgsQgIAKAAATQAAAQAIAJQAHAKALgBQAJAAAIgJQAIgJAAgSQAAgTgHgJQgIgJgKAAQgKAAgIAKg");
	this.shape_240.setTransform(237.7,174.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#330066").s().p("AgVAvQgHgEgEgFQgEgFgCgHIgBgQIAAg7IASAAIAAA1IAAARQACAHAFAEQAFAEAHAAQAGAAAHgEQAHgEACgHQADgGAAgNIAAgzIAQAAIAABhIgPAAIAAgPQgLARgRAAQgKAAgHgDg");
	this.shape_241.setTransform(226.9,172.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#330066").s().p("AgbArQgKgHgCgRIAQgCQACAKAGAFQAGAFAKAAQALAAAGgEQAFgFAAgGQAAgGgFgDQgDgCgOgDQgQgGgHgCQgHgCgEgGQgEgGAAgIQAAgGADgGQADgFAGgEQAEgDAGgCQAHgCAIAAQAJAAAJAEQAJADAEAGQAEAFACAKIgRACQgBgIgFgEQgFgEgJAAQgLAAgFAEQgEAEAAAEQAAAEACADQACACAEACIANAFQARAEAHADQAHABAEAGQAEAGAAAIQAAAIgEAIQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_242.setTransform(216.8,172.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgLAAgQQAAgPAFgKQAFgLAJgHQAKgHAMABQAHAAAHADQAHAEAFAGIAAgwIAQAAIAACGIgPAAIAAgNQgKAOgRAAQgLAAgJgGgAgRgKQgHAKAAARQAAAUAIAJQAIAJAJAAQALAAAHgJQAIgJAAgSQAAgTgIgJQgIgKgLAAQgJABgIAIg");
	this.shape_243.setTransform(201.2,171);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJgBgIAIQgIAHAAASIAAA0IgQAAIAAhhIAOAAIAAAOQAMgQASAAQAJAAAIAEQAHADADAFQAEAFACAHIABARIAAA6g");
	this.shape_244.setTransform(191,172.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#330066").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAFgDAKIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDAEQgCADAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgGAAgKIAAgGQgJADgRADg");
	this.shape_245.setTransform(180.4,172.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHABQgJgBgHAIQgIAHAAASIAAA0IgRAAIAAhhIAPAAIAAAOQAMgQASAAQAJAAAHAEQAIADAEAFQADAFABAHIABARIAAA6g");
	this.shape_246.setTransform(164.6,172.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#330066").s().p("AggAmQgMgNAAgZQAAgZAOgOQANgLARAAQAUAAAMAOQANANABAXQgBARgFALQgGALgLAGQgKAGgNAAQgTAAgNgNgAgUgaQgHAJgBARQABASAHAKQAJAJALAAQAMAAAIgJQAJgJAAgTQAAgRgJgJQgIgKgMAAQgLAAgJAKg");
	this.shape_247.setTransform(154.1,172.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_248.setTransform(146.7,170.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#330066").s().p("AgCBAQgEgDgDgFQgCgFAAgPIAAg2IgLAAIAAgNIALAAIAAgZIAPgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIACAPIgMACQgKAAgDgDg");
	this.shape_249.setTransform(142.1,171.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#330066").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAFgDAKIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDAEQgCADAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgGAAgKIAAgGQgJADgRADg");
	this.shape_250.setTransform(134,172.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#330066").s().p("AAyAyIAAg8QAAgKgCgEQgCgFgEgDQgEgCgGAAQgKgBgHAIQgHAGAAAQIAAA3IgPAAIAAg+QAAgLgEgGQgEgFgJAAQgHAAgGADQgGAEgDAHQgDAIAAAMIAAAyIgQAAIAAhhIAPAAIAAAOQAEgHAIgEQAIgFAKAAQALAAAHAFQAFAFACAHQAMgRATAAQAPAAAHAIQAIAJAAARIAABBg");
	this.shape_251.setTransform(120.8,172.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAPQAFgKAFgDQADgEAGAAQAIAAAJAGIgGAPQgGgDgGgBQgFABgDADQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_252.setTransform(110.5,172.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#330066").s().p("AggAmQgNgNAAgZQAAgZAPgOQANgLARAAQAUAAAMAOQAOANAAAXQAAARgGALQgGALgLAGQgKAGgNAAQgTAAgNgNgAgUgaQgHAJgBARQABASAHAKQAJAJALAAQAMAAAIgJQAJgJAAgTQAAgRgJgJQgIgKgMAAQgLAAgJAKg");
	this.shape_253.setTransform(101.3,172.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#330066").s().p("AgNBFIAAhUIgOAAIAAgNIAOAAIAAgKQAAgKACgFQACgHAHgDQAEgFALAAQAHAAAIACIgCAPIgKgBQgIAAgDADQgDADAAAJIAAAJIATAAIAAANIgTAAIAABUg");
	this.shape_254.setTransform(93.8,170.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJgBgIAIQgIAHAAASIAAA0IgRAAIAAhhIAQAAIAAAOQAKgQATAAQAJAAAHAEQAIADADAFQAEAFACAHIABARIAAA6g");
	this.shape_255.setTransform(85.5,172.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_256.setTransform(78.1,170.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#330066").s().p("AgbArQgKgIgCgPIAQgDQACAKAGAFQAGAFAKABQALgBAGgEQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgIQAAgGADgFQADgGAGgEQAEgDAGgCQAHgCAIAAQAJAAAJADQAJAEAEAFQAEAHACAJIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEAEAAAFQAAADACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_257.setTransform(425.7,149.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#330066").s().p("AgfAmQgNgOAAgXQAAgXANgOQAMgOATAAQATAAANANQANAOAAAXIgBAEIhHAAQABAQAIAJQAJAJAKAAQAJAAAGgGQAHgEAEgKIARACQgEAOgLAJQgLAIgRAAQgTAAgNgNgAgRgdQgIAJgBANIA1AAQgBgNgFgHQgIgJgNAAQgKAAgHAHg");
	this.shape_258.setTransform(415.8,149.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgMAAgPQAAgOAFgLQAFgMAJgGQAKgHAMAAQAHAAAHAFQAHADAFAHIAAgyIAQAAIAACHIgPAAIAAgNQgKAPgRAAQgLgBgJgGgAgRgJQgHAJAAARQAAAUAIAIQAIAKAJAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgIgJgLAAQgJgBgIAKg");
	this.shape_259.setTransform(404.9,147.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#330066").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgUIAPAAIAAAUg");
	this.shape_260.setTransform(397.9,147.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#330066").s().p("AgGAxIgmhhIASAAIAVA5IAFAUIAFgTIAWg6IASAAIgmBhg");
	this.shape_261.setTransform(391,149.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#330066").s().p("AggAmQgMgOAAgYQAAgZAOgOQANgLARAAQAUAAAMANQANAOABAXQgBASgFALQgGAKgLAGQgKAGgNAAQgTAAgNgNgAgUgbQgHAKAAARQAAATAHAJQAJAKALAAQAMAAAIgKQAIgJABgTQgBgRgIgKQgIgJgMAAQgLAAgJAJg");
	this.shape_262.setTransform(381,149.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAQQAFgLAFgEQADgDAGAAQAIAAAJAFIgGAQQgGgEgGABQgFgBgDAEQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_263.setTransform(373.3,149.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#330066").s().p("AgpBFIAAiHIAPAAIAAAOQAFgIAHgEQAHgEAIAAQAMAAAKAHQAJAGAFAMQAFAMAAAOQAAAPgFALQgGALgKAHQgKAGgLAAQgHAAgHgDQgGgEgFgFIAAAwgAgSgtQgIAKAAAUQAAAQAIAKQAHAIALABQAJAAAIgKQAIgJAAgSQAAgTgHgKQgIgIgKgBQgKABgIAJg");
	this.shape_264.setTransform(364.4,151.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgMAAgPQAAgOAFgLQAFgMAJgGQAKgHAMAAQAHAAAHAFQAHADAFAHIAAgyIAQAAIAACHIgPAAIAAgNQgKAPgRAAQgLgBgJgGgAgRgJQgHAJAAARQAAAUAIAIQAIAKAJAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgIgJgLAAQgJgBgIAKg");
	this.shape_265.setTransform(347.9,147.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGAAQgJABgIAGQgIAHAAATIAAA0IgQAAIAAhhIAOAAIAAAPQAMgRASAAQAJAAAIADQAHADAEAGQADAFACAHIABAQIAAA7g");
	this.shape_266.setTransform(337.7,149.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#330066").s().p("AgjArQgJgHAAgNQAAgHADgGQAEgGAFgEQAFgBAHgDIAPgCQASgCAKgEIAAgEQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAFgDAKIgQgDQACgKAFgHQAFgGAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAQIAAATQAAAYABAGQABAHADAFIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAHAAAIgEQAHgEAEgIQADgFAAgMIAAgFQgJAEgRACg");
	this.shape_267.setTransform(327.1,149.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#330066").s().p("AAXBEIAAg/QAAgKgGgGQgFgGgKAAQgFAAgHAEQgGAEgDAHQgDAEAAAMIAAA2IgRAAIAAiHIARAAIAAAyQAMgPAPAAQALAAAIAFQAJAFADAHQAEAHAAANIAAA/g");
	this.shape_268.setTransform(311.3,147.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#330066").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgFQALgHALAAQAQAAAKAJQAKAHADAPIgQADQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAATAHAKQAIAIAKABQAKAAAHgHQAGgGACgMIAQACQgCARgLAJQgLAKgRAAQgSAAgMgNg");
	this.shape_269.setTransform(301.6,149.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAQQAFgLAFgEQADgDAGAAQAIAAAJAFIgGAQQgGgEgGABQgFgBgDAEQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_270.setTransform(294.2,149.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#330066").s().p("AgjArQgJgHAAgNQAAgHADgGQAEgGAFgEQAFgBAHgDIAPgCQASgCAKgEIAAgEQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAFgDAKIgQgDQACgKAFgHQAFgGAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAQIAAATQAAAYABAGQABAHADAFIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAHAAAIgEQAHgEAEgIQADgFAAgMIAAgFQgJAEgRACg");
	this.shape_271.setTransform(284.9,149.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#330066").s().p("AggAmQgMgOAAgXQAAgXANgOQANgOASAAQAUAAANANQAMAOAAAXIAAAEIhIAAQABAQAJAJQAHAJALAAQAJAAAHgGQAGgEAEgKIARACQgEAOgLAJQgLAIgRAAQgUAAgNgNgAgRgdQgIAJgBANIA1AAQgBgNgFgHQgIgJgNAAQgJAAgIAHg");
	this.shape_272.setTransform(274.4,149.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#330066").s().p("AgbArQgKgIgCgPIAQgDQACAKAGAFQAGAFAKABQALgBAGgEQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgIQAAgGADgFQADgGAGgEQAEgDAGgCQAHgCAIAAQAJAAAJADQAJAEAEAFQAEAHACAJIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEAEAAAFQAAADACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_273.setTransform(264.3,149.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#330066").s().p("AggAmQgMgOAAgXQAAgXANgOQAMgOATAAQATAAAOANQAMAOAAAXIgBAEIhHAAQABAQAIAJQAJAJAKAAQAJAAAGgGQAHgEAEgKIARACQgEAOgLAJQgLAIgRAAQgUAAgNgNgAgRgdQgIAJgBANIA1AAQgBgNgFgHQgIgJgNAAQgKAAgHAHg");
	this.shape_274.setTransform(254.4,149.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAQQAFgLAFgEQADgDAGAAQAIAAAJAFIgGAQQgGgEgGABQgFgBgDAEQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_275.setTransform(246.7,149.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#330066").s().p("AgbArQgKgIgCgPIAQgDQACAKAGAFQAGAFAKABQALgBAGgEQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgIQAAgGADgFQADgGAGgEQAEgDAGgCQAHgCAIAAQAJAAAJADQAJAEAEAFQAEAHACAJIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEAEAAAFQAAADACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_276.setTransform(232.7,149.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#330066").s().p("AgBBAQgGgDgBgFQgCgFAAgPIAAg2IgNAAIAAgNIANAAIAAgZIAOgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIADAPIgNACQgKAAgCgDg");
	this.shape_277.setTransform(225.5,147.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#330066").s().p("AgZAyIAAhhIAPAAIAAAQQAFgLAFgEQADgDAGAAQAIAAAJAFIgGAQQgGgEgGABQgFgBgDAEQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_278.setTransform(220.3,149.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#330066").s().p("AggAmQgNgOAAgYQAAgZAPgOQANgLARAAQAUAAAMANQAOAOAAAXQAAASgGALQgGAKgLAGQgLAGgMAAQgTAAgNgNgAgUgbQgHAKgBARQABATAHAJQAJAKALAAQAMAAAIgKQAJgJAAgTQAAgRgJgKQgIgJgMAAQgLAAgJAJg");
	this.shape_279.setTransform(211.1,149.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#330066").s().p("AgpBFIAAiHIAPAAIAAAOQAFgIAHgEQAHgEAIAAQAMAAAKAHQAJAGAFAMQAFAMAAAOQAAAPgFALQgGALgKAHQgKAGgLAAQgHAAgHgDQgGgEgFgFIAAAwgAgSgtQgIAKAAAUQAAAQAIAKQAHAIALABQAJAAAIgKQAIgJAAgSQAAgTgHgKQgIgIgKgBQgKABgIAJg");
	this.shape_280.setTransform(200.8,151.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#330066").s().p("AgpBFIAAiHIAPAAIAAAOQAFgIAHgEQAHgEAIAAQAMAAAKAHQAJAGAFAMQAFAMAAAOQAAAPgFALQgGALgKAHQgKAGgLAAQgHAAgHgDQgGgEgFgFIAAAwgAgSgtQgIAKAAAUQAAAQAIAKQAHAIALABQAJAAAIgKQAIgJAAgSQAAgTgHgKQgIgIgKgBQgKABgIAJg");
	this.shape_281.setTransform(190.3,151.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#330066").s().p("AgVAvQgIgEgDgFQgEgFgCgHIAAgQIAAg7IARAAIAAA1IABARQABAHAFAEQAFAEAHAAQAGAAAHgEQAHgEACgHQADgGAAgNIAAgzIARAAIAABhIgQAAIAAgPQgLARgRAAQgJAAgIgDg");
	this.shape_282.setTransform(179.4,149.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#330066").s().p("AgbArQgKgIgCgPIAQgDQACAKAGAFQAGAFAKABQALgBAGgEQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgIQAAgGADgFQADgGAGgEQAEgDAGgCQAHgCAIAAQAJAAAJADQAJAEAEAFQAEAHACAJIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEAEAAAFQAAADACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_283.setTransform(169.4,149.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgMAAgPQAAgOAFgLQAFgMAJgGQAKgHAMAAQAHAAAHAFQAHADAFAHIAAgyIAQAAIAACHIgPAAIAAgNQgKAPgRAAQgLgBgJgGgAgRgJQgHAJAAARQAAAUAIAIQAIAKAJAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgIgJgLAAQgJgBgIAKg");
	this.shape_284.setTransform(153.8,147.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHAAQgIABgIAGQgIAHAAATIAAA0IgQAAIAAhhIAOAAIAAAPQAMgRASAAQAJAAAIADQAHADAEAGQADAFABAHIABAQIAAA7g");
	this.shape_285.setTransform(143.6,149.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#330066").s().p("AgjArQgJgHAAgNQAAgHADgGQAEgGAFgEQAFgBAHgDIAPgCQASgCAKgEIAAgEQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAFgDAKIgQgDQACgKAFgHQAFgGAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAQIAAATQAAAYABAGQABAHADAFIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAHAAAIgEQAHgEAEgIQADgFAAgMIAAgFQgJAEgRACg");
	this.shape_286.setTransform(133,149.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#330066").s().p("AgbArQgKgIgCgPIAQgDQACAKAGAFQAGAFAKABQALgBAGgEQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgIQAAgGADgFQADgGAGgEQAEgDAGgCQAHgCAIAAQAJAAAJADQAJAEAEAFQAEAHACAJIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEAEAAAFQAAADACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_287.setTransform(117.6,149.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#330066").s().p("AgUA+QgKgHgGgLQgFgMAAgPQAAgOAFgLQAFgMAJgGQAKgHAMAAQAHAAAHAFQAHADAFAHIAAgyIAQAAIAACHIgPAAIAAgNQgKAPgRAAQgLgBgJgGgAgRgJQgHAJAAARQAAAUAIAIQAIAKAJAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgIgJgLAAQgJgBgIAKg");
	this.shape_288.setTransform(107.3,147.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHAAQgJABgHAGQgIAHAAATIAAA0IgRAAIAAhhIAPAAIAAAPQAMgRASAAQAJAAAHADQAIADAEAGQADAFABAHIABAQIAAA7g");
	this.shape_289.setTransform(97.1,149.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#330066").s().p("AgVAvQgHgEgEgFQgEgFgBgHIgBgQIAAg7IARAAIAAA1IABARQABAHAFAEQAFAEAIAAQAFAAAHgEQAGgEADgHQADgGAAgNIAAgzIARAAIAABhIgPAAIAAgPQgMARgSAAQgIAAgIgDg");
	this.shape_290.setTransform(86.5,149.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#330066").s().p("AgNBFIAAhUIgOAAIAAgNIAOAAIAAgKQAAgKACgFQACgHAHgDQAEgFALAAQAHAAAIACIgCAPIgKgBQgIAAgDADQgDADAAAJIAAAJIATAAIAAANIgTAAIAABUg");
	this.shape_291.setTransform(79.1,147.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#330066").s().p("AgJAPQAFgCADgEQABgFAAgHIgIAAIAAgTIARAAIAAATQAAAJgDAGQgEAHgGADg");
	this.shape_292.setTransform(491.3,131.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#330066").s().p("AgeA2QgOgQAAgjQAAgmAPgRQANgQATAAQARAAAKAJQAKAJACAQIgQABQgDgJgEgFQgHgIgKABQgFgBgGAFQgJAGgEALQgEALAAAUQAFgJAJgEQAJgEAIgBQAQAAAMANQALAKAAATQAAANgFALQgGALgJAGQgKAGgMAAQgTAAgNgPgAgRABQgHAIAAANQAAAJAEAIQADAIAHAEQAHAEAEAAQALAAAIgJQAHgIAAgPQAAgOgHgIQgHgGgMAAQgJAAgJAGg");
	this.shape_293.setTransform(483.3,124.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#330066").s().p("AgYBCQABgPAGgXQAGgXALgTQAJgVANgPIhBAAIAAgQIBXAAIAAANQgOAOgMAXQgNAVgFAYQgFARgCAUg");
	this.shape_294.setTransform(472.9,124.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#330066").s().p("AgdA8QgKgJgCgQIAQgBQACALAGAFQAGAFAJAAQAFAAAGgDQAGgEAEgGQADgFADgLQACgKAAgKIAAgEQgFAIgIAGQgJAEgIAAQgRAAgMgMQgLgKAAgUQAAgVAMgNQAMgMASAAQAMAAALAHQALAHAFANQAGANAAAZQAAAZgGAPQgFAPgLAJQgMAIgNAAQgQAAgKgJgAgSgtQgIAJAAAOQAAANAIAJQAHAFALAAQALAAAHgFQAIgIAAgPQAAgPgIgIQgIgIgKAAQgKAAgIAJg");
	this.shape_295.setTransform(462.3,124.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#330066").s().p("AAIBEIAAhpQgGAGgIAGQgKAGgIACIAAgQQAOgGAKgKQAJgJAFgJIALAAIAACHg");
	this.shape_296.setTransform(451,124.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgDgHgBQgJAAgHAIQgIAGAAATIAAA0IgRAAIAAhgIAQAAIAAANQAKgQATAAQAJAAAHAEQAIADAEAFQADAFABAHIABAQIAAA7g");
	this.shape_297.setTransform(435.9,126.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#330066").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_298.setTransform(428.5,124.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#330066").s().p("AgUA+QgKgGgGgMQgFgMAAgOQAAgPAFgKQAFgMAJgHQAKgGAMgBQAHAAAHAEQAHAFAFAGIAAgyIAQAAIAACGIgPAAIAAgMQgKAOgRAAQgLABgJgHgAgRgJQgHAJAAASQAAASAIAKQAIAJAJAAQALAAAHgJQAIgJAAgSQAAgTgIgJQgIgKgLABQgJAAgIAJg");
	this.shape_299.setTransform(415.5,124.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#330066").s().p("AggAmQgMgOAAgYQAAgXANgNQANgOASAAQATAAANAOQANANAAAXIAAAEIhIAAQABAQAJAJQAIAJAKgBQAJAAAHgEQAGgFAEgLIARACQgEAQgLAIQgLAIgRAAQgTAAgOgNgAgRgcQgIAHgBANIA1AAQgBgMgFgHQgIgJgNAAQgKAAgHAIg");
	this.shape_300.setTransform(405.3,126.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#330066").s().p("AgUA+QgKgGgGgMQgFgMAAgOQAAgPAFgKQAFgMAJgHQAKgGAMgBQAHAAAHAEQAHAFAFAGIAAgyIAQAAIAACGIgPAAIAAgMQgKAOgRAAQgLABgJgHgAgRgJQgHAJAAASQAAASAIAKQAIAJAJAAQALAAAHgJQAIgJAAgSQAAgTgIgJQgIgKgLABQgJAAgIAJg");
	this.shape_301.setTransform(394.4,124.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgDgGgBQgJAAgIAIQgIAGAAATIAAA0IgQAAIAAhgIAPAAIAAANQAKgQATAAQAJAAAIAEQAHADADAFQAEAFACAHIABAQIAAA7g");
	this.shape_302.setTransform(384.2,126.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#330066").s().p("AgVAvQgHgEgEgFQgEgFgCgHIgBgQIAAg7IARAAIAAA1IABARQACAHAFAEQAFAEAHAAQAGAAAHgEQAHgEACgHQADgGAAgNIAAgzIAQAAIAABhIgPAAIAAgPQgLARgRAAQgKAAgHgDg");
	this.shape_303.setTransform(373.6,126.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#330066").s().p("AggAmQgMgOAAgYQgBgaAPgNQANgLARAAQAUAAANAOQANANgBAXQAAASgFAKQgGALgKAGQgLAGgNAAQgTAAgNgNgAgTgbQgIAKAAARQAAATAIAJQAIAKALgBQAMABAIgKQAIgKAAgSQAAgRgIgKQgIgJgMAAQgLAAgIAJg");
	this.shape_304.setTransform(363.1,126.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#330066").s().p("AgNBFIAAhUIgOAAIAAgNIAOAAIAAgKQAAgKACgFQACgHAHgDQAEgFALAAQAHAAAIACIgCAPIgKgBQgIAAgDADQgDADAAAJIAAAJIATAAIAAANIgTAAIAABUg");
	this.shape_305.setTransform(355.6,124.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#330066").s().p("AgIAPQAFgCACgEQABgFAAgHIgHAAIAAgTIARAAIAAATQAAAJgFAGQgDAHgGADg");
	this.shape_306.setTransform(344.5,131.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#330066").s().p("AgVBZQAagtgBgsQABgQgEgRQgBgOgGgNQgDgIgMgUIAMAAQAPAYAJAXQAHAUAAAVQAAAZgKAXQgKAXgLASg");
	this.shape_307.setTransform(339,126.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#330066").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAmIAsAAIgOgkIgIgcQgCANgFANg");
	this.shape_308.setTransform(329.3,124.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#330066").s().p("AgxBDIAAiGIBgAAIAAARIhOAAIAAApIBJAAIAAAOIhJAAIAAAuIBRAAIAAAQg");
	this.shape_309.setTransform(316.9,124.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#330066").s().p("AAvBDIAAhvIgoBvIgNAAIgohyIAAByIgSAAIAAiGIAbAAIAhBfIAFAUIAGgWIAhhdIAZAAIAACGg");
	this.shape_310.setTransform(302.4,124.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#330066").s().p("AggAmQgMgOAAgYQAAgXANgNQANgOASAAQAUAAANAOQAMANAAAXIAAAEIhIAAQABAQAJAJQAHAJALgBQAJAAAHgEQAGgFAEgLIARACQgEAQgLAIQgLAIgRAAQgUAAgNgNgAgRgcQgIAHgBANIA1AAQgBgMgFgHQgIgJgNAAQgJAAgIAIg");
	this.shape_311.setTransform(283.9,126.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#330066").s().p("AAXBDIAAg+QAAgLgGgFQgFgGgKAAQgFAAgHAEQgGAEgDAGQgDAFAAALIAAA2IgRAAIAAiGIARAAIAAAyQAMgOAPgBQALABAIAEQAJAFADAHQAEAIAAAMIAAA+g");
	this.shape_312.setTransform(273.3,124.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#330066").s().p("AgIBDIAAh1IgtAAIAAgRIBqAAIAAARIgtAAIAAB1g");
	this.shape_313.setTransform(262.3,124.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#330066").s().p("AAKBZQgMgSgJgXQgKgXAAgZQAAgVAHgUQAJgXAPgYIAMAAQgMAUgDAIQgGANgBAOQgEARAAAQQAAAsAaAtg");
	this.shape_314.setTransform(253.6,126.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#330066").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgDgHgBQgJAAgHAIQgIAGAAATIAAA0IgRAAIAAhgIAQAAIAAANQAKgQATAAQAJAAAHAEQAIADADAFQAEAFABAHIABAQIAAA7g");
	this.shape_315.setTransform(239.6,126.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#330066").s().p("AggAmQgNgOAAgYQAAgaAPgNQANgLARAAQAUAAAMAOQAOANAAAXQAAASgGAKQgGALgLAGQgLAGgMAAQgTAAgNgNgAgUgbQgHAKgBARQABATAHAJQAJAKALgBQAMABAIgKQAJgKAAgSQAAgRgJgKQgIgJgMAAQgLAAgJAJg");
	this.shape_316.setTransform(229,126.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#330066").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_317.setTransform(221.7,124.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#330066").s().p("AgBBAQgGgDgCgFQgBgFAAgPIAAg2IgNAAIAAgNIANAAIAAgZIAOgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIADAPIgNACQgKAAgCgDg");
	this.shape_318.setTransform(217,124.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#330066").s().p("AgjArQgJgHAAgNQAAgHADgGQAEgGAFgEQAFgBAHgCIAPgDQASgCAKgDIAAgFQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAEgDALIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgSAAQgCgFgBgHQgJAHgJAEQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDAEQgCADAAAFQAAAGAFAEQAFAFAKAAQAHAAAIgEQAHgFAEgGQADgHAAgKIAAgGQgJAEgRACg");
	this.shape_319.setTransform(208.9,126.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#330066").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_320.setTransform(201.6,124.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#330066").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgGQALgGALAAQAQAAAKAIQAKAJADAOIgQADQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAAUAHAIQAIAJAKAAQAKAAAHgFQAGgHACgMIAQACQgCARgLAKQgLAJgRAAQgSAAgMgNg");
	this.shape_321.setTransform(195,126.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#330066").s().p("AggAmQgNgOAAgYQABgaAPgNQAMgLARAAQAUAAANAOQAMANAAAXQABASgGAKQgGALgKAGQgMAGgMAAQgTAAgNgNgAgTgbQgJAKABARQgBATAJAJQAIAKALgBQAMABAIgKQAJgKgBgSQABgRgJgKQgIgJgMAAQgLAAgIAJg");
	this.shape_322.setTransform(184.7,126.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#330066").s().p("AgbArQgKgHgCgRIAQgCQACAKAGAFQAGAGAKgBQALABAGgFQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgFgHgCQgHgCgEgGQgEgGAAgHQAAgHADgGQADgFAGgEQAEgDAGgBQAHgDAIAAQAJAAAJAEQAJADAEAGQAEAFACAKIgRACQgBgIgFgEQgFgEgJAAQgLAAgFAEQgEADAAAFQAAAEACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAFAAAJQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_323.setTransform(174.6,126.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#330066").s().p("AgbArQgKgHgCgRIAQgCQACAKAGAFQAGAGAKgBQALABAGgFQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgFgHgCQgHgCgEgGQgEgGAAgHQAAgHADgGQADgFAGgEQAEgDAGgBQAHgDAIAAQAJAAAJAEQAJADAEAGQAEAFACAKIgRACQgBgIgFgEQgFgEgJAAQgLAAgFAEQgEADAAAFQAAAEACACQACADAEACIANAEQARAFAHADQAHABAEAGQAEAFAAAJQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_324.setTransform(165.1,126.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#330066").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAmIAsAAIgOgkIgIgcQgCANgFANg");
	this.shape_325.setTransform(154.1,124.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#330066").s().p("AgxBDIAAiGIBgAAIAAARIhOAAIAAApIBJAAIAAAOIhJAAIAAAuIBRAAIAAAQg");
	this.shape_326.setTransform(136.4,124.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#330066").s().p("AAvBDIAAhvIgoBvIgNAAIgohyIAAByIgSAAIAAiGIAbAAIAhBfIAFAUIAGgWIAhhdIAZAAIAACGg");
	this.shape_327.setTransform(121.9,124.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#330066").s().p("AggAmQgMgOAAgYQAAgXANgNQANgOASAAQAUAAANAOQAMANAAAXIAAAEIhIAAQABAQAJAJQAHAJALgBQAJAAAHgEQAGgFAEgLIARACQgEAQgLAIQgLAIgRAAQgUAAgNgNgAgRgcQgIAHgBANIA1AAQgBgMgFgHQgIgJgNAAQgJAAgIAIg");
	this.shape_328.setTransform(103.4,126.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#330066").s().p("AAXBDIAAg+QAAgLgGgFQgFgGgKAAQgFAAgHAEQgGAEgDAGQgDAFAAALIAAA2IgRAAIAAiGIARAAIAAAyQAMgOAPgBQALABAIAEQAJAFADAHQAEAIAAAMIAAA+g");
	this.shape_329.setTransform(92.9,124.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#330066").s().p("AgIBDIAAh1IgtAAIAAgRIBqAAIAAARIgtAAIAAB1g");
	this.shape_330.setTransform(81.9,124.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#330066").s().p("ABGBvIgahEIhbAAIgYBEIgfAAIBVjdIAeAAIBaDdgAgOgrIgYA/IBJAAIgXg8QgLgcgDgSQgEAVgIAWg");
	this.shape_331.setTransform(380.5,66.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#330066").s().p("AhRBvIAAjdICeAAIAAAbIiBAAIAABEIB5AAIAAAYIh5AAIAABMICGAAIAAAag");
	this.shape_332.setTransform(360.2,66.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#330066").s().p("ABNBvIAAi4IhBC4IgYAAIhAi7IAAC7IgdAAIAAjdIAsAAIA1CcIAJAgIALgjIA2iZIAoAAIAADdg");
	this.shape_333.setTransform(336.6,66.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#330066").s().p("Ag0A+QgVgWAAgnQAAgmAVgXQAVgXAgAAQAfAAAVAXQAUAVABAnIAAAGIh3AAQACAbANAOQAOAOASAAQAPAAALgIQAKgIAGgRIAdAEQgHAZgSANQgSAOgcAAQgigBgUgVgAgdgwQgMANgCAVIBYAAQgCgUgJgKQgNgQgUAAQgRAAgNAMg");
	this.shape_334.setTransform(306.4,69.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#330066").s().p("AAmBvIAAhmQAAgTgJgJQgJgKgQAAQgKABgLAGQgLAGgEALQgFAJAAASIAABZIgbAAIAAjdIAbAAIAABQQATgWAbAAQASAAAOAHQANAHAFANQAGAMAAAWIAABmg");
	this.shape_335.setTransform(289.2,66.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#330066").s().p("AgNBvIAAjCIhJAAIAAgbICtAAIAAAbIhJAAIAADCg");
	this.shape_336.setTransform(271.2,66.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#330066").s().p("AgDBoQgIgEgDgIQgEgIAAgYIAAhaIgUAAIAAgWIAUAAIAAgoIAZgQIAAA4IAcAAIAAAWIgcAAIAABbQAAAMACADQABAEADACQAEACAGAAIAMgBIAEAXQgMADgJAAQgPAAgGgFg");
	this.shape_337.setTransform(248.9,67);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#330066").s().p("AgjBMQgNgFgFgIQgGgJgDgLQgBgIAAgSIAAhiIAbAAIAABYQAAAVABAHQADALAIAGQAIAGAMAAQALAAALgGQALgGAEgLQAEgLAAgUIAAhVIAbAAIAACfIgYAAIAAgXQgTAbgdAAQgPAAgMgGg");
	this.shape_338.setTransform(235.7,69.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#330066").s().p("Ag1A+QgVgWAAgoQAAgrAZgWQAVgRAcgBQAhAAAVAXQAVAVAAAmQAAAegKARQgJASgSAKQgSAKgUAAQgggBgVgVgAgggtQgOAPAAAeQAAAfAOAPQANAPATAAQAUAAANgPQAOgPAAgfQAAgdgOgQQgNgPgUAAQgTAAgNAPg");
	this.shape_339.setTransform(218.5,69.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#330066").s().p("AgrBZIAAAUIgZAAIAAjcIAbAAIAABPQARgWAZAAQAPAAANAGQAOAGAIALQAJALAEAPQAFAOAAARQAAApgUAXQgUAWgdAAQgaAAgRgXgAgegQQgNAQAAAbQAAAdAIANQAMAVAXAAQAPAAANgPQANgQABgfQAAgdgNgPQgNgPgQAAQgRAAgNAPg");
	this.shape_340.setTransform(201.7,66.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#330066").s().p("ABGBvIgahEIhbAAIgYBEIgfAAIBVjdIAeAAIBaDdgAgOgrIgYA/IBJAAIgXg8QgLgcgDgSQgEAVgIAWg");
	this.shape_341.setTransform(182.3,66.7);

	this.pic_2 = new lib.lab();
	this.pic_2.setTransform(-155.4,294.5,1,1,0,0,0,119.9,79.8);
	this.pic_2._off = true;

	this.pic_3 = new lib.phone();
	this.pic_3.setTransform(-144.5,305.4,1,1,0,0,0,101.8,77);
	this.pic_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},23).to({state:[{t:this.pic_2}]},15).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_2}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).to({state:[{t:this.pic_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.pic_2).wait(38).to({_off:false},0).wait(1).to({regX:119.8,x:-122.4,y:293.8},0).wait(1).to({x:-89.3,y:293.1},0).wait(1).to({x:-56.2,y:292.4},0).wait(1).to({x:-23.2,y:291.7},0).wait(1).to({x:9.9,y:291},0).wait(1).to({x:43,y:290.3},0).wait(1).to({x:76,y:289.6},0).wait(1).to({x:109.1,y:288.9},0).wait(1).to({x:142.1,y:288.2},0).wait(1).to({x:175.2,y:287.5},0).wait(1).to({x:208.3,y:286.8},0).wait(1).to({x:241.4,y:286.1},0).wait(1).to({x:274.5,y:285.5},0).to({_off:true},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.pic_3).wait(52).to({_off:false},0).wait(1).to({x:-106.8},0).wait(1).to({x:-69.2},0).wait(1).to({x:-31.6},0).wait(1).to({x:6.1},0).wait(1).to({x:43.7},0).wait(1).to({x:81.3},0).wait(1).to({x:118.9},0).wait(1).to({x:156.6},0).wait(1).to({x:194.2},0).wait(1).to({x:231.8},0).wait(1).to({x:269.5},0).wait(1));

	// Layer 2
	this.button_5 = new lib.back();
	this.button_5.setTransform(50.9,354.5,1,1,0,0,0,50.9,45.6);
	this.button_5._off = true;
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(23).to({_off:false},0).wait(41));

	// Layer 10
	this.text = new cjs.Text("Support", "28px 'Arial'", "#330066");
	this.text.lineHeight = 33;
	this.text.lineWidth = 107;
	this.text.setTransform(-227.2,307.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:-199.8,y:317.5},0).wait(1).to({x:-172.2,y:326.8},0).wait(1).to({x:-144.4,y:335.4},0).wait(1).to({x:-116.3,y:343.5},0).wait(1).to({x:-88.1,y:350.8},0).wait(1).to({x:-59.7,y:357.5},0).wait(1).to({x:-31.1,y:363.3},0).wait(1).to({x:-2.4,y:368.3},0).wait(1).to({x:26.4,y:372.4},0).wait(1).to({x:55.5,y:375.5},0).wait(1).to({x:84.5,y:377.5},0).wait(1).to({x:113.7,y:378.4},0).wait(1).to({x:142.8,y:378.1},0).wait(1).to({x:171.9,y:376.6},0).wait(1).to({x:200.9,y:373.6},0).wait(1).to({x:229.7,y:369.1},0).wait(1).to({x:258.3,y:363.1},0).wait(1).to({x:286.4,y:355.5},0).wait(1).to({x:314,y:346.1},0).wait(1).to({x:341,y:335.1},0).wait(1).to({x:367.2,y:322.2},0).wait(1).to({x:392.4,y:307.6},0).to({_off:true},1).wait(41));

	// Layer 9
	this.text_1 = new cjs.Text("Research", "28px 'Arial'", "#330066");
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 134;
	this.text_1.setTransform(-293.9,307.6);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({x:-273.1,y:320.5},0).wait(1).to({x:-251.7,y:332.4},0).wait(1).to({x:-229.7,y:343},0).wait(1).to({x:-207.1,y:352.5},0).wait(1).to({x:-184,y:360.7},0).wait(1).to({x:-160.5,y:367.6},0).wait(1).to({x:-136.6,y:373.1},0).wait(1).to({x:-112.5,y:377.3},0).wait(1).to({x:-88.1,y:380.1},0).wait(1).to({x:-63.7,y:381.5},0).wait(1).to({x:-39.2},0).wait(1).to({x:-14.7,y:380.3},0).wait(1).to({x:9.7,y:377.8},0).wait(1).to({x:33.9,y:374.1},0).wait(1).to({x:57.9,y:369.3},0).wait(1).to({x:81.7,y:363.3},0).wait(1).to({x:105.2,y:356.4},0).wait(1).to({x:128.3,y:348.5},0).wait(1).to({x:151.2,y:339.7},0).wait(1).to({x:173.8,y:330.1},0).wait(1).to({x:196,y:319.7},0).wait(1).to({x:217.8,y:308.6},0).to({_off:true},1).wait(41));

	// Layer 8
	this.text_2 = new cjs.Text("The MEA", "28px 'Arial'", "#330066");
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 121;
	this.text_2.setTransform(-356.9,307.6);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({x:-339.8,y:317.1},0).wait(1).to({x:-322.2,y:325.9},0).wait(1).to({x:-304.4,y:333.9},0).wait(1).to({x:-286.2,y:341.3},0).wait(1).to({x:-267.7,y:347.7},0).wait(1).to({x:-248.9,y:353.3},0).wait(1).to({x:-229.8,y:358},0).wait(1).to({x:-210.6,y:361.7},0).wait(1).to({x:-191.1,y:364.4},0).wait(1).to({x:-171.6,y:366},0).wait(1).to({x:-152,y:366.5},0).wait(1).to({x:-132.4,y:366},0).wait(1).to({x:-112.8,y:364.4},0).wait(1).to({x:-93.4,y:361.7},0).wait(1).to({x:-74.1,y:358},0).wait(1).to({x:-55.1,y:353.4},0).wait(1).to({x:-36.3,y:347.8},0).wait(1).to({x:-17.8,y:341.3},0).wait(1).to({x:0.4,y:334},0).wait(1).to({x:18.3,y:325.9},0).wait(1).to({x:35.8,y:317.1},0).wait(1).to({x:53,y:307.6},0).to({_off:true},1).wait(41));

	// Layer 1
	this.button_4 = new lib.Support();
	this.button_4.setTransform(-151.7,217.5,0.69,0.69,0,0,0,80.6,80.6);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(1).to({scaleX:0.69,scaleY:0.69,x:-125.3,y:226.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-98.8,y:234.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-72,y:242.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-44.9,y:249.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-17.7,y:255},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:9.7,y:260.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:37.2,y:264.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:64.8,y:267.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:92.6,y:269.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:120.4,y:270.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:148.2,y:271.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:176.1,y:270.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:203.9,y:268.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:231.6,y:266.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:259.2,y:262.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:286.6,y:257.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:313.9,y:251.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:340.9,y:245.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:367.7,y:237.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:394.2,y:229.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:420.4,y:219.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:446.3,y:209.4},0).to({_off:true},1).wait(41));

	// Layer 1
	this.button_2 = new lib.About();
	this.button_2.setTransform(-232.3,217.5,0.69,0.69,0,0,0,80.6,80.6);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(1).to({scaleX:0.69,scaleY:0.69,x:-217.1,y:226.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-202,y:236},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-186.8,y:245.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-171.4,y:254},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-155.9,y:262.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-140.2,y:270.9},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-124.1,y:278.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-107.7,y:285.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-90.7,y:290.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-73.3,y:293.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-55.6,y:294.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-38,y:292.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-20.8,y:288},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-4.2,y:281.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:11.9,y:274.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:27.6,y:265.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:42.9,y:257.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:58,y:247.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:73,y:238.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:87.9,y:228.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:102.8,y:219.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:117.7,y:209.4},0).to({_off:true},1).wait(41));

	// Layer 1
	this.button_3 = new lib.Research();
	this.button_3.setTransform(-291.2,217.5,0.69,0.69,0,0,0,80.6,80.6);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(1).to({scaleX:0.69,scaleY:0.69,x:-266.4,y:227.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-240.9,y:235.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-215,y:241.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-188.8,y:246.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-162.4,y:250.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-135.9,y:254.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-109.3,y:256.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-82.7,y:258.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-56,y:259.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-29.3,y:260},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-2.6,y:259.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:24.1,y:259.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:50.8,y:257.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:77.3,y:255.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:103.9,y:253.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:130.4,y:250.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:156.8,y:246},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:183.1,y:241.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:209.1,y:235.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:234.8,y:228.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:260.1,y:219.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:284.8,y:209.4},0).to({_off:true},1).wait(41));

	// buttons
	this.button_1 = new lib.startButton();
	this.button_1.setTransform(0,311.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).to({_off:true},1).wait(63));

	// Layer 1
	this.instance_1 = new lib.Image();
	this.instance_1.setTransform(204,125.5,0.08,0.08);

	this.text_3 = new cjs.Text("Click to learn more...", "28px 'Arial'", "#330066");
	this.text_3.lineHeight = 33;
	this.text_3.lineWidth = 276;
	this.text_3.setTransform(-340,0);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_3}]},1).to({state:[]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1).to({_off:false},0).wait(1).to({x:-297.9,y:1.2},0).wait(1).to({x:-255.8,y:2.3},0).wait(1).to({x:-213.8,y:3.5},0).wait(1).to({x:-171.6,y:4.7},0).wait(1).to({x:-129.5,y:5.9},0).wait(1).to({x:-87.5,y:7.1},0).wait(1).to({x:-45.4,y:8.4},0).wait(1).to({x:-3.3,y:9.6},0).wait(1).to({x:38.8,y:10.9},0).wait(1).to({x:80.9,y:12.2},0).wait(1).to({x:123,y:13.6},0).wait(1).to({x:165,y:15},0).wait(1).to({x:207.1,y:16.5},0).wait(1).to({x:249.2,y:18.1},0).wait(1).to({x:291.3,y:19.8},0).wait(1).to({x:333.4,y:22.1},0).wait(1).to({x:319.5,y:25.2},0).wait(1).to({x:277.3,y:25.5},0).wait(1).to({x:235.2,y:25.4},0).wait(1).to({x:193.1,y:25.3},0).wait(1).to({x:151,y:25},0).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,325.5,703,274.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;