(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,173);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Win = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD4B").s().p("AgGA5QgDgDAAgEQAAgEADgEQADgDADAAQAFAAADADQADAEAAAEQAAAEgDADQgDADgFAAQgDAAgDgDgAgCAgQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIAAhWQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAABAAIAHAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIgCBWQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(246.8,-126.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("AAAAsQgQgBgNgIQgDgBABgEIADgGQACgDAEACQAGAEAJACQAIACAIgCQAIgCAAgHQAAgGgHgEQgEgDgKgEQgYgHAAgPQgBgMAJgGQAJgGANABQAMABALAFQACACgBADIgDAGQgBACgEgBQgJgEgJgBQgNgBgBAJQgBAJASAGQAOAFAFACQAJAHABAKQABAMgKAHQgIAHgOAAIgBAAg");
	this.shape_1.setTransform(241.1155,-125.2055);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCD4B").s().p("AgaAgQgMgNAAgTQAAgRAKgMQAMgNAQAAQARAAAMANQAKAMAAARIAAAEQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIg4AAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAABABQACAJAHAFQAHAGAIAAQAMAAAIgHQABAAAAgBQABAAABAAQAAAAABAAQAAABAAAAIAFAFQADACgDADQgKAKgTAAQgQAAgMgLgAgWgJQgBABAAABQABAAAAABQAAAAABAAQAAAAABAAIAqAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBgBgBQgEgUgTAAQgRAAgFAUg");
	this.shape_2.setTransform(232.65,-125.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCD4B").s().p("AgcArQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAgHQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAsg2QAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgnAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgHQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIA3AAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAAGQAAADgCACIgsA3QAAAAgBAAQAAABAAAAQAAAAABAAQAAAAABAAIAnAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAGQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_3.setTransform(224.15,-125.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCD4B").s().p("AgDA9QgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAhNQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAHAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAABNQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAgAgGgqQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(218.525,-127.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCD4B").s().p("AgXArQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAhNQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAAAIAIAAQABAAAAAAQABAAABAAQAAABAAAAQAAABAAABIAAADQAKgHAIAAQAKAAAJAHQADACgCADIgEAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQgGgGgIAAQgHABgJAFIAAA+QAAABAAABQAAABAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(213.7114,-125.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCD4B").s().p("AgiBAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAh4QAAgBAAgBQAAAAABgBQAAAAAAAAQABAAABAAIAHAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAAACQAIgGAMAAQAQAAANANQAMAMAAATQAAARgMAMQgNANgQAAQgLAAgJgGIAAAsQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAgAgXgsIAAAvQAHAGAMAAQAMgBAIgIQAIgHAAgMQAAgNgIgJQgIgHgMgCQgLABgIAFg");
	this.shape_6.setTransform(205.325,-123.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCD4B").s().p("AAIA0QgJAAgIgHQgHgIAAgMIAAgqQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgHAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAgFQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAHAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgQQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAIAAQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAIAAAQQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAOAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAFQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgOAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAqQAAAGADAEQADADAFAAQAGAAAEgEQABgBAAAAQABgBAAAAQABAAABABQAAAAABAAIAEAEQADADgEAEQgHAIgLAAIgBAAg");
	this.shape_7.setTransform(193.8643,-126.0986);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCD4B").s().p("AgWAlQgLgIAAgOQAAgOALgHQAJgHANABQALAAAIAGIAAgEQAAgIgGgGQgFgFgIAAQgKAAgHAHQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIgEgEQgBAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABgBQAKgLAQAAQAOAAAKAKQAKAJAAANIAAAyQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgHAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIAAgEQgIAHgLAAIgCAAQgMAAgIgGgAgNADQgGAEAAAIQAAAIAGAEQAGAFAHgBQALAAAIgHIAAgSQgIgGgLgBQgHAAgGAEg");
	this.shape_8.setTransform(186.225,-125.2691);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCD4B").s().p("AgaAgQgMgNAAgTQAAgRALgMQALgNAQAAQASAAALANQAKAMAAARIAAAEQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIg4AAQgBAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQADAJAGAFQAHAGAJAAQAMAAAIgHQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAIAEAFQADACgDADQgKAKgTAAQgQAAgMgLgAgXgJQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAIApAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQgFgUgTAAQgSAAgFAUg");
	this.shape_9.setTransform(177.525,-125.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCD4B").s().p("AgXArQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAhNQAAgBAAgBQAAAAABgBQAAAAABAAQABAAAAAAIAIAAQABAAAAAAQABAAABAAQAAABAAAAQAAABAAABIAAADQAKgHAIAAQAKAAAJAHQADACgCADIgEAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQgGgGgIAAQgHABgJAFIAAA+QAAABAAABQAAABAAAAQgBABgBAAQAAAAgBAAg");
	this.shape_10.setTransform(170.2114,-125.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCD4B").s().p("AgYA5QgMgJAAgPQAAgKAFgFQgLgIAAgNQAAgSAPgGIAAgFQAAgNAJgJQAJgJAMAAQALAAAIAGIAAgCQAAgBAAgBQAAAAABgBQAAAAABgBQABAAAAAAIAGAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAbQAAANgJAJQgJAJgNAAQgQAAgJgOQgGAEAAAIQAAAEADAEQAEAEAFAAIAiAAQAMAAAGAHQAHAHAAAKQAAAPgMAJQgMAHgQAAQgPAAgMgHgAgWAiQgBAJAKAFQAIADAIAAQAJAAAIgDQAJgFAAgJQAAgMgNAAIgZAAQgNAAAAAMgAgJgtQgEAGAAAHQAAAHAEAFQAGAFAGAAQAHAAAGgFQAEgFAAgHQAAgHgEgGQgGgFgHAAQgGAAgGAFg");
	this.shape_11.setTransform(161.7,-123.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCD4B").s().p("AgaA/QgMgHgHgMQgEgGAAgGIgBgLIAhAAQAAAJAFAFQAFAFAHgBQAKABAEgFQADgFAAgHQAAgJgEgEQgFgEgHAAIgFABIAAgUIADAAQAGAAADgDQAFgEAAgGQAAgGgFgEQgEgEgEAAQgFAAgFAFQgDAEAAAHIggAAQACgLAEgHQACgHAHgHQAGgFAJgDQAIgDAJAAQAJAAAHADQAIACAGAFQAGAFADAHQACAHAAAIQABALgEAEQgEAHgGAEQAKADAFAHQAGAIAAAMQAAAIgEAJQgDAIgIAFQgHAGgIADQgJADgMAAQgNAAgNgFg");
	this.shape_12.setTransform(147.5,-127.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCD4B").s().p("AgNA8QgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAhBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgHAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAgBIAAgEQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAHAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgIQAAgLAHgIQAIgHAJAAQAMAAAHAIQAEAEgDADIgEADQgDADgCgDQgDgEgHAAQgEgBgEAEQgDAEAAAFIAAAIQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIAOAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAABIAAAEQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgOAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABIAABBQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_13.setTransform(135.4271,-126.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCD4B").s().p("AgeAfQgNgNABgSQgBgRANgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMgAgUgUQgIAJAAALQAAAMAIAJQAJAJALAAQAMAAAJgJQAIgJAAgMQAAgLgIgJQgJgJgMAAQgLAAgJAJg");
	this.shape_14.setTransform(127,-125.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCD4B").s().p("AgGBAIAAhjIgTAAIAAgcIAzAAIAAB/g");
	this.shape_15.setTransform(112.125,-127.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCD4B").s().p("AAZArQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAgwQAAgJgIgGQgGgFgJAAQgMABgIAGIAAA9QAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAIgIAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAIAAhOQAAgBAAAAQAAgBABgBQAAAAABAAQAAAAABAAIAIAAQAAAAABAAQABAAAAAAQABABAAABQAAAAAAABIAAADQAJgGAMgBQAMgBAMAIQAMAJAAAMIAAA2QAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_16.setTransform(98.9,-125.2556);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCD4B").s().p("AgDA9QgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAhNQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAHAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAABNQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAgAgGgqQgDgDAAgFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(92.375,-127.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCD4B").s().p("AAYArQgDAAgBgDIgTg2QAAgBgBAAQAAgBAAAAQAAAAAAABQAAAAAAABIgUA2QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgGAAQgDAAgBgDIgYhPQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAIAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABIAQA2QAAABAAAAQAAABAAAAQAAAAABgBQAAAAAAgBIAUg2QAAgBABAAQAAgBAAAAQABAAABgBQAAAAABAAIADAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAUA2QAAABAAAAQAAABAAAAQAAAAABgBQAAAAAAgBIAQg2QABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAIAIAAQABAAAAAAQABABAAAAQABAAAAABQAAAAgBABIgXBPQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_18.setTransform(84.458,-125.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCD4B").s().p("AAEA8QgQAAgNgNQgNgNAAgRQAAgRANgNQANgMAQgBQAMAAAIAGIAAgkQAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAIAIAAQABAAABAAQAAAAABABQAAAAAAABQABABAAAAIAABwQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgIAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgCQgJAGgJAAIgCAAgAgPgDQgIAHAAANQAAAMAIAIQAIAJAMAAQANABAGgHIAAguQgHgGgMAAQgMABgIAIg");
	this.shape_19.setTransform(70,-126.8981);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCD4B").s().p("AALA8QgMAAgIgIQgHgIAAgNIAAhWQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAIAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAABWQAAAPAPAAIABAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAGQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_20.setTransform(63.275,-126.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCD4B").s().p("AgXAkQgMgIAAgNIAAg2QAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAIAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAAAwQAAAKAIAFQAGAGAJgBQANgBAHgGIAAg9QAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAIAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAABOQAAABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAIgIAAQgBAAAAAAQgBAAAAAAQgBgBAAgBQAAAAAAgBIAAgDQgJAGgMABIgCAAQgMAAgKgHg");
	this.shape_21.setTransform(55.925,-125.1941);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCD4B").s().p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMgAgTgUQgJAJAAALQAAAMAJAJQAIAJALAAQAMAAAJgJQAIgJAAgMQAAgLgIgJQgJgJgMAAQgLAAgIAJg");
	this.shape_22.setTransform(46.275,-125.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCD4B").s().p("AgXAfQgNgNAAgSQAAgRANgMQANgNARAAQAQAAAMALQABAAAAABQABABAAAAQAAABgBAAQAAABgBABIgFAEQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgKgHgJAAQgMAAgIAJQgIAJAAALQAAAMAIAJQAJAJALAAQAKAAAJgHQABAAAAgBQABAAAAAAQABAAABAAQAAABAAAAIAFAFQADACgDADQgLAKgRAAQgRAAgNgMg");
	this.shape_23.setTransform(36.7625,-125.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCD4B").s().p("AgWAkQgNgIAAgNIAAg2QAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAIAAQAAAAABAAQABAAAAABQABAAAAABQAAABAAAAIAAAwQAAAKAIAFQAGAGAJgBQANgBAHgGIAAg9QAAAAAAgBQAAgBABAAQAAgBABAAQABAAAAAAIAIAAQABAAAAAAQABAAAAABQABAAAAABQAAABAAAAIAABOQAAABAAAAQAAABgBABQAAAAgBAAQAAAAgBAAIgIAAQAAAAgBAAQgBAAAAAAQgBgBAAgBQAAAAAAgBIAAgDQgJAGgNABIgCAAQgLAAgJgHg");
	this.shape_24.setTransform(24.2,-125.1941);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCD4B").s().p("AgeAfQgMgNAAgSQAAgRAMgMQANgNARAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgNgMgAgUgUQgIAJAAALQAAAMAIAJQAJAJALAAQAMAAAIgJQAJgJAAgMQAAgLgJgJQgIgJgMAAQgLAAgJAJg");
	this.shape_25.setTransform(14.575,-125.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCD4B").s().p("AgDA8QgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAg1Igig6IAAgDIACgBIAJAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABIAaAtQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAZgtQABgDADAAIAKAAQABAAAAAAQABABAAAAQAAABAAAAQAAABgBABIgiA6IAAA1QAAABAAABQAAAAAAABQgBAAgBABQAAAAgBAAg");
	this.shape_26.setTransform(5.403,-126.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-134.2,246.70000000000002,17.499999999999986);


(lib.WhiteBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai+C/QhPhPAAhwQAAhvBPhPQBPhPBvAAQBwAABPBPQBPBPAABvQAABwhPBPQhPBPhwAAQhvAAhPhPg");
	this.shape.setTransform(27,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,54);


(lib.Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aw4LKQgggPgZgbQgvgzgLhVIhcsOQgNhuA6hkQA6hjBfgfQGsiNHIAAQFKAAFKBLQFOBOE0CUQBdAtA4BaQA4BagOBTIhcIqQgMBCgyAoQgzAphHAAQglAAgpgNIAAAAQlqh3mFAAQkaAAkbBBQkbBBkFB+QgqAVgsAAQgkAAgggOgAwengQg5ATglBCQgkBCAJBGIBcMOQAEAmARAZQATAeAfAAQARAAAUgKQEUiFEnhEQElhCEmAAQGVAAF9B8QAVAHAWAAQAXAAASgIQAbgOAFgfIBcoqQAHgqgkg5Qgng8g9gdQkmiOlAhKQk/hJlAAAQm4AAmZCGg");
	this.shape.setTransform(129.0386,72.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.1,145.6);


(lib.KTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBVQgGgDgCgCQgEgEgBgEQgCgFgBgFQABgGACgEQAAgEAFgFQADgDAFgCQAGgCADAAQAEAAAGACQAFACADADQAEAFACAEQABAEAAAGQAAAFgBAFQgCAEgEAEQgCACgGADQgGACgEAAQgDAAgGgCgAgUAbIAAgpIAJABQAGAAAFgCQAEgCAEgDQADgCADgEQACgFAAgEQAAgGgEgGQgFgEgHAAQgGAAgEAEQgEAFAAAHIgrAAQgBgLAFgJQADgIAKgJQAIgHALgDQALgEALAAQANAAAKAEQAMAFAHAHQAIAHADAJQAFAJAAALQAAAhgoAMIAAAQg");
	this.shape.setTransform(207.35,-81.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBSIgpg/IAAA/IgqAAIAAikIBCAAQAOAAAKAFQAKAEAGAHQAGAGAFAKQACAIAAAMQABASgJAMQgKALgRAEIA0BDgAgZgIIAIAAQANAAAGgFQAGgFAAgLQAAgJgGgGQgGgEgNAAIgIAAg");
	this.shape_1.setTransform(193.75,-81.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBSIAAikIBdAAIAAAkIgyAAIAAAcIAvAAIAAAjIgvAAIAAAdIAyAAIAAAkg");
	this.shape_2.setTransform(179.1,-81.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBSIggheIggBeIgrAAIgxikIAtAAIAcBqIAjhqIAhAAIAjBqIAdhqIAtAAIgyCkg");
	this.shape_3.setTransform(160.15,-81.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BFIASgjQAJAHAKAGQALAEAIAAQAKAAAFgFQAFgFAAgGIgBgGIgFgFIgIgFIgbgKQgIgDgGgFQgHgFgDgIQgEgIAAgMQAAgLAEgLQAEgKAHgHQAJgIAJgDQALgEAMAAQAKAAAQADQAPAFAKAFIgRAiQgGgFgIgEQgIgCgFAAQgKAAgDAEQgFADAAAHQAAAEACADIAGAFIAUAHQAWAIAJAKQAKALAAATQAAAOgEAJQgFALgIAHQgHAHgNAEQgNAEgNAAQgfAAgbgSg");
	this.shape_4.setTransform(140.525,-81.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBSIhPhkIAABkIgqAAIAAikIAqAAIBPBkIAAhkIAqAAIAACkg");
	this.shape_5.setTransform(123.475,-81.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBSIgKgdIg9AAIgJAdIguAAIA/ikIAtAAIA/CkgAgSAVIAlAAIgTg2g");
	this.shape_6.setTransform(104.725,-81.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBSIAAikIBdAAIAAAkIgyAAIAAAcIAvAAIAAAjIgvAAIAAAdIAyAAIAAAkg");
	this.shape_7.setTransform(82.45,-81.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfBSIAAhEIg9AAIAABEIgrAAIAAikIArAAIAABAIA9AAIAAhAIArAAIAACkg");
	this.shape_8.setTransform(66.925,-81.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVBSIAAiAIgjAAIAAgkIBxAAIAAAkIgkAAIAACAg");
	this.shape_9.setTransform(51.975,-81.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBSIggheIgfBeIgsAAIgxikIAtAAIAcBqIAjhqIAhAAIAjBqIAdhqIAsAAIgxCkg");
	this.shape_10.setTransform(26.125,-81.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBQQgQgFgNgNQgMgMgHgQQgGgPAAgTQAAgSAGgPQAHgQAMgMQAMgLARgHQARgHATAAQATAAASAHQASAHALALQAMAMAHAQQAGAPAAASQAAATgGAPQgHAQgMAMQgNAMgQAGQgSAHgTAAQgTAAgRgHgAgRgpQgIADgHAGQgHAIgDAHQgDAHAAAKQAAALADAHQAEAJAGAGQAHAGAIADQAKAEAHAAQAIAAAKgEQAJgEAGgFQAGgGAEgJQAEgJAAgJQAAgIgEgJQgDgHgHgIQgGgFgJgEQgIgDgKAAQgIAAgJADg");
	this.shape_11.setTransform(3.725,-81.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoBSIhPhkIAABkIgrAAIAAikIArAAIBPBkIAAhkIArAAIAACkg");
	this.shape_12.setTransform(-16.55,-81.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBSIg3hIIAABIIgrAAIAAikIArAAIAABFIAzhFIA1AAIhBBPIBHBVg");
	this.shape_13.setTransform(-34.425,-81.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-90.7,255.29999999999998,17.5);


(lib.GlowBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(0,0,3.3333,3.3332);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,576.7);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFF5","#CECEC6","#6F706B","#333332","#161616","#0E0E0E"],[0,0.145,0.463,0.718,0.906,1],0,0,0,0,0,127.6).s().p("AnvSYQjlhhixixQixiwhgjlQhljuAAkDQAAkDBljtQBgjlCxiwQCxixDlhhQDthkECAAQEEAADtBkQDlBhCwCxQCxCwBhDlQBkDtAAEDQAAEEhkDtQhhDlixCwQiwCxjlBhQjtBkkEAAQkCAAjthkg");
	this.shape.setTransform(127.575,127.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,255.2,255.2), null);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5ANAIQAOAIgaBEQgbBEgzBYQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCgQgKgSBJg7QBKg7ByhCQByhCBYgiQBYgiAKARQAKAShJA8QhKA7hyBBQhyBChYAiQg6AWgYAAQgNAAgDgFg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhEAzhYQAyhYAug6QAug5ANAIQAOAIgaBEQgbBFgzBXQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCgQgKgTBJg6QBKg8ByhBQByhCBYgiQBYgiAKARQAKAShJA8QhKA7hyBBQhyBBhYAjQg6AWgYAAQgNAAgDgFg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g4BPgBQBQABA4A4QA5A4AABPQAABQg5A4Qg4A4hQABQhPgBg4g4g");
	this.shape.setTransform(19.275,19.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,38.6,38.5), null);


(lib.Path_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah7DWQgNgIAahEQAbhEAzhYQAyhYAug5QAug6ANAIQAOAJgaBEQgbBEgzBXQgyBZguA5QgoAygQAAIgEgBg");
	this.shape.setTransform(12.7642,21.4254);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,25.6,42.9), null);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCgQgKgSBJg7QBKg8ByhBQByhCBYgiQBYgiAKARQAKAShJA8QhKA7hyBBQhxBBhZAjQg6AWgYAAQgNAAgDgFg");
	this.shape.setTransform(27.7057,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhEAzhYQAyhZAug5QAug5AOAIQANAIgaBEQgbBFgzBXQgyBYguA6QgoAygQAAIgDgBg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCfQgKgRBJg8QBKg7ByhBQBxhCBZgiQBYgiAKASQAKARhJA8QhKA7hyBBQhyBChYAiQg5AWgZAAQgNAAgDgGg");
	this.shape.setTransform(27.725,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5AOAIQANAIgaBEQgbBEgzBYQgyBYguA6QgoAygQAAIgDgBg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCfQgKgRBJg8QBKg7ByhBQByhCBYgiQBYgiAKASQAKARhJA8QhKA7hyBBQhyBChYAiQg6AWgYAAQgNAAgDgGg");
	this.shape.setTransform(27.725,16.5138);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g4BPgBQBQABA4A4QA5A4AABPQAABQg5A4Qg4A4hQABQhPgBg4g4g");
	this.shape.setTransform(19.275,19.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,38.6,38.5), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhEAzhYQAyhYAug6QAug5AOAIQANAIgaBEQgbBFgzBXQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.7858,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,25.6,42.9), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCgQgKgTBJg6QBKg8ByhBQBxhCBZgiQBYgiAKARQAKAShJA8QhKA7hyBBQhyBBhYAjQg6AWgYAAQgNAAgDgFg");
	this.shape.setTransform(27.7443,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg4g4gBhQQABhPA4g4QA4g5BPAAQBQAAA4A5QA4A4ABBPQgBBQg4A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.25,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,38.5,38.6), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5AOAIQANAIgaBEQgbBFgzBXQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCfQgKgRBJg8QBKg7ByhBQBxhCBZgiQBYgiAKASQAKARhJA8QhKA7hyBBQhyBChYAiQg5AWgZAAQgMAAgEgGg");
	this.shape.setTransform(27.7443,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5ANAIQAOAIgaBEQgbBFgzBXQgyBYguA6QgoAygPAAIgEgBg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCfQgKgRBJg8QBKg7ByhBQBxhCBZgiQBYgiAKASQAKARhJA8QhKA7hyBBQhyBChYAiQg5AWgZAAQgNAAgDgGg");
	this.shape.setTransform(27.725,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5ANAIQAOAIgaBEQgbBEgzBYQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCfQgKgRBJg8QBKg7ByhBQByhCBYgiQBYgiAKASQAKARhJA8QhKA7hyBBQhyBChYAiQg6AWgYAAQgNAAgDgGg");
	this.shape.setTransform(27.725,16.5138);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,19.3).s().p("AiHCIQg5g4AAhQQAAhPA5g4QA4g5BPAAQBQAAA4A5QA5A4AABPQAABQg5A4Qg4A5hQAAQhPAAg4g5g");
	this.shape.setTransform(19.275,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,38.6,38.6), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("Ah6DWQgOgIAahEQAbhFAzhXQAyhZAug5QAug5ANAIQAOAIgaBEQgbBEgzBYQgyBZguA5QgoAygPAAIgEgBg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AkTCgQgKgSBJg7QBKg7ByhCQByhCBYgiQBYgiAKARQAKAShJA8QhKA7hyBBQhyBChYAiQg6AWgYAAQgNAAgDgFg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_2_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhYgbhEQgahEAOgIQANgIAuA5QAuA5AyBZQAzBXAbBFQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_20, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDhQgOhdAAiEQAAiDAOhdQAPheATAAQAUAAAPBeQAOBdAACDQAACEgOBdQgPBegUAAQgTAAgPheg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_19, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEAOgIQANgIAuA5QAuA6AyBYQAzBYAbBEQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_18, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgOheAAiEQAAiDAOhdQAPheATAAQAVAAAOBeQAOBdAACDQAACEgOBeQgOBdgVAAQgTAAgPhdg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_17, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEANgIQAOgIAuA6QAuA5AyBYQAzBYAbBEQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.7642,21.4309);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_16, new cjs.Rectangle(0,0,25.6,42.9), null);


(lib.Path_2_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgOheAAiEQAAiDAOhdQAPheATAAQAUAAAPBeQAOBdAACDQAACEgOBeQgPBdgUAAQgTAAgPhdg");
	this.shape.setTransform(4.925,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_15, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEAOgIQANgIAuA5QAuA6AyBYQAzBYAbBEQAaBEgNAIIgEABQgQAAgogyg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgOheAAiEQAAiDAOhdQAPheATAAQAVAAAOBeQAOBdAACDQAACEgOBeQgOBdgVAAQgTAAgPhdg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhYgbhEQgahEAOgIQANgIAuA5QAuA6AyBYQAzBXAbBFQAaBEgNAIIgEABQgQAAgogyg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDhQgOhdAAiEQAAiDAOhdQAPheATAAQAVAAAOBeQAOBdAACDQAACEgOBdQgOBegVAAQgTAAgPheg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEAOgIQAOgIAtA6QAuA5AyBYQAzBYAbBEQAaBEgNAIIgEABQgQAAgogyg");
	this.shape.setTransform(12.7858,21.4254);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10, new cjs.Rectangle(0,0,25.6,42.9), null);


(lib.Path_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgPheAAiEQAAiDAPhdQAOheAUAAQAVAAAOBeQAOBeAACCQAACDgOBfQgOBdgVAAQgUAAgOhdg");
	this.shape.setTransform(4.95,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEAOgIQAOgIAtA5QAuA5AyBZQAzBYAbBEQAaBEgNAIIgEABQgQAAgogyg");
	this.shape.setTransform(12.7858,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgPheAAiEQAAiDAPhdQAOheAUAAQAVAAAOBeQAOBdAACDQAACEgOBeQgOBdgVAAQgUAAgOhdg");
	this.shape.setTransform(4.95,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhXgbhFQgahEAOgIQANgIAuA5QAuA6AyBYQAzBXAbBFQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDiQgOheAAiEQAAiDAOhdQAPheATAAQAVAAAOBeQAOBdAACDQAACEgOBeQgOBdgVAAQgTAAgPhdg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhYgbhEQgahEAOgIQANgIAuA5QAuA5AyBZQAzBXAbBFQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDhQgOhdAAiEQAAiDAOhdQAPheATAAQAVAAAOBeQAOBdAACDQAACEgOBdQgOBegVAAQgTAAgPheg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("ABAClQgug5gyhZQgzhYgbhEQgahEAOgIQANgIAuA5QAuA5AyBZQAzBXAbBFQAaBEgOAIIgEABQgPAAgogyg");
	this.shape.setTransform(12.775,21.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,25.6,43), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("AgiDhQgOhdAAiEQAAiDAOhdQAPheATAAQAUAAAPBeQAOBdAACDQAACEgOBdQgPBegUAAQgTAAgPheg");
	this.shape.setTransform(4.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,9.9,63.8), null);


(lib.Path_1_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABIALQBJALAAAPQAAAQhJALQhIALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_20, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgihyhCQhyhBhKg7QhJg8AKgSQAKgRBYAiQBYAiByBCQByBCBKA7QBJA7gKASQgDAFgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_19, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABJALQBIALAAAPQAAAQhIALQhJALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_18, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgjhyhBQhyhBhKg7QhJg8AKgSQAKgRBYAiQBYAiByBCQByBBBKA8QBJA6gKATQgDAFgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_17, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABIALQBJALAAAPQAAAQhJALQhIALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhZgjhxhBQhyhBhKg7QhJg8AKgSQAKgRBYAiQBZAiBxBCQByBBBKA8QBJA7gKASQgDAFgNAAQgYAAg6gWg");
	this.shape.setTransform(27.7057,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBnAABIALQBIALAAAPQAAAQhIALQhJALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgihyhCQhyhBhKg7QhJg8AKgRQAKgSBYAiQBYAiByBCQByBBBKA7QBJA8gKARQgDAGgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABJALQBIALAAAPQAAAQhIALQhIALhnAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhZgihxhCQhyhBhKg7QhJg8AKgRQAKgSBYAiQBYAiByBCQByBBBKA7QBJA8gKARQgDAGgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5138);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABIALQBJALAAAPQAAAQhJALQhHALhnAAQhlAAhIgLg");
	this.shape.setTransform(24.7,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgjhyhBQhyhBhKg7QhJg8AKgSQAKgRBYAiQBZAiBxBCQByBBBKA8QBJA6gKATQgDAFgNAAQgYAAg6gWg");
	this.shape.setTransform(27.7443,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBnAABHALQBJALAAAPQAAAQhJALQhIALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.7,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgihyhCQhyhBhKg7QhJg8AKgRQAKgSBYAiQBZAiBxBCQByBBBKA7QBJA8gKARQgDAGgNAAQgZAAg5gWg");
	this.shape.setTransform(27.7443,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBnAABIALQBIALAAAPQAAAQhIALQhJALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgihyhCQhyhBhKg7QhJg8AKgRQAKgSBYAiQBYAiByBCQByBBBKA7QBJA8gKARQgDAGgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABJALQBIALAAAPQAAAQhIALQhIALhnAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhZgihxhCQhyhBhKg7QhJg8AKgRQAKgSBYAiQBYAiByBCQByBBBKA7QBJA8gKARQgDAGgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5138);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,24.7).s().p("AitAbQhJgLAAgQQAAgPBJgLQBIgLBlAAQBmAABJALQBIALAAAPQAAAQhJALQhIALhmAAQhlAAhIgLg");
	this.shape.setTransform(24.675,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,49.4,7.7), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8AD66","#C48A53","#8C633D","#5E442C","#3C2D1F","#251E17","#171512","#11100F","#0E0E0E","#0E0E0E"],[0,0.078,0.18,0.286,0.388,0.494,0.596,0.698,0.796,1],0,0,0,0,0,31.9).s().p("ACyCPQhYgihyhCQhyhBhKg7QhJg8AKgSQAKgRBYAiQBYAiByBCQByBCBKA7QBJA7gKASQgDAFgNAAQgYAAg6gWg");
	this.shape.setTransform(27.725,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,55.5,33.1), null);


(lib.Path_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape.setTransform(86.475,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(16.8,17.5,139.39999999999998,10.2), null);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape.setTransform(86.975,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(17.3,17.5,139.39999999999998,10.2), null);


(lib.Path_34_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.475,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_1, new cjs.Rectangle(16.8,17.5,139.39999999999998,10.2), null);


(lib.Path_32_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(87,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32_1, new cjs.Rectangle(17.3,17.5,139.39999999999998,10.2), null);


(lib.Path_30_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.5,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_1, new cjs.Rectangle(16.8,17.5,139.39999999999998,10.2), null);


(lib.Path_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(87.025,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(17.4,17.5,139.29999999999998,10.2), null);


(lib.Path_26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.525,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(16.9,17.5,139.29999999999998,10.2), null);


(lib.Path_24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(87.025,22.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_1, new cjs.Rectangle(17.4,17.5,139.29999999999998,10.2), null);


(lib.Path_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.475,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_1, new cjs.Rectangle(16.8,16.8,139.39999999999998,10.2), null);


(lib.Path_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.975,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(17.3,16.8,139.39999999999998,10.2), null);


(lib.Path_18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(87,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_1, new cjs.Rectangle(17.3,16.8,139.39999999999998,10.2), null);


(lib.Path_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.5,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1, new cjs.Rectangle(16.8,16.8,139.39999999999998,10.2), null);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(87.025,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, new cjs.Rectangle(17.4,16.8,139.29999999999998,10.2), null);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.525,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, new cjs.Rectangle(16.9,16.8,139.29999999999998,10.2), null);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.475,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(16.8,16.8,139.39999999999998,10.2), null);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.975,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(17.3,16.8,139.39999999999998,10.2), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.475,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(16.8,16.8,139.39999999999998,10.2), null);


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape_1.setTransform(86.5,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(16.8,16.8,139.39999999999998,10.2), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape.setTransform(87.025,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(17.4,16.8,139.29999999999998,10.2), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq4AzIAAhlIVxAAIAABlg");
	this.shape.setTransform(86.525,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(16.9,16.8,139.29999999999998,10.2), null);


(lib.Path_38_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_1.setTransform(86.675,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38_1, new cjs.Rectangle(16.8,16.9,139.79999999999998,10.3), null);


(lib.Path_36_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq5A0IAAhnIV0AAIAABng");
	this.shape_1.setTransform(86.65,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36_1, new cjs.Rectangle(16.8,16.9,139.7,10.3), null);


(lib.Path_34_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.625,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_2, new cjs.Rectangle(16.8,16.9,139.7,10.3), null);


(lib.Path_32_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.575,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32_2, new cjs.Rectangle(16.7,16.9,139.8,10.3), null);


(lib.Path_30_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.575,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_2, new cjs.Rectangle(16.7,16.9,139.8,10.3), null);


(lib.Path_28_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.525,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_2, new cjs.Rectangle(16.7,16.9,139.70000000000002,10.3), null);


(lib.Path_26_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV0AAIAABng");
	this.shape_2.setTransform(86.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_2, new cjs.Rectangle(16.7,16.9,139.70000000000002,10.3), null);


(lib.Path_24_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.475,22);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_2, new cjs.Rectangle(16.6,16.9,139.8,10.3), null);


(lib.Path_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6AzIAAhlIV1AAIAABlg");
	this.shape_2.setTransform(86.675,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_2, new cjs.Rectangle(16.8,16.7,139.79999999999998,10.3), null);


(lib.Path_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq5AzIAAhlIV0AAIAABlg");
	this.shape_2.setTransform(86.65,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_2, new cjs.Rectangle(16.8,16.7,139.7,10.3), null);


(lib.Path_18_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6AzIAAhlIV1AAIAABlg");
	this.shape_2.setTransform(86.575,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_2, new cjs.Rectangle(16.7,16.7,139.8,10.3), null);


(lib.Path_16_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6AzIAAhlIV1AAIAABlg");
	this.shape_2.setTransform(86.575,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_2, new cjs.Rectangle(16.7,16.7,139.8,10.3), null);


(lib.Path_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6AzIAAhlIV1AAIAABlg");
	this.shape_2.setTransform(86.525,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_2, new cjs.Rectangle(16.7,16.7,139.70000000000002,10.3), null);


(lib.Path_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6AzIAAhlIV0AAIAABlg");
	this.shape_2.setTransform(86.5,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_2, new cjs.Rectangle(16.7,16.7,139.70000000000002,10.3), null);


(lib.Path_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.675,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(16.8,17.2,139.79999999999998,10.3), null);


(lib.Path_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq5A0IAAhnIV0AAIAABng");
	this.shape_2.setTransform(86.65,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(16.8,17.2,139.7,10.3), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.625,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(16.8,17.2,139.7,10.3), null);


(lib.Path_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_2.setTransform(86.575,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(16.7,17.2,139.8,10.3), null);


(lib.Path_2_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV1AAIAABng");
	this.shape_1.setTransform(86.525,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_21, new cjs.Rectangle(16.7,17.2,139.70000000000002,10.3), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aq6A0IAAhnIV0AAIAABng");
	this.shape_1.setTransform(86.5,22.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(16.7,17.2,139.70000000000002,10.3), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoACeIABk7IQAAAIAAE7g");
	mask.setTransform(51.275,15.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAVIgBAAIgWgeIAAAAIAAAdIgBABIgDAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgnQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIACAAIABABIAWAdIAAAAIAAgdQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIACAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAnQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(84.15,28.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgJAAQgIAAgGgGgAgLgLQgEAFAAAGQAAAHAEAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgEgHAAQgGAAgFAEg");
	this.shape_1.setTransform(79.475,28.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAVQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgnQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAnQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAg");
	this.shape_2.setTransform(76.175,28.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBAVQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgiQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgKAAIgBgBIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAaAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAADQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgJAAIgBABIAAAiQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAg");
	this.shape_3.setTransform(73.675,28.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAVQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgDgJIgBgBIgOAAIgBABIgEAJIgBABIgEAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABAAIAOgnIACgBIACAAIABABIAPAnQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAgAAAgMIgFARIAAAAIALAAIABAAIgGgRIgBAAIAAAAg");
	this.shape_4.setTransform(70.3417,28.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAVIgBgBIgKgQIgGAAIgBABIAAAPQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgnQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAMAAQAOAAAAAMQAAAKgKABIAKARQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAgIgOIAAANIABABIAHAAQAJAAAAgIQAAgHgJAAIgHAAIgBABg");
	this.shape_5.setTransform(66.47,28.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgHAAQgGAAgFAFg");
	this.shape_6.setTransform(61.975,28.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAVQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgnQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAMAAQAGAAAEAEQAEAEAAAGQAAAFgEADQgEAEgGAAIgGAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAANQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAgAgIgOIAAAOQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAFAAQAKAAAAgHQAAgJgKAAIgFAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_7.setTransform(57.725,28.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKAVIgCgBIgJgQIgGAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIAAAPQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgDAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgnQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIANAAQAOAAAAAMQAAAJgKACIAKARQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAgAgJgOIAAANQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAABAAIAHAAQAJAAAAgIQAAgHgJAAIgHAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_8.setTransform(53.92,28.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgJAAQgIAAgGgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_9.setTransform(49.525,28.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAPQgGgGAAgJQAAgIAGgGQAHgGAIAAQAHAAAEADQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIAAACIgCAAQgEgDgFAAQgGAAgFAFQgEAFAAAGQAAAHAEAFQAFAFAGAAQAFAAAEgDIACAAIAAACQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgEADgHAAQgIAAgHgGg");
	this.shape_10.setTransform(45.15,28.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgIAAgFgGg");
	this.shape_11.setTransform(66.825,2.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBwQgZgJABgPQgBgGAFgFQAEgEAGAAQAGAAAEACIALAHQANAIAPAAQAUAAALgLQAKgLgBgSIAAgVQgQANgZAAQghAAgTgVQgWgWgBglQAAgkAWgXQAUgVAhAAQAVAAAWAMQABgFAFgEQAEgDAGAAQAIAAAGAFQAEAFAAAHIAACRQABAngXATQgSARgjAAQgVAAgTgHgAgbhLQgMANABAYQgBAaAMAMQALANASAAQAXAAAPgNIAAhKQgSgOgUAAQgRAAgMANg");
	this.shape_12.setTransform(94.9,19.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAtBMQgFgFAAgHIAAhGQAAgYgKgLQgIgJgRAAQgYAAgMAVQgIAQAAATIAAA6QAAAHgGAFQgFAFgHAAQgHAAgFgFQgGgFAAgHIAAh/QAAgHAGgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAAHQASgYAhAAQAeAAAQAPQASAQAAAiIAABPQAAAHgGAFQgFAFgHAAQgHAAgGgFg");
	this.shape_13.setTransform(78.2,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMBMQgFgFAAgHIAAh/QAAgGAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAGIAAB/QAAAHgGAFQgFAFgHAAQgHAAgFgFg");
	this.shape_14.setTransform(66.825,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABbBMQgFgGAAgGIAAhIQAAgVgJgMQgJgKgPABQgTgBgIAOQgIANAAAXIAABBQAAAHgGAEQgFAFgHABQgGgBgGgFQgFgEAAgHIAAhIQAAgXgJgKQgIgJgRAAQgSgBgIAQQgHALgBAYIAABAQAAAHgFAEQgGAFgHABQgHgBgFgFQgFgEgBgHIAAh/QABgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHIAAABQAQgSAbAAQASAAAPAIQALAIAGAMQAJgPAMgGQAMgHAUAAQAbAAAQAPQASAPgBAhIAABRQABAGgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_15.setTransform(51.15,15.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBHQgTAKgZAAQgWAAgQgMQgRgNAAgWQAAgbAfgMQAUgIAugEIAAgEQAAgPgGgIQgIgJgQAAQgNAAgPAHQgNAFgFAAQgFAAgEgDQgDgEAAgGQAAgKASgHQAWgJAWAAQAgAAARARQANAPAAAbIAABVQAAAHgGAFQgFAFgHAAQgMAAgEgKgAgfAiQAAAKAKAGQAIAFANAAQAQAAAPgJIAAgnQg+ADAAAYg");
	this.shape_16.setTransform(30.575,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABIBqQgcANggAAQg0AAgigfQgjgggBg4QAAgxAlgjQAlgiAzgBQAcABAUAGQAbAIAAAQQAAAHgFAGQgFAEgIAAQgEABgRgHQgRgHgTAAQgjAAgYAZQgZAYAAAjQAAAlAYAYQAYAYAkAAQAgAAAZgQIAAgoIgxAAQgHAAgFgFQgFgFAAgGQAAgHAFgGQAEgDAIAAIBGAAQAIgBAFAFQAFAFAAAIIAABXQgBAIgEAFQgGAGgJAAQgPAAgEgOg");
	this.shape_17.setTransform(11.05,11.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAWIgCgBIgDgKIgBgBIgPAAIgBABIgDAKIgCABIgDAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAPgpIACgBIACAAIABABIAPApIgBABgAAAgMIgGARIABAAIALAAIABAAIgHgRIAAgBIAAABg");
	this.shape_18.setTransform(61.48,2.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAWQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAgpQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAIABABIAAApQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_19.setTransform(58.525,2.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgBAWQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIAAgkIgBgBIgKAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgDIABgBIAbAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgKAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIAAAkIgBABg");
	this.shape_20.setTransform(55.95,2.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAQQgHgHABgJQgBgIAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAGgJAAQgJAAgGgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_21.setTransform(51.8,2.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAQQgGgHgBgJQABgIAGgHQAGgGAJAAQAGAAAGADQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAAAIgBADIgCAAQgFgDgEAAQgGAAgFAFQgFAFAAAGQAAAHAFAGQAFAEAGAAQAEABAFgDIACAAIABACQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQgFADgHAAQgJAAgGgGg");
	this.shape_22.setTransform(47.3,2.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAWQgIgBgFgFIgBgBIADgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAFAEAHAAQAHAAAAgGQAAgEgKgGQgMgFABgHQAAgEADgDQAEgEAGABQAHAAAFADIAAACIgBACIgBABQgHgEgEABQgHABAAAFQAAADALAGQALAEAAAHQAAAMgOAAIgBAAg");
	this.shape_23.setTransform(43.475,2.8506);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAWQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIgDgJIgCgBIgOAAIgBABIgDAJQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAPgoIABgBIACAAIACABIAPAoQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAgAAAgMIgGARQAAAAABAAIALAAQABAAgBAAIgGgRIAAgBIAAABg");
	this.shape_24.setTransform(38.4104,2.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAWIgBgCIgPgoIABgBIADAAIACABIALAhIAAAAIAMghIACgBIADAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgPAoQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAg");
	this.shape_25.setTransform(34.8083,2.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAGgJAAQgIAAgHgGgAgLgLQgFAFAAAGQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_26.setTransform(30.425,2.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANAWIgBgBIgWgeQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAABAAAAIAAAdQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgDAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIAAgoIABgBIACAAIACABIAWAeIAAAAIAAgeQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAAAoQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAg");
	this.shape_27.setTransform(25.625,2.875);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,102.6,31.6), null);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgmixQBJgGA7gCIgBALQhFADg1AFIg1FfIgLABg");
	this.shape.setTransform(9.425,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,18.9,37.2), null);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgDiyIA9gKIAAALIg1AIIg0FkIgLACg");
	this.shape.setTransform(5.85,18.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,11.7,37.8), null);


(lib.Path_38_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDAD37").s().p("AgDgjIAIAJIAAA8IgJACg");
	this.shape_2.setTransform(0.5,3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38_2, new cjs.Rectangle(0,0,1,7.1), null);


(lib.Path_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AhHC8QgSgRAEgeIAijpQAEggAZgcQAYgcAegIQAfgIATARIAEAEQgSgMgaAHQgfAIgYAcQgZAcgEAgIghDoQgEAbANAQg");
	this.shape.setTransform(8.606,19.1083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,17.3,38.3), null);


(lib.Path_36_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDAD37").s().p("AgMCzIgFllIAjAAIAAALIgaAAIAFFag");
	this.shape_2.setTransform(1.825,17.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36_2, new cjs.Rectangle(0,0,3.7,35.9), null);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AhbCsIA1laQA6AOBIATIgCAKQg9gQg5gOIg0FQg");
	this.shape.setTransform(9.2,17.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,18.4,34.9), null);


(lib.Path_34_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDAD37").s().p("AgQBPIAYifIAJAMIgWCVg");
	this.shape_3.setTransform(1.7,8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_3, new cjs.Rectangle(0,0,3.4,16.3), null);


(lib.Path_33_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("Ag2DWIg4gwQgUgSAFgiIAhjpQAFgiAbgfQAbgfAigIQAhgJAVATIA4AzQAUATgEAiIgIAxIgqAJIAkAhIgUCMQgFAhgcAfQgaAdgiAJQgLADgJAAQgUAAgOgNg");
	this.shape.setTransform(12.7,22.6525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33_0, new cjs.Rectangle(0,0,25.5,45.3), null);


(lib.Path_33_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#322B43").s().p("Ag3DJIg5g+QgVgXAFggIAijhQAGgiAbgXQAcgZAhAAQAiAAAWAXIA5BBQAVAYgGAhIgiDeQgFAigcAWQgaAXgjABQgjAAgUgXg");
	this.shape_1.setTransform(12.9581,22.3745);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33_1, new cjs.Rectangle(0,0,25.9,44.8), null);


(lib.Path_32_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDAD37").s().p("AhNAQIAGghQBOAJBGAKIgBALQhOgMg8gGIgEAXg");
	this.shape_3.setTransform(7.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32_3, new cjs.Rectangle(0,0,15.5,3.5), null);


(lib.Path_31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgmirQA1gMBOgPIgCALQg1AKhDAPIg0FnIgLACg");
	this.shape_1.setTransform(9.3,19.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31_1, new cjs.Rectangle(0,0,18.6,39.9), null);


(lib.Path_30_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDAD37").s().p("AAHhVIAKAIIgWCgIgLADg");
	this.shape_3.setTransform(1.7,8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_3, new cjs.Rectangle(0,0,3.4,17.2), null);


(lib.Path_29_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AhICuQgTgWAFgdIAijhQAFgeAZgWQAYgWAggBQAfAAATAVIAEAFQgSgQgbABQgfAAgYAWQgaAWgEAeIgjDhQgEAaAOATg");
	this.shape_1.setTransform(8.7819,17.7994);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0,0,17.6,35.6), null);


(lib.Path_28_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_26_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B77224").s().p("AgyCJIgDgDIAGAFIABAAIACACIABAAIADABIACABIACAAIADABIAGAAQAQgBAMgLQANgLACgPIAjjmIAAgFIgBgCIAAgCIAAgBIgBgCIAAgBIgBgCIAAgBIgFgHIADAEQAKALgCAPIgjDiQgCAQgNALQgMALgQAAIgDABQgOAAgJgLg");
	this.shape_3.setTransform(5.425,14.9042);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_3, new cjs.Rectangle(0,0.2,10.9,29.5), null);


(lib.Path_25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgBgJIAAgKIAAgBIgBgDIAAAAIgBgDIAAAAIgBgCIgDgEIAHAHQAKAJgDAQIgEAeIgKADg");
	this.shape.setTransform(0.901,3.3625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_0, new cjs.Rectangle(0.1,0.1,1.5999999999999999,6.6000000000000005), null);


(lib.Path_24_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgcgJIA+gQIgCALIgzANIgDAYIgLADg");
	this.shape.setTransform(3.4,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_0, new cjs.Rectangle(0,0,6.8,5.2), null);


(lib.Path_23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgkBJIgJgHQAKAIAPgFQAPgEAMgOQANgOACgQIAOhjIAJAIIgNBjQgCAQgOAOQgMAOgPAEIgKACQgJAAgGgGg");
	this.shape.setTransform(4.65,7.9029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_0, new cjs.Rectangle(0.1,0,9.1,15.8), null);


(lib.Path_22_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_19_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgoBHIgBgBIACABIAAAAIADABIAAAAIACABIABAAIACAAIABABIAFAAIACgBIACAAIADgBQAQgEAMgOQANgOACgQIAOhjIADACIgOBjQgCAQgNAPQgNAOgOAEIgLABQgJAAgGgFg");
	this.shape.setTransform(4.375,7.631);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_0, new cjs.Rectangle(0.2,0,8.4,15.3), null);


(lib.Path_19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_16_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AivCyIA4l9IBMgLIA4A5IABAVIAdhZIBMgHIA5A7Ig4F5Ig1AFIghgiIgFAOIgyAHIgkgkIgKBBIg0AIg");
	this.shape.setTransform(17.625,23.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_1_1, new cjs.Rectangle(0,0,35.3,46.7), null);


(lib.Path_16_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_16_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_15_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AiCCjIA4l4QA+gFBWgEIA5A/IgHAxIhhADIgGAoIAEAAIA5A9IgHAwIhHAEIgIA7IAdgBIA5A9IgIAxQhVAEg+AFg");
	this.shape.setTransform(13.125,22.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_4, new cjs.Rectangle(0,0,26.3,44.6), null);


(lib.Path_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgcgJIA+gQIAAAEIg7APIgEAfIgEABg");
	this.shape.setTransform(3.4,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_3, new cjs.Rectangle(0,0,6.8,5.2), null);


(lib.Path_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AAIDcIg0g+IgSA6Ig1gCIg5hBIgFl0IA0ACIA3A/IARg9IA0ACIA0BAIASg6IA0AEIA5BGQg1CehBDLg");
	this.shape.setTransform(17.775,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_2, new cjs.Rectangle(0,0,35.6,44.8), null);


(lib.Path_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AhHDIIg4hNIA4lnQBMASBDATIA3BRIgHAuQg1gQgpgKIgGAmIAFABIA3BOIgHAvIhFgTIgIA5IAdAIIA2BPIgHAuQhIgUhHgRg");
	this.shape.setTransform(12.75,23.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_1, new cjs.Rectangle(0,0,25.5,47.5), null);


(lib.Path_15_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AiBC2IA4mBQA9gNBVgQIA5A3IgIAxIhgARIgGApIAFgBIA4A2IgHAxIhHANIgIA9IAdgFIA5A1IgIAyQg9AKhVATg");
	this.shape.setTransform(12.975,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,26,46.6), null);


(lib.Path_15_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#322B43").s().p("AiNCtIA4l9IA0gGIAlAnIAagvIA3gGIA5A8IhbCbIAiDeIg2AFIg2g4IgKBAIg0AHg");
	this.shape_3.setTransform(14.225,22.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_3, new cjs.Rectangle(0,0,28.5,45.7), null);


(lib.Path_13_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AAfDgIgzhGIgJA5IgzgJIg4hJIA4lrIAzAKIAzBGIAJg6IAzALIA3BNIg3Fng");
	this.shape.setTransform(13.725,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,27.5,47), null);


(lib.Path_13_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AiJC/IA4mEIAzgOIAzAvIAJg+IAzgMIA5AzIg5GBIgyAMIg0gvIgJA+IgzAOg");
	this.shape.setTransform(13.75,23.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,27.5,47.9), null);


(lib.Path_13_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("Ah5CzIB3mNIA9gMIA4A3IAGFzIgzAIIg5g1IAAgHIgGABIgUBLIgzALg");
	this.shape.setTransform(12.15,23.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_2_1, new cjs.Rectangle(0,0,24.3,46.2), null);


(lib.Path_12_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AACgIIAAgKIgBgCIAAgBIgBgCIAAgBIAAgCIAAgBIgBgCIgEgDIAEACQAIAJgCAQIgFAmIgEAAg");
	this.shape.setTransform(0.551,3.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1_1, new cjs.Rectangle(0,0,1.1,6.7), null);


(lib.Path_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#322B43").s().p("AiRClIA5l5IA5gEIA4A8IABAHIAKhIIA0gCIA5A+Ig4F2Ig4ACIg5g8IgBgHIgLBIIg0AEg");
	this.shape_3.setTransform(14.55,22.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_3, new cjs.Rectangle(0,0,29.1,44.8), null);


(lib.Path_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AhGCvQgTgVAFgdIAijhQAFgfAZgWQAYgWAgAAQAfgBATAVQgTgRgcAAQgfABgZAWQgZAWgFAeIgiDhQgEAdARAUIgCgCg");
	this.shape_1.setTransform(8.5819,17.6494);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,17.2,35.3), null);


(lib.Path_10_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#322B43").s().p("AgwDaIg5hHIApkHIgxg9IAHgwQBNAJBXAPIA4BKIgIAvIg3gKIgxE8g");
	this.shape.setTransform(11.4,22.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1_1, new cjs.Rectangle(0,0,22.8,45.2), null);


(lib.Path_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#322B43").s().p("AhoC9IAokaIgvgnIAHgzQBDgXBdgcIA4AxIgHAyIg4AQIgwFSIgxAQg");
	this.shape_3.setTransform(11.2,23.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,22.4,47), null);


(lib.Path_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgJiTIAJAJIAKEcIgJACg");
	this.shape.setTransform(1,14.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,2,29.6), null);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("Ag+CJIBYkcIAlADIgDALIgYgCIhYEbg");
	this.shape.setTransform(6.25,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,12.5,29.6), null);


(lib.Path_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AAUijIAKAKIgwE7IgLABg");
	this.shape.setTransform(2.975,16.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,6,32.7), null);


(lib.Path_6_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_6_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("Ag8CKIBTkeIAmABIAAALIgdgBIhSEeg");
	this.shape.setTransform(6.1,14.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1_1, new cjs.Rectangle(0,0,12.2,29.9), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDAD37").s().p("AhGAGQBNgaBFgVIgCAMQg7ARhMAaIgDAYIgLAEg");
	this.shape_3.setTransform(7.575,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,15.2,8.4), null);


(lib.Path_5_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgjgBIBHgGIgCAKIg7AFg");
	this.shape.setTransform(3.575,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_10, new cjs.Rectangle(0,0,7.2,1.5), null);


(lib.Path_5_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAYijIADADIgxFDIgEAAg");
	this.shape.setTransform(2.65,16.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_9, new cjs.Rectangle(0,0,5.3,32.7), null);


(lib.Path_5_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AglBwIBAgOIABjaIAJAJIAADaIhBAOg");
	this.shape.setTransform(3.75,12.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_8, new cjs.Rectangle(0,0,7.5,24.1), null);


(lib.Path_5_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("Ag8COIADgKIBQkVIAmACIAAAEIgkgCIhSEeg");
	this.shape.setTransform(6.1,14.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_6, new cjs.Rectangle(0,0,12.2,29.1), null);


(lib.Path_5_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgYAAIgKgNQAaAGArALIgCAKg");
	this.shape.setTransform(3.475,1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,7,2.7), null);


(lib.Path_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("Ag5BFIgKgMIBLAOIAYiZIAkAHIgCAKIgZgFIgXCZg");
	this.shape.setTransform(6.8,8.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,13.6,16.7), null);


(lib.Path_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgiADIBFgOIgCALIg6AMg");
	this.shape.setTransform(3.5,1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,7,2.4), null);


(lib.Path_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AhDBdIBLgUIAYikIAkgJIgCALIgZAGIgYCkIhKAUg");
	this.shape.setTransform(6.8,10.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,13.6,20.3), null);


(lib.Path_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AAFizIArgEIACALIgkADIg0FgIgLABg");
	this.shape.setTransform(4.975,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,10,36.8), null);


(lib.Path_5_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AAJi0IAkgFIgBALIgaADIg0FjIgLACg");
	this.shape_1.setTransform(4.55,18.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_11, new cjs.Rectangle(0,0,9.1,37.3), null);


(lib.Path_4_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgvACIADAAIBcgGIAAAEIhcAFg");
	this.shape.setTransform(4.825,0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_10, new cjs.Rectangle(0,0,9.7,1.1), null);


(lib.Path_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgGiTIADADIAKEjIgDABg");
	this.shape.setTransform(0.7,14.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0,0,1.4,29.6), null);


(lib.Path_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAgi6IAxgKIAAAEIguAJIhvF7IgFABg");
	this.shape.setTransform(8.15,19.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0,0,16.3,39.4), null);


(lib.Path_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("Ag+CNIBYkcIAlADIgBADIghgCIhYEbg");
	this.shape.setTransform(6.25,14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,12.5,28.9), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgrgIIgDgEIADABIBaAVIAAADg");
	this.shape.setTransform(4.725,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,9.5,2.6), null);


(lib.Path_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgsCuIA1lcIAkAGIAAAEIghgGIg0FZg");
	this.shape.setTransform(4.525,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,9.1,35), null);


(lib.Path_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgvAJIAEgBIBbgTIgBAEIhbATg");
	this.shape.setTransform(4.775,1.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,9.6,2.4), null);


(lib.Path_4_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAJi1IAkgKIgBAEIggAJIg0FxIgEABg");
	this.shape.setTransform(4.475,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2_1, new cjs.Rectangle(0,0,9,38.4), null);


(lib.Path_4_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAEizIArgEIABAEIgpADIg1FnIgDABgAAwizIAAAAIACAMg");
	this.shape.setTransform(5.0125,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,10.1,36.8), null);


(lib.Path_4_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B77224").s().p("AhGBcIBmi1IAngFIgDAEIghAEIhlC1g");
	this.shape_3.setTransform(7.05,9.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_11, new cjs.Rectangle(0,0,14.1,19), null);


(lib.Path_3_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgmixQBJgGA7gCIAAAEQhLADg2AFIg2FnIgEAAg");
	this.shape.setTransform(9.425,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_12, new cjs.Rectangle(0,0,18.9,37.2), null);


(lib.Path_3_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AhLCMIBYkTIA/gHIAAADIg8AHIhYETg");
	this.shape.setTransform(7.625,14.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_11, new cjs.Rectangle(0,0,15.3,28.7), null);


(lib.Path_3_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAAgjIACADIgBBDIgCABg");
	this.shape.setTransform(0.2,3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_10, new cjs.Rectangle(0,0,0.4,7.1), null);


(lib.Path_3_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgMCzIgFllIAjAAIAAAEIgggBIAFFig");
	this.shape.setTransform(1.825,17.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,3.7,35.9), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AhbCtIA1laQA6AOBIATIAAADQg9gQhBgQIg1FXg");
	this.shape.setTransform(9.2,17.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,18.4,34.8), null);


(lib.Path_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AhABBIgDgEIBLAOIAYiZIAkAHIAAAEIghgHIgYCZg");
	this.shape.setTransform(6.8,7.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,13.6,15.9), null);


(lib.Path_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgZCfIAwk9IADAEIgvE5g");
	this.shape.setTransform(2.6,15.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,5.2,31.9), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgmirQA1gMBOgPIgBADQg7ALhEAQIg1FuIgEABg");
	this.shape.setTransform(9.3,19.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,18.6,39.9), null);


(lib.Path_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AhDBgIBLgVIAYikIAkgJIAAAEIghAIIgYCkQgvAMgbAJg");
	this.shape.setTransform(6.8,9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,13.6,19.8), null);


(lib.Path_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAWipIAEACIgvFQIgEABg");
	this.shape.setTransform(2.55,17.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,5.1,34.1), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAUCDIgpkFIADADIAoECg");
	this.shape.setTransform(2.225,13.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,4.5,26.1), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AAJi0IAkgFIAAAEIgiAEIg0FrIgEAAg");
	this.shape.setTransform(4.55,18.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,9.1,37.3), null);


(lib.Path_2_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AgjABIAEAAIBDgEIgBADIhDAEg");
	this.shape_1.setTransform(3.575,0.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12_1, new cjs.Rectangle(0,0,7.2,0.9), null);


(lib.Path_2_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AgDiyIA9gKIAAAEIg7AJIg1FrIgEABg");
	this.shape_1.setTransform(5.85,18.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11_1, new cjs.Rectangle(0,0,11.7,37.8), null);


(lib.Path_2_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AghBzIBAgOIAAjaIADADIAADaIhAANg");
	this.shape_1.setTransform(3.425,11.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10_1, new cjs.Rectangle(0,0,6.9,23.5), null);


(lib.Path_2_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AhKC5QgSgQAEgfIAijpQAEgfAZgcQAZgcAdgIQAfgJATARQAHAGAEAKQgFgJgFgFQgTgPgdAHQgeAIgYAcQgZAdgEAfIgiDpQgEAdARAQQAGAFAJADQgJgCgIgHg");
	this.shape_1.setTransform(8.931,19.3583);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9_1, new cjs.Rectangle(0,0,17.9,38.8), null);


(lib.Path_2_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AAACEIgBkHIACADIABEEg");
	this.shape_1.setTransform(0.225,13.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8_1, new cjs.Rectangle(0,0,0.5,26.5), null);


(lib.Path_2_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AgfgFIgDgEIAEABIBBAPIgBADg");
	this.shape_1.setTransform(3.475,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7_1, new cjs.Rectangle(0,0,7,2), null);


(lib.Path_2_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AgNBQIAYigIADAEIgXCdg");
	this.shape_1.setTransform(1.4,8.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6_1, new cjs.Rectangle(0,0,2.8,16.1), null);


(lib.Path_2_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AhNAQIAGggQBOAJBGAKIAAADQg+gIhTgKIgFAdg");
	this.shape_1.setTransform(7.75,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5_1, new cjs.Rectangle(0,0,15.5,3.4), null);


(lib.Path_2_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AgiAGIAEgBIBBgNIgBAEIhBANg");
	this.shape_1.setTransform(3.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4_1, new cjs.Rectangle(0,0,7,1.8), null);


(lib.Path_2_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AAKhVIAEADIgXCnIgEABg");
	this.shape_1.setTransform(1.4,8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3_1, new cjs.Rectangle(0,0,2.8,17.2), null);


(lib.Path_2_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_2_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77224").s().p("AhGAGQBNgaBFgVIgBAEQhGAVhIAYIgEAhIgEABg");
	this.shape_1.setTransform(7.575,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1_1, new cjs.Rectangle(0,0,15.2,8.4), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B77224").s().p("AgmCHIAokOIAlgCIgBADIghACIgoEOg");
	this.shape.setTransform(3.875,13.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,7.8,27.7), null);


(lib.Path_2_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B77224").s().p("AgMhTIADADIAWCjIgCABg");
	this.shape_2.setTransform(1.325,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_22, new cjs.Rectangle(0,0,2.7,16.8), null);


(lib.Path_1_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgvAAIBfgIIgBAKIhVAHIgJgJg");
	this.shape_1.setTransform(4.825,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12_1, new cjs.Rectangle(0,0,9.7,1.7), null);


(lib.Path_1_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AhLCJIBYkTIA/gHIgCAKIgzAGIhZETg");
	this.shape_1.setTransform(7.625,14.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11_1, new cjs.Rectangle(0,0,15.3,29.3), null);


(lib.Path_1_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AAgi6IAxgKIAAALIgnAIIhuFzIgNADg");
	this.shape_1.setTransform(8.15,19.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10_1, new cjs.Rectangle(0,0,16.3,39.4), null);


(lib.Path_1_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_1_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgDCEIgCkIIAJALIABD9g");
	this.shape_1.setTransform(0.55,13.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8_1, new cjs.Rectangle(0,0,1.1,26.5), null);


(lib.Path_1_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AglgDIgJgNQAuALAvALIgBALg");
	this.shape_1.setTransform(4.725,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7_1, new cjs.Rectangle(0,0,9.5,3.3), null);


(lib.Path_1_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgsCuIA1ldIAkAHIgBAKIgagFIgzFSg");
	this.shape_1.setTransform(4.525,17.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6_1, new cjs.Rectangle(0,0,9.1,35.1), null);


(lib.Path_1_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgcCeIAwk9IAJAMIguEzg");
	this.shape_1.setTransform(2.925,15.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5_1, new cjs.Rectangle(0,0,5.9,32), null);


(lib.Path_1_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgvAGIBfgUIgCALIhTASg");
	this.shape_1.setTransform(4.775,1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4_1, new cjs.Rectangle(0,0,9.6,3), null);


(lib.Path_1_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AAJi1IAkgKIgCALIgZAHIgzFqIgLADg");
	this.shape_1.setTransform(4.475,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3_1, new cjs.Rectangle(0,0,9,38.4), null);


(lib.Path_1_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AgvCNIgJgLIAFAFIADACIAHACIABAAIAFACIAFAAQAQgBANgLQAMgLACgQIAjjmIAAgFIgBgBIAAgCIAAgCIgBgBIAAgCIgCgDIgEgGIAKALQAJAKgCAQIgjDiQgCAQgNAKQgMALgQABQgQAAgKgKg");
	this.shape_1.setTransform(5.726,15.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2_1, new cjs.Rectangle(0,0.2,11.5,30.2), null);


(lib.Path_1_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDAD37").s().p("AATipIAJAHIgtFIIgLAEg");
	this.shape_1.setTransform(2.85,17.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1_1, new cjs.Rectangle(0,0,5.7,34.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgYiCIAKAKIAnD6IgIABg");
	this.shape.setTransform(2.475,13.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,5,26.1), null);


(lib.Path_1_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgPhTIAKAJIAVCdIgIABg");
	this.shape.setTransform(1.6,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_21, new cjs.Rectangle(0,0,3.2,16.8), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDAD37").s().p("AgmCDIAokOIAlgCIgCALIgZABIgoEOg");
	this.shape.setTransform(3.875,14.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,7.8,28.3), null);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDAD37").s().p("AhGBYIBmi1IAngEIgHAMIgXACIhlC1g");
	this.shape_2.setTransform(7.05,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,14.1,19.6), null);


(lib.CompoundPath_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AgcBTIAwiuIAJAJIAACkIgwAKgAgQBRIAjgHIABh6g");
	this.shape.setTransform(2.925,9.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_0, new cjs.Rectangle(0,0,5.9,18.4), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhPCvIgJgKQgVgXAFggIAijhQAGgiAbgXQAcgYAhgBQAiAAAWAXIAJALQAVAXgFAhIgiDgQgFAggcAYQgcAXghABIgDABQghAAgUgXgAgbiiQgcAYgFAhIgiDhQgFAdAQAVQAVARAdAAQAigBAbgYQAcgXAFghIAijfQAFgdgQgWQgTgSgfAAQgiAAgbAYg");
	this.shape.setTransform(10.5831,19.7516);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,21.2,39.5), null);


(lib.CompoundPath_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhhDJIB2mNIA9gMIAKAJIAGFzIgzAJIgKgJIABg8Ig1ALIgVBLIgzALgAAei8IhyGCIAmgJIAVhLIA/gMIAJAIIAAA8IApgHIgGlog");
	this.shape.setTransform(9.775,20.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_0, new cjs.Rectangle(0,0,19.6,41.9), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AglCNIgJgLQgIgJACgMIAijiQACgNALgJQAJgJANAAQANAAAIAJIAJAKQAIAJgCANIgiDhQgCANgLAJQgJAIgNABQgOAAgHgIgAADiAQgJAJgCAMIgjDjQgBAHADAIQAGADAJAAQANAAALgJQAJgJACgMIAjjiQABgIgDgHQgHgEgIAAQgNAAgLAJg");
	this.shape.setTransform(5.3675,14.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,10.8,29.8), null);


(lib.CompoundPath_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhrC8IA5l5QA8gFBYgDIAKALIgIAwIhhAFIgNBeIA7gDIAJAKIgHAvIhGAFIgRBxIBUgEIAKAKIgHAwQhKAFhKAGgAgpiyIg3FtQA+gFBLgFIAGglIhVAFIgJgLIATh8IBGgFIAFglIg6ADIgLgKIAQhoIBggFIAGgmQhFAChEAGg");
	this.shape.setTransform(10.75,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_10, new cjs.Rectangle(0,0,21.5,39.6), null);


(lib.CompoundPath_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AiYDJIA4l9IBNgLIAKAJIAGDGIBFjaIBNgHIAKAKIg5F5Ig0AGIgKgKIAdi7Ig5CyIgzAHIgJgKIgGiqIgeDSIg0AIgAhWirIg3FyIAqgGIAlkGIAJAJIAIDdIAqgGIBNjyIAKAKIgnD6IAqgFIA3luIhCAGIhND0IgKgKIgHjeg");
	this.shape.setTransform(15.25,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_9, new cjs.Rectangle(0,0,30.5,42.1), null);


(lib.CompoundPath_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhNDDIgJgIQgVgSAFgiIAijpQAEgjAcgeQAbgfAhgIQAigJAUATIAJAIQAVATgFAiIgHAxIgzAMIgKgIIAHgyQACgJgEgGQgFgDgJADQgMADgLALQgJALgCANIgiDrQgCAIAEAGQAHADAIgCQAMgEALgLQAJgMACgMIAMhSIgQAEIgIgIIAGgyIBNgTIAJAJIgUCMQgFAigbAeQgbAeghAJQgMADgJAAQgUAAgNgLgAAhjCQghAJgbAeQgbAegFAjIgiDpQgEAdAPASQAUANAegIQAggJAcgeQAbgeAFgiIATiCIhCARIgGAmIAPgEIAKAIIgOBdQgCANgKALQgJALgNAEQgNAEgHgIIgKgIQgHgGACgNIAhjrQADgNAKgLQAJgLAMgEQANgDAIAHIAJAIQAIAIgCAMIgFAnIAngKIAIgwQAEgegPgTQgNgJgRAAQgJAAgLADg");
	this.shape.setTransform(10.35,20.594);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_8, new cjs.Rectangle(0,0,20.8,41.2), null);


(lib.CompoundPath_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AgPDAIgJgKIgBi7Ig9DDIg1gBIgJgMIgFl0IA0ACIAJAKIABDOIA9jWIAzADIAKALIgEDNIBCjTIA0AFIAJALIh1FqgAgQgiIABDYIAqACIBylgIgngDIhMDzIgKgLIAFjuIgpgCIhHD1IgKgKIAAjvIgqgBIAEFqIAsABIBGjgg");
	this.shape.setTransform(15.4,19.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_7, new cjs.Rectangle(0,0,30.8,39.1), null);


(lib.CompoundPath_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhfCpIgJgNIA4lnQBMASBDATIAJAOIgHAuIhdgZIgOBaIA6APIAJANIgHAuIhEgSIgRBsIBTAWIAJANIgIAuQhMgUhEgPgAhdCeQBaAVArAMIAGgkIhTgVIgJgNIASh3IBFARIAGgjIg6gPIgKgNIAQhkIBdAZIAFgkQg7gRhJgSg");
	this.shape.setTransform(10.45,20.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_6, new cjs.Rectangle(0,0,20.9,40.9), null);


(lib.CompoundPath_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AAIDBIgJgNIAXiWIgygJIgZCgIgygJIgKgMIA4lqIAzAJIAIANIgVCQIAyAKIAXiaIAzALIAJANIg3FngAAXAUIAKANIgYCVIApAIIA2ldIgpgJIgXCbIg8gNIgKgMIAWiQIgngIIg3FgIAoAHIAZihIA8AMg");
	this.shape.setTransform(11.4,20.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_5, new cjs.Rectangle(0,0,22.8,40.7), null);


(lib.CompoundPath_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhIC9IgJgMIAvkzIgugFIgKgMIAIgwQBMAKBXAOIAJAMIgHAvIg4gJIgvE8gAhPiSIAuAGIAKAMIgwEzIApAEIAwk7IA4AJIAGglQhNgNhLgKg");
	this.shape.setTransform(9.05,19.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_4, new cjs.Rectangle(0,0,18.1,39.1), null);


(lib.CompoundPath_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhpDLIA4mBQA8gNBWgQIAJAJIgHAzIhgASIgNBfIA6gLIAKAJIgIAwIhFAOIgRB1IBUgRIAJAJIgHAyQhBAMhRASgAgoitIg2F2QBEgQBCgNIAGgnIhUARIgJgJIASh/IBGgOIAGgnIg7AMIgJgIIAPhrIBfgSIAGgoQhEAMhDAPg");
	this.shape.setTransform(10.625,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_3, new cjs.Rectangle(0,0,21.3,42.3), null);


(lib.CompoundPath_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhxDTIA4mEIAygNIAIAIIgUCbIAwgOIAYilIA0gMIAJAIIg4GBIgzAOIgIgJIAWigIgxANIgZCsIgyAOgAgwipIg2F5IAngLIAaisIA8gQIAJAIIgYChIApgLIA2l2IgoAKIgYCkIg8ARIgJgJIAViag");
	this.shape.setTransform(11.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_2, new cjs.Rectangle(0,0,22.8,43.8), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("AhQDQIAulIIgtAPIgJgIIAHgyQBDgYBdgcIAKAJIgIAzQgYAGgfAKIgvFSIgyARgAgXh8IguFJIAngOIAvlSIA3gQIAGgoQhOAWhIAZIgFAoIAtgPg");
	this.shape.setTransform(8.875,21.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(0,0,17.8,43.1), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("Ah5C+IA5l6IA4gEIAJAKIAcC9IAfjLIA0gCIAKAKIg5F2Ig4ADIgJgKIgci9IgfDNIg0AEgAg2iyIg3FuIAogDIAjjnIAKAKIAfDXIAwgDIA4lsIgpACIgjDmIgKgKIgfjXg");
	this.shape.setTransform(12.175,19.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(0,0,24.4,39.9), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2B31").s().p("Ah2DEIA5l8IA0gHIAJAKIgRBvIBHiBIA3gFIAJAKIhbCcIAjDdIg2AGIgJgJIgTiGIgTAiIgRB2Ig0AHgAg0ivIg3FxIApgGIASh1IAZguIAKAJIAUCRIAtgGIgijdIBViRIgoAEIhVCbIgJgJIAUiJg");
	this.shape.setTransform(11.85,20.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,23.7,41.1), null);


(lib.CTA2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAwIgFgEQgCgBgBgDIgBgGIABgGQABgDACgBIAFgEIAFgBIAFABIAFAEQADABAAADIACAGIgCAGQAAADgDABIgFAEIgFABgAgLAOIAAg+IAXAAIAAA+g");
	this.shape.setTransform(31.825,-239.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAvIgTg2IgSA2IgZAAIgchdIAaAAIAQA7IAUg7IATAAIAUA7IAQg7IAaAAIgcBdg");
	this.shape_1.setTransform(22.175,-239.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAuQgKgEgHgGQgHgIgEgIQgEgKAAgKQAAgIAEgLQADgHAIgJQAHgGAKgEQAJgEALAAQAMAAAJAEQAKAEAHAGQAIAJADAHQAEALAAAIQAAAKgEAKQgEAIgHAIQgHAGgKAEQgKAEgLAAQgKAAgKgEgAgJgYIgJAGQgEAEgCAFQgCAEAAAFQAAAGACAEQADAGADADQAFAEAEABQAEACAFAAQAGAAAEgCQAFgCAEgDQADgDADgGQACgEAAgGQAAgFgCgEQgCgFgEgEIgJgGIgKgBQgDAAgGABg");
	this.shape_2.setTransform(9.125,-239.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAvIgtg4IAAA4IgYAAIAAhdIAYAAIAtA4IAAg4IAYAAIAABdg");
	this.shape_3.setTransform(-2.45,-239.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAvIAAgtIgjgwIAeAAIARAZIARgZIAdAAIgjAwIAAAtg");
	this.shape_4.setTransform(-17.05,-239.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAvIgFgQIgiAAIgGAQIgbAAIAkhdIAaAAIAkBdgAgKAMIAVAAIgLgeg");
	this.shape_5.setTransform(-26.6,-239.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAvIAAhdIAZAAIAABJIAcAAIAAAUg");
	this.shape_6.setTransform(-34.65,-239.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIAmAAQAQAAAJAHQAIAKAAAOQAAAPgIAIQgKAIgPAAIgOAAIAAAfgAgLgDIAJAAQAMAAAAgMQAAgLgMAAIgJAAg");
	this.shape_7.setTransform(-42.275,-239.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E30B48").s().p("AmgCOQg1AAgmgmQgmglAAg2IAAgZQAAg1AmgmQAlgmA2AAINBAAQA1AAAmAmQAmAmAAA1IAAAZQAAA2gmAlQgmAmg1AAg");
	this.shape_8.setTransform(-6.175,-239.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-253.9,109.1,28.30000000000001);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AC7IlQgtAAgTgtIj1o7QgHgQgHABQgGAAAAAPIAAI7QAAAUgNAMQgMANgVAAIhVAAQgUAAgNgMQgMgMAAgUIAAvwQAAgUALgMQAMgMAWAAIBVAAQAWAAARAMQAQALAJAUID3I7QAIAQAGAAQAFAAAAgQIAAo6QAAgTANgNQANgNATABIBWAAQAVgBAMALQANAMAAAVIAAPxQAAARgOANQgOAOgSAAg");
	this.shape.setTransform(68.75,74.55);

	this.instance = new lib.Path();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AABItQhNgBg8gZQg/gZgjguQglgxgOg8QgOg7AAhoIAAq8QAAgRAMgOQAOgNATAAIBUAAQAVAAANAMQAMALAAAVIAALWQAABiAdArQAeArBCAAQBCAAAegqQAcgrAAhjIAArWQAAgTANgNQANgMAUAAIBSAAQAVAAANAOQANANAAATIAAK4QAABrgOA9QgOA9gmAtQhPBhiTAAIgHAAg");
	this.shape.setTransform(69.25,75.4031);

	this.instance = new lib.Path_2();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,87,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AjWIlQgOAAgQgQQgOgPAAgOIAAvvQAAgTAMgNQANgNATABIGrAAQAVAAANAMQAMANAAATIAABFQAAARgOANQgPANgRAAIj8AAQgRAAgNAPQgNAOAAARIAADGQAAARAOANQANANAQAAIDYAAQARAAAPAQQAOAQAAAQIAABBQAAAOgQAPQgPAOgPAAIjYAAQgQAAgOAOQgOAOgBARIAAGXQABAPgQAPQgPAPgPAAg");
	this.shape.setTransform(73.4,74.55);

	this.instance = new lib.Path_4_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.7,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AiQIZQhBgcgkgyQgkgwgOg8QgPg7AAhdIAAmNQAAhdAPg+QAQg9AigtQBQhpClAAQBQAABAAbQBBAcAlAyQAjAxAPA7QAPA8AABdIAAGNQAABdgPA9QgPA9gjAtQhUBqiiAAQhQAAhAgcgAholnQgdAuAAB2IAAGIQAAB2AcAtQAdAuBMAAQBKAAAdguQAeguAAh1IAAmIQAAh1gegvQgdgvhKAAQhLAAgdAvg");
	this.shape.setTransform(69.725,74.625);

	this.instance = new lib.Path_8_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,87,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("ACwIlQgZAAgOgMQgOgLgIgWIh4lpQgJgYgLgJQgNgKgaAAIgQAAQguAAAAArIAAFqQAAATgMAMQgNANgTAAIhYAAQgUAAgMgNQgLgMAAgTIAAvwQAAgRAOgOQANgNASAAIDoAAQCeAABTBQQBTBQAACZQAAC6h0BOQgVAOgFALQgGAMAGATICOGiQAGASgJANQgKAOgSAAgAhwl6QgOANAAASIAAD3QAAASAOANQANANATAAIATAAQBjAAApgmQAngmAAhdQAAhcgnglQgoglhkAAIgTAAQgTAAgNANg");
	this.shape.setTransform(70.995,74.55);

	this.instance = new lib.Path_6_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AjWIlQgOAAgPgQQgQgPABgOIAAvvQAAgTAMgNQANgNATABIGrAAQAUAAANAMQAOANAAATIAABFQAAARgPANQgPANgRAAIj8AAQgRAAgNAPQgNAOAAARIAADGQAAARAOANQANANAQAAIDXAAQASAAAPAQQAOAQAAAQIAABBQAAAOgQAPQgQAOgPAAIjXAAQgQAAgOAOQgPAOAAARIAAGXQAAAPgPAPQgPAPgQAAg");
	this.shape.setTransform(74.5,74.55);

	this.instance = new lib.Path_10_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AgrIkQgRABgNgMQgOgNAAgRIAAv0QAAgSAMgMQANgNATAAIBXAAQARAAANANQAOANAAAQIAAP1QAAAQgOANQgPAMgRAAg");
	this.shape.setTransform(70.025,76.5);

	this.instance = new lib.Path_22_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AkHG4QgggqgRg0QgNglAAgWQABgQAMgMQAKgLATgEIBAgTQAZgGAGAAQAOAAAIAIQAJAIAEATQAVBLAqAnQArAnA9AAQA5AAAjgjQAkgjAAg3QABg0gjgrQgigshihMIhyhXQhMg6gng9QgshHgBhVQABh3BThLQBThLCDAAQCVAABdBvQAfAmAUAtQAPAjAAARQAAAdgjALIhPAXQgNADgHAAQgOAAgJgIQgJgIgGgSQgrh3hfAAQgvAAghAfQghAfABAwQAAAtAbAoQAbAoA/AxIBNA8QCFBkAlAsQBMBYAAB0QgBB8hWBNQhWBNiLAAQi3AAheh9g");
	this.shape.setTransform(70.15,76.575);

	this.instance = new lib.Path_20_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,87,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AiQIZQhBgcgkgyQgkgwgOg7QgPg7AAheIAAmNQAAhdAPg+QAPg9AjgtQBQhpClAAQBQAABAAbQBBAcAlAyQAjAwAPA8QAPA9AABcIAAGNQAABegPA8QgPA9gjAtQhUBqiiAAQhQAAhAgcgAholnQgeAuAAB2IAAGJQAAB1AdAtQAdAvBMAAQBJAAAegvQAeguAAh0IAAmJQAAh1gegvQgeguhJAAQhLAAgdAug");
	this.shape.setTransform(70.375,76.575);

	this.instance = new lib.Path_18_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,87,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.7,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AC7IkQgsAAgUgsIj1o6QgHgRgGABQgGABAAAPIAAI6QAAATgNANQgNAMgUAAIhWAAQgUAAgMgLQgNgMAAgUIAAvwQAAgUALgMQAMgNAWAAIBWAAQAVAAARANQARAMAIASID3I9QAIAPAGAAQAGAAAAgPIAAo7QAAgTAMgMQANgOATAAIBWAAQAVAAAMAMQANALAAAUIAAPyQAAARgOANQgOANgSAAg");
	this.shape.setTransform(70.475,76.5);

	this.instance = new lib.Path_16_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.7,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AjZIkQgSAAgNgMQgOgMAAgTIAAvwQAAgTAMgMQANgOAUAAIBUAAQAVAAANANQAOAMAAAUIAANTQAAAUALALQAMANAUAAIEEAAQAtAAAAAtIAABEQAAATgNAMQgNAMgTAAg");
	this.shape.setTransform(75.925,76.5);

	this.instance = new lib.Path_14_1();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,87,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AgtIkQgTAAgNgMQgOgMAAgTIAAlTQAAgagDgTQgEgUgJgWIjfpFQgHgSAHgNQAIgPAVAAIBpAAQAUAAAQANQAPALAGATIB8F6QAHAVAIAAQAIAAAHgWIB/l5QAPgrAsAAIBkAAQAXAAAHANQAHALgIAVIjlJGQgQAoAAAvIAAFSQAAARgOAOQgPANgRAAg");
	this.shape.setTransform(66.0133,76.5);

	this.instance = new lib.Path_12_1();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,86.5,21.9);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80.025);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AimITQg+gjggg7Qgdg3gKg9QgKg+AAh0IAAktQgBiHAMg7QANg9AngwQAog0A+gaQA+gaBOAAQCVABBTBfQBMBYAACUQAAAVgMAMQgMAKgVABIhVAAQgVgBgMgNQgLgLgBgUQgEhVgigrQgjgtg9ABQhIAAgdAwQgdAxAAB4IAAFMQABCTAfA7QAfA6BLAAQBEAAAfgyQAegzAAhvQAAg0guAAIg1AAQgTAAgNgNQgLgNAAgTIAAgxQAAgVALgMQALgNAVAAIDmAAQARAAAPANQAPANAAASIAAHKQAAATgPANQgOALgSABIhXAAQgXAAgLgPQgLgOgCAAQgGAAgPAKQg3AkhNAAQhOgBhAgig");
	this.shape.setTransform(66.6,77.8);

	this.instance = new lib.Path_24_1();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,87,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AC7IlQgtgBgTgsIj1o6QgIgRgGABQgGAAAAAQIAAI6QAAATgNANQgNAMgUABIhWAAQgTgBgNgLQgMgMAAgUIAAvwQAAgUALgMQAMgNAVAAIBWAAQAVABASALQAQAMAJAUID3I8QAHAQAGgBQAGAAAAgPIAAo7QAAgTANgMQANgNATgBIBWAAQAVABAMAKQANAMAAAVIAAPxQAAARgOANQgOANgSABg");
	this.shape.setTransform(65.975,77.8);

	this.instance = new lib.Path_26_1();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,86.5,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AgrIlQgRAAgNgMQgOgNAAgRIAAvzQAAgTAMgNQANgLATgBIBXAAQARAAANANQAOANAAAQIAAP1QAAAQgOANQgPAMgRABg");
	this.shape.setTransform(71.925,77.8);

	this.instance = new lib.Path_28_1();
	this.instance.setTransform(69.65,158.1,1,1,0,0,0,87,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AjZIlQgSgBgNgMQgOgMAAgTIAAvwQAAgTAMgMQANgNAUgBIBUAAQAVABANALQAOAMAAAVIAANSQAAAUALAMQAMANAUAAIEEAAQAtAAAAAtIAABEQAAATgNAMQgNAMgTABg");
	this.shape.setTransform(74.475,77.8);

	this.instance = new lib.Path_30_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.7,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AkJIlQgQgBgPgOQgPgOAAgQIAAvvQAAgSAOgNQAOgNASgBIDaAAQCeABBWBHQBXBJAACEQgBBWghA4QgjA4hIAfQgKAEgDAEQgDADAAAGQABAFADACIAMAHQBVAbArBDQApA/AABcQAACRhaBTQhaBSieABgAh7BBQgMAMAAAVIAAD5QAAAtAtAAIAtAAQBUAAAtgoQAtgoAAhKQAAhUg2gyQg2gzhaABIgVAAQgVgBgMAMgAh6l5QgMAOgBAUIAADHQABAQAOAOQANAOARAAIAVAAQBOgBAxgqQAvgqAAhFQAAhGgrghQgpgihXAAIgYAAQgUAAgMAOg");
	this.shape.setTransform(72.3,77.8);

	this.instance = new lib.Path_32_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,87,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.7,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AEkIlQgUgBgNgMQgMgNAAgTIAArAQAAgKgFAAQgEAAgCAKIisLAQgFATgQANQgQAMgTABIgPAAQgTgBgRgMQgQgMgFgTIirrDQgCgLgEAAQgEAAgBALIAALCQABASgOAOQgPAMgSABIhMAAQgSgBgNgNQgOgNAAgSIAAvwQAAgZAKgJQAKgKAZAAICnAAQAtAAAKAtICJI2QADALAGAAQAHgBADgKICKo2QAGgYANgKQANgLAZAAIChAAQATAAAPANQAOAMAAAUIAAPwQAAATgPANQgPALgSABg");
	this.shape.setTransform(70.25,77.8);

	this.instance = new lib.Path_34_1();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:null,x:0,y:0}).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("ADUIlQgXgBgPgMQgNgMgDgUIggiVQgFgVgPgMQgPgNgVAAIiWAAQgSAAgRAPQgPAPgDAQIgeCWQgFAUgOAMQgPALgUABIhTAAQgTgBgKgNQgKgNAEgSIDKvyQAIgqAtAAICWAAQAuAAAKAtIDSPvQADAUgLANQgLAMgVAAgAgNkgIhLGSQgFASANAMQALAKAVgBIBZAAQAtAAgGgrIhNmPQgDgKgFABIgBgBQgGAAgBALg");
	this.shape.setTransform(70.2066,77.8);

	this.instance = new lib.Path_36();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,87,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_1 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_2 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_3 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_4 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_5 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_6 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_7 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_8 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");
	var mask_graphics_9 = new cjs.Graphics().p("Au1RWMAAAgirIdrAAMAAAAirg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:63.075,y:285.125}).wait(1).to({graphics:mask_graphics_1,x:63.075,y:282.525}).wait(1).to({graphics:mask_graphics_2,x:63.075,y:274.675}).wait(1).to({graphics:mask_graphics_3,x:63.075,y:261.575}).wait(1).to({graphics:mask_graphics_4,x:63.075,y:243.225}).wait(1).to({graphics:mask_graphics_5,x:63.075,y:219.675}).wait(1).to({graphics:mask_graphics_6,x:63.075,y:190.875}).wait(1).to({graphics:mask_graphics_7,x:63.075,y:156.825}).wait(1).to({graphics:mask_graphics_8,x:63.075,y:117.575}).wait(1).to({graphics:mask_graphics_9,x:63.075,y:73.075}).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("AimITQg+gjggg7Qgdg3gKg9QgKg+AAh0IAAktQAAiHAMg7QAMg9AngwQApgzA+gbQA9gaBOAAQCWABBSBfQBMBYAACUQAAAVgMAMQgMAKgVABIhWAAQgUgBgMgNQgLgLgBgUQgEhVgigrQgigtg+ABQhIAAgdAwQgcAxAAB4IAAFMQAACTAfA7QAfA6BLAAQBEAAAfgyQAegzAAhvQAAg0guAAIg1AAQgUAAgMgNQgLgNAAgTIAAgxQAAgVAKgMQAMgNAVAAIDmAAQARAAAPANQAPAOAAARIAAHKQAAATgPANQgPALgRABIhWAAQgYAAgLgPQgLgOgCAAQgGAAgPAKQg3AkhNAAQhPgBg/gig");
	this.shape.setTransform(69.225,77.8);

	this.instance = new lib.Path_38();
	this.instance.setTransform(69.7,158.1,1,1,0,0,0,86.5,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCD4B").s().p("Aq4MgIAA4/IVxAAIAAY/g");
	this.shape_1.setTransform(69.675,80);

	var maskedShapeInstanceList = [this.shape,this.instance,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,176.1,186);


(lib.KnowtheGameGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE974").s().p("Agti3QBFgHBPgDIgIAxIhfAGIgQBpIBGgFIgHAwIhHAFIgSB9IBggHIgIAxQhKAEhKAIgAgmixIg3FrQBEgHBBgEIAFgjIhgAHIAViLIBGgFIAGgiIhHAFIASh3QAxgEAvgCIAFgiQg7AChJAGg");
	this.shape.setTransform(195.45,130.45,2,2);

	this.instance = new lib.Path_40();
	this.instance.setTransform(195.4,130.4,2,2,0,0,0,9.4,18.6);
	this.instance.alpha = 0.3008;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_12_1();
	this.instance_1.setTransform(194.7,160.1,2,2,0,0,0,4.8,0.8);
	this.instance_1.alpha = 0.3008;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_2_12_1();
	this.instance_2.setTransform(197.5,124.9,2,2,0,0,0,3.6,0.4);
	this.instance_2.alpha = 0.8008;

	this.instance_3 = new lib.Path_3_12();
	this.instance_3.setTransform(195.4,130.4,2,2,0,0,0,9.4,18.6);
	this.instance_3.alpha = 0.8008;

	this.instance_4 = new lib.Path_4_10();
	this.instance_4.setTransform(194.7,159.5,2,2,0,0,0,4.8,0.5);
	this.instance_4.alpha = 0.8008;

	this.instance_5 = new lib.Path_5_10();
	this.instance_5.setTransform(197.5,125.7,2,2,0,0,0,3.6,0.8);
	this.instance_5.alpha = 0.3008;
	this.instance_5.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AgmiwQBJgHA7gCIgFAiQgvADgxADIgSB3IBHgEIgGAiIhGAEIgVCMIBggHIgFAjQhBADhEAHg");
	this.shape_1.setTransform(195.45,130.4,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B77224").s().p("AgTAHIAIgvIAfAiIgIAvg");
	this.shape_2.setTransform(218.45,100,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B77224").s().p("AgTAHIAIgvIAfAhIgIAxg");
	this.shape_3.setTransform(208.6,165.3,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B77224").s().p("AgSAIIAHgxIAeAiIgHAxg");
	this.shape_4.setTransform(208.7,130.9,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B77224").s().p("AgHg0IAfAiIgLBEIgkACg");
	this.shape_5.setTransform(196.75,113.1,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B77224").s().p("AgGg+IAfAhIgNBYIgkADg");
	this.shape_6.setTransform(191.85,145.9,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9B531E").s().p("Ag/gNIBfgGIAgAhIhgAGg");
	this.shape_7.setTransform(208.05,105.4,2,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B531E").s().p("AhZgJQBJgIBLgEIAfAhQhKAEhJAGIgggfg");
	this.shape_8.setTransform(192.95,171.25,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B531E").s().p("AgygNIBGgFIAfAhIhGAEg");
	this.shape_9.setTransform(200.8,136.2,2,2);

	this.instance_6 = new lib.CompoundPath_1_10();
	this.instance_6.setTransform(202.9,138.1,2,2,0,0,0,10.8,19.8);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Path_15_4();
	this.instance_7.setTransform(207.5,142.9,2,2,0,0,0,13.1,22.2);
	this.instance_7.alpha = 0.3516;
	this.instance_7.compositeOperation = "multiply";

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE974").s().p("AhbivIBNgLIAIDpIBNj1QAYgDA1gFIg5F6Ig0AGIAokGIhODzIgzAIIgHjoIgmEHIg0AJgAhUioIg2FvIAlgHIAvlIIALEnIAogFIBkk2IgyFGIAmgEIA2lsIg/AHIhYETIgJkGg");
	this.shape_10.setTransform(145.65,135.3,2,2);

	this.instance_8 = new lib.Path_39();
	this.instance_8.setTransform(129.6,137.3,2,2,0,0,0,5.9,18.9);
	this.instance_8.alpha = 0.3008;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_1_11_1();
	this.instance_9.setTransform(158.2,124.7,2,2,0,0,0,7.6,14.6);
	this.instance_9.alpha = 0.3008;
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Path_2_11_1();
	this.instance_10.setTransform(129.6,137.3,2,2,0,0,0,5.9,18.9);
	this.instance_10.alpha = 0.8008;

	this.instance_11 = new lib.Path_3_11();
	this.instance_11.setTransform(158.2,124.1,2,2,0,0,0,7.6,14.3);
	this.instance_11.alpha = 0.8008;

	this.instance_12 = new lib.Path_4_9();
	this.instance_12.setTransform(136.1,137.6,2,2,0,0,0,0.7,14.8);
	this.instance_12.alpha = 0.8008;

	this.instance_13 = new lib.Path_5_9();
	this.instance_13.setTransform(160.3,136.7,2,2,0,0,0,2.6,16.4);
	this.instance_13.alpha = 0.8008;

	this.instance_14 = new lib.Path_6_3();
	this.instance_14.setTransform(161.1,136.7,2,2,0,0,0,3,16.4);
	this.instance_14.alpha = 0.3008;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Path_7_2();
	this.instance_15.setTransform(136.7,137.6,2,2,0,0,0,1,14.8);
	this.instance_15.alpha = 0.3008;
	this.instance_15.compositeOperation = "multiply";

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9F9F9").s().p("AhUioIA/gKIAJEGIBYkTIA/gHIg2FsIgmAEIAylGIhkE2IgoAFIgLkmIgvFHIglAHg");
	this.shape_11.setTransform(145.65,135.25,2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B77224").s().p("AgmBqIBNjzIgmD4IgIAbg");
	this.shape_12.setTransform(153.6,145.95,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B77224").s().p("AgrCtIA4l6IAfAhIg3F6g");
	this.shape_13.setTransform(172.65,135,2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B77224").s().p("AgRh0IAfAgIAEByIgbBXg");
	this.shape_14.setTransform(146.15,121.2,2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B77224").s().p("AgVB0IAlkGIAGDNIgNBYg");
	this.shape_15.setTransform(130.9,151.6,2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9B531E").s().p("AgogLIAygHIAfAeIgyAHg");
	this.shape_16.setTransform(143.8,171.05,2,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B531E").s().p("AgpgMIAzgGIAgAfIg0AGg");
	this.shape_17.setTransform(161.8,173.45,2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9B531E").s().p("AgpgKIAzgIIAgAdIgzAIg");
	this.shape_18.setTransform(124.45,178.8,2,2);

	this.instance_16 = new lib.CompoundPath_1_9();
	this.instance_16.setTransform(152.8,142.4,2,2,0,0,0,15.2,21);
	this.instance_16.alpha = 0.3984;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Path_16_1_1();
	this.instance_17.setTransform(157.6,147,2,2,0,0,0,17.6,23.3);
	this.instance_17.alpha = 0.3516;
	this.instance_17.compositeOperation = "multiply";

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE974").s().p("AAhhzIgBDZIhAAOgAgWBrIAvgKIABilg");
	this.shape_19.setTransform(95.65,136.3,2,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE974").s().p("AAZjBIA+gMIAGFzIgzAKIAAhHIg+ANIgVBMIgzAMQAtibBIj0gAAei7IhwF/IAkgIIAVhLIBLgRIgBBHIAkgHIgFlkg");
	this.shape_20.setTransform(92.25,144.35,2,2);

	this.instance_18 = new lib.Path_38_2();
	this.instance_18.setTransform(103.1,170.8,2,2,0,0,0,0.5,3.6);
	this.instance_18.alpha = 0.3008;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Path_1_10_1();
	this.instance_19.setTransform(92,144.3,2,2,0,0,0,8.2,19.7);
	this.instance_19.alpha = 0.3008;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Path_2_10_1();
	this.instance_20.setTransform(95.9,136.7,2,2,0,0,0,3.4,11.8);
	this.instance_20.alpha = 0.8008;

	this.instance_21 = new lib.Path_3_10();
	this.instance_21.setTransform(102.5,170.8,2,2,0,0,0,0.2,3.6);
	this.instance_21.alpha = 0.8008;

	this.instance_22 = new lib.Path_4_8();
	this.instance_22.setTransform(92,144.3,2,2,0,0,0,8.2,19.7);
	this.instance_22.alpha = 0.8008;

	this.instance_23 = new lib.Path_5_8();
	this.instance_23.setTransform(96.7,137.3,2,2,0,0,0,3.8,12.1);
	this.instance_23.alpha = 0.3008;
	this.instance_23.compositeOperation = "multiply";

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9F9F9").s().p("AAdi6IAygKIAFFlIgkAHIABhHIhLAQIgVBLIgkAJgAgQBMIBAgNIABjag");
	this.shape_21.setTransform(92.45,144.25,2,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B77224").s().p("AgMCrIgGlzIAfAeIAGFzg");
	this.shape_22.setTransform(113.35,143.35,2,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B77224").s().p("AAYhXIAACOIgHAYIgoAJg");
	this.shape_23.setTransform(95.9,140.15,2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B77224").s().p("AgZAYIAVhLIAeAdIgVBKg");
	this.shape_24.setTransform(89.1,178.4,2,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9B531E").s().p("AgogJIAygKIAfAdIgyAKg");
	this.shape_25.setTransform(108.85,181.45,2,2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9B531E").s().p("AgegHIA+gNIAAAjIggAGg");
	this.shape_26.setTransform(94.4,169.6,2,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9B531E").s().p("AgogHIAygMIAfAbIgyAMg");
	this.shape_27.setTransform(81.9,187.1,2,2);

	this.instance_24 = new lib.CompoundPath_3_0();
	this.instance_24.setTransform(99.5,150.9,2,2,0,0,0,9.8,20.9);
	this.instance_24.alpha = 0.3984;
	this.instance_24.compositeOperation = "multiply";

	this.instance_25 = new lib.CompoundPath_4_0();
	this.instance_25.setTransform(103,146.9,2,2,0,0,0,2.9,9.2);
	this.instance_25.alpha = 0.3984;
	this.instance_25.compositeOperation = "multiply";

	this.instance_26 = new lib.Path_12_2_1();
	this.instance_26.setTransform(104.3,155.3,2,2,0,0,0,12.2,23.1);
	this.instance_26.alpha = 0.3516;
	this.instance_26.compositeOperation = "multiply";

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE974").s().p("AhSC/QgUgRAFgiIAhjpQAFgjAcgfQAbgfAggIQAjgJAUASQAUASgFAjIgHAxIgzAMIAHgyQACgMgHgHQgIgHgNADQgMAEgKALQgKALgCANIgiDrQgBANAHAHQAIAHAMgEQANgEAJgLQALgMABgMIAOhdIgaAHIAHgyIBNgTIgVCMQgFAigbAfQgbAeghAJQgMADgKAAQgSAAgOgLgAAbi/QgdAIgZAcQgZAcgEAgIgiDpQgEAeASARQATAPAegIQAegIAZgcQAZgcAEgfIAUiFIg/AQIgFAiIAagGIgOBkQgCAQgNAOQgMAOgQAEQgPAFgKgJQgJgIACgQIAijrQACgQANgOQAMgOAPgEQAQgEAJAIQAKAJgCAPIgHArIAlgJIAGgpQAEgggSgQQgNgMgSAAQgJAAgKADg");
	this.shape_28.setTransform(55.2827,153.0897,2,2);

	this.instance_27 = new lib.Path_37();
	this.instance_27.setTransform(54.2,152.4,2,2,0,0,0,8.6,19.1);
	this.instance_27.alpha = 0.3008;
	this.instance_27.compositeOperation = "multiply";

	this.instance_28 = new lib.Path_1_9_1();
	this.instance_28.setTransform(45.5,183.3,2,2);
	this.instance_28.alpha = 0.3008;
	this.instance_28.compositeOperation = "multiply";

	this.instance_29 = new lib.Path_2_9_1();
	this.instance_29.setTransform(54.8,153,2,2,0,0,0,8.9,19.4);
	this.instance_29.alpha = 0.8008;

	this.instance_30 = new lib.Path_3_9();
	this.instance_30.setTransform(72.8,119.6,2,2);
	this.instance_30.alpha = 0.8008;

	this.instance_31 = new lib.Path_4_7();
	this.instance_31.setTransform(73.5,122.2,2,2);
	this.instance_31.alpha = 0.8008;

	this.instance_32 = new lib.Path_5_7();
	this.instance_32.setTransform(43.3,191.7,2,2);
	this.instance_32.alpha = 0.8008;

	this.instance_33 = new lib.Path_6_2_1();
	this.instance_33.setTransform(73.2,120.8,2,2);
	this.instance_33.alpha = 0.8008;

	this.instance_34 = new lib.Path_7_1();
	this.instance_34.setTransform(73.5,123.8,2,2);
	this.instance_34.alpha = 0.8008;

	this.instance_35 = new lib.Path_8_0();
	this.instance_35.setTransform(44.8,182.3,2,2);
	this.instance_35.alpha = 0.8008;

	this.instance_36 = new lib.Path_9_0();
	this.instance_36.setTransform(44.2,178.7,2,2);
	this.instance_36.alpha = 0.8008;

	this.instance_37 = new lib.Path_10_2_1();
	this.instance_37.setTransform(44.2,179.6,2,2);
	this.instance_37.alpha = 0.8008;

	this.instance_38 = new lib.Path_11_0();
	this.instance_38.setTransform(44.4,181.3,2,2);
	this.instance_38.alpha = 0.8008;

	this.instance_39 = new lib.Path_12_1_1();
	this.instance_39.setTransform(65.9,129.3,2,2,0,0,0,0.6,3.3);
	this.instance_39.alpha = 0.8008;

	this.instance_40 = new lib.Path_13_2();
	this.instance_40.setTransform(44.3,180.7,2,2);
	this.instance_40.alpha = 0.8008;

	this.instance_41 = new lib.Path_14_1_1();
	this.instance_41.setTransform(47.6,191.8,2,2);
	this.instance_41.alpha = 0.8008;

	this.instance_42 = new lib.Path_15_3();
	this.instance_42.setTransform(63.8,150.8,2,2,0,0,0,3.4,2.6);
	this.instance_42.alpha = 0.8008;

	this.instance_43 = new lib.Path_16_0();
	this.instance_43.setTransform(46,192,2,2);
	this.instance_43.alpha = 0.8008;

	this.instance_44 = new lib.Path_17_0();
	this.instance_44.setTransform(44.6,191.9,2,2);
	this.instance_44.alpha = 0.8008;

	this.instance_45 = new lib.Path_18_0();
	this.instance_45.setTransform(45.5,183.3,2,2);
	this.instance_45.alpha = 0.8008;

	this.instance_46 = new lib.Path_19_0();
	this.instance_46.setTransform(54.5,169.8,2,2,0,0,0,4.4,7.6);
	this.instance_46.alpha = 0.8008;

	this.instance_47 = new lib.Path_20_0();
	this.instance_47.setTransform(44.6,181.8,2,2);
	this.instance_47.alpha = 0.8008;

	this.instance_48 = new lib.Path_21_0();
	this.instance_48.setTransform(45.1,182.9,2,2);
	this.instance_48.alpha = 0.8008;

	this.instance_49 = new lib.Path_22_0();
	this.instance_49.setTransform(55.1,170.4,2,2,0,0,0,4.7,7.9);
	this.instance_49.alpha = 0.3008;
	this.instance_49.compositeOperation = "multiply";

	this.instance_50 = new lib.Path_23_0();
	this.instance_50.setTransform(63.8,150.8,2,2,0,0,0,3.4,2.6);
	this.instance_50.alpha = 0.3008;
	this.instance_50.compositeOperation = "multiply";

	this.instance_51 = new lib.Path_24_0();
	this.instance_51.setTransform(66.5,129.5,2,2,0,0,0,0.9,3.4);
	this.instance_51.alpha = 0.3008;
	this.instance_51.compositeOperation = "multiply";

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9F9F9").s().p("AhMC5QgSgRAEgeIAijpQAEggAZgcQAZgcAdgIQAfgIATARQASAQgEAgIgGApIglAJIAHgrQACgPgKgJQgJgIgQAEQgPAEgMAOQgNAOgCAQIgiDrQgCAQAJAIQAKAJAPgFQAQgEAMgOQANgOACgQIAOhkIgaAGIAFgiIA/gQIgUCFQgEAfgZAcQgZAcgeAIQgKADgJAAQgSAAgMgKg");
	this.shape_29.setTransform(55.25,153.089,2,2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B77224").s().p("AgQAkIAIgwQAEgigSgRIAcAbQAVASgFAiIgHAwg");
	this.shape_30.setTransform(76.7142,128.2,2,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B77224").s().p("AgZA5IAUiNIAfAcIgUCNg");
	this.shape_31.setTransform(73.3,160.75,2,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B77224").s().p("AgZB+QgIgGACgOIAhjrIAfAcIgIA3IgCAAIgHAyIACgBIgSB8IgFACIgJABQgHAAgEgEg");
	this.shape_32.setTransform(52.175,157.0955,2,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9B531E").s().p("Ag5A4IgfgbQAVARAhgJQAigKAagdQAbgeAFgiIAfAcQgFAigbAdQgbAeghAJQgMADgJAAQgUAAgNgLg");
	this.shape_33.setTransform(56.55,185.5557,2,2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9B531E").s().p("AgogHIAxgMIAgAbIgyAMg");
	this.shape_34.setTransform(71.5,139.45,2,2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9B531E").s().p("AgeAGQACgMAKgLQALgLALgEQANgDAIAHQAHAHgCAMIgBAHQgLAEgIAKQgIALgCALg");
	this.shape_35.setTransform(58.6421,129.8333,2,2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9B531E").s().p("AgMgFIAZgHIgEAZg");
	this.shape_36.setTransform(58,159.05,2,2);

	this.instance_52 = new lib.CompoundPath_1_8();
	this.instance_52.setTransform(62.3,159.4,2,2,0,0,0,10.3,20.6);
	this.instance_52.alpha = 0.3984;
	this.instance_52.compositeOperation = "multiply";

	this.instance_53 = new lib.Path_33_0();
	this.instance_53.setTransform(67.1,163.6,2,2,0,0,0,12.7,22.7);
	this.instance_53.alpha = 0.3516;
	this.instance_53.compositeOperation = "multiply";

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFE974").s().p("AgUC7IgBjkIhGDhIg0gBIgFlzIAzAAIABD6IBHj4IAzACIgFD5IBNj0IAzAEIh1FsgAgMC0IAmABIBxleIgkgCIhZEbIAEkhIglgBIhUEeIgBkgIglgBIAFFmIAoAAIBSkFg");
	this.shape_37.setTransform(281.55,39.8,2,2);

	this.instance_54 = new lib.Path_36_2();
	this.instance_54.setTransform(256.8,39.2,2,2,0,0,0,1.8,17.9);
	this.instance_54.alpha = 0.3008;
	this.instance_54.compositeOperation = "multiply";

	this.instance_55 = new lib.Path_1_8_1();
	this.instance_55.setTransform(279.8,49.2,2,2,0,0,0,0.6,13.2);
	this.instance_55.alpha = 0.3008;
	this.instance_55.compositeOperation = "multiply";

	this.instance_56 = new lib.Path_2_8_1();
	this.instance_56.setTransform(279,49.2,2,2,0,0,0,0.2,13.2);
	this.instance_56.alpha = 0.8008;

	this.instance_57 = new lib.Path_3_8();
	this.instance_57.setTransform(256.8,39.2,2,2,0,0,0,1.8,17.9);
	this.instance_57.alpha = 0.8008;

	this.instance_58 = new lib.Path_4_6();
	this.instance_58.setTransform(296.8,34.1,2,2,0,0,0,6.2,14.4);
	this.instance_58.alpha = 0.8008;

	this.instance_59 = new lib.Path_5_6();
	this.instance_59.setTransform(273,33.2,2,2,0,0,0,6.1,14.6);
	this.instance_59.alpha = 0.8008;

	this.instance_60 = new lib.Path_6_1_1();
	this.instance_60.setTransform(273,33.8,2,2,0,0,0,6.1,14.9);
	this.instance_60.alpha = 0.3008;
	this.instance_60.compositeOperation = "multiply";

	this.instance_61 = new lib.Path_7_0();
	this.instance_61.setTransform(296.8,34.9,2,2,0,0,0,6.2,14.8);
	this.instance_61.alpha = 0.3008;
	this.instance_61.compositeOperation = "multiply";

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F9F9F9").s().p("AgLC0IgCkIIhSEFIgoAAIgElmIAkABIABEhIBUkfIAmACIgFEhIBZkcIAkADIhwFeIgngCg");
	this.shape_38.setTransform(281.3,39.75,2,2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B77224").s().p("AhJCkIB0lsIAfAnIh0Fqg");
	this.shape_39.setTransform(302.8,44.8,2,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B77224").s().p("AgiBfIBFjhIABCHIgnB+g");
	this.shape_40.setTransform(270.2,57.7,2,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B77224").s().p("AgNh8IAfAlIgCBlIghBvg");
	this.shape_41.setTransform(289.45,27.9,2,2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B77224").s().p("AgPh8IAfAlIAABnIgeBtg");
	this.shape_42.setTransform(265.2,27.1,2,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9B531E").s().p("AgKARIgfgjIAzABIAgAjg");
	this.shape_43.setTransform(261.1,80.2,2,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9B531E").s().p("AgKARIgfgkIA0ADIAfAkg");
	this.shape_44.setTransform(285.8,81.05,2,2);

	this.instance_62 = new lib.CompoundPath_1_7();
	this.instance_62.setTransform(288.8,48.3,2,2,0,0,0,15.4,19.6);
	this.instance_62.alpha = 0.3984;
	this.instance_62.compositeOperation = "multiply";

	this.instance_63 = new lib.Path_15_2();
	this.instance_63.setTransform(293.6,53.9,2,2,0,0,0,17.8,22.4);
	this.instance_63.alpha = 0.3516;
	this.instance_63.compositeOperation = "multiply";

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFE974").s().p("AhjCjIA3lnQBGAQBKAUIgHAvIhdgZIgQBkIBFASIgIAtIhEgRIgTB3IBeAXIgHAvQhLgThFgPgAhbCeQBHAPA7APIAFghQgugMgwgKIAViFIBEARIAGggQgsgMgZgFIARhyQAwALAuANIAFghQhJgTg4gOg");
	this.shape_45.setTransform(422.5,59.95,2,2);

	this.instance_64 = new lib.Path_35();
	this.instance_64.setTransform(422.5,57,2,2,0,0,0,9.2,17.4);
	this.instance_64.alpha = 0.3008;
	this.instance_64.compositeOperation = "multiply";

	this.instance_65 = new lib.Path_1_7_1();
	this.instance_65.setTransform(421.8,89.9,2,2,0,0,0,4.7,1.7);
	this.instance_65.alpha = 0.3008;
	this.instance_65.compositeOperation = "multiply";

	this.instance_66 = new lib.Path_2_7_1();
	this.instance_66.setTransform(424.5,55.3,2,2,0,0,0,3.5,1);
	this.instance_66.alpha = 0.8008;

	this.instance_67 = new lib.Path_3_7();
	this.instance_67.setTransform(422.5,57,2,2,0,0,0,9.2,17.4);
	this.instance_67.alpha = 0.8008;

	this.instance_68 = new lib.Path_4_5();
	this.instance_68.setTransform(421.8,89.1,2,2,0,0,0,4.7,1.3);
	this.instance_68.alpha = 0.8008;

	this.instance_69 = new lib.Path_5_5();
	this.instance_69.setTransform(424.5,56.1,2,2,0,0,0,3.5,1.4);
	this.instance_69.alpha = 0.3008;
	this.instance_69.compositeOperation = "multiply";

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9F9F9").s().p("AhbCeIA2lZQA4ANBJATIgFAhQgugMgwgMIgRByQAZAFAsAMIgGAgIhEgRIgVCFQAwALAuAMIgFAhQg7gQhHgPg");
	this.shape_46.setTransform(422.5,59.9,2,2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B77224").s().p("AgSABIAHguIAeAsIgHAug");
	this.shape_47.setTransform(444.85,36.8,2,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B77224").s().p("AgSACIAHguIAeAsIgIAtg");
	this.shape_48.setTransform(435.3,99.05,2,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B77224").s().p("AgSABIAHgtIAeArIgHAug");
	this.shape_49.setTransform(435.4,64.7,2,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B77224").s().p("AgWAtIAPhjIAeAsIgKBAg");
	this.shape_50.setTransform(423.8,43.1,2,2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B77224").s().p("AgYA3IATh2IAeArIgNBUg");
	this.shape_51.setTransform(418.95,74.35,2,2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9B531E").s().p("AgfAJIgegqIBdAYIAfArIhegZg");
	this.shape_52.setTransform(434.7,39.05,2,2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9B531E").s().p("Ag4AEIgfgqQBGAPBKATIAfArQhVgWg7gNg");
	this.shape_53.setTransform(420.05,100.35,2,2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9B531E").s().p("AgSANIgfgqIBEARIAfAqg");
	this.shape_54.setTransform(427.75,67.65,2,2);

	this.instance_70 = new lib.CompoundPath_1_6();
	this.instance_70.setTransform(429.7,69.8,2,2,0,0,0,10.5,20.4);
	this.instance_70.alpha = 0.3984;
	this.instance_70.compositeOperation = "multiply";

	this.instance_71 = new lib.Path_15_1();
	this.instance_71.setTransform(434.3,76.4,2,2,0,0,0,12.8,23.7);
	this.instance_71.alpha = 0.3516;
	this.instance_71.compositeOperation = "multiply";

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFE974").s().p("AADC7IAZihIg9gLIgYChIg0gIIA5lrIAzAJIgYCbIA8ALIAYiaIAzAKIg4FogAAkAVIgZCgIAlAHIA1laIgkgIIgYCaIhLgOIAYibIgkgGIg2FdIAkAGIAZihg");
	this.shape_55.setTransform(383.15,51.55,2,2);

	this.instance_72 = new lib.Path_34_3();
	this.instance_72.setTransform(388.8,71.9,2,2,0,0,0,1.7,8.1);
	this.instance_72.alpha = 0.3008;
	this.instance_72.compositeOperation = "multiply";

	this.instance_73 = new lib.Path_1_6_1();
	this.instance_73.setTransform(371.9,49.2,2,2,0,0,0,4.5,17.6);
	this.instance_73.alpha = 0.3008;
	this.instance_73.compositeOperation = "multiply";

	this.instance_74 = new lib.Path_2_6_1();
	this.instance_74.setTransform(388.2,71.9,2,2,0,0,0,1.4,8.1);
	this.instance_74.alpha = 0.8008;

	this.instance_75 = new lib.Path_3_6();
	this.instance_75.setTransform(389.8,34,2,2,0,0,0,6.8,7.9);
	this.instance_75.alpha = 0.8008;

	this.instance_76 = new lib.Path_4_4();
	this.instance_76.setTransform(371.9,49,2,2,0,0,0,4.5,17.5);
	this.instance_76.alpha = 0.8008;

	this.instance_77 = new lib.Path_5_4();
	this.instance_77.setTransform(389.8,34.8,2,2,0,0,0,6.8,8.3);
	this.instance_77.alpha = 0.3008;
	this.instance_77.compositeOperation = "multiply";

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F9F9F9").s().p("AALC1IAZigIhLgPIgZChIgkgGIA2lcIAkAGIgYCbIBLAOIAYiaIAkAIIg1Fag");
	this.shape_56.setTransform(383.15,51.6,2,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B77224").s().p("AgbA8IAYigIAfApIgZCgg");
	this.shape_57.setTransform(377.1,74.75,2,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B77224").s().p("AgqCgIA3loIAeAqIg2Fng");
	this.shape_58.setTransform(402.6,58.9,2,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B77224").s().p("AgaBKIAXiaIAfAqIgTB3g");
	this.shape_59.setTransform(383.4,30.25,2,2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9B531E").s().p("AgJAQIgfgoIAyAJIAfAog");
	this.shape_60.setTransform(369.45,90,2,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9B531E").s().p("AgJAQIgfgpIAyAKIAfApg");
	this.shape_61.setTransform(392,94.05,2,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9B531E").s().p("AABASIgfgoIA9ALIgGAig");
	this.shape_62.setTransform(382.55,59.15,2,2);

	this.instance_78 = new lib.CompoundPath_1_5();
	this.instance_78.setTransform(390.3,61.1,2,2,0,0,0,11.4,20.3);
	this.instance_78.alpha = 0.3984;
	this.instance_78.compositeOperation = "multiply";

	this.instance_79 = new lib.Path_13_1();
	this.instance_79.setTransform(394.9,67.5,2,2,0,0,0,13.7,23.5);
	this.instance_79.alpha = 0.3516;
	this.instance_79.compositeOperation = "multiply";

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFE974").s().p("AhNC3IAxk9Ig5gGIAIgwQBLAHBYAOIgIAwIg4gIIgvE9gAhNiTIA5AHIgwE9IAkAFIAwk9IA5AIIAEghQhGgLhOgKg");
	this.shape_63.setTransform(347.2,44.6,2,2);

	this.instance_80 = new lib.Path_32_3();
	this.instance_80.setTransform(347.3,11.9,2,2,0,0,0,7.8,1.8);
	this.instance_80.alpha = 0.3008;
	this.instance_80.compositeOperation = "multiply";

	this.instance_81 = new lib.Path_1_5_1();
	this.instance_81.setTransform(339.1,48.4,2,2,0,0,0,2.9,16);
	this.instance_81.alpha = 0.3008;
	this.instance_81.compositeOperation = "multiply";

	this.instance_82 = new lib.Path_2_5_1();
	this.instance_82.setTransform(347.3,11.7,2,2,0,0,0,7.8,1.7);
	this.instance_82.alpha = 0.8008;

	this.instance_83 = new lib.Path_3_5();
	this.instance_83.setTransform(338.5,48.2,2,2,0,0,0,2.6,15.9);
	this.instance_83.alpha = 0.8008;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F9F9F9").s().p("AhECxIAwk9Ig5gHIAGgiQBOAKBGALIgEAhIg5gIIgwE9g");
	this.shape_64.setTransform(347.2,44.6,2,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B77224").s().p("AgnCLIAwk8IAfAnIgvE9g");
	this.shape_65.setTransform(349.9,54.7,2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B77224").s().p("AgSADIAHguIAeApIgHAug");
	this.shape_66.setTransform(366.75,19.95,2,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9B531E").s().p("AgJAQIgggmIAzAGIAgAng");
	this.shape_67.setTransform(339.9,85.85,2,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9B531E").s().p("AgMAPIgfgmIA3AIIAgAng");
	this.shape_68.setTransform(360.45,23.9,2,2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9B531E").s().p("AADASIgegmIA4AHIgGAig");
	this.shape_69.setTransform(335.7,20.45,2,2);

	this.instance_84 = new lib.CompoundPath_1_4();
	this.instance_84.setTransform(354.5,53.8,2,2,0,0,0,9.1,19.6);
	this.instance_84.alpha = 0.3984;
	this.instance_84.compositeOperation = "multiply";

	this.instance_85 = new lib.Path_10_1_1();
	this.instance_85.setTransform(359.1,59.8,2,2,0,0,0,11.4,22.6);
	this.instance_85.alpha = 0.3516;
	this.instance_85.compositeOperation = "multiply";

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFE974").s().p("AgtixQBBgOBRgQIgHAyIhfATIgQBrIBGgOIgHAxIhGAOIgSCAQAzgMAsgIIgIAyQhQAQhBAQgAgmirIg2FyQBKgRA5gMIAFgkIhfAVIAViOIBGgOIAEgkIhFAPIASh5IBfgUIAFgjQhOAPg1AMg");
	this.shape_70.setTransform(91.7,55.05,2,2);

	this.instance_86 = new lib.Path_31_1();
	this.instance_86.setTransform(91.7,55,2,2,0,0,0,9.3,19.9);
	this.instance_86.alpha = 0.3008;
	this.instance_86.compositeOperation = "multiply";

	this.instance_87 = new lib.Path_1_4_1();
	this.instance_87.setTransform(91,84.7,2,2,0,0,0,4.8,1.4);
	this.instance_87.alpha = 0.3008;
	this.instance_87.compositeOperation = "multiply";

	this.instance_88 = new lib.Path_2_4_1();
	this.instance_88.setTransform(93.6,49.3,2,2,0,0,0,3.5,0.9);
	this.instance_88.alpha = 0.8008;

	this.instance_89 = new lib.Path_3_4();
	this.instance_89.setTransform(91.7,55,2,2,0,0,0,9.3,19.9);
	this.instance_89.alpha = 0.8008;

	this.instance_90 = new lib.Path_4_3();
	this.instance_90.setTransform(91,84.3,2,2,0,0,0,4.8,1.2);
	this.instance_90.alpha = 0.8008;

	this.instance_91 = new lib.Path_5_3();
	this.instance_91.setTransform(93.6,49.9,2,2,0,0,0,3.5,1.2);
	this.instance_91.alpha = 0.3008;
	this.instance_91.compositeOperation = "multiply";

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F9F9F9").s().p("AgmirQA1gMBOgPIgFAjIhfAUIgSB5IBFgPIgEAkIhGAOIgVCOIBfgVIgFAkQg5AMhKARg");
	this.shape_71.setTransform(91.7,55.05,2,2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B77224").s().p("AgTAKIAIgxIAeAeIgHAxg");
	this.shape_72.setTransform(114.4,21.4,2,2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B77224").s().p("AgSAKIAHgxIAeAeIgHAxg");
	this.shape_73.setTransform(104.65,88.15,2,2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B77224").s().p("AgSAKIAHgxIAeAdIgHAyg");
	this.shape_74.setTransform(104.75,53.75,2,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B77224").s().p("AgHg1IAeAdIgKBFIgkAJg");
	this.shape_75.setTransform(92.9,38,2,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B77224").s().p("AgFg/IAeAdIgNBZIgkAJg");
	this.shape_76.setTransform(88.05,71.5,2,2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9B531E").s().p("Ag/gEIBfgTIAfAdIhfASg");
	this.shape_77.setTransform(104.1,28.25,2,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9B531E").s().p("AhYACQBCgPBQgQIAfAdQhDAMhOASg");
	this.shape_78.setTransform(89.2,96.25,2,2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#9B531E").s().p("AgygGIBGgPIAfAdIhGAOg");
	this.shape_79.setTransform(96.95,60.15,2,2);

	this.instance_92 = new lib.CompoundPath_1_3();
	this.instance_92.setTransform(98.9,61.8,2,2,0,0,0,10.6,21.2);
	this.instance_92.alpha = 0.3984;
	this.instance_92.compositeOperation = "multiply";

	this.instance_93 = new lib.Path_15_0();
	this.instance_93.setTransform(103.7,66,2,2,0,0,0,13,23.3);
	this.instance_93.alpha = 0.3516;
	this.instance_93.compositeOperation = "multiply";

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFE974").s().p("Ag1isIAzgPIgYCmIA8gQIAYimIAzgMIg4GCIgzANIAZisIg8ARIgYCsQgbAHgYAIgAgvinIg1F1IAkgKIAZitIBKgUIgZCrIAlgJIA1lzIgkAJIgXClIhMAUIAYilg");
	this.shape_80.setTransform(52.3,64.8,2,2);

	this.instance_94 = new lib.Path_30_3();
	this.instance_94.setTransform(57.8,82.6,2,2,0,0,0,1.7,8.6);
	this.instance_94.alpha = 0.3008;
	this.instance_94.compositeOperation = "multiply";

	this.instance_95 = new lib.Path_1_3_1();
	this.instance_95.setTransform(41.1,67.6,2,2,0,0,0,4.5,19.2);
	this.instance_95.alpha = 0.3008;
	this.instance_95.compositeOperation = "multiply";

	this.instance_96 = new lib.Path_2_3_1();
	this.instance_96.setTransform(57.2,82.6,2,2,0,0,0,1.4,8.6);
	this.instance_96.alpha = 0.8008;

	this.instance_97 = new lib.Path_3_3();
	this.instance_97.setTransform(58.8,43,2,2,0,0,0,6.8,9.8);
	this.instance_97.alpha = 0.8008;

	this.instance_98 = new lib.Path_4_2_1();
	this.instance_98.setTransform(41.1,67.6,2,2,0,0,0,4.5,19.2);
	this.instance_98.alpha = 0.8008;

	this.instance_99 = new lib.Path_5_2();
	this.instance_99.setTransform(58.8,43.6,2,2,0,0,0,6.8,10.1);
	this.instance_99.alpha = 0.3008;
	this.instance_99.compositeOperation = "multiply";

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F9F9F9").s().p("AguimIAkgKIgYClIBLgUIAXimIAlgJIg2F0IgkAJIAYirIhKAUIgZCsIgkAKg");
	this.shape_81.setTransform(52.25,64.7,2,2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B77224").s().p("AgbBJIAZirIAeAbIgZCqg");
	this.shape_82.setTransform(46.15,90.45,2,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B77224").s().p("AgqC0IA3mCIAeAcIg3GBg");
	this.shape_83.setTransform(71.6,63,2,2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B77224").s().p("AgDhSIAfAbIgTCAIgjAKg");
	this.shape_84.setTransform(52.4,43.85,2,2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9B531E").s().p("AgngFQAXgHAagHIAfAZIgyAOg");
	this.shape_85.setTransform(38.6,109.1,2,2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9B531E").s().p("AgogGIAygNIAfAaIgyANg");
	this.shape_86.setTransform(60.9,102.95,2,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9B531E").s().p("AgegEIA9gRIgGAkIgZAHg");
	this.shape_87.setTransform(51.6,71.6,2,2);

	this.instance_100 = new lib.CompoundPath_1_2();
	this.instance_100.setTransform(59.4,71,2,2,0,0,0,11.4,21.9);
	this.instance_100.alpha = 0.3984;
	this.instance_100.compositeOperation = "multiply";

	this.instance_101 = new lib.Path_13_0();
	this.instance_101.setTransform(64.2,75,2,2,0,0,0,13.8,23.9);
	this.instance_101.alpha = 0.3516;
	this.instance_101.compositeOperation = "multiply";

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFE974").s().p("AhTCrQgVgVAFgiIAijhQAFgiAcgYQAcgYAhgBQAjAAAVAXQAUAXgFAhIgiDgQgFAhgcAXQgbAYgiABIgEABQggAAgTgWgAAci4QgeAAgaAWQgZAWgFAfIgiDhQgEAdATAVQASAUAggBQAegBAagWQAZgVAFgeIAijgQAEgegSgVQgTgUgeAAIgCAAg");
	this.shape_88.setTransform(229.2517,38.5094,2,2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFE974").s().p("AgwCNQgJgKACgQIAjjjQACgPANgLQAMgMAQAAQAPAAALAKQAJALgCAQIgjDiQgCAPgNALQgMALgQABIgCAAQgPAAgJgKgAAAiFQgLAIgCANIgiDjQgCALAHAKQAIAIANAAQANgBAJgJQALgJACgMIAijiQACgNgHgIQgIgJgNAAQgNABgJAJg");
	this.shape_89.setTransform(229.25,38.5561,2,2);

	this.instance_102 = new lib.Path_29_1();
	this.instance_102.setTransform(228.2,37.1,2,2,0,0,0,8.8,17.8);
	this.instance_102.alpha = 0.3008;
	this.instance_102.compositeOperation = "multiply";

	this.instance_103 = new lib.Path_1_2_1();
	this.instance_103.setTransform(230.9,40.5,2,2,0,0,0,5.7,15.2);
	this.instance_103.alpha = 0.3008;
	this.instance_103.compositeOperation = "multiply";

	this.instance_104 = new lib.Path_2_2_1();
	this.instance_104.setTransform(221.5,75.5,2,2);
	this.instance_104.alpha = 0.8008;

	this.instance_105 = new lib.Path_3_2();
	this.instance_105.setTransform(218.4,74.8,2,2);
	this.instance_105.alpha = 0.8008;

	this.instance_106 = new lib.Path_4_1_1();
	this.instance_106.setTransform(219.8,75.3,2,2);
	this.instance_106.alpha = 0.8008;

	this.instance_107 = new lib.Path_5_1();
	this.instance_107.setTransform(247.9,13.7,2,2);
	this.instance_107.alpha = 0.8008;

	this.instance_108 = new lib.Path_6_0();
	this.instance_108.setTransform(238.1,9.7,2,2);
	this.instance_108.alpha = 0.8008;

	this.instance_109 = new lib.Path_7_3();
	this.instance_109.setTransform(247.8,12.1,2,2);
	this.instance_109.alpha = 0.8008;

	this.instance_110 = new lib.Path_8_3();
	this.instance_110.setTransform(236.2,8.7,2,2);
	this.instance_110.alpha = 0.8008;

	this.instance_111 = new lib.Path_9_1();
	this.instance_111.setTransform(236.9,9,2,2);
	this.instance_111.alpha = 0.8008;

	this.instance_112 = new lib.Path_10_0();
	this.instance_112.setTransform(237.5,9.3,2,2);
	this.instance_112.alpha = 0.8008;

	this.instance_113 = new lib.Path_11_1();
	this.instance_113.setTransform(227.8,36.9,2,2,0,0,0,8.6,17.7);
	this.instance_113.alpha = 0.8008;

	this.instance_114 = new lib.Path_12_0();
	this.instance_114.setTransform(247.6,10.6,2,2);
	this.instance_114.alpha = 0.8008;

	this.instance_115 = new lib.Path_13_3();
	this.instance_115.setTransform(217.1,74.3,2,2);
	this.instance_115.alpha = 0.8008;

	this.instance_116 = new lib.Path_14_0();
	this.instance_116.setTransform(247.2,9.3,2,2);
	this.instance_116.alpha = 0.8008;

	this.instance_117 = new lib.Path_15_5();
	this.instance_117.setTransform(235.6,8.5,2,2);
	this.instance_117.alpha = 0.8008;

	this.instance_118 = new lib.Path_16_3();
	this.instance_118.setTransform(245.3,5.9,2,2);
	this.instance_118.alpha = 0.8008;

	this.instance_119 = new lib.Path_17_1();
	this.instance_119.setTransform(218,62.4,2,2);
	this.instance_119.alpha = 0.8008;

	this.instance_120 = new lib.Path_18_3();
	this.instance_120.setTransform(233.8,8.4,2,2);
	this.instance_120.alpha = 0.8008;

	this.instance_121 = new lib.Path_19_1();
	this.instance_121.setTransform(218.6,65.3,2,2);
	this.instance_121.alpha = 0.8008;

	this.instance_122 = new lib.Path_20_3();
	this.instance_122.setTransform(218.9,65.9,2,2);
	this.instance_122.alpha = 0.8008;

	this.instance_123 = new lib.Path_21_1();
	this.instance_123.setTransform(218,61.5,2,2);
	this.instance_123.alpha = 0.8008;

	this.instance_124 = new lib.Path_22_3();
	this.instance_124.setTransform(234.8,8.4,2,2);
	this.instance_124.alpha = 0.8008;

	this.instance_125 = new lib.Path_23_1();
	this.instance_125.setTransform(218.4,64.7,2,2);
	this.instance_125.alpha = 0.8008;

	this.instance_126 = new lib.Path_24_3();
	this.instance_126.setTransform(219.3,66.5,2,2);
	this.instance_126.alpha = 0.8008;

	this.instance_127 = new lib.Path_25_1();
	this.instance_127.setTransform(218.2,64.2,2,2);
	this.instance_127.alpha = 0.8008;

	this.instance_128 = new lib.Path_26_3();
	this.instance_128.setTransform(230.3,39.9,2,2,0,0,0,5.4,14.9);
	this.instance_128.alpha = 0.8008;

	this.instance_129 = new lib.Path_27_1();
	this.instance_129.setTransform(218.1,63.5,2,2);
	this.instance_129.alpha = 0.8008;

	this.instance_130 = new lib.Path_28_3();
	this.instance_130.setTransform(219.3,66.5,2,2);
	this.instance_130.alpha = 0.3008;
	this.instance_130.compositeOperation = "multiply";

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F9F9F9").s().p("AhNCmQgTgVAEgdIAijhQAFgfAZgWQAagWAeAAQAfgBAUAVQASAVgEAeIgiDgQgFAegZAVQgaAWgeABIgDAAQgeAAgRgTgAAXiWQgQAAgMAMQgNALgCAPIgjDjQgCAQAJAKQAKALAQgBQAQgBAMgLQANgLACgPIAjjiQACgQgJgLQgKgKgPAAIgBAAg");
	this.shape_90.setTransform(229.2519,38.5536,2,2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B77224").s().p("AgaB4QgIgJACgMIAijiIAfAjIghDbIgFABQgNABgIgJg");
	this.shape_91.setTransform(226.1579,41.6,2,2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B77224").s().p("AghB6IAijgQAEgggSgXIAeAjQAVAXgGAhIghDfg");
	this.shape_92.setTransform(249.1142,36.3,2,2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9B531E").s().p("Ag7AlIgfgiQAVAWAhgCQAkgBAagXQAcgXAFghIAfAjQgEAggcAYQgcAXghABIgDAAQggAAgVgVg");
	this.shape_93.setTransform(230.7,72.3543,2,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9B531E").s().p("AgegBQACgNAKgIQAKgJAMgBQAOAAAHAJQAIAIgCANIgBAFQgLACgIAIQgJAJgCALg");
	this.shape_94.setTransform(232.7421,16.35,2,2);

	this.instance_131 = new lib.CompoundPath_3();
	this.instance_131.setTransform(236.6,46.4,2,2,0,0,0,5.4,14.8);
	this.instance_131.alpha = 0.3984;
	this.instance_131.compositeOperation = "multiply";

	this.instance_132 = new lib.CompoundPath_4();
	this.instance_132.setTransform(236.6,46.7,2,2,0,0,0,10.6,19.8);
	this.instance_132.alpha = 0.3984;
	this.instance_132.compositeOperation = "multiply";

	this.instance_133 = new lib.Path_33_1();
	this.instance_133.setTransform(241.4,51.9,2,2,0,0,0,13,22.4);
	this.instance_133.alpha = 0.3516;
	this.instance_133.compositeOperation = "multiply";

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFE974").s().p("Agch/Ig3ATIAHgzQBAgXBggeIgHAzIg3ASIgvFTIgyARgAhDDLIAkgNIAulTIA4gRIAFgkQhFAVhNAbIgFAkIA4gTg");
	this.shape_95.setTransform(16.75,75.1,2,2);

	this.instance_134 = new lib.Path_6_4();
	this.instance_134.setTransform(16.6,42.9,2,2,0,0,0,7.5,4.2);
	this.instance_134.alpha = 0.3008;
	this.instance_134.compositeOperation = "multiply";

	this.instance_135 = new lib.Path_1_1_1();
	this.instance_135.setTransform(8.9,81.5,2,2,0,0,0,2.9,17);
	this.instance_135.alpha = 0.3008;
	this.instance_135.compositeOperation = "multiply";

	this.instance_136 = new lib.Path_2_1_1();
	this.instance_136.setTransform(16.6,42.9,2,2,0,0,0,7.5,4.2);
	this.instance_136.alpha = 0.8008;

	this.instance_137 = new lib.Path_3_1();
	this.instance_137.setTransform(8.3,81.5,2,2,0,0,0,2.6,17);
	this.instance_137.alpha = 0.8008;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F9F9F9").s().p("AgTiJIg4ATIAFgkQBNgbBFgVIgFAkIg4ASIguFSIgkANg");
	this.shape_96.setTransform(16.75,75.05,2,2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B77224").s().p("AgmCdIAvlTIAeAaIgvFTg");
	this.shape_97.setTransform(19.35,82.75,2,2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B77224").s().p("AgSAMIAHgyIAeAbIgHAyg");
	this.shape_98.setTransform(35.9,40.35,2,2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9B531E").s().p("AgngDIAxgRIAeAYIgxARg");
	this.shape_99.setTransform(9.55,118.4,2,2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9B531E").s().p("AgqgDIA2gSIAfAaIg3ARg");
	this.shape_100.setTransform(29.7,47.1,2,2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9B531E").s().p("AgbgCIA2gTIgEAkIgUAHg");
	this.shape_101.setTransform(5.5,53.9,2,2);

	this.instance_138 = new lib.CompoundPath_1_1();
	this.instance_138.setTransform(23.7,81.1,2,2,0,0,0,8.8,21.6);
	this.instance_138.alpha = 0.3984;
	this.instance_138.compositeOperation = "multiply";

	this.instance_139 = new lib.Path_10_3();
	this.instance_139.setTransform(28.5,84.7,2,2,0,0,0,11.2,23.4);
	this.instance_139.alpha = 0.3516;
	this.instance_139.compositeOperation = "multiply";

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFE974").s().p("Ag7i2IA4gFIAhDiIAjjnIA0gCIg5F2Ig4AFIghjiIgjDnIg0AFgAg1ivIg2FqIAlgDIAokLIApEEIArgDIA2lpIgkACIgpEOIgpkJg");
	this.shape_102.setTransform(190.75,40.6,2,2);

	this.instance_140 = new lib.Path_0();
	this.instance_140.setTransform(204.7,31.4,2,2,0,0,0,3.9,14.2);
	this.instance_140.alpha = 0.3008;
	this.instance_140.compositeOperation = "multiply";

	this.instance_141 = new lib.Path_1_0();
	this.instance_141.setTransform(189.5,49.9,2,2,0,0,0,2.5,13.1);
	this.instance_141.alpha = 0.3008;
	this.instance_141.compositeOperation = "multiply";

	this.instance_142 = new lib.Path_2_0();
	this.instance_142.setTransform(204.7,30.6,2,2,0,0,0,3.9,13.8);
	this.instance_142.alpha = 0.8008;

	this.instance_143 = new lib.Path_3_0();
	this.instance_143.setTransform(188.9,49.9,2,2,0,0,0,2.2,13.1);
	this.instance_143.alpha = 0.8008;

	this.instance_144 = new lib.Path_4_0();
	this.instance_144.setTransform(179.1,41.3,2,2,0,0,0,5,18.4);
	this.instance_144.alpha = 0.8008;

	this.instance_145 = new lib.Path_5_0();
	this.instance_145.setTransform(179.1,41.3,2,2,0,0,0,5,18.4);
	this.instance_145.alpha = 0.3008;
	this.instance_145.compositeOperation = "multiply";

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F9F9F9").s().p("Ag1ivIArgEIApEIIApkOIAkgCIg2FpIgrADIgpkEIgoELIglAEg");
	this.shape_103.setTransform(190.75,40.55,2,2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B77224").s().p("AgaBjIAijnIATB6IgWCPg");
	this.shape_104.setTransform(183.05,58.7,2,2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B77224").s().p("AgrCrIA3l3IAgAjIg4F2g");
	this.shape_105.setTransform(211.65,42.45,2,2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B77224").s().p("AgXhwIAfAhIAQBoIgOBYg");
	this.shape_106.setTransform(194.75,25.65,2,2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9B531E").s().p("AgpgNIAzgFIAgAgIgzAFg");
	this.shape_107.setTransform(175.75,82.4,2,2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9B531E").s().p("AgrgNIA4gFIAfAhIg3AEg");
	this.shape_108.setTransform(200.3,80.4,2,2);

	this.instance_146 = new lib.CompoundPath_1_0();
	this.instance_146.setTransform(198.1,48.2,2,2,0,0,0,12.2,19.9);
	this.instance_146.alpha = 0.3984;
	this.instance_146.compositeOperation = "multiply";

	this.instance_147 = new lib.Path_12_3();
	this.instance_147.setTransform(202.9,53.2,2,2,0,0,0,14.6,22.4);
	this.instance_147.alpha = 0.3516;
	this.instance_147.compositeOperation = "multiply";

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFE974").s().p("Ag5izIA0gHIgVCTIBUicIA3gGIhaCeIAiDcIg2AHIgViaIgZAuIgSB2IgzAIgAgyitIg2FuIAlgGIAQhwIAmhDIAXCoIAmgFIghjWIBWiVIgmAEIhmC2IAaisg");
	this.shape_109.setTransform(149.2,45.35,2,2);

	this.instance_148 = new lib.Path_41();
	this.instance_148.setTransform(155.2,26.3,2,2,0,0,0,7,9.8);
	this.instance_148.alpha = 0.3008;
	this.instance_148.compositeOperation = "multiply";

	this.instance_149 = new lib.Path_1_21();
	this.instance_149.setTransform(149.6,63.8,2,2,0,0,0,1.6,8.4);
	this.instance_149.alpha = 0.3008;
	this.instance_149.compositeOperation = "multiply";

	this.instance_150 = new lib.Path_2_22();
	this.instance_150.setTransform(149,63.8,2,2,0,0,0,1.3,8.4);
	this.instance_150.alpha = 0.8008;

	this.instance_151 = new lib.Path_3();
	this.instance_151.setTransform(137.2,46.7,2,2,0,0,0,4.5,18.6);
	this.instance_151.alpha = 0.8008;

	this.instance_152 = new lib.Path_4_11();
	this.instance_152.setTransform(155.2,25.7,2,2,0,0,0,7,9.5);
	this.instance_152.alpha = 0.8008;

	this.instance_153 = new lib.Path_5_11();
	this.instance_153.setTransform(137.2,46.7,2,2,0,0,0,4.5,18.6);
	this.instance_153.alpha = 0.3008;
	this.instance_153.compositeOperation = "multiply";

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F9F9F9").s().p("AgwitIAlgFIgaCsIBmi2IAmgEIhWCVIAhDWIgmAFIgXioIgmBDIgQBwIglAGg");
	this.shape_110.setTransform(148.8,45.35,2,2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B77224").s().p("AgYAsIASh1IAfAfIgSB0g");
	this.shape_111.setTransform(141.7,75.35,2,2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B77224").s().p("AgEhJIAfAgIgEAaIgxBZg");
	this.shape_112.setTransform(149.05,22.65,2,2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B77224").s().p("AABBfIghjdIAgAgIAhDdg");
	this.shape_113.setTransform(160.35,61.85,2,2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9B531E").s().p("AgqgLIA1gHIAgAfIg1AGg");
	this.shape_114.setTransform(158.35,84.65,2,2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9B531E").s().p("AgRAHIAZgtIAKBFIgEAIg");
	this.shape_115.setTransform(143.85,59,2,2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9B531E").s().p("AgogKIAygIIAfAdIgyAIg");
	this.shape_116.setTransform(134.8,87.95,2,2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#9B531E").s().p("Ag8A/IBZidIAgAhIhaCbg");
	this.shape_117.setTransform(166.05,23.9,2,2);

	this.instance_154 = new lib.CompoundPath_1();
	this.instance_154.setTransform(156.4,52.5,2,2,0,0,0,11.8,20.5);
	this.instance_154.alpha = 0.3984;
	this.instance_154.compositeOperation = "multiply";

	this.instance_155 = new lib.Path_14_3();
	this.instance_155.setTransform(161.2,57.3,2,2,0,0,0,14.2,22.9);
	this.instance_155.alpha = 0.3516;
	this.instance_155.compositeOperation = "multiply";

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCE4B").s().p("AhjCMQgGgCgFgIIgMgXQgFgIAGgRQAPgoAcg0QAcg1AdgpQgPgNgFgPQgCgKANADQAfAGApACQAdABANADQAdAFALAdQACAEgDACQgDACgGgBQgXgGgwgBIgTAAQgPAVgoBIIAYABQAjAGAJAaQAEAMgNgDQghgHgwAEQgUAmgLAXQAigEAfAEQAjAFAJAaQACAGgCACQgCADgHgCQgcgHhIAHIgHABIgIgBg");
	this.shape_118.setTransform(395.6038,148.4643,2,2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCE4B").s().p("AAqCYQgLgMgBgRQAAgPADgMIAAABQAGgZArhYQhMBbgiA/QgEAGgEABQgDAAgGgFQgWgSAAgbQgBgHACgKQAEgnAZhVQhHBpgdBFQgCAFgFAAQgEABgFgFQgJgKgBgPQAAgOAGgQQAOgjAshHQAshJAjgtQAKgMAMALQAUATABAWQAAANgGAVQgSA8gSBGQAVghAzg4QAwg3AagoQAFgHAFAAQAFABAHAHQAOARABATQAAAPgLAWQhFB/gbBQQgCAHgDAAQgEAAgGgGg");
	this.shape_119.setTransform(348.2522,142.3872,2,2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFCE4B").s().p("AA1CWQgTgLgCgkIABggIghACIg0AAQgMAWgUArQgEAHgFgBQgGAAgCgFQgHgMAAgGQAAgPAHgRQAFgOAFgLQgKgIgFgJQgDgHACgCQADgCAJACIARACQAdgxAng1QAsg6AigcQAOgKALAOQAHAJAFAMQAEAKAAAHQAAAKgDAJQgUBAgJBDQAPAHAGATQACAGgCACQgCABgHgBIgRgFQgDAnAAAhQAAAIgHAAQgDAAgGgDgAgfAoIAdgBIATgCIATAAQAIhGAQgxQgzA6goBAg");
	this.shape_120.setTransform(297.8,137.0244,2,2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCE4B").s().p("AhVCLQgjgYgBgyQgDhFA2hEQAug7AvgQQARgFASAAQAUABANAJQARAMAIAQQAGANAAAMQABALgGAOIgRAtQgBAFgFABQgFACgGgFQgSgOAAgSQgBgIAEgMIANglQACgMgEgEQgLgMgqAcQgrAdgdAuQghA0ACA6QABAyAcgBQATAAAXgTQAVgTAQgfIghAFQgSACgOgIQgNgGgGgMQgFgMAOABQARgBAmgHQAhgFANAAQAjAAANAbQADAGgBACQgCAEgKgBIgbAAQAIAdgdAfQgYAZgYAIQgTAFgQAAQgdAAgUgOg");
	this.shape_121.setTransform(253.9531,135.3,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_155},{t:this.instance_154},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.shape_109},{t:this.instance_147},{t:this.instance_146},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.shape_102},{t:this.instance_139},{t:this.instance_138},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.shape_95},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.shape_89},{t:this.shape_88},{t:this.instance_101},{t:this.instance_100},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.shape_80},{t:this.instance_93},{t:this.instance_92},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.shape_70},{t:this.instance_85},{t:this.instance_84},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.shape_63},{t:this.instance_79},{t:this.instance_78},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.shape_55},{t:this.instance_71},{t:this.instance_70},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.shape_45},{t:this.instance_63},{t:this.instance_62},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.shape_37},{t:this.instance_53},{t:this.instance_52},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.shape_28},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_20},{t:this.shape_19},{t:this.instance_17},{t:this.instance_16},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_10},{t:this.instance_7},{t:this.instance_6},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459.7,208.8);


(lib.BallFadeInOut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WhiteBall();
	this.instance.setTransform(27,27,1,1,0,0,0,27,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.1992},58).to({alpha:1},61).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,54);


(lib.BackBoard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_1();
	this.instance.setTransform(1125.7,551.9,1,1,0,0,0,86.5,22.4);
	this.instance.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape.setTransform(1125.7,473.575);

	this.instance_1 = new lib.Path_2_21();
	this.instance_1.setTransform(949.7,551.9,1,1,0,0,0,86.5,22.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_1.setTransform(949.725,473.575);

	this.instance_2 = new lib.Path_4_2();
	this.instance_2.setTransform(773.7,551.9,1,1,0,0,0,86.5,22.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_2.setTransform(773.775,473.575);

	this.instance_3 = new lib.Path_6_2();
	this.instance_3.setTransform(421.8,551.9,1,1,0,0,0,86.6,22.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_3.setTransform(421.825,473.575);

	this.instance_4 = new lib.Path_8_2();
	this.instance_4.setTransform(245.9,551.9,1,1,0,0,0,86.7,22.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_4.setTransform(245.85,473.575);

	this.instance_5 = new lib.Path_10_2();
	this.instance_5.setTransform(69.9,551.9,1,1,0,0,0,86.7,22.4);
	this.instance_5.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_5.setTransform(69.875,473.575);

	this.instance_6 = new lib.Path_12_2();
	this.instance_6.setTransform(1125.7,360.4,1,1,0,0,0,86.5,21.9);
	this.instance_6.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_6.setTransform(1125.7,282.075);

	this.instance_7 = new lib.Path_14_2();
	this.instance_7.setTransform(949.7,360.4,1,1,0,0,0,86.5,21.9);
	this.instance_7.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_7.setTransform(949.725,282.075);

	this.instance_8 = new lib.Path_16_2();
	this.instance_8.setTransform(773.7,360.4,1,1,0,0,0,86.5,21.9);
	this.instance_8.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_8.setTransform(773.775,282.075);

	this.instance_9 = new lib.Path_18_2();
	this.instance_9.setTransform(597.7,360.4,1,1,0,0,0,86.5,21.9);
	this.instance_9.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_9.setTransform(597.775,282.075);

	this.instance_10 = new lib.Path_20_2();
	this.instance_10.setTransform(245.9,360.4,1,1,0,0,0,86.7,21.9);
	this.instance_10.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_10.setTransform(245.85,282.075);

	this.instance_11 = new lib.Path_22_2();
	this.instance_11.setTransform(69.9,360.4,1,1,0,0,0,86.7,21.9);
	this.instance_11.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_11.setTransform(69.875,282.075);

	this.instance_12 = new lib.Path_24_2();
	this.instance_12.setTransform(1301.7,158.5,1,1,0,0,0,86.5,22);
	this.instance_12.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_12.setTransform(1301.675,80.225);

	this.instance_13 = new lib.Path_26_2();
	this.instance_13.setTransform(1125.7,158.5,1,1,0,0,0,86.5,22);
	this.instance_13.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_13.setTransform(1125.7,80.225);

	this.instance_14 = new lib.Path_28_2();
	this.instance_14.setTransform(949.7,158.5,1,1,0,0,0,86.5,22);
	this.instance_14.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_14.setTransform(949.725,80.225);

	this.instance_15 = new lib.Path_30_2();
	this.instance_15.setTransform(773.7,158.5,1,1,0,0,0,86.5,22);
	this.instance_15.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_15.setTransform(773.775,80.225);

	this.instance_16 = new lib.Path_32_2();
	this.instance_16.setTransform(597.7,158.5,1,1,0,0,0,86.5,22);
	this.instance_16.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_16.setTransform(597.775,80.225);

	this.instance_17 = new lib.Path_34_2();
	this.instance_17.setTransform(421.8,158.5,1,1,0,0,0,86.6,22);
	this.instance_17.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_17.setTransform(421.825,80.225);

	this.instance_18 = new lib.Path_36_1();
	this.instance_18.setTransform(245.9,158.5,1,1,0,0,0,86.7,22);
	this.instance_18.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_18.setTransform(245.85,80.225);

	this.instance_19 = new lib.Path_38_1();
	this.instance_19.setTransform(69.9,158.5,1,1,0,0,0,86.7,22);
	this.instance_19.shadow = new cjs.Shadow("rgba(246,237,176,0.557)",0,0,17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#181D44").s().p("Aq6MiIAA5DIV1AAIAAZDg");
	this.shape_19.setTransform(69.875,80.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.instance_19},{t:this.shape_18},{t:this.instance_18},{t:this.shape_17},{t:this.instance_17},{t:this.shape_16},{t:this.instance_16},{t:this.shape_15},{t:this.instance_15},{t:this.shape_14},{t:this.instance_14},{t:this.shape_13},{t:this.instance_13},{t:this.shape_12},{t:this.instance_12},{t:this.shape_11},{t:this.instance_11},{t:this.shape_10},{t:this.instance_10},{t:this.shape_9},{t:this.instance_9},{t:this.shape_8},{t:this.instance_8},{t:this.shape_7},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.instance_5},{t:this.shape_4},{t:this.instance_4},{t:this.shape_3},{t:this.instance_3},{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,1411.8,579.7);


(lib.MPVKTGG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.KnowtheGameGame();
	this.instance.setTransform(229.8,104.4,1,1,0,0,0,229.8,104.4);
	this.instance.cache(-2,-2,464,213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,459.7,208.8);


(lib.FadeyBG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var count = this.numChildren;
		
		for (var i=0;i<count;i++){
			var _mc = this.getChildAt(i)
			_mc.gotoAndPlay(Math.ceil(Math.random()*_mc.totalFrames));
		}
	}
	this.frame_448 = function() {
		for (i=0;i<count;i++){
			_mc = this.getChildAt(i)
			_mc.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(448).call(this.frame_448).wait(1));

	// Layer_1
	this.instance = new lib.BallFadeInOut();
	this.instance.setTransform(1942.2,1974.9,1,1,0,0,0,27,27);
	this.instance.alpha = 0.6016;

	this.instance_1 = new lib.BallFadeInOut();
	this.instance_1.setTransform(1869.35,1974.9,1,1,0,0,0,27,27);
	this.instance_1.alpha = 0.6016;

	this.instance_2 = new lib.BallFadeInOut();
	this.instance_2.setTransform(1797.75,1974.9,1,1,0,0,0,27,27);
	this.instance_2.alpha = 0.6016;

	this.instance_3 = new lib.BallFadeInOut();
	this.instance_3.setTransform(1726.15,1974.9,1,1,0,0,0,27,27);
	this.instance_3.alpha = 0.6016;

	this.instance_4 = new lib.BallFadeInOut();
	this.instance_4.setTransform(1654.55,1974.9,1,1,0,0,0,27,27);
	this.instance_4.alpha = 0.6016;

	this.instance_5 = new lib.BallFadeInOut();
	this.instance_5.setTransform(1582.95,1974.9,1,1,0,0,0,27,27);
	this.instance_5.alpha = 0.6016;

	this.instance_6 = new lib.BallFadeInOut();
	this.instance_6.setTransform(1511.35,1974.9,1,1,0,0,0,27,27);
	this.instance_6.alpha = 0.6016;

	this.instance_7 = new lib.BallFadeInOut();
	this.instance_7.setTransform(580.55,1974.9,1,1,0,0,0,27,27);
	this.instance_7.alpha = 0.6016;

	this.instance_8 = new lib.BallFadeInOut();
	this.instance_8.setTransform(508.95,1974.9,1,1,0,0,0,27,27);
	this.instance_8.alpha = 0.6016;

	this.instance_9 = new lib.BallFadeInOut();
	this.instance_9.setTransform(437.35,1974.9,1,1,0,0,0,27,27);
	this.instance_9.alpha = 0.6016;

	this.instance_10 = new lib.BallFadeInOut();
	this.instance_10.setTransform(1439.75,1974.9,1,1,0,0,0,27,27);
	this.instance_10.alpha = 0.6016;

	this.instance_11 = new lib.BallFadeInOut();
	this.instance_11.setTransform(1368.15,1974.9,1,1,0,0,0,27,27);
	this.instance_11.alpha = 0.6016;

	this.instance_12 = new lib.BallFadeInOut();
	this.instance_12.setTransform(1296.55,1974.9,1,1,0,0,0,27,27);
	this.instance_12.alpha = 0.6016;

	this.instance_13 = new lib.BallFadeInOut();
	this.instance_13.setTransform(1224.95,1974.9,1,1,0,0,0,27,27);
	this.instance_13.alpha = 0.6016;

	this.instance_14 = new lib.BallFadeInOut();
	this.instance_14.setTransform(1153.35,1974.9,1,1,0,0,0,27,27);
	this.instance_14.alpha = 0.6016;

	this.instance_15 = new lib.BallFadeInOut();
	this.instance_15.setTransform(1081.75,1974.9,1,1,0,0,0,27,27);
	this.instance_15.alpha = 0.6016;

	this.instance_16 = new lib.BallFadeInOut();
	this.instance_16.setTransform(1010.15,1974.9,1,1,0,0,0,27,27);
	this.instance_16.alpha = 0.6016;

	this.instance_17 = new lib.BallFadeInOut();
	this.instance_17.setTransform(938.55,1974.9,1,1,0,0,0,27,27);
	this.instance_17.alpha = 0.6016;

	this.instance_18 = new lib.BallFadeInOut();
	this.instance_18.setTransform(866.95,1974.9,1,1,0,0,0,27,27);
	this.instance_18.alpha = 0.6016;

	this.instance_19 = new lib.BallFadeInOut();
	this.instance_19.setTransform(795.35,1974.9,1,1,0,0,0,27,27);
	this.instance_19.alpha = 0.6016;

	this.instance_20 = new lib.BallFadeInOut();
	this.instance_20.setTransform(723.75,1974.9,1,1,0,0,0,27,27);
	this.instance_20.alpha = 0.6016;

	this.instance_21 = new lib.BallFadeInOut();
	this.instance_21.setTransform(652.15,1974.9,1,1,0,0,0,27,27);
	this.instance_21.alpha = 0.6016;

	this.instance_22 = new lib.BallFadeInOut();
	this.instance_22.setTransform(1942.2,1902.9,1,1,0,0,0,27,27);
	this.instance_22.alpha = 0.6016;

	this.instance_23 = new lib.BallFadeInOut();
	this.instance_23.setTransform(1869.35,1902.9,1,1,0,0,0,27,27);
	this.instance_23.alpha = 0.6016;

	this.instance_24 = new lib.BallFadeInOut();
	this.instance_24.setTransform(1797.75,1902.9,1,1,0,0,0,27,27);
	this.instance_24.alpha = 0.6016;

	this.instance_25 = new lib.BallFadeInOut();
	this.instance_25.setTransform(1726.15,1902.9,1,1,0,0,0,27,27);
	this.instance_25.alpha = 0.6016;

	this.instance_26 = new lib.BallFadeInOut();
	this.instance_26.setTransform(1654.55,1902.9,1,1,0,0,0,27,27);
	this.instance_26.alpha = 0.6016;

	this.instance_27 = new lib.BallFadeInOut();
	this.instance_27.setTransform(1582.95,1902.9,1,1,0,0,0,27,27);
	this.instance_27.alpha = 0.6016;

	this.instance_28 = new lib.BallFadeInOut();
	this.instance_28.setTransform(1511.35,1902.9,1,1,0,0,0,27,27);
	this.instance_28.alpha = 0.6016;

	this.instance_29 = new lib.BallFadeInOut();
	this.instance_29.setTransform(580.55,1902.9,1,1,0,0,0,27,27);
	this.instance_29.alpha = 0.6016;

	this.instance_30 = new lib.BallFadeInOut();
	this.instance_30.setTransform(508.95,1902.9,1,1,0,0,0,27,27);
	this.instance_30.alpha = 0.6016;

	this.instance_31 = new lib.BallFadeInOut();
	this.instance_31.setTransform(437.35,1902.9,1,1,0,0,0,27,27);
	this.instance_31.alpha = 0.6016;

	this.instance_32 = new lib.BallFadeInOut();
	this.instance_32.setTransform(1439.75,1902.9,1,1,0,0,0,27,27);
	this.instance_32.alpha = 0.6016;

	this.instance_33 = new lib.BallFadeInOut();
	this.instance_33.setTransform(1368.15,1902.9,1,1,0,0,0,27,27);
	this.instance_33.alpha = 0.6016;

	this.instance_34 = new lib.BallFadeInOut();
	this.instance_34.setTransform(1296.55,1902.9,1,1,0,0,0,27,27);
	this.instance_34.alpha = 0.6016;

	this.instance_35 = new lib.BallFadeInOut();
	this.instance_35.setTransform(1224.95,1902.9,1,1,0,0,0,27,27);
	this.instance_35.alpha = 0.6016;

	this.instance_36 = new lib.BallFadeInOut();
	this.instance_36.setTransform(1153.35,1902.9,1,1,0,0,0,27,27);
	this.instance_36.alpha = 0.6016;

	this.instance_37 = new lib.BallFadeInOut();
	this.instance_37.setTransform(1081.75,1902.9,1,1,0,0,0,27,27);
	this.instance_37.alpha = 0.6016;

	this.instance_38 = new lib.BallFadeInOut();
	this.instance_38.setTransform(1010.15,1902.9,1,1,0,0,0,27,27);
	this.instance_38.alpha = 0.6016;

	this.instance_39 = new lib.BallFadeInOut();
	this.instance_39.setTransform(938.55,1902.9,1,1,0,0,0,27,27);
	this.instance_39.alpha = 0.6016;

	this.instance_40 = new lib.BallFadeInOut();
	this.instance_40.setTransform(866.95,1902.9,1,1,0,0,0,27,27);
	this.instance_40.alpha = 0.6016;

	this.instance_41 = new lib.BallFadeInOut();
	this.instance_41.setTransform(795.35,1902.9,1,1,0,0,0,27,27);
	this.instance_41.alpha = 0.6016;

	this.instance_42 = new lib.BallFadeInOut();
	this.instance_42.setTransform(723.75,1902.9,1,1,0,0,0,27,27);
	this.instance_42.alpha = 0.6016;

	this.instance_43 = new lib.BallFadeInOut();
	this.instance_43.setTransform(652.15,1902.9,1,1,0,0,0,27,27);
	this.instance_43.alpha = 0.6016;

	this.instance_44 = new lib.BallFadeInOut();
	this.instance_44.setTransform(1942.2,1830.9,1,1,0,0,0,27,27);
	this.instance_44.alpha = 0.6016;

	this.instance_45 = new lib.BallFadeInOut();
	this.instance_45.setTransform(1869.35,1830.9,1,1,0,0,0,27,27);
	this.instance_45.alpha = 0.6016;

	this.instance_46 = new lib.BallFadeInOut();
	this.instance_46.setTransform(1797.75,1830.9,1,1,0,0,0,27,27);
	this.instance_46.alpha = 0.6016;

	this.instance_47 = new lib.BallFadeInOut();
	this.instance_47.setTransform(1726.15,1830.9,1,1,0,0,0,27,27);
	this.instance_47.alpha = 0.6016;

	this.instance_48 = new lib.BallFadeInOut();
	this.instance_48.setTransform(1654.55,1830.9,1,1,0,0,0,27,27);
	this.instance_48.alpha = 0.6016;

	this.instance_49 = new lib.BallFadeInOut();
	this.instance_49.setTransform(1582.95,1830.9,1,1,0,0,0,27,27);
	this.instance_49.alpha = 0.6016;

	this.instance_50 = new lib.BallFadeInOut();
	this.instance_50.setTransform(1511.35,1830.9,1,1,0,0,0,27,27);
	this.instance_50.alpha = 0.6016;

	this.instance_51 = new lib.BallFadeInOut();
	this.instance_51.setTransform(580.55,1830.9,1,1,0,0,0,27,27);
	this.instance_51.alpha = 0.6016;

	this.instance_52 = new lib.BallFadeInOut();
	this.instance_52.setTransform(508.95,1830.9,1,1,0,0,0,27,27);
	this.instance_52.alpha = 0.6016;

	this.instance_53 = new lib.BallFadeInOut();
	this.instance_53.setTransform(437.35,1830.9,1,1,0,0,0,27,27);
	this.instance_53.alpha = 0.6016;

	this.instance_54 = new lib.BallFadeInOut();
	this.instance_54.setTransform(1439.75,1830.9,1,1,0,0,0,27,27);
	this.instance_54.alpha = 0.6016;

	this.instance_55 = new lib.BallFadeInOut();
	this.instance_55.setTransform(1368.15,1830.9,1,1,0,0,0,27,27);
	this.instance_55.alpha = 0.6016;

	this.instance_56 = new lib.BallFadeInOut();
	this.instance_56.setTransform(1296.55,1830.9,1,1,0,0,0,27,27);
	this.instance_56.alpha = 0.6016;

	this.instance_57 = new lib.BallFadeInOut();
	this.instance_57.setTransform(1224.95,1830.9,1,1,0,0,0,27,27);
	this.instance_57.alpha = 0.6016;

	this.instance_58 = new lib.BallFadeInOut();
	this.instance_58.setTransform(1153.35,1830.9,1,1,0,0,0,27,27);
	this.instance_58.alpha = 0.6016;

	this.instance_59 = new lib.BallFadeInOut();
	this.instance_59.setTransform(1081.75,1830.9,1,1,0,0,0,27,27);
	this.instance_59.alpha = 0.6016;

	this.instance_60 = new lib.BallFadeInOut();
	this.instance_60.setTransform(1010.15,1830.9,1,1,0,0,0,27,27);
	this.instance_60.alpha = 0.6016;

	this.instance_61 = new lib.BallFadeInOut();
	this.instance_61.setTransform(938.55,1830.9,1,1,0,0,0,27,27);
	this.instance_61.alpha = 0.6016;

	this.instance_62 = new lib.BallFadeInOut();
	this.instance_62.setTransform(866.95,1830.9,1,1,0,0,0,27,27);
	this.instance_62.alpha = 0.6016;

	this.instance_63 = new lib.BallFadeInOut();
	this.instance_63.setTransform(795.35,1830.9,1,1,0,0,0,27,27);
	this.instance_63.alpha = 0.6016;

	this.instance_64 = new lib.BallFadeInOut();
	this.instance_64.setTransform(723.75,1830.9,1,1,0,0,0,27,27);
	this.instance_64.alpha = 0.6016;

	this.instance_65 = new lib.BallFadeInOut();
	this.instance_65.setTransform(652.15,1830.9,1,1,0,0,0,27,27);
	this.instance_65.alpha = 0.6016;

	this.instance_66 = new lib.BallFadeInOut();
	this.instance_66.setTransform(1942.2,1758.9,1,1,0,0,0,27,27);
	this.instance_66.alpha = 0.6016;

	this.instance_67 = new lib.BallFadeInOut();
	this.instance_67.setTransform(1869.35,1758.9,1,1,0,0,0,27,27);
	this.instance_67.alpha = 0.6016;

	this.instance_68 = new lib.BallFadeInOut();
	this.instance_68.setTransform(1797.75,1758.9,1,1,0,0,0,27,27);
	this.instance_68.alpha = 0.6016;

	this.instance_69 = new lib.BallFadeInOut();
	this.instance_69.setTransform(1726.15,1758.9,1,1,0,0,0,27,27);
	this.instance_69.alpha = 0.6016;

	this.instance_70 = new lib.BallFadeInOut();
	this.instance_70.setTransform(1654.55,1758.9,1,1,0,0,0,27,27);
	this.instance_70.alpha = 0.6016;

	this.instance_71 = new lib.BallFadeInOut();
	this.instance_71.setTransform(1582.95,1758.9,1,1,0,0,0,27,27);
	this.instance_71.alpha = 0.6016;

	this.instance_72 = new lib.BallFadeInOut();
	this.instance_72.setTransform(1511.35,1758.9,1,1,0,0,0,27,27);
	this.instance_72.alpha = 0.6016;

	this.instance_73 = new lib.BallFadeInOut();
	this.instance_73.setTransform(580.55,1758.9,1,1,0,0,0,27,27);
	this.instance_73.alpha = 0.6016;

	this.instance_74 = new lib.BallFadeInOut();
	this.instance_74.setTransform(508.95,1758.9,1,1,0,0,0,27,27);
	this.instance_74.alpha = 0.6016;

	this.instance_75 = new lib.BallFadeInOut();
	this.instance_75.setTransform(437.35,1758.9,1,1,0,0,0,27,27);
	this.instance_75.alpha = 0.6016;

	this.instance_76 = new lib.BallFadeInOut();
	this.instance_76.setTransform(1439.75,1758.9,1,1,0,0,0,27,27);
	this.instance_76.alpha = 0.6016;

	this.instance_77 = new lib.BallFadeInOut();
	this.instance_77.setTransform(1368.15,1758.9,1,1,0,0,0,27,27);
	this.instance_77.alpha = 0.6016;

	this.instance_78 = new lib.BallFadeInOut();
	this.instance_78.setTransform(1296.55,1758.9,1,1,0,0,0,27,27);
	this.instance_78.alpha = 0.6016;

	this.instance_79 = new lib.BallFadeInOut();
	this.instance_79.setTransform(1224.95,1758.9,1,1,0,0,0,27,27);
	this.instance_79.alpha = 0.6016;

	this.instance_80 = new lib.BallFadeInOut();
	this.instance_80.setTransform(1153.35,1758.9,1,1,0,0,0,27,27);
	this.instance_80.alpha = 0.6016;

	this.instance_81 = new lib.BallFadeInOut();
	this.instance_81.setTransform(1081.75,1758.9,1,1,0,0,0,27,27);
	this.instance_81.alpha = 0.6016;

	this.instance_82 = new lib.BallFadeInOut();
	this.instance_82.setTransform(1010.15,1758.9,1,1,0,0,0,27,27);
	this.instance_82.alpha = 0.6016;

	this.instance_83 = new lib.BallFadeInOut();
	this.instance_83.setTransform(938.55,1758.9,1,1,0,0,0,27,27);
	this.instance_83.alpha = 0.6016;

	this.instance_84 = new lib.BallFadeInOut();
	this.instance_84.setTransform(866.95,1758.9,1,1,0,0,0,27,27);
	this.instance_84.alpha = 0.6016;

	this.instance_85 = new lib.BallFadeInOut();
	this.instance_85.setTransform(795.35,1758.9,1,1,0,0,0,27,27);
	this.instance_85.alpha = 0.6016;

	this.instance_86 = new lib.BallFadeInOut();
	this.instance_86.setTransform(723.75,1758.9,1,1,0,0,0,27,27);
	this.instance_86.alpha = 0.6016;

	this.instance_87 = new lib.BallFadeInOut();
	this.instance_87.setTransform(652.15,1758.9,1,1,0,0,0,27,27);
	this.instance_87.alpha = 0.6016;

	this.instance_88 = new lib.BallFadeInOut();
	this.instance_88.setTransform(1942.2,1686.9,1,1,0,0,0,27,27);
	this.instance_88.alpha = 0.6016;

	this.instance_89 = new lib.BallFadeInOut();
	this.instance_89.setTransform(1869.35,1686.9,1,1,0,0,0,27,27);
	this.instance_89.alpha = 0.6016;

	this.instance_90 = new lib.BallFadeInOut();
	this.instance_90.setTransform(1797.75,1686.9,1,1,0,0,0,27,27);
	this.instance_90.alpha = 0.6016;

	this.instance_91 = new lib.BallFadeInOut();
	this.instance_91.setTransform(1726.15,1686.9,1,1,0,0,0,27,27);
	this.instance_91.alpha = 0.6016;

	this.instance_92 = new lib.BallFadeInOut();
	this.instance_92.setTransform(1654.55,1686.9,1,1,0,0,0,27,27);
	this.instance_92.alpha = 0.6016;

	this.instance_93 = new lib.BallFadeInOut();
	this.instance_93.setTransform(1582.95,1686.9,1,1,0,0,0,27,27);
	this.instance_93.alpha = 0.6016;

	this.instance_94 = new lib.BallFadeInOut();
	this.instance_94.setTransform(1511.35,1686.9,1,1,0,0,0,27,27);
	this.instance_94.alpha = 0.6016;

	this.instance_95 = new lib.BallFadeInOut();
	this.instance_95.setTransform(580.55,1686.9,1,1,0,0,0,27,27);
	this.instance_95.alpha = 0.6016;

	this.instance_96 = new lib.BallFadeInOut();
	this.instance_96.setTransform(508.95,1686.9,1,1,0,0,0,27,27);
	this.instance_96.alpha = 0.6016;

	this.instance_97 = new lib.BallFadeInOut();
	this.instance_97.setTransform(437.35,1686.9,1,1,0,0,0,27,27);
	this.instance_97.alpha = 0.6016;

	this.instance_98 = new lib.BallFadeInOut();
	this.instance_98.setTransform(1439.75,1686.9,1,1,0,0,0,27,27);
	this.instance_98.alpha = 0.6016;

	this.instance_99 = new lib.BallFadeInOut();
	this.instance_99.setTransform(1368.15,1686.9,1,1,0,0,0,27,27);
	this.instance_99.alpha = 0.6016;

	this.instance_100 = new lib.BallFadeInOut();
	this.instance_100.setTransform(1296.55,1686.9,1,1,0,0,0,27,27);
	this.instance_100.alpha = 0.6016;

	this.instance_101 = new lib.BallFadeInOut();
	this.instance_101.setTransform(1224.95,1686.9,1,1,0,0,0,27,27);
	this.instance_101.alpha = 0.6016;

	this.instance_102 = new lib.BallFadeInOut();
	this.instance_102.setTransform(1153.35,1686.9,1,1,0,0,0,27,27);
	this.instance_102.alpha = 0.6016;

	this.instance_103 = new lib.BallFadeInOut();
	this.instance_103.setTransform(1081.75,1686.9,1,1,0,0,0,27,27);
	this.instance_103.alpha = 0.6016;

	this.instance_104 = new lib.BallFadeInOut();
	this.instance_104.setTransform(1010.15,1686.9,1,1,0,0,0,27,27);
	this.instance_104.alpha = 0.6016;

	this.instance_105 = new lib.BallFadeInOut();
	this.instance_105.setTransform(938.55,1686.9,1,1,0,0,0,27,27);
	this.instance_105.alpha = 0.6016;

	this.instance_106 = new lib.BallFadeInOut();
	this.instance_106.setTransform(866.95,1686.9,1,1,0,0,0,27,27);
	this.instance_106.alpha = 0.6016;

	this.instance_107 = new lib.BallFadeInOut();
	this.instance_107.setTransform(795.35,1686.9,1,1,0,0,0,27,27);
	this.instance_107.alpha = 0.6016;

	this.instance_108 = new lib.BallFadeInOut();
	this.instance_108.setTransform(723.75,1686.9,1,1,0,0,0,27,27);
	this.instance_108.alpha = 0.6016;

	this.instance_109 = new lib.BallFadeInOut();
	this.instance_109.setTransform(652.15,1686.9,1,1,0,0,0,27,27);
	this.instance_109.alpha = 0.6016;

	this.instance_110 = new lib.BallFadeInOut();
	this.instance_110.setTransform(1942.2,1614.9,1,1,0,0,0,27,27);
	this.instance_110.alpha = 0.6016;

	this.instance_111 = new lib.BallFadeInOut();
	this.instance_111.setTransform(1869.35,1614.9,1,1,0,0,0,27,27);
	this.instance_111.alpha = 0.6016;

	this.instance_112 = new lib.BallFadeInOut();
	this.instance_112.setTransform(1797.75,1614.9,1,1,0,0,0,27,27);
	this.instance_112.alpha = 0.6016;

	this.instance_113 = new lib.BallFadeInOut();
	this.instance_113.setTransform(1726.15,1614.9,1,1,0,0,0,27,27);
	this.instance_113.alpha = 0.6016;

	this.instance_114 = new lib.BallFadeInOut();
	this.instance_114.setTransform(1654.55,1614.9,1,1,0,0,0,27,27);
	this.instance_114.alpha = 0.6016;

	this.instance_115 = new lib.BallFadeInOut();
	this.instance_115.setTransform(1582.95,1614.9,1,1,0,0,0,27,27);
	this.instance_115.alpha = 0.6016;

	this.instance_116 = new lib.BallFadeInOut();
	this.instance_116.setTransform(1511.35,1614.9,1,1,0,0,0,27,27);
	this.instance_116.alpha = 0.6016;

	this.instance_117 = new lib.BallFadeInOut();
	this.instance_117.setTransform(580.55,1614.9,1,1,0,0,0,27,27);
	this.instance_117.alpha = 0.6016;

	this.instance_118 = new lib.BallFadeInOut();
	this.instance_118.setTransform(508.95,1614.9,1,1,0,0,0,27,27);
	this.instance_118.alpha = 0.6016;

	this.instance_119 = new lib.BallFadeInOut();
	this.instance_119.setTransform(437.35,1614.9,1,1,0,0,0,27,27);
	this.instance_119.alpha = 0.6016;

	this.instance_120 = new lib.BallFadeInOut();
	this.instance_120.setTransform(1439.75,1614.9,1,1,0,0,0,27,27);
	this.instance_120.alpha = 0.6016;

	this.instance_121 = new lib.BallFadeInOut();
	this.instance_121.setTransform(1368.15,1614.9,1,1,0,0,0,27,27);
	this.instance_121.alpha = 0.6016;

	this.instance_122 = new lib.BallFadeInOut();
	this.instance_122.setTransform(1296.55,1614.9,1,1,0,0,0,27,27);
	this.instance_122.alpha = 0.6016;

	this.instance_123 = new lib.BallFadeInOut();
	this.instance_123.setTransform(1224.95,1614.9,1,1,0,0,0,27,27);
	this.instance_123.alpha = 0.6016;

	this.instance_124 = new lib.BallFadeInOut();
	this.instance_124.setTransform(1153.35,1614.9,1,1,0,0,0,27,27);
	this.instance_124.alpha = 0.6016;

	this.instance_125 = new lib.BallFadeInOut();
	this.instance_125.setTransform(1081.75,1614.9,1,1,0,0,0,27,27);
	this.instance_125.alpha = 0.6016;

	this.instance_126 = new lib.BallFadeInOut();
	this.instance_126.setTransform(1010.15,1614.9,1,1,0,0,0,27,27);
	this.instance_126.alpha = 0.6016;

	this.instance_127 = new lib.BallFadeInOut();
	this.instance_127.setTransform(938.55,1614.9,1,1,0,0,0,27,27);
	this.instance_127.alpha = 0.6016;

	this.instance_128 = new lib.BallFadeInOut();
	this.instance_128.setTransform(866.95,1614.9,1,1,0,0,0,27,27);
	this.instance_128.alpha = 0.6016;

	this.instance_129 = new lib.BallFadeInOut();
	this.instance_129.setTransform(795.35,1614.9,1,1,0,0,0,27,27);
	this.instance_129.alpha = 0.6016;

	this.instance_130 = new lib.BallFadeInOut();
	this.instance_130.setTransform(723.75,1614.9,1,1,0,0,0,27,27);
	this.instance_130.alpha = 0.6016;

	this.instance_131 = new lib.BallFadeInOut();
	this.instance_131.setTransform(652.15,1614.9,1,1,0,0,0,27,27);
	this.instance_131.alpha = 0.6016;

	this.instance_132 = new lib.BallFadeInOut();
	this.instance_132.setTransform(1942.2,1542.9,1,1,0,0,0,27,27);
	this.instance_132.alpha = 0.6016;

	this.instance_133 = new lib.BallFadeInOut();
	this.instance_133.setTransform(1869.35,1542.9,1,1,0,0,0,27,27);
	this.instance_133.alpha = 0.6016;

	this.instance_134 = new lib.BallFadeInOut();
	this.instance_134.setTransform(1797.75,1542.9,1,1,0,0,0,27,27);
	this.instance_134.alpha = 0.6016;

	this.instance_135 = new lib.BallFadeInOut();
	this.instance_135.setTransform(1726.15,1542.9,1,1,0,0,0,27,27);
	this.instance_135.alpha = 0.6016;

	this.instance_136 = new lib.BallFadeInOut();
	this.instance_136.setTransform(1654.55,1542.9,1,1,0,0,0,27,27);
	this.instance_136.alpha = 0.6016;

	this.instance_137 = new lib.BallFadeInOut();
	this.instance_137.setTransform(1582.95,1542.9,1,1,0,0,0,27,27);
	this.instance_137.alpha = 0.6016;

	this.instance_138 = new lib.BallFadeInOut();
	this.instance_138.setTransform(1511.35,1542.9,1,1,0,0,0,27,27);
	this.instance_138.alpha = 0.6016;

	this.instance_139 = new lib.BallFadeInOut();
	this.instance_139.setTransform(580.55,1542.9,1,1,0,0,0,27,27);
	this.instance_139.alpha = 0.6016;

	this.instance_140 = new lib.BallFadeInOut();
	this.instance_140.setTransform(508.95,1542.9,1,1,0,0,0,27,27);
	this.instance_140.alpha = 0.6016;

	this.instance_141 = new lib.BallFadeInOut();
	this.instance_141.setTransform(437.35,1542.9,1,1,0,0,0,27,27);
	this.instance_141.alpha = 0.6016;

	this.instance_142 = new lib.BallFadeInOut();
	this.instance_142.setTransform(1439.75,1542.9,1,1,0,0,0,27,27);
	this.instance_142.alpha = 0.6016;

	this.instance_143 = new lib.BallFadeInOut();
	this.instance_143.setTransform(1368.15,1542.9,1,1,0,0,0,27,27);
	this.instance_143.alpha = 0.6016;

	this.instance_144 = new lib.BallFadeInOut();
	this.instance_144.setTransform(1296.55,1542.9,1,1,0,0,0,27,27);
	this.instance_144.alpha = 0.6016;

	this.instance_145 = new lib.BallFadeInOut();
	this.instance_145.setTransform(1224.95,1542.9,1,1,0,0,0,27,27);
	this.instance_145.alpha = 0.6016;

	this.instance_146 = new lib.BallFadeInOut();
	this.instance_146.setTransform(1153.35,1542.9,1,1,0,0,0,27,27);
	this.instance_146.alpha = 0.6016;

	this.instance_147 = new lib.BallFadeInOut();
	this.instance_147.setTransform(1081.75,1542.9,1,1,0,0,0,27,27);
	this.instance_147.alpha = 0.6016;

	this.instance_148 = new lib.BallFadeInOut();
	this.instance_148.setTransform(1010.15,1542.9,1,1,0,0,0,27,27);
	this.instance_148.alpha = 0.6016;

	this.instance_149 = new lib.BallFadeInOut();
	this.instance_149.setTransform(938.55,1542.9,1,1,0,0,0,27,27);
	this.instance_149.alpha = 0.6016;

	this.instance_150 = new lib.BallFadeInOut();
	this.instance_150.setTransform(866.95,1542.9,1,1,0,0,0,27,27);
	this.instance_150.alpha = 0.6016;

	this.instance_151 = new lib.BallFadeInOut();
	this.instance_151.setTransform(795.35,1542.9,1,1,0,0,0,27,27);
	this.instance_151.alpha = 0.6016;

	this.instance_152 = new lib.BallFadeInOut();
	this.instance_152.setTransform(723.75,1542.9,1,1,0,0,0,27,27);
	this.instance_152.alpha = 0.6016;

	this.instance_153 = new lib.BallFadeInOut();
	this.instance_153.setTransform(652.15,1542.9,1,1,0,0,0,27,27);
	this.instance_153.alpha = 0.6016;

	this.instance_154 = new lib.BallFadeInOut();
	this.instance_154.setTransform(1942.2,1470.9,1,1,0,0,0,27,27);
	this.instance_154.alpha = 0.6016;

	this.instance_155 = new lib.BallFadeInOut();
	this.instance_155.setTransform(1869.35,1470.9,1,1,0,0,0,27,27);
	this.instance_155.alpha = 0.6016;

	this.instance_156 = new lib.BallFadeInOut();
	this.instance_156.setTransform(1797.75,1470.9,1,1,0,0,0,27,27);
	this.instance_156.alpha = 0.6016;

	this.instance_157 = new lib.BallFadeInOut();
	this.instance_157.setTransform(1726.15,1470.9,1,1,0,0,0,27,27);
	this.instance_157.alpha = 0.6016;

	this.instance_158 = new lib.BallFadeInOut();
	this.instance_158.setTransform(1654.55,1470.9,1,1,0,0,0,27,27);
	this.instance_158.alpha = 0.6016;

	this.instance_159 = new lib.BallFadeInOut();
	this.instance_159.setTransform(1582.95,1470.9,1,1,0,0,0,27,27);
	this.instance_159.alpha = 0.6016;

	this.instance_160 = new lib.BallFadeInOut();
	this.instance_160.setTransform(1511.35,1470.9,1,1,0,0,0,27,27);
	this.instance_160.alpha = 0.6016;

	this.instance_161 = new lib.BallFadeInOut();
	this.instance_161.setTransform(580.55,1470.9,1,1,0,0,0,27,27);
	this.instance_161.alpha = 0.6016;

	this.instance_162 = new lib.BallFadeInOut();
	this.instance_162.setTransform(508.95,1470.9,1,1,0,0,0,27,27);
	this.instance_162.alpha = 0.6016;

	this.instance_163 = new lib.BallFadeInOut();
	this.instance_163.setTransform(437.35,1470.9,1,1,0,0,0,27,27);
	this.instance_163.alpha = 0.6016;

	this.instance_164 = new lib.BallFadeInOut();
	this.instance_164.setTransform(1439.75,1470.9,1,1,0,0,0,27,27);
	this.instance_164.alpha = 0.6016;

	this.instance_165 = new lib.BallFadeInOut();
	this.instance_165.setTransform(1368.15,1470.9,1,1,0,0,0,27,27);
	this.instance_165.alpha = 0.6016;

	this.instance_166 = new lib.BallFadeInOut();
	this.instance_166.setTransform(1296.55,1470.9,1,1,0,0,0,27,27);
	this.instance_166.alpha = 0.6016;

	this.instance_167 = new lib.BallFadeInOut();
	this.instance_167.setTransform(1224.95,1470.9,1,1,0,0,0,27,27);
	this.instance_167.alpha = 0.6016;

	this.instance_168 = new lib.BallFadeInOut();
	this.instance_168.setTransform(1153.35,1470.9,1,1,0,0,0,27,27);
	this.instance_168.alpha = 0.6016;

	this.instance_169 = new lib.BallFadeInOut();
	this.instance_169.setTransform(1081.75,1470.9,1,1,0,0,0,27,27);
	this.instance_169.alpha = 0.6016;

	this.instance_170 = new lib.BallFadeInOut();
	this.instance_170.setTransform(1010.15,1470.9,1,1,0,0,0,27,27);
	this.instance_170.alpha = 0.6016;

	this.instance_171 = new lib.BallFadeInOut();
	this.instance_171.setTransform(938.55,1470.9,1,1,0,0,0,27,27);
	this.instance_171.alpha = 0.6016;

	this.instance_172 = new lib.BallFadeInOut();
	this.instance_172.setTransform(866.95,1470.9,1,1,0,0,0,27,27);
	this.instance_172.alpha = 0.6016;

	this.instance_173 = new lib.BallFadeInOut();
	this.instance_173.setTransform(795.35,1470.9,1,1,0,0,0,27,27);
	this.instance_173.alpha = 0.6016;

	this.instance_174 = new lib.BallFadeInOut();
	this.instance_174.setTransform(723.75,1470.9,1,1,0,0,0,27,27);
	this.instance_174.alpha = 0.6016;

	this.instance_175 = new lib.BallFadeInOut();
	this.instance_175.setTransform(652.15,1470.9,1,1,0,0,0,27,27);
	this.instance_175.alpha = 0.6016;

	this.instance_176 = new lib.BallFadeInOut();
	this.instance_176.setTransform(1942.2,1398.9,1,1,0,0,0,27,27);
	this.instance_176.alpha = 0.6016;

	this.instance_177 = new lib.BallFadeInOut();
	this.instance_177.setTransform(1869.35,1398.9,1,1,0,0,0,27,27);
	this.instance_177.alpha = 0.6016;

	this.instance_178 = new lib.BallFadeInOut();
	this.instance_178.setTransform(1797.75,1398.9,1,1,0,0,0,27,27);
	this.instance_178.alpha = 0.6016;

	this.instance_179 = new lib.BallFadeInOut();
	this.instance_179.setTransform(1726.15,1398.9,1,1,0,0,0,27,27);
	this.instance_179.alpha = 0.6016;

	this.instance_180 = new lib.BallFadeInOut();
	this.instance_180.setTransform(1654.55,1398.9,1,1,0,0,0,27,27);
	this.instance_180.alpha = 0.6016;

	this.instance_181 = new lib.BallFadeInOut();
	this.instance_181.setTransform(1582.95,1398.9,1,1,0,0,0,27,27);
	this.instance_181.alpha = 0.6016;

	this.instance_182 = new lib.BallFadeInOut();
	this.instance_182.setTransform(1511.35,1398.9,1,1,0,0,0,27,27);
	this.instance_182.alpha = 0.6016;

	this.instance_183 = new lib.BallFadeInOut();
	this.instance_183.setTransform(580.55,1398.9,1,1,0,0,0,27,27);
	this.instance_183.alpha = 0.6016;

	this.instance_184 = new lib.BallFadeInOut();
	this.instance_184.setTransform(508.95,1398.9,1,1,0,0,0,27,27);
	this.instance_184.alpha = 0.6016;

	this.instance_185 = new lib.BallFadeInOut();
	this.instance_185.setTransform(437.35,1398.9,1,1,0,0,0,27,27);
	this.instance_185.alpha = 0.6016;

	this.instance_186 = new lib.BallFadeInOut();
	this.instance_186.setTransform(1439.75,1398.9,1,1,0,0,0,27,27);
	this.instance_186.alpha = 0.6016;

	this.instance_187 = new lib.BallFadeInOut();
	this.instance_187.setTransform(1368.15,1398.9,1,1,0,0,0,27,27);
	this.instance_187.alpha = 0.6016;

	this.instance_188 = new lib.BallFadeInOut();
	this.instance_188.setTransform(1296.55,1398.9,1,1,0,0,0,27,27);
	this.instance_188.alpha = 0.6016;

	this.instance_189 = new lib.BallFadeInOut();
	this.instance_189.setTransform(1224.95,1398.9,1,1,0,0,0,27,27);
	this.instance_189.alpha = 0.6016;

	this.instance_190 = new lib.BallFadeInOut();
	this.instance_190.setTransform(1153.35,1398.9,1,1,0,0,0,27,27);
	this.instance_190.alpha = 0.6016;

	this.instance_191 = new lib.BallFadeInOut();
	this.instance_191.setTransform(1081.75,1398.9,1,1,0,0,0,27,27);
	this.instance_191.alpha = 0.6016;

	this.instance_192 = new lib.BallFadeInOut();
	this.instance_192.setTransform(1010.15,1398.9,1,1,0,0,0,27,27);
	this.instance_192.alpha = 0.6016;

	this.instance_193 = new lib.BallFadeInOut();
	this.instance_193.setTransform(938.55,1398.9,1,1,0,0,0,27,27);
	this.instance_193.alpha = 0.6016;

	this.instance_194 = new lib.BallFadeInOut();
	this.instance_194.setTransform(866.95,1398.9,1,1,0,0,0,27,27);
	this.instance_194.alpha = 0.6016;

	this.instance_195 = new lib.BallFadeInOut();
	this.instance_195.setTransform(795.35,1398.9,1,1,0,0,0,27,27);
	this.instance_195.alpha = 0.6016;

	this.instance_196 = new lib.BallFadeInOut();
	this.instance_196.setTransform(723.75,1398.9,1,1,0,0,0,27,27);
	this.instance_196.alpha = 0.6016;

	this.instance_197 = new lib.BallFadeInOut();
	this.instance_197.setTransform(652.15,1398.9,1,1,0,0,0,27,27);
	this.instance_197.alpha = 0.6016;

	this.instance_198 = new lib.BallFadeInOut();
	this.instance_198.setTransform(1942.2,1326.9,1,1,0,0,0,27,27);
	this.instance_198.alpha = 0.6016;

	this.instance_199 = new lib.BallFadeInOut();
	this.instance_199.setTransform(1869.35,1326.9,1,1,0,0,0,27,27);
	this.instance_199.alpha = 0.6016;

	this.instance_200 = new lib.BallFadeInOut();
	this.instance_200.setTransform(1797.75,1326.9,1,1,0,0,0,27,27);
	this.instance_200.alpha = 0.6016;

	this.instance_201 = new lib.BallFadeInOut();
	this.instance_201.setTransform(1726.15,1326.9,1,1,0,0,0,27,27);
	this.instance_201.alpha = 0.6016;

	this.instance_202 = new lib.BallFadeInOut();
	this.instance_202.setTransform(1654.55,1326.9,1,1,0,0,0,27,27);
	this.instance_202.alpha = 0.6016;

	this.instance_203 = new lib.BallFadeInOut();
	this.instance_203.setTransform(1582.95,1326.9,1,1,0,0,0,27,27);
	this.instance_203.alpha = 0.6016;

	this.instance_204 = new lib.BallFadeInOut();
	this.instance_204.setTransform(1511.35,1326.9,1,1,0,0,0,27,27);
	this.instance_204.alpha = 0.6016;

	this.instance_205 = new lib.BallFadeInOut();
	this.instance_205.setTransform(580.55,1326.9,1,1,0,0,0,27,27);
	this.instance_205.alpha = 0.6016;

	this.instance_206 = new lib.BallFadeInOut();
	this.instance_206.setTransform(508.95,1326.9,1,1,0,0,0,27,27);
	this.instance_206.alpha = 0.6016;

	this.instance_207 = new lib.BallFadeInOut();
	this.instance_207.setTransform(437.35,1326.9,1,1,0,0,0,27,27);
	this.instance_207.alpha = 0.6016;

	this.instance_208 = new lib.BallFadeInOut();
	this.instance_208.setTransform(1439.75,1326.9,1,1,0,0,0,27,27);
	this.instance_208.alpha = 0.6016;

	this.instance_209 = new lib.BallFadeInOut();
	this.instance_209.setTransform(1368.15,1326.9,1,1,0,0,0,27,27);
	this.instance_209.alpha = 0.6016;

	this.instance_210 = new lib.BallFadeInOut();
	this.instance_210.setTransform(1296.55,1326.9,1,1,0,0,0,27,27);
	this.instance_210.alpha = 0.6016;

	this.instance_211 = new lib.BallFadeInOut();
	this.instance_211.setTransform(1224.95,1326.9,1,1,0,0,0,27,27);
	this.instance_211.alpha = 0.6016;

	this.instance_212 = new lib.BallFadeInOut();
	this.instance_212.setTransform(1153.35,1326.9,1,1,0,0,0,27,27);
	this.instance_212.alpha = 0.6016;

	this.instance_213 = new lib.BallFadeInOut();
	this.instance_213.setTransform(1081.75,1326.9,1,1,0,0,0,27,27);
	this.instance_213.alpha = 0.6016;

	this.instance_214 = new lib.BallFadeInOut();
	this.instance_214.setTransform(1010.15,1326.9,1,1,0,0,0,27,27);
	this.instance_214.alpha = 0.6016;

	this.instance_215 = new lib.BallFadeInOut();
	this.instance_215.setTransform(938.55,1326.9,1,1,0,0,0,27,27);
	this.instance_215.alpha = 0.6016;

	this.instance_216 = new lib.BallFadeInOut();
	this.instance_216.setTransform(866.95,1326.9,1,1,0,0,0,27,27);
	this.instance_216.alpha = 0.6016;

	this.instance_217 = new lib.BallFadeInOut();
	this.instance_217.setTransform(795.35,1326.9,1,1,0,0,0,27,27);
	this.instance_217.alpha = 0.6016;

	this.instance_218 = new lib.BallFadeInOut();
	this.instance_218.setTransform(723.75,1326.9,1,1,0,0,0,27,27);
	this.instance_218.alpha = 0.6016;

	this.instance_219 = new lib.BallFadeInOut();
	this.instance_219.setTransform(652.15,1326.9,1,1,0,0,0,27,27);
	this.instance_219.alpha = 0.6016;

	this.instance_220 = new lib.BallFadeInOut();
	this.instance_220.setTransform(1942.2,1254.9,1,1,0,0,0,27,27);
	this.instance_220.alpha = 0.6016;

	this.instance_221 = new lib.BallFadeInOut();
	this.instance_221.setTransform(1869.35,1254.9,1,1,0,0,0,27,27);
	this.instance_221.alpha = 0.6016;

	this.instance_222 = new lib.BallFadeInOut();
	this.instance_222.setTransform(1797.75,1254.9,1,1,0,0,0,27,27);
	this.instance_222.alpha = 0.6016;

	this.instance_223 = new lib.BallFadeInOut();
	this.instance_223.setTransform(1726.15,1254.9,1,1,0,0,0,27,27);
	this.instance_223.alpha = 0.6016;

	this.instance_224 = new lib.BallFadeInOut();
	this.instance_224.setTransform(1654.55,1254.9,1,1,0,0,0,27,27);
	this.instance_224.alpha = 0.6016;

	this.instance_225 = new lib.BallFadeInOut();
	this.instance_225.setTransform(1582.95,1254.9,1,1,0,0,0,27,27);
	this.instance_225.alpha = 0.6016;

	this.instance_226 = new lib.BallFadeInOut();
	this.instance_226.setTransform(1511.35,1254.9,1,1,0,0,0,27,27);
	this.instance_226.alpha = 0.6016;

	this.instance_227 = new lib.BallFadeInOut();
	this.instance_227.setTransform(580.55,1254.9,1,1,0,0,0,27,27);
	this.instance_227.alpha = 0.6016;

	this.instance_228 = new lib.BallFadeInOut();
	this.instance_228.setTransform(508.95,1254.9,1,1,0,0,0,27,27);
	this.instance_228.alpha = 0.6016;

	this.instance_229 = new lib.BallFadeInOut();
	this.instance_229.setTransform(437.35,1254.9,1,1,0,0,0,27,27);
	this.instance_229.alpha = 0.6016;

	this.instance_230 = new lib.BallFadeInOut();
	this.instance_230.setTransform(1439.75,1254.9,1,1,0,0,0,27,27);
	this.instance_230.alpha = 0.6016;

	this.instance_231 = new lib.BallFadeInOut();
	this.instance_231.setTransform(1368.15,1254.9,1,1,0,0,0,27,27);
	this.instance_231.alpha = 0.6016;

	this.instance_232 = new lib.BallFadeInOut();
	this.instance_232.setTransform(1296.55,1254.9,1,1,0,0,0,27,27);
	this.instance_232.alpha = 0.6016;

	this.instance_233 = new lib.BallFadeInOut();
	this.instance_233.setTransform(1224.95,1254.9,1,1,0,0,0,27,27);
	this.instance_233.alpha = 0.6016;

	this.instance_234 = new lib.BallFadeInOut();
	this.instance_234.setTransform(1153.35,1254.9,1,1,0,0,0,27,27);
	this.instance_234.alpha = 0.6016;

	this.instance_235 = new lib.BallFadeInOut();
	this.instance_235.setTransform(1081.75,1254.9,1,1,0,0,0,27,27);
	this.instance_235.alpha = 0.6016;

	this.instance_236 = new lib.BallFadeInOut();
	this.instance_236.setTransform(1010.15,1254.9,1,1,0,0,0,27,27);
	this.instance_236.alpha = 0.6016;

	this.instance_237 = new lib.BallFadeInOut();
	this.instance_237.setTransform(938.55,1254.9,1,1,0,0,0,27,27);
	this.instance_237.alpha = 0.6016;

	this.instance_238 = new lib.BallFadeInOut();
	this.instance_238.setTransform(866.95,1254.9,1,1,0,0,0,27,27);
	this.instance_238.alpha = 0.6016;

	this.instance_239 = new lib.BallFadeInOut();
	this.instance_239.setTransform(795.35,1254.9,1,1,0,0,0,27,27);
	this.instance_239.alpha = 0.6016;

	this.instance_240 = new lib.BallFadeInOut();
	this.instance_240.setTransform(723.75,1254.9,1,1,0,0,0,27,27);
	this.instance_240.alpha = 0.6016;

	this.instance_241 = new lib.BallFadeInOut();
	this.instance_241.setTransform(652.15,1254.9,1,1,0,0,0,27,27);
	this.instance_241.alpha = 0.6016;

	this.instance_242 = new lib.BallFadeInOut();
	this.instance_242.setTransform(1942.2,1182.9,1,1,0,0,0,27,27);
	this.instance_242.alpha = 0.6016;

	this.instance_243 = new lib.BallFadeInOut();
	this.instance_243.setTransform(1869.35,1182.9,1,1,0,0,0,27,27);
	this.instance_243.alpha = 0.6016;

	this.instance_244 = new lib.BallFadeInOut();
	this.instance_244.setTransform(1797.75,1182.9,1,1,0,0,0,27,27);
	this.instance_244.alpha = 0.6016;

	this.instance_245 = new lib.BallFadeInOut();
	this.instance_245.setTransform(1726.15,1182.9,1,1,0,0,0,27,27);
	this.instance_245.alpha = 0.6016;

	this.instance_246 = new lib.BallFadeInOut();
	this.instance_246.setTransform(1654.55,1182.9,1,1,0,0,0,27,27);
	this.instance_246.alpha = 0.6016;

	this.instance_247 = new lib.BallFadeInOut();
	this.instance_247.setTransform(1582.95,1182.9,1,1,0,0,0,27,27);
	this.instance_247.alpha = 0.6016;

	this.instance_248 = new lib.BallFadeInOut();
	this.instance_248.setTransform(1511.35,1182.9,1,1,0,0,0,27,27);
	this.instance_248.alpha = 0.6016;

	this.instance_249 = new lib.BallFadeInOut();
	this.instance_249.setTransform(580.55,1182.9,1,1,0,0,0,27,27);
	this.instance_249.alpha = 0.6016;

	this.instance_250 = new lib.BallFadeInOut();
	this.instance_250.setTransform(508.95,1182.9,1,1,0,0,0,27,27);
	this.instance_250.alpha = 0.6016;

	this.instance_251 = new lib.BallFadeInOut();
	this.instance_251.setTransform(437.35,1182.9,1,1,0,0,0,27,27);
	this.instance_251.alpha = 0.6016;

	this.instance_252 = new lib.BallFadeInOut();
	this.instance_252.setTransform(1439.75,1182.9,1,1,0,0,0,27,27);
	this.instance_252.alpha = 0.6016;

	this.instance_253 = new lib.BallFadeInOut();
	this.instance_253.setTransform(1368.15,1182.9,1,1,0,0,0,27,27);
	this.instance_253.alpha = 0.6016;

	this.instance_254 = new lib.BallFadeInOut();
	this.instance_254.setTransform(1296.55,1182.9,1,1,0,0,0,27,27);
	this.instance_254.alpha = 0.6016;

	this.instance_255 = new lib.BallFadeInOut();
	this.instance_255.setTransform(1224.95,1182.9,1,1,0,0,0,27,27);
	this.instance_255.alpha = 0.6016;

	this.instance_256 = new lib.BallFadeInOut();
	this.instance_256.setTransform(1153.35,1182.9,1,1,0,0,0,27,27);
	this.instance_256.alpha = 0.6016;

	this.instance_257 = new lib.BallFadeInOut();
	this.instance_257.setTransform(1081.75,1182.9,1,1,0,0,0,27,27);
	this.instance_257.alpha = 0.6016;

	this.instance_258 = new lib.BallFadeInOut();
	this.instance_258.setTransform(1010.15,1182.9,1,1,0,0,0,27,27);
	this.instance_258.alpha = 0.6016;

	this.instance_259 = new lib.BallFadeInOut();
	this.instance_259.setTransform(938.55,1182.9,1,1,0,0,0,27,27);
	this.instance_259.alpha = 0.6016;

	this.instance_260 = new lib.BallFadeInOut();
	this.instance_260.setTransform(866.95,1182.9,1,1,0,0,0,27,27);
	this.instance_260.alpha = 0.6016;

	this.instance_261 = new lib.BallFadeInOut();
	this.instance_261.setTransform(795.35,1182.9,1,1,0,0,0,27,27);
	this.instance_261.alpha = 0.6016;

	this.instance_262 = new lib.BallFadeInOut();
	this.instance_262.setTransform(723.75,1182.9,1,1,0,0,0,27,27);
	this.instance_262.alpha = 0.6016;

	this.instance_263 = new lib.BallFadeInOut();
	this.instance_263.setTransform(652.15,1182.9,1,1,0,0,0,27,27);
	this.instance_263.alpha = 0.6016;

	this.instance_264 = new lib.BallFadeInOut();
	this.instance_264.setTransform(1942.2,1110.9,1,1,0,0,0,27,27);
	this.instance_264.alpha = 0.6016;

	this.instance_265 = new lib.BallFadeInOut();
	this.instance_265.setTransform(1869.35,1110.9,1,1,0,0,0,27,27);
	this.instance_265.alpha = 0.6016;

	this.instance_266 = new lib.BallFadeInOut();
	this.instance_266.setTransform(1797.75,1110.9,1,1,0,0,0,27,27);
	this.instance_266.alpha = 0.6016;

	this.instance_267 = new lib.BallFadeInOut();
	this.instance_267.setTransform(1726.15,1110.9,1,1,0,0,0,27,27);
	this.instance_267.alpha = 0.6016;

	this.instance_268 = new lib.BallFadeInOut();
	this.instance_268.setTransform(1654.55,1110.9,1,1,0,0,0,27,27);
	this.instance_268.alpha = 0.6016;

	this.instance_269 = new lib.BallFadeInOut();
	this.instance_269.setTransform(1582.95,1110.9,1,1,0,0,0,27,27);
	this.instance_269.alpha = 0.6016;

	this.instance_270 = new lib.BallFadeInOut();
	this.instance_270.setTransform(1511.35,1110.9,1,1,0,0,0,27,27);
	this.instance_270.alpha = 0.6016;

	this.instance_271 = new lib.BallFadeInOut();
	this.instance_271.setTransform(580.55,1110.9,1,1,0,0,0,27,27);
	this.instance_271.alpha = 0.6016;

	this.instance_272 = new lib.BallFadeInOut();
	this.instance_272.setTransform(508.95,1110.9,1,1,0,0,0,27,27);
	this.instance_272.alpha = 0.6016;

	this.instance_273 = new lib.BallFadeInOut();
	this.instance_273.setTransform(437.35,1110.9,1,1,0,0,0,27,27);
	this.instance_273.alpha = 0.6016;

	this.instance_274 = new lib.BallFadeInOut();
	this.instance_274.setTransform(1439.75,1110.9,1,1,0,0,0,27,27);
	this.instance_274.alpha = 0.6016;

	this.instance_275 = new lib.BallFadeInOut();
	this.instance_275.setTransform(1368.15,1110.9,1,1,0,0,0,27,27);
	this.instance_275.alpha = 0.6016;

	this.instance_276 = new lib.BallFadeInOut();
	this.instance_276.setTransform(1296.55,1110.9,1,1,0,0,0,27,27);
	this.instance_276.alpha = 0.6016;

	this.instance_277 = new lib.BallFadeInOut();
	this.instance_277.setTransform(1224.95,1110.9,1,1,0,0,0,27,27);
	this.instance_277.alpha = 0.6016;

	this.instance_278 = new lib.BallFadeInOut();
	this.instance_278.setTransform(1153.35,1110.9,1,1,0,0,0,27,27);
	this.instance_278.alpha = 0.6016;

	this.instance_279 = new lib.BallFadeInOut();
	this.instance_279.setTransform(1081.75,1110.9,1,1,0,0,0,27,27);
	this.instance_279.alpha = 0.6016;

	this.instance_280 = new lib.BallFadeInOut();
	this.instance_280.setTransform(1010.15,1110.9,1,1,0,0,0,27,27);
	this.instance_280.alpha = 0.6016;

	this.instance_281 = new lib.BallFadeInOut();
	this.instance_281.setTransform(938.55,1110.9,1,1,0,0,0,27,27);
	this.instance_281.alpha = 0.6016;

	this.instance_282 = new lib.BallFadeInOut();
	this.instance_282.setTransform(866.95,1110.9,1,1,0,0,0,27,27);
	this.instance_282.alpha = 0.6016;

	this.instance_283 = new lib.BallFadeInOut();
	this.instance_283.setTransform(795.35,1110.9,1,1,0,0,0,27,27);
	this.instance_283.alpha = 0.6016;

	this.instance_284 = new lib.BallFadeInOut();
	this.instance_284.setTransform(723.75,1110.9,1,1,0,0,0,27,27);
	this.instance_284.alpha = 0.6016;

	this.instance_285 = new lib.BallFadeInOut();
	this.instance_285.setTransform(652.15,1110.9,1,1,0,0,0,27,27);
	this.instance_285.alpha = 0.6016;

	this.instance_286 = new lib.BallFadeInOut();
	this.instance_286.setTransform(1942.2,1039.95,1,1,0,0,0,27,27);
	this.instance_286.alpha = 0.6016;

	this.instance_287 = new lib.BallFadeInOut();
	this.instance_287.setTransform(1869.35,1039.95,1,1,0,0,0,27,27);
	this.instance_287.alpha = 0.6016;

	this.instance_288 = new lib.BallFadeInOut();
	this.instance_288.setTransform(1797.75,1039.95,1,1,0,0,0,27,27);
	this.instance_288.alpha = 0.6016;

	this.instance_289 = new lib.BallFadeInOut();
	this.instance_289.setTransform(1726.15,1039.95,1,1,0,0,0,27,27);
	this.instance_289.alpha = 0.6016;

	this.instance_290 = new lib.BallFadeInOut();
	this.instance_290.setTransform(1654.55,1039.95,1,1,0,0,0,27,27);
	this.instance_290.alpha = 0.6016;

	this.instance_291 = new lib.BallFadeInOut();
	this.instance_291.setTransform(1582.95,1039.95,1,1,0,0,0,27,27);
	this.instance_291.alpha = 0.6016;

	this.instance_292 = new lib.BallFadeInOut();
	this.instance_292.setTransform(1511.35,1039.95,1,1,0,0,0,27,27);
	this.instance_292.alpha = 0.6016;

	this.instance_293 = new lib.BallFadeInOut();
	this.instance_293.setTransform(580.55,1039.95,1,1,0,0,0,27,27);
	this.instance_293.alpha = 0.6016;

	this.instance_294 = new lib.BallFadeInOut();
	this.instance_294.setTransform(508.95,1039.95,1,1,0,0,0,27,27);
	this.instance_294.alpha = 0.6016;

	this.instance_295 = new lib.BallFadeInOut();
	this.instance_295.setTransform(437.35,1039.95,1,1,0,0,0,27,27);
	this.instance_295.alpha = 0.6016;

	this.instance_296 = new lib.BallFadeInOut();
	this.instance_296.setTransform(1439.75,1039.95,1,1,0,0,0,27,27);
	this.instance_296.alpha = 0.6016;

	this.instance_297 = new lib.BallFadeInOut();
	this.instance_297.setTransform(1368.15,1039.95,1,1,0,0,0,27,27);
	this.instance_297.alpha = 0.6016;

	this.instance_298 = new lib.BallFadeInOut();
	this.instance_298.setTransform(1296.55,1039.95,1,1,0,0,0,27,27);
	this.instance_298.alpha = 0.6016;

	this.instance_299 = new lib.BallFadeInOut();
	this.instance_299.setTransform(1224.95,1039.95,1,1,0,0,0,27,27);
	this.instance_299.alpha = 0.6016;

	this.instance_300 = new lib.BallFadeInOut();
	this.instance_300.setTransform(1153.35,1039.95,1,1,0,0,0,27,27);
	this.instance_300.alpha = 0.6016;

	this.instance_301 = new lib.BallFadeInOut();
	this.instance_301.setTransform(1081.75,1039.95,1,1,0,0,0,27,27);
	this.instance_301.alpha = 0.6016;

	this.instance_302 = new lib.BallFadeInOut();
	this.instance_302.setTransform(1010.15,1039.95,1,1,0,0,0,27,27);
	this.instance_302.alpha = 0.6016;

	this.instance_303 = new lib.BallFadeInOut();
	this.instance_303.setTransform(938.55,1039.95,1,1,0,0,0,27,27);
	this.instance_303.alpha = 0.6016;

	this.instance_304 = new lib.BallFadeInOut();
	this.instance_304.setTransform(866.95,1039.95,1,1,0,0,0,27,27);
	this.instance_304.alpha = 0.6016;

	this.instance_305 = new lib.BallFadeInOut();
	this.instance_305.setTransform(795.35,1039.95,1,1,0,0,0,27,27);
	this.instance_305.alpha = 0.6016;

	this.instance_306 = new lib.BallFadeInOut();
	this.instance_306.setTransform(723.75,1039.95,1,1,0,0,0,27,27);
	this.instance_306.alpha = 0.6016;

	this.instance_307 = new lib.BallFadeInOut();
	this.instance_307.setTransform(652.15,1039.95,1,1,0,0,0,27,27);
	this.instance_307.alpha = 0.6016;

	this.instance_308 = new lib.BallFadeInOut();
	this.instance_308.setTransform(1942.2,967.7,1,1,0,0,0,27,27);
	this.instance_308.alpha = 0.6016;

	this.instance_309 = new lib.BallFadeInOut();
	this.instance_309.setTransform(1869.35,967.7,1,1,0,0,0,27,27);
	this.instance_309.alpha = 0.6016;

	this.instance_310 = new lib.BallFadeInOut();
	this.instance_310.setTransform(1797.75,967.7,1,1,0,0,0,27,27);
	this.instance_310.alpha = 0.6016;

	this.instance_311 = new lib.BallFadeInOut();
	this.instance_311.setTransform(1726.15,967.7,1,1,0,0,0,27,27);
	this.instance_311.alpha = 0.6016;

	this.instance_312 = new lib.BallFadeInOut();
	this.instance_312.setTransform(1654.55,967.7,1,1,0,0,0,27,27);
	this.instance_312.alpha = 0.6016;

	this.instance_313 = new lib.BallFadeInOut();
	this.instance_313.setTransform(1582.95,967.7,1,1,0,0,0,27,27);
	this.instance_313.alpha = 0.6016;

	this.instance_314 = new lib.BallFadeInOut();
	this.instance_314.setTransform(1511.35,967.7,1,1,0,0,0,27,27);
	this.instance_314.alpha = 0.6016;

	this.instance_315 = new lib.BallFadeInOut();
	this.instance_315.setTransform(580.55,967.7,1,1,0,0,0,27,27);
	this.instance_315.alpha = 0.6016;

	this.instance_316 = new lib.BallFadeInOut();
	this.instance_316.setTransform(508.95,967.7,1,1,0,0,0,27,27);
	this.instance_316.alpha = 0.6016;

	this.instance_317 = new lib.BallFadeInOut();
	this.instance_317.setTransform(437.35,967.7,1,1,0,0,0,27,27);
	this.instance_317.alpha = 0.6016;

	this.instance_318 = new lib.BallFadeInOut();
	this.instance_318.setTransform(1439.75,967.7,1,1,0,0,0,27,27);
	this.instance_318.alpha = 0.6016;

	this.instance_319 = new lib.BallFadeInOut();
	this.instance_319.setTransform(1368.15,967.7,1,1,0,0,0,27,27);
	this.instance_319.alpha = 0.6016;

	this.instance_320 = new lib.BallFadeInOut();
	this.instance_320.setTransform(1296.55,967.7,1,1,0,0,0,27,27);
	this.instance_320.alpha = 0.6016;

	this.instance_321 = new lib.BallFadeInOut();
	this.instance_321.setTransform(1224.95,967.7,1,1,0,0,0,27,27);
	this.instance_321.alpha = 0.6016;

	this.instance_322 = new lib.BallFadeInOut();
	this.instance_322.setTransform(1153.35,967.7,1,1,0,0,0,27,27);
	this.instance_322.alpha = 0.6016;

	this.instance_323 = new lib.BallFadeInOut();
	this.instance_323.setTransform(1081.75,967.7,1,1,0,0,0,27,27);
	this.instance_323.alpha = 0.6016;

	this.instance_324 = new lib.BallFadeInOut();
	this.instance_324.setTransform(1010.15,967.7,1,1,0,0,0,27,27);
	this.instance_324.alpha = 0.6016;

	this.instance_325 = new lib.BallFadeInOut();
	this.instance_325.setTransform(938.55,967.7,1,1,0,0,0,27,27);
	this.instance_325.alpha = 0.6016;

	this.instance_326 = new lib.BallFadeInOut();
	this.instance_326.setTransform(866.95,967.7,1,1,0,0,0,27,27);
	this.instance_326.alpha = 0.6016;

	this.instance_327 = new lib.BallFadeInOut();
	this.instance_327.setTransform(795.35,967.7,1,1,0,0,0,27,27);
	this.instance_327.alpha = 0.6016;

	this.instance_328 = new lib.BallFadeInOut();
	this.instance_328.setTransform(723.75,967.7,1,1,0,0,0,27,27);
	this.instance_328.alpha = 0.6016;

	this.instance_329 = new lib.BallFadeInOut();
	this.instance_329.setTransform(652.15,967.7,1,1,0,0,0,27,27);
	this.instance_329.alpha = 0.6016;

	this.instance_330 = new lib.BallFadeInOut();
	this.instance_330.setTransform(1942.2,895.7,1,1,0,0,0,27,27);
	this.instance_330.alpha = 0.6016;

	this.instance_331 = new lib.BallFadeInOut();
	this.instance_331.setTransform(1869.35,895.7,1,1,0,0,0,27,27);
	this.instance_331.alpha = 0.6016;

	this.instance_332 = new lib.BallFadeInOut();
	this.instance_332.setTransform(1797.75,895.7,1,1,0,0,0,27,27);
	this.instance_332.alpha = 0.6016;

	this.instance_333 = new lib.BallFadeInOut();
	this.instance_333.setTransform(1726.15,895.7,1,1,0,0,0,27,27);
	this.instance_333.alpha = 0.6016;

	this.instance_334 = new lib.BallFadeInOut();
	this.instance_334.setTransform(1654.55,895.7,1,1,0,0,0,27,27);
	this.instance_334.alpha = 0.6016;

	this.instance_335 = new lib.BallFadeInOut();
	this.instance_335.setTransform(1582.95,895.7,1,1,0,0,0,27,27);
	this.instance_335.alpha = 0.6016;

	this.instance_336 = new lib.BallFadeInOut();
	this.instance_336.setTransform(1511.35,895.7,1,1,0,0,0,27,27);
	this.instance_336.alpha = 0.6016;

	this.instance_337 = new lib.BallFadeInOut();
	this.instance_337.setTransform(580.55,895.7,1,1,0,0,0,27,27);
	this.instance_337.alpha = 0.6016;

	this.instance_338 = new lib.BallFadeInOut();
	this.instance_338.setTransform(508.95,895.7,1,1,0,0,0,27,27);
	this.instance_338.alpha = 0.6016;

	this.instance_339 = new lib.BallFadeInOut();
	this.instance_339.setTransform(437.35,895.7,1,1,0,0,0,27,27);
	this.instance_339.alpha = 0.6016;

	this.instance_340 = new lib.BallFadeInOut();
	this.instance_340.setTransform(1439.75,895.7,1,1,0,0,0,27,27);
	this.instance_340.alpha = 0.6016;

	this.instance_341 = new lib.BallFadeInOut();
	this.instance_341.setTransform(1368.15,895.7,1,1,0,0,0,27,27);
	this.instance_341.alpha = 0.6016;

	this.instance_342 = new lib.BallFadeInOut();
	this.instance_342.setTransform(1296.55,895.7,1,1,0,0,0,27,27);
	this.instance_342.alpha = 0.6016;

	this.instance_343 = new lib.BallFadeInOut();
	this.instance_343.setTransform(1224.95,895.7,1,1,0,0,0,27,27);
	this.instance_343.alpha = 0.6016;

	this.instance_344 = new lib.BallFadeInOut();
	this.instance_344.setTransform(1153.35,895.7,1,1,0,0,0,27,27);
	this.instance_344.alpha = 0.6016;

	this.instance_345 = new lib.BallFadeInOut();
	this.instance_345.setTransform(1081.75,895.7,1,1,0,0,0,27,27);
	this.instance_345.alpha = 0.6016;

	this.instance_346 = new lib.BallFadeInOut();
	this.instance_346.setTransform(1010.15,895.7,1,1,0,0,0,27,27);
	this.instance_346.alpha = 0.6016;

	this.instance_347 = new lib.BallFadeInOut();
	this.instance_347.setTransform(938.55,895.7,1,1,0,0,0,27,27);
	this.instance_347.alpha = 0.6016;

	this.instance_348 = new lib.BallFadeInOut();
	this.instance_348.setTransform(866.95,895.7,1,1,0,0,0,27,27);
	this.instance_348.alpha = 0.6016;

	this.instance_349 = new lib.BallFadeInOut();
	this.instance_349.setTransform(795.35,895.7,1,1,0,0,0,27,27);
	this.instance_349.alpha = 0.6016;

	this.instance_350 = new lib.BallFadeInOut();
	this.instance_350.setTransform(723.75,895.7,1,1,0,0,0,27,27);
	this.instance_350.alpha = 0.6016;

	this.instance_351 = new lib.BallFadeInOut();
	this.instance_351.setTransform(652.15,895.7,1,1,0,0,0,27,27);
	this.instance_351.alpha = 0.6016;

	this.instance_352 = new lib.BallFadeInOut();
	this.instance_352.setTransform(1942.2,823.7,1,1,0,0,0,27,27);
	this.instance_352.alpha = 0.6016;

	this.instance_353 = new lib.BallFadeInOut();
	this.instance_353.setTransform(1869.35,823.7,1,1,0,0,0,27,27);
	this.instance_353.alpha = 0.6016;

	this.instance_354 = new lib.BallFadeInOut();
	this.instance_354.setTransform(1797.75,823.7,1,1,0,0,0,27,27);
	this.instance_354.alpha = 0.6016;

	this.instance_355 = new lib.BallFadeInOut();
	this.instance_355.setTransform(1726.15,823.7,1,1,0,0,0,27,27);
	this.instance_355.alpha = 0.6016;

	this.instance_356 = new lib.BallFadeInOut();
	this.instance_356.setTransform(1654.55,823.7,1,1,0,0,0,27,27);
	this.instance_356.alpha = 0.6016;

	this.instance_357 = new lib.BallFadeInOut();
	this.instance_357.setTransform(1582.95,823.7,1,1,0,0,0,27,27);
	this.instance_357.alpha = 0.6016;

	this.instance_358 = new lib.BallFadeInOut();
	this.instance_358.setTransform(1511.35,823.7,1,1,0,0,0,27,27);
	this.instance_358.alpha = 0.6016;

	this.instance_359 = new lib.BallFadeInOut();
	this.instance_359.setTransform(580.55,823.7,1,1,0,0,0,27,27);
	this.instance_359.alpha = 0.6016;

	this.instance_360 = new lib.BallFadeInOut();
	this.instance_360.setTransform(508.95,823.7,1,1,0,0,0,27,27);
	this.instance_360.alpha = 0.6016;

	this.instance_361 = new lib.BallFadeInOut();
	this.instance_361.setTransform(437.35,823.7,1,1,0,0,0,27,27);
	this.instance_361.alpha = 0.6016;

	this.instance_362 = new lib.BallFadeInOut();
	this.instance_362.setTransform(1439.75,823.7,1,1,0,0,0,27,27);
	this.instance_362.alpha = 0.6016;

	this.instance_363 = new lib.BallFadeInOut();
	this.instance_363.setTransform(1368.15,823.7,1,1,0,0,0,27,27);
	this.instance_363.alpha = 0.6016;

	this.instance_364 = new lib.BallFadeInOut();
	this.instance_364.setTransform(1296.55,823.7,1,1,0,0,0,27,27);
	this.instance_364.alpha = 0.6016;

	this.instance_365 = new lib.BallFadeInOut();
	this.instance_365.setTransform(1224.95,823.7,1,1,0,0,0,27,27);
	this.instance_365.alpha = 0.6016;

	this.instance_366 = new lib.BallFadeInOut();
	this.instance_366.setTransform(1153.35,823.7,1,1,0,0,0,27,27);
	this.instance_366.alpha = 0.6016;

	this.instance_367 = new lib.BallFadeInOut();
	this.instance_367.setTransform(1081.75,823.7,1,1,0,0,0,27,27);
	this.instance_367.alpha = 0.6016;

	this.instance_368 = new lib.BallFadeInOut();
	this.instance_368.setTransform(1010.15,823.7,1,1,0,0,0,27,27);
	this.instance_368.alpha = 0.6016;

	this.instance_369 = new lib.BallFadeInOut();
	this.instance_369.setTransform(938.55,823.7,1,1,0,0,0,27,27);
	this.instance_369.alpha = 0.6016;

	this.instance_370 = new lib.BallFadeInOut();
	this.instance_370.setTransform(866.95,823.7,1,1,0,0,0,27,27);
	this.instance_370.alpha = 0.6016;

	this.instance_371 = new lib.BallFadeInOut();
	this.instance_371.setTransform(795.35,823.7,1,1,0,0,0,27,27);
	this.instance_371.alpha = 0.6016;

	this.instance_372 = new lib.BallFadeInOut();
	this.instance_372.setTransform(723.75,823.7,1,1,0,0,0,27,27);
	this.instance_372.alpha = 0.6016;

	this.instance_373 = new lib.BallFadeInOut();
	this.instance_373.setTransform(652.15,823.7,1,1,0,0,0,27,27);
	this.instance_373.alpha = 0.6016;

	this.instance_374 = new lib.BallFadeInOut();
	this.instance_374.setTransform(1942.2,751.7,1,1,0,0,0,27,27);
	this.instance_374.alpha = 0.6016;

	this.instance_375 = new lib.BallFadeInOut();
	this.instance_375.setTransform(1869.35,751.7,1,1,0,0,0,27,27);
	this.instance_375.alpha = 0.6016;

	this.instance_376 = new lib.BallFadeInOut();
	this.instance_376.setTransform(1797.75,751.7,1,1,0,0,0,27,27);
	this.instance_376.alpha = 0.6016;

	this.instance_377 = new lib.BallFadeInOut();
	this.instance_377.setTransform(1726.15,751.7,1,1,0,0,0,27,27);
	this.instance_377.alpha = 0.6016;

	this.instance_378 = new lib.BallFadeInOut();
	this.instance_378.setTransform(1654.55,751.7,1,1,0,0,0,27,27);
	this.instance_378.alpha = 0.6016;

	this.instance_379 = new lib.BallFadeInOut();
	this.instance_379.setTransform(1582.95,751.7,1,1,0,0,0,27,27);
	this.instance_379.alpha = 0.6016;

	this.instance_380 = new lib.BallFadeInOut();
	this.instance_380.setTransform(1511.35,751.7,1,1,0,0,0,27,27);
	this.instance_380.alpha = 0.6016;

	this.instance_381 = new lib.BallFadeInOut();
	this.instance_381.setTransform(580.55,751.7,1,1,0,0,0,27,27);
	this.instance_381.alpha = 0.6016;

	this.instance_382 = new lib.BallFadeInOut();
	this.instance_382.setTransform(508.95,751.7,1,1,0,0,0,27,27);
	this.instance_382.alpha = 0.6016;

	this.instance_383 = new lib.BallFadeInOut();
	this.instance_383.setTransform(437.35,751.7,1,1,0,0,0,27,27);
	this.instance_383.alpha = 0.6016;

	this.instance_384 = new lib.BallFadeInOut();
	this.instance_384.setTransform(1439.75,751.7,1,1,0,0,0,27,27);
	this.instance_384.alpha = 0.6016;

	this.instance_385 = new lib.BallFadeInOut();
	this.instance_385.setTransform(1368.15,751.7,1,1,0,0,0,27,27);
	this.instance_385.alpha = 0.6016;

	this.instance_386 = new lib.BallFadeInOut();
	this.instance_386.setTransform(1296.55,751.7,1,1,0,0,0,27,27);
	this.instance_386.alpha = 0.6016;

	this.instance_387 = new lib.BallFadeInOut();
	this.instance_387.setTransform(1224.95,751.7,1,1,0,0,0,27,27);
	this.instance_387.alpha = 0.6016;

	this.instance_388 = new lib.BallFadeInOut();
	this.instance_388.setTransform(1153.35,751.7,1,1,0,0,0,27,27);
	this.instance_388.alpha = 0.6016;

	this.instance_389 = new lib.BallFadeInOut();
	this.instance_389.setTransform(1081.75,751.7,1,1,0,0,0,27,27);
	this.instance_389.alpha = 0.6016;

	this.instance_390 = new lib.BallFadeInOut();
	this.instance_390.setTransform(1010.15,751.7,1,1,0,0,0,27,27);
	this.instance_390.alpha = 0.6016;

	this.instance_391 = new lib.BallFadeInOut();
	this.instance_391.setTransform(938.55,751.7,1,1,0,0,0,27,27);
	this.instance_391.alpha = 0.6016;

	this.instance_392 = new lib.BallFadeInOut();
	this.instance_392.setTransform(866.95,751.7,1,1,0,0,0,27,27);
	this.instance_392.alpha = 0.6016;

	this.instance_393 = new lib.BallFadeInOut();
	this.instance_393.setTransform(795.35,751.7,1,1,0,0,0,27,27);
	this.instance_393.alpha = 0.6016;

	this.instance_394 = new lib.BallFadeInOut();
	this.instance_394.setTransform(723.75,751.7,1,1,0,0,0,27,27);
	this.instance_394.alpha = 0.6016;

	this.instance_395 = new lib.BallFadeInOut();
	this.instance_395.setTransform(652.15,751.7,1,1,0,0,0,27,27);
	this.instance_395.alpha = 0.6016;

	this.instance_396 = new lib.BallFadeInOut();
	this.instance_396.setTransform(1942.2,679.7,1,1,0,0,0,27,27);
	this.instance_396.alpha = 0.6016;

	this.instance_397 = new lib.BallFadeInOut();
	this.instance_397.setTransform(1869.35,679.7,1,1,0,0,0,27,27);
	this.instance_397.alpha = 0.6016;

	this.instance_398 = new lib.BallFadeInOut();
	this.instance_398.setTransform(1797.75,679.7,1,1,0,0,0,27,27);
	this.instance_398.alpha = 0.6016;

	this.instance_399 = new lib.BallFadeInOut();
	this.instance_399.setTransform(1726.15,679.7,1,1,0,0,0,27,27);
	this.instance_399.alpha = 0.6016;

	this.instance_400 = new lib.BallFadeInOut();
	this.instance_400.setTransform(1654.55,679.7,1,1,0,0,0,27,27);
	this.instance_400.alpha = 0.6016;

	this.instance_401 = new lib.BallFadeInOut();
	this.instance_401.setTransform(1582.95,679.7,1,1,0,0,0,27,27);
	this.instance_401.alpha = 0.6016;

	this.instance_402 = new lib.BallFadeInOut();
	this.instance_402.setTransform(1511.35,679.7,1,1,0,0,0,27,27);
	this.instance_402.alpha = 0.6016;

	this.instance_403 = new lib.BallFadeInOut();
	this.instance_403.setTransform(580.55,679.7,1,1,0,0,0,27,27);
	this.instance_403.alpha = 0.6016;

	this.instance_404 = new lib.BallFadeInOut();
	this.instance_404.setTransform(508.95,679.7,1,1,0,0,0,27,27);
	this.instance_404.alpha = 0.6016;

	this.instance_405 = new lib.BallFadeInOut();
	this.instance_405.setTransform(437.35,679.7,1,1,0,0,0,27,27);
	this.instance_405.alpha = 0.6016;

	this.instance_406 = new lib.BallFadeInOut();
	this.instance_406.setTransform(1439.75,679.7,1,1,0,0,0,27,27);
	this.instance_406.alpha = 0.6016;

	this.instance_407 = new lib.BallFadeInOut();
	this.instance_407.setTransform(1368.15,679.7,1,1,0,0,0,27,27);
	this.instance_407.alpha = 0.6016;

	this.instance_408 = new lib.BallFadeInOut();
	this.instance_408.setTransform(1296.55,679.7,1,1,0,0,0,27,27);
	this.instance_408.alpha = 0.6016;

	this.instance_409 = new lib.BallFadeInOut();
	this.instance_409.setTransform(1224.95,679.7,1,1,0,0,0,27,27);
	this.instance_409.alpha = 0.6016;

	this.instance_410 = new lib.BallFadeInOut();
	this.instance_410.setTransform(1153.35,679.7,1,1,0,0,0,27,27);
	this.instance_410.alpha = 0.6016;

	this.instance_411 = new lib.BallFadeInOut();
	this.instance_411.setTransform(1081.75,679.7,1,1,0,0,0,27,27);
	this.instance_411.alpha = 0.6016;

	this.instance_412 = new lib.BallFadeInOut();
	this.instance_412.setTransform(1010.15,679.7,1,1,0,0,0,27,27);
	this.instance_412.alpha = 0.6016;

	this.instance_413 = new lib.BallFadeInOut();
	this.instance_413.setTransform(938.55,679.7,1,1,0,0,0,27,27);
	this.instance_413.alpha = 0.6016;

	this.instance_414 = new lib.BallFadeInOut();
	this.instance_414.setTransform(866.95,679.7,1,1,0,0,0,27,27);
	this.instance_414.alpha = 0.6016;

	this.instance_415 = new lib.BallFadeInOut();
	this.instance_415.setTransform(795.35,679.7,1,1,0,0,0,27,27);
	this.instance_415.alpha = 0.6016;

	this.instance_416 = new lib.BallFadeInOut();
	this.instance_416.setTransform(723.75,679.7,1,1,0,0,0,27,27);
	this.instance_416.alpha = 0.6016;

	this.instance_417 = new lib.BallFadeInOut();
	this.instance_417.setTransform(652.15,679.7,1,1,0,0,0,27,27);
	this.instance_417.alpha = 0.6016;

	this.instance_418 = new lib.BallFadeInOut();
	this.instance_418.setTransform(1942.2,607.7,1,1,0,0,0,27,27);
	this.instance_418.alpha = 0.6016;

	this.instance_419 = new lib.BallFadeInOut();
	this.instance_419.setTransform(1869.35,607.7,1,1,0,0,0,27,27);
	this.instance_419.alpha = 0.6016;

	this.instance_420 = new lib.BallFadeInOut();
	this.instance_420.setTransform(1797.75,607.7,1,1,0,0,0,27,27);
	this.instance_420.alpha = 0.6016;

	this.instance_421 = new lib.BallFadeInOut();
	this.instance_421.setTransform(1726.15,607.7,1,1,0,0,0,27,27);
	this.instance_421.alpha = 0.6016;

	this.instance_422 = new lib.BallFadeInOut();
	this.instance_422.setTransform(1654.55,607.7,1,1,0,0,0,27,27);
	this.instance_422.alpha = 0.6016;

	this.instance_423 = new lib.BallFadeInOut();
	this.instance_423.setTransform(1582.95,607.7,1,1,0,0,0,27,27);
	this.instance_423.alpha = 0.6016;

	this.instance_424 = new lib.BallFadeInOut();
	this.instance_424.setTransform(1511.35,607.7,1,1,0,0,0,27,27);
	this.instance_424.alpha = 0.6016;

	this.instance_425 = new lib.BallFadeInOut();
	this.instance_425.setTransform(580.55,607.7,1,1,0,0,0,27,27);
	this.instance_425.alpha = 0.6016;

	this.instance_426 = new lib.BallFadeInOut();
	this.instance_426.setTransform(508.95,607.7,1,1,0,0,0,27,27);
	this.instance_426.alpha = 0.6016;

	this.instance_427 = new lib.BallFadeInOut();
	this.instance_427.setTransform(437.35,607.7,1,1,0,0,0,27,27);
	this.instance_427.alpha = 0.6016;

	this.instance_428 = new lib.BallFadeInOut();
	this.instance_428.setTransform(1439.75,607.7,1,1,0,0,0,27,27);
	this.instance_428.alpha = 0.6016;

	this.instance_429 = new lib.BallFadeInOut();
	this.instance_429.setTransform(1368.15,607.7,1,1,0,0,0,27,27);
	this.instance_429.alpha = 0.6016;

	this.instance_430 = new lib.BallFadeInOut();
	this.instance_430.setTransform(1296.55,607.7,1,1,0,0,0,27,27);
	this.instance_430.alpha = 0.6016;

	this.instance_431 = new lib.BallFadeInOut();
	this.instance_431.setTransform(1224.95,607.7,1,1,0,0,0,27,27);
	this.instance_431.alpha = 0.6016;

	this.instance_432 = new lib.BallFadeInOut();
	this.instance_432.setTransform(1153.35,607.7,1,1,0,0,0,27,27);
	this.instance_432.alpha = 0.6016;

	this.instance_433 = new lib.BallFadeInOut();
	this.instance_433.setTransform(1081.75,607.7,1,1,0,0,0,27,27);
	this.instance_433.alpha = 0.6016;

	this.instance_434 = new lib.BallFadeInOut();
	this.instance_434.setTransform(1010.15,607.7,1,1,0,0,0,27,27);
	this.instance_434.alpha = 0.6016;

	this.instance_435 = new lib.BallFadeInOut();
	this.instance_435.setTransform(938.55,607.7,1,1,0,0,0,27,27);
	this.instance_435.alpha = 0.6016;

	this.instance_436 = new lib.BallFadeInOut();
	this.instance_436.setTransform(866.95,607.7,1,1,0,0,0,27,27);
	this.instance_436.alpha = 0.6016;

	this.instance_437 = new lib.BallFadeInOut();
	this.instance_437.setTransform(795.35,607.7,1,1,0,0,0,27,27);
	this.instance_437.alpha = 0.6016;

	this.instance_438 = new lib.BallFadeInOut();
	this.instance_438.setTransform(723.75,607.7,1,1,0,0,0,27,27);
	this.instance_438.alpha = 0.6016;

	this.instance_439 = new lib.BallFadeInOut();
	this.instance_439.setTransform(652.15,607.7,1,1,0,0,0,27,27);
	this.instance_439.alpha = 0.6016;

	this.instance_440 = new lib.BallFadeInOut();
	this.instance_440.setTransform(1942.2,535.7,1,1,0,0,0,27,27);
	this.instance_440.alpha = 0.6016;

	this.instance_441 = new lib.BallFadeInOut();
	this.instance_441.setTransform(1869.35,535.7,1,1,0,0,0,27,27);
	this.instance_441.alpha = 0.6016;

	this.instance_442 = new lib.BallFadeInOut();
	this.instance_442.setTransform(1797.75,535.7,1,1,0,0,0,27,27);
	this.instance_442.alpha = 0.6016;

	this.instance_443 = new lib.BallFadeInOut();
	this.instance_443.setTransform(1726.15,535.7,1,1,0,0,0,27,27);
	this.instance_443.alpha = 0.6016;

	this.instance_444 = new lib.BallFadeInOut();
	this.instance_444.setTransform(1654.55,535.7,1,1,0,0,0,27,27);
	this.instance_444.alpha = 0.6016;

	this.instance_445 = new lib.BallFadeInOut();
	this.instance_445.setTransform(1582.95,535.7,1,1,0,0,0,27,27);
	this.instance_445.alpha = 0.6016;

	this.instance_446 = new lib.BallFadeInOut();
	this.instance_446.setTransform(1511.35,535.7,1,1,0,0,0,27,27);
	this.instance_446.alpha = 0.6016;

	this.instance_447 = new lib.BallFadeInOut();
	this.instance_447.setTransform(580.55,535.7,1,1,0,0,0,27,27);
	this.instance_447.alpha = 0.6016;

	this.instance_448 = new lib.BallFadeInOut();
	this.instance_448.setTransform(508.95,535.7,1,1,0,0,0,27,27);
	this.instance_448.alpha = 0.6016;

	this.instance_449 = new lib.BallFadeInOut();
	this.instance_449.setTransform(437.35,535.7,1,1,0,0,0,27,27);
	this.instance_449.alpha = 0.6016;

	this.instance_450 = new lib.BallFadeInOut();
	this.instance_450.setTransform(1439.75,535.7,1,1,0,0,0,27,27);
	this.instance_450.alpha = 0.6016;

	this.instance_451 = new lib.BallFadeInOut();
	this.instance_451.setTransform(1368.15,535.7,1,1,0,0,0,27,27);
	this.instance_451.alpha = 0.6016;

	this.instance_452 = new lib.BallFadeInOut();
	this.instance_452.setTransform(1296.55,535.7,1,1,0,0,0,27,27);
	this.instance_452.alpha = 0.6016;

	this.instance_453 = new lib.BallFadeInOut();
	this.instance_453.setTransform(1224.95,535.7,1,1,0,0,0,27,27);
	this.instance_453.alpha = 0.6016;

	this.instance_454 = new lib.BallFadeInOut();
	this.instance_454.setTransform(1153.35,535.7,1,1,0,0,0,27,27);
	this.instance_454.alpha = 0.6016;

	this.instance_455 = new lib.BallFadeInOut();
	this.instance_455.setTransform(1081.75,535.7,1,1,0,0,0,27,27);
	this.instance_455.alpha = 0.6016;

	this.instance_456 = new lib.BallFadeInOut();
	this.instance_456.setTransform(1010.15,535.7,1,1,0,0,0,27,27);
	this.instance_456.alpha = 0.6016;

	this.instance_457 = new lib.BallFadeInOut();
	this.instance_457.setTransform(938.55,535.7,1,1,0,0,0,27,27);
	this.instance_457.alpha = 0.6016;

	this.instance_458 = new lib.BallFadeInOut();
	this.instance_458.setTransform(866.95,535.7,1,1,0,0,0,27,27);
	this.instance_458.alpha = 0.6016;

	this.instance_459 = new lib.BallFadeInOut();
	this.instance_459.setTransform(795.35,535.7,1,1,0,0,0,27,27);
	this.instance_459.alpha = 0.6016;

	this.instance_460 = new lib.BallFadeInOut();
	this.instance_460.setTransform(723.75,535.7,1,1,0,0,0,27,27);
	this.instance_460.alpha = 0.6016;

	this.instance_461 = new lib.BallFadeInOut();
	this.instance_461.setTransform(652.15,535.7,1,1,0,0,0,27,27);
	this.instance_461.alpha = 0.6016;

	this.instance_462 = new lib.BallFadeInOut();
	this.instance_462.setTransform(1942.2,463.7,1,1,0,0,0,27,27);
	this.instance_462.alpha = 0.6016;

	this.instance_463 = new lib.BallFadeInOut();
	this.instance_463.setTransform(1869.35,463.7,1,1,0,0,0,27,27);
	this.instance_463.alpha = 0.6016;

	this.instance_464 = new lib.BallFadeInOut();
	this.instance_464.setTransform(1797.75,463.7,1,1,0,0,0,27,27);
	this.instance_464.alpha = 0.6016;

	this.instance_465 = new lib.BallFadeInOut();
	this.instance_465.setTransform(1726.15,463.7,1,1,0,0,0,27,27);
	this.instance_465.alpha = 0.6016;

	this.instance_466 = new lib.BallFadeInOut();
	this.instance_466.setTransform(1654.55,463.7,1,1,0,0,0,27,27);
	this.instance_466.alpha = 0.6016;

	this.instance_467 = new lib.BallFadeInOut();
	this.instance_467.setTransform(1582.95,463.7,1,1,0,0,0,27,27);
	this.instance_467.alpha = 0.6016;

	this.instance_468 = new lib.BallFadeInOut();
	this.instance_468.setTransform(1511.35,463.7,1,1,0,0,0,27,27);
	this.instance_468.alpha = 0.6016;

	this.instance_469 = new lib.BallFadeInOut();
	this.instance_469.setTransform(580.55,463.7,1,1,0,0,0,27,27);
	this.instance_469.alpha = 0.6016;

	this.instance_470 = new lib.BallFadeInOut();
	this.instance_470.setTransform(508.95,463.7,1,1,0,0,0,27,27);
	this.instance_470.alpha = 0.6016;

	this.instance_471 = new lib.BallFadeInOut();
	this.instance_471.setTransform(437.35,463.7,1,1,0,0,0,27,27);
	this.instance_471.alpha = 0.6016;

	this.instance_472 = new lib.BallFadeInOut();
	this.instance_472.setTransform(1439.75,463.7,1,1,0,0,0,27,27);
	this.instance_472.alpha = 0.6016;

	this.instance_473 = new lib.BallFadeInOut();
	this.instance_473.setTransform(1368.15,463.7,1,1,0,0,0,27,27);
	this.instance_473.alpha = 0.6016;

	this.instance_474 = new lib.BallFadeInOut();
	this.instance_474.setTransform(1296.55,463.7,1,1,0,0,0,27,27);
	this.instance_474.alpha = 0.6016;

	this.instance_475 = new lib.BallFadeInOut();
	this.instance_475.setTransform(1224.95,463.7,1,1,0,0,0,27,27);
	this.instance_475.alpha = 0.6016;

	this.instance_476 = new lib.BallFadeInOut();
	this.instance_476.setTransform(1153.35,463.7,1,1,0,0,0,27,27);
	this.instance_476.alpha = 0.6016;

	this.instance_477 = new lib.BallFadeInOut();
	this.instance_477.setTransform(1081.75,463.7,1,1,0,0,0,27,27);
	this.instance_477.alpha = 0.6016;

	this.instance_478 = new lib.BallFadeInOut();
	this.instance_478.setTransform(1010.15,463.7,1,1,0,0,0,27,27);
	this.instance_478.alpha = 0.6016;

	this.instance_479 = new lib.BallFadeInOut();
	this.instance_479.setTransform(938.55,463.7,1,1,0,0,0,27,27);
	this.instance_479.alpha = 0.6016;

	this.instance_480 = new lib.BallFadeInOut();
	this.instance_480.setTransform(866.95,463.7,1,1,0,0,0,27,27);
	this.instance_480.alpha = 0.6016;

	this.instance_481 = new lib.BallFadeInOut();
	this.instance_481.setTransform(795.35,463.7,1,1,0,0,0,27,27);
	this.instance_481.alpha = 0.6016;

	this.instance_482 = new lib.BallFadeInOut();
	this.instance_482.setTransform(723.75,463.7,1,1,0,0,0,27,27);
	this.instance_482.alpha = 0.6016;

	this.instance_483 = new lib.BallFadeInOut();
	this.instance_483.setTransform(652.15,463.7,1,1,0,0,0,27,27);
	this.instance_483.alpha = 0.6016;

	this.instance_484 = new lib.BallFadeInOut();
	this.instance_484.setTransform(1942.2,391.7,1,1,0,0,0,27,27);
	this.instance_484.alpha = 0.6016;

	this.instance_485 = new lib.BallFadeInOut();
	this.instance_485.setTransform(1869.35,391.7,1,1,0,0,0,27,27);
	this.instance_485.alpha = 0.6016;

	this.instance_486 = new lib.BallFadeInOut();
	this.instance_486.setTransform(1797.75,391.7,1,1,0,0,0,27,27);
	this.instance_486.alpha = 0.6016;

	this.instance_487 = new lib.BallFadeInOut();
	this.instance_487.setTransform(1726.15,391.7,1,1,0,0,0,27,27);
	this.instance_487.alpha = 0.6016;

	this.instance_488 = new lib.BallFadeInOut();
	this.instance_488.setTransform(1654.55,391.7,1,1,0,0,0,27,27);
	this.instance_488.alpha = 0.6016;

	this.instance_489 = new lib.BallFadeInOut();
	this.instance_489.setTransform(1582.95,391.7,1,1,0,0,0,27,27);
	this.instance_489.alpha = 0.6016;

	this.instance_490 = new lib.BallFadeInOut();
	this.instance_490.setTransform(1511.35,391.7,1,1,0,0,0,27,27);
	this.instance_490.alpha = 0.6016;

	this.instance_491 = new lib.BallFadeInOut();
	this.instance_491.setTransform(580.55,391.7,1,1,0,0,0,27,27);
	this.instance_491.alpha = 0.6016;

	this.instance_492 = new lib.BallFadeInOut();
	this.instance_492.setTransform(508.95,391.7,1,1,0,0,0,27,27);
	this.instance_492.alpha = 0.6016;

	this.instance_493 = new lib.BallFadeInOut();
	this.instance_493.setTransform(437.35,391.7,1,1,0,0,0,27,27);
	this.instance_493.alpha = 0.6016;

	this.instance_494 = new lib.BallFadeInOut();
	this.instance_494.setTransform(1439.75,391.7,1,1,0,0,0,27,27);
	this.instance_494.alpha = 0.6016;

	this.instance_495 = new lib.BallFadeInOut();
	this.instance_495.setTransform(1368.15,391.7,1,1,0,0,0,27,27);
	this.instance_495.alpha = 0.6016;

	this.instance_496 = new lib.BallFadeInOut();
	this.instance_496.setTransform(1296.55,391.7,1,1,0,0,0,27,27);
	this.instance_496.alpha = 0.6016;

	this.instance_497 = new lib.BallFadeInOut();
	this.instance_497.setTransform(1224.95,391.7,1,1,0,0,0,27,27);
	this.instance_497.alpha = 0.6016;

	this.instance_498 = new lib.BallFadeInOut();
	this.instance_498.setTransform(1153.35,391.7,1,1,0,0,0,27,27);
	this.instance_498.alpha = 0.6016;

	this.instance_499 = new lib.BallFadeInOut();
	this.instance_499.setTransform(1081.75,391.7,1,1,0,0,0,27,27);
	this.instance_499.alpha = 0.6016;

	this.instance_500 = new lib.BallFadeInOut();
	this.instance_500.setTransform(1010.15,391.7,1,1,0,0,0,27,27);
	this.instance_500.alpha = 0.6016;

	this.instance_501 = new lib.BallFadeInOut();
	this.instance_501.setTransform(938.55,391.7,1,1,0,0,0,27,27);
	this.instance_501.alpha = 0.6016;

	this.instance_502 = new lib.BallFadeInOut();
	this.instance_502.setTransform(866.95,391.7,1,1,0,0,0,27,27);
	this.instance_502.alpha = 0.6016;

	this.instance_503 = new lib.BallFadeInOut();
	this.instance_503.setTransform(795.35,391.7,1,1,0,0,0,27,27);
	this.instance_503.alpha = 0.6016;

	this.instance_504 = new lib.BallFadeInOut();
	this.instance_504.setTransform(723.75,391.7,1,1,0,0,0,27,27);
	this.instance_504.alpha = 0.6016;

	this.instance_505 = new lib.BallFadeInOut();
	this.instance_505.setTransform(652.15,391.7,1,1,0,0,0,27,27);
	this.instance_505.alpha = 0.6016;

	this.instance_506 = new lib.BallFadeInOut();
	this.instance_506.setTransform(1942.2,319.7,1,1,0,0,0,27,27);
	this.instance_506.alpha = 0.6016;

	this.instance_507 = new lib.BallFadeInOut();
	this.instance_507.setTransform(1869.35,319.7,1,1,0,0,0,27,27);
	this.instance_507.alpha = 0.6016;

	this.instance_508 = new lib.BallFadeInOut();
	this.instance_508.setTransform(1797.75,319.7,1,1,0,0,0,27,27);
	this.instance_508.alpha = 0.6016;

	this.instance_509 = new lib.BallFadeInOut();
	this.instance_509.setTransform(1726.15,319.7,1,1,0,0,0,27,27);
	this.instance_509.alpha = 0.6016;

	this.instance_510 = new lib.BallFadeInOut();
	this.instance_510.setTransform(1654.55,319.7,1,1,0,0,0,27,27);
	this.instance_510.alpha = 0.6016;

	this.instance_511 = new lib.BallFadeInOut();
	this.instance_511.setTransform(1582.95,319.7,1,1,0,0,0,27,27);
	this.instance_511.alpha = 0.6016;

	this.instance_512 = new lib.BallFadeInOut();
	this.instance_512.setTransform(1511.35,319.7,1,1,0,0,0,27,27);
	this.instance_512.alpha = 0.6016;

	this.instance_513 = new lib.BallFadeInOut();
	this.instance_513.setTransform(580.55,319.7,1,1,0,0,0,27,27);
	this.instance_513.alpha = 0.6016;

	this.instance_514 = new lib.BallFadeInOut();
	this.instance_514.setTransform(508.95,319.7,1,1,0,0,0,27,27);
	this.instance_514.alpha = 0.6016;

	this.instance_515 = new lib.BallFadeInOut();
	this.instance_515.setTransform(437.35,319.7,1,1,0,0,0,27,27);
	this.instance_515.alpha = 0.6016;

	this.instance_516 = new lib.BallFadeInOut();
	this.instance_516.setTransform(1439.75,319.7,1,1,0,0,0,27,27);
	this.instance_516.alpha = 0.6016;

	this.instance_517 = new lib.BallFadeInOut();
	this.instance_517.setTransform(1368.15,319.7,1,1,0,0,0,27,27);
	this.instance_517.alpha = 0.6016;

	this.instance_518 = new lib.BallFadeInOut();
	this.instance_518.setTransform(1296.55,319.7,1,1,0,0,0,27,27);
	this.instance_518.alpha = 0.6016;

	this.instance_519 = new lib.BallFadeInOut();
	this.instance_519.setTransform(1224.95,319.7,1,1,0,0,0,27,27);
	this.instance_519.alpha = 0.6016;

	this.instance_520 = new lib.BallFadeInOut();
	this.instance_520.setTransform(1153.35,319.7,1,1,0,0,0,27,27);
	this.instance_520.alpha = 0.6016;

	this.instance_521 = new lib.BallFadeInOut();
	this.instance_521.setTransform(1081.75,319.7,1,1,0,0,0,27,27);
	this.instance_521.alpha = 0.6016;

	this.instance_522 = new lib.BallFadeInOut();
	this.instance_522.setTransform(1010.15,319.7,1,1,0,0,0,27,27);
	this.instance_522.alpha = 0.6016;

	this.instance_523 = new lib.BallFadeInOut();
	this.instance_523.setTransform(938.55,319.7,1,1,0,0,0,27,27);
	this.instance_523.alpha = 0.6016;

	this.instance_524 = new lib.BallFadeInOut();
	this.instance_524.setTransform(866.95,319.7,1,1,0,0,0,27,27);
	this.instance_524.alpha = 0.6016;

	this.instance_525 = new lib.BallFadeInOut();
	this.instance_525.setTransform(795.35,319.7,1,1,0,0,0,27,27);
	this.instance_525.alpha = 0.6016;

	this.instance_526 = new lib.BallFadeInOut();
	this.instance_526.setTransform(723.75,319.7,1,1,0,0,0,27,27);
	this.instance_526.alpha = 0.6016;

	this.instance_527 = new lib.BallFadeInOut();
	this.instance_527.setTransform(652.15,319.7,1,1,0,0,0,27,27);
	this.instance_527.alpha = 0.6016;

	this.instance_528 = new lib.BallFadeInOut();
	this.instance_528.setTransform(1942.2,247.7,1,1,0,0,0,27,27);
	this.instance_528.alpha = 0.6016;

	this.instance_529 = new lib.BallFadeInOut();
	this.instance_529.setTransform(1869.35,247.7,1,1,0,0,0,27,27);
	this.instance_529.alpha = 0.6016;

	this.instance_530 = new lib.BallFadeInOut();
	this.instance_530.setTransform(1797.75,247.7,1,1,0,0,0,27,27);
	this.instance_530.alpha = 0.6016;

	this.instance_531 = new lib.BallFadeInOut();
	this.instance_531.setTransform(1726.15,247.7,1,1,0,0,0,27,27);
	this.instance_531.alpha = 0.6016;

	this.instance_532 = new lib.BallFadeInOut();
	this.instance_532.setTransform(1654.55,247.7,1,1,0,0,0,27,27);
	this.instance_532.alpha = 0.6016;

	this.instance_533 = new lib.BallFadeInOut();
	this.instance_533.setTransform(1582.95,247.7,1,1,0,0,0,27,27);
	this.instance_533.alpha = 0.6016;

	this.instance_534 = new lib.BallFadeInOut();
	this.instance_534.setTransform(1511.35,247.7,1,1,0,0,0,27,27);
	this.instance_534.alpha = 0.6016;

	this.instance_535 = new lib.BallFadeInOut();
	this.instance_535.setTransform(580.55,247.7,1,1,0,0,0,27,27);
	this.instance_535.alpha = 0.6016;

	this.instance_536 = new lib.BallFadeInOut();
	this.instance_536.setTransform(508.95,247.7,1,1,0,0,0,27,27);
	this.instance_536.alpha = 0.6016;

	this.instance_537 = new lib.BallFadeInOut();
	this.instance_537.setTransform(437.35,247.7,1,1,0,0,0,27,27);
	this.instance_537.alpha = 0.6016;

	this.instance_538 = new lib.BallFadeInOut();
	this.instance_538.setTransform(1439.75,247.7,1,1,0,0,0,27,27);
	this.instance_538.alpha = 0.6016;

	this.instance_539 = new lib.BallFadeInOut();
	this.instance_539.setTransform(1368.15,247.7,1,1,0,0,0,27,27);
	this.instance_539.alpha = 0.6016;

	this.instance_540 = new lib.BallFadeInOut();
	this.instance_540.setTransform(1296.55,247.7,1,1,0,0,0,27,27);
	this.instance_540.alpha = 0.6016;

	this.instance_541 = new lib.BallFadeInOut();
	this.instance_541.setTransform(1224.95,247.7,1,1,0,0,0,27,27);
	this.instance_541.alpha = 0.6016;

	this.instance_542 = new lib.BallFadeInOut();
	this.instance_542.setTransform(1153.35,247.7,1,1,0,0,0,27,27);
	this.instance_542.alpha = 0.6016;

	this.instance_543 = new lib.BallFadeInOut();
	this.instance_543.setTransform(1081.75,247.7,1,1,0,0,0,27,27);
	this.instance_543.alpha = 0.6016;

	this.instance_544 = new lib.BallFadeInOut();
	this.instance_544.setTransform(1010.15,247.7,1,1,0,0,0,27,27);
	this.instance_544.alpha = 0.6016;

	this.instance_545 = new lib.BallFadeInOut();
	this.instance_545.setTransform(938.55,247.7,1,1,0,0,0,27,27);
	this.instance_545.alpha = 0.6016;

	this.instance_546 = new lib.BallFadeInOut();
	this.instance_546.setTransform(866.95,247.7,1,1,0,0,0,27,27);
	this.instance_546.alpha = 0.6016;

	this.instance_547 = new lib.BallFadeInOut();
	this.instance_547.setTransform(795.35,247.7,1,1,0,0,0,27,27);
	this.instance_547.alpha = 0.6016;

	this.instance_548 = new lib.BallFadeInOut();
	this.instance_548.setTransform(723.75,247.7,1,1,0,0,0,27,27);
	this.instance_548.alpha = 0.6016;

	this.instance_549 = new lib.BallFadeInOut();
	this.instance_549.setTransform(652.15,247.7,1,1,0,0,0,27,27);
	this.instance_549.alpha = 0.6016;

	this.instance_550 = new lib.BallFadeInOut();
	this.instance_550.setTransform(1942.2,175.7,1,1,0,0,0,27,27);
	this.instance_550.alpha = 0.6016;

	this.instance_551 = new lib.BallFadeInOut();
	this.instance_551.setTransform(1869.35,175.7,1,1,0,0,0,27,27);
	this.instance_551.alpha = 0.6016;

	this.instance_552 = new lib.BallFadeInOut();
	this.instance_552.setTransform(1797.75,175.7,1,1,0,0,0,27,27);
	this.instance_552.alpha = 0.6016;

	this.instance_553 = new lib.BallFadeInOut();
	this.instance_553.setTransform(1726.15,175.7,1,1,0,0,0,27,27);
	this.instance_553.alpha = 0.6016;

	this.instance_554 = new lib.BallFadeInOut();
	this.instance_554.setTransform(1654.55,175.7,1,1,0,0,0,27,27);
	this.instance_554.alpha = 0.6016;

	this.instance_555 = new lib.BallFadeInOut();
	this.instance_555.setTransform(1582.95,175.7,1,1,0,0,0,27,27);
	this.instance_555.alpha = 0.6016;

	this.instance_556 = new lib.BallFadeInOut();
	this.instance_556.setTransform(1511.35,175.7,1,1,0,0,0,27,27);
	this.instance_556.alpha = 0.6016;

	this.instance_557 = new lib.BallFadeInOut();
	this.instance_557.setTransform(580.55,175.7,1,1,0,0,0,27,27);
	this.instance_557.alpha = 0.6016;

	this.instance_558 = new lib.BallFadeInOut();
	this.instance_558.setTransform(508.95,175.7,1,1,0,0,0,27,27);
	this.instance_558.alpha = 0.6016;

	this.instance_559 = new lib.BallFadeInOut();
	this.instance_559.setTransform(437.35,175.7,1,1,0,0,0,27,27);
	this.instance_559.alpha = 0.6016;

	this.instance_560 = new lib.BallFadeInOut();
	this.instance_560.setTransform(1439.75,175.7,1,1,0,0,0,27,27);
	this.instance_560.alpha = 0.6016;

	this.instance_561 = new lib.BallFadeInOut();
	this.instance_561.setTransform(1368.15,175.7,1,1,0,0,0,27,27);
	this.instance_561.alpha = 0.6016;

	this.instance_562 = new lib.BallFadeInOut();
	this.instance_562.setTransform(1296.55,175.7,1,1,0,0,0,27,27);
	this.instance_562.alpha = 0.6016;

	this.instance_563 = new lib.BallFadeInOut();
	this.instance_563.setTransform(1224.95,175.7,1,1,0,0,0,27,27);
	this.instance_563.alpha = 0.6016;

	this.instance_564 = new lib.BallFadeInOut();
	this.instance_564.setTransform(1153.35,175.7,1,1,0,0,0,27,27);
	this.instance_564.alpha = 0.6016;

	this.instance_565 = new lib.BallFadeInOut();
	this.instance_565.setTransform(1081.75,175.7,1,1,0,0,0,27,27);
	this.instance_565.alpha = 0.6016;

	this.instance_566 = new lib.BallFadeInOut();
	this.instance_566.setTransform(1010.15,175.7,1,1,0,0,0,27,27);
	this.instance_566.alpha = 0.6016;

	this.instance_567 = new lib.BallFadeInOut();
	this.instance_567.setTransform(938.55,175.7,1,1,0,0,0,27,27);
	this.instance_567.alpha = 0.6016;

	this.instance_568 = new lib.BallFadeInOut();
	this.instance_568.setTransform(866.95,175.7,1,1,0,0,0,27,27);
	this.instance_568.alpha = 0.6016;

	this.instance_569 = new lib.BallFadeInOut();
	this.instance_569.setTransform(795.35,175.7,1,1,0,0,0,27,27);
	this.instance_569.alpha = 0.6016;

	this.instance_570 = new lib.BallFadeInOut();
	this.instance_570.setTransform(723.75,175.7,1,1,0,0,0,27,27);
	this.instance_570.alpha = 0.6016;

	this.instance_571 = new lib.BallFadeInOut();
	this.instance_571.setTransform(652.15,175.7,1,1,0,0,0,27,27);
	this.instance_571.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_571},{t:this.instance_570},{t:this.instance_569},{t:this.instance_568},{t:this.instance_567},{t:this.instance_566},{t:this.instance_565},{t:this.instance_564},{t:this.instance_563},{t:this.instance_562},{t:this.instance_561},{t:this.instance_560},{t:this.instance_559},{t:this.instance_558},{t:this.instance_557},{t:this.instance_556},{t:this.instance_555},{t:this.instance_554},{t:this.instance_553},{t:this.instance_552},{t:this.instance_551},{t:this.instance_550},{t:this.instance_549},{t:this.instance_548},{t:this.instance_547},{t:this.instance_546},{t:this.instance_545},{t:this.instance_544},{t:this.instance_543},{t:this.instance_542},{t:this.instance_541},{t:this.instance_540},{t:this.instance_539},{t:this.instance_538},{t:this.instance_537},{t:this.instance_536},{t:this.instance_535},{t:this.instance_534},{t:this.instance_533},{t:this.instance_532},{t:this.instance_531},{t:this.instance_530},{t:this.instance_529},{t:this.instance_528},{t:this.instance_527},{t:this.instance_526},{t:this.instance_525},{t:this.instance_524},{t:this.instance_523},{t:this.instance_522},{t:this.instance_521},{t:this.instance_520},{t:this.instance_519},{t:this.instance_518},{t:this.instance_517},{t:this.instance_516},{t:this.instance_515},{t:this.instance_514},{t:this.instance_513},{t:this.instance_512},{t:this.instance_511},{t:this.instance_510},{t:this.instance_509},{t:this.instance_508},{t:this.instance_507},{t:this.instance_506},{t:this.instance_505},{t:this.instance_504},{t:this.instance_503},{t:this.instance_502},{t:this.instance_501},{t:this.instance_500},{t:this.instance_499},{t:this.instance_498},{t:this.instance_497},{t:this.instance_496},{t:this.instance_495},{t:this.instance_494},{t:this.instance_493},{t:this.instance_492},{t:this.instance_491},{t:this.instance_490},{t:this.instance_489},{t:this.instance_488},{t:this.instance_487},{t:this.instance_486},{t:this.instance_485},{t:this.instance_484},{t:this.instance_483},{t:this.instance_482},{t:this.instance_481},{t:this.instance_480},{t:this.instance_479},{t:this.instance_478},{t:this.instance_477},{t:this.instance_476},{t:this.instance_475},{t:this.instance_474},{t:this.instance_473},{t:this.instance_472},{t:this.instance_471},{t:this.instance_470},{t:this.instance_469},{t:this.instance_468},{t:this.instance_467},{t:this.instance_466},{t:this.instance_465},{t:this.instance_464},{t:this.instance_463},{t:this.instance_462},{t:this.instance_461},{t:this.instance_460},{t:this.instance_459},{t:this.instance_458},{t:this.instance_457},{t:this.instance_456},{t:this.instance_455},{t:this.instance_454},{t:this.instance_453},{t:this.instance_452},{t:this.instance_451},{t:this.instance_450},{t:this.instance_449},{t:this.instance_448},{t:this.instance_447},{t:this.instance_446},{t:this.instance_445},{t:this.instance_444},{t:this.instance_443},{t:this.instance_442},{t:this.instance_441},{t:this.instance_440},{t:this.instance_439},{t:this.instance_438},{t:this.instance_437},{t:this.instance_436},{t:this.instance_435},{t:this.instance_434},{t:this.instance_433},{t:this.instance_432},{t:this.instance_431},{t:this.instance_430},{t:this.instance_429},{t:this.instance_428},{t:this.instance_427},{t:this.instance_426},{t:this.instance_425},{t:this.instance_424},{t:this.instance_423},{t:this.instance_422},{t:this.instance_421},{t:this.instance_420},{t:this.instance_419,p:{x:1869.35,y:607.7}},{t:this.instance_418,p:{x:1942.2,y:607.7}},{t:this.instance_417,p:{x:652.15,y:679.7}},{t:this.instance_416,p:{x:723.75,y:679.7}},{t:this.instance_415,p:{x:795.35,y:679.7}},{t:this.instance_414,p:{x:866.95,y:679.7}},{t:this.instance_413,p:{x:938.55,y:679.7}},{t:this.instance_412,p:{x:1010.15,y:679.7}},{t:this.instance_411,p:{x:1081.75,y:679.7}},{t:this.instance_410,p:{x:1153.35,y:679.7}},{t:this.instance_409,p:{x:1224.95,y:679.7}},{t:this.instance_408,p:{x:1296.55,y:679.7}},{t:this.instance_407,p:{x:1368.15,y:679.7}},{t:this.instance_406,p:{x:1439.75,y:679.7}},{t:this.instance_405,p:{x:437.35,y:679.7}},{t:this.instance_404,p:{x:508.95,y:679.7}},{t:this.instance_403,p:{x:580.55,y:679.7}},{t:this.instance_402,p:{x:1511.35,y:679.7}},{t:this.instance_401,p:{x:1582.95,y:679.7}},{t:this.instance_400,p:{x:1654.55,y:679.7}},{t:this.instance_399,p:{x:1726.15,y:679.7}},{t:this.instance_398,p:{x:1797.75,y:679.7}},{t:this.instance_397,p:{x:1869.35,y:679.7}},{t:this.instance_396,p:{x:1942.2,y:679.7}},{t:this.instance_395,p:{x:652.15,y:751.7}},{t:this.instance_394,p:{x:723.75,y:751.7}},{t:this.instance_393,p:{x:795.35,y:751.7}},{t:this.instance_392,p:{x:866.95,y:751.7}},{t:this.instance_391,p:{x:938.55,y:751.7}},{t:this.instance_390,p:{x:1010.15,y:751.7}},{t:this.instance_389,p:{x:1081.75,y:751.7}},{t:this.instance_388,p:{x:1153.35,y:751.7}},{t:this.instance_387,p:{x:1224.95,y:751.7}},{t:this.instance_386,p:{x:1296.55,y:751.7}},{t:this.instance_385,p:{x:1368.15,y:751.7}},{t:this.instance_384,p:{x:1439.75,y:751.7}},{t:this.instance_383,p:{x:437.35,y:751.7}},{t:this.instance_382,p:{x:508.95,y:751.7}},{t:this.instance_381,p:{x:580.55,y:751.7}},{t:this.instance_380,p:{x:1511.35,y:751.7}},{t:this.instance_379,p:{x:1582.95,y:751.7}},{t:this.instance_378,p:{x:1654.55,y:751.7}},{t:this.instance_377,p:{x:1726.15,y:751.7}},{t:this.instance_376,p:{x:1797.75,y:751.7}},{t:this.instance_375,p:{x:1869.35,y:751.7}},{t:this.instance_374,p:{x:1942.2,y:751.7}},{t:this.instance_373,p:{x:652.15,y:823.7}},{t:this.instance_372,p:{x:723.75,y:823.7}},{t:this.instance_371,p:{x:795.35,y:823.7}},{t:this.instance_370,p:{x:866.95,y:823.7}},{t:this.instance_369,p:{x:938.55,y:823.7}},{t:this.instance_368,p:{x:1010.15,y:823.7}},{t:this.instance_367,p:{x:1081.75,y:823.7}},{t:this.instance_366,p:{x:1153.35,y:823.7}},{t:this.instance_365,p:{x:1224.95,y:823.7}},{t:this.instance_364,p:{x:1296.55,y:823.7}},{t:this.instance_363,p:{x:1368.15,y:823.7}},{t:this.instance_362,p:{x:1439.75,y:823.7}},{t:this.instance_361,p:{x:437.35,y:823.7}},{t:this.instance_360,p:{x:508.95,y:823.7}},{t:this.instance_359,p:{x:580.55,y:823.7}},{t:this.instance_358,p:{x:1511.35,y:823.7}},{t:this.instance_357,p:{x:1582.95,y:823.7}},{t:this.instance_356,p:{x:1654.55,y:823.7}},{t:this.instance_355,p:{x:1726.15,y:823.7}},{t:this.instance_354,p:{x:1797.75,y:823.7}},{t:this.instance_353,p:{x:1869.35,y:823.7}},{t:this.instance_352,p:{x:1942.2,y:823.7}},{t:this.instance_351,p:{x:652.15,y:895.7}},{t:this.instance_350,p:{x:723.75,y:895.7}},{t:this.instance_349,p:{x:795.35,y:895.7}},{t:this.instance_348,p:{x:866.95,y:895.7}},{t:this.instance_347,p:{x:938.55,y:895.7}},{t:this.instance_346,p:{x:1010.15,y:895.7}},{t:this.instance_345,p:{x:1081.75,y:895.7}},{t:this.instance_344,p:{x:1153.35,y:895.7}},{t:this.instance_343,p:{x:1224.95,y:895.7}},{t:this.instance_342,p:{x:1296.55,y:895.7}},{t:this.instance_341,p:{x:1368.15,y:895.7}},{t:this.instance_340,p:{x:1439.75,y:895.7}},{t:this.instance_339,p:{x:437.35,y:895.7}},{t:this.instance_338,p:{x:508.95,y:895.7}},{t:this.instance_337,p:{x:580.55,y:895.7}},{t:this.instance_336,p:{x:1511.35,y:895.7}},{t:this.instance_335,p:{x:1582.95,y:895.7}},{t:this.instance_334,p:{x:1654.55,y:895.7}},{t:this.instance_333,p:{x:1726.15,y:895.7}},{t:this.instance_332,p:{x:1797.75,y:895.7}},{t:this.instance_331,p:{x:1869.35,y:895.7}},{t:this.instance_330,p:{x:1942.2,y:895.7}},{t:this.instance_329,p:{x:652.15,y:967.7}},{t:this.instance_328,p:{x:723.75,y:967.7}},{t:this.instance_327,p:{x:795.35,y:967.7}},{t:this.instance_326,p:{x:866.95,y:967.7}},{t:this.instance_325,p:{x:938.55,y:967.7}},{t:this.instance_324,p:{x:1010.15,y:967.7}},{t:this.instance_323,p:{x:1081.75,y:967.7}},{t:this.instance_322,p:{x:1153.35,y:967.7}},{t:this.instance_321,p:{x:1224.95,y:967.7}},{t:this.instance_320,p:{x:1296.55,y:967.7}},{t:this.instance_319,p:{x:1368.15,y:967.7}},{t:this.instance_318,p:{x:1439.75,y:967.7}},{t:this.instance_317,p:{x:437.35,y:967.7}},{t:this.instance_316,p:{x:508.95,y:967.7}},{t:this.instance_315,p:{x:580.55,y:967.7}},{t:this.instance_314,p:{x:1511.35,y:967.7}},{t:this.instance_313,p:{x:1582.95,y:967.7}},{t:this.instance_312,p:{x:1654.55,y:967.7}},{t:this.instance_311,p:{x:1726.15,y:967.7}},{t:this.instance_310,p:{x:1797.75,y:967.7}},{t:this.instance_309,p:{x:1869.35,y:967.7}},{t:this.instance_308,p:{x:1942.2,y:967.7}},{t:this.instance_307,p:{x:652.15,y:1039.95}},{t:this.instance_306,p:{x:723.75,y:1039.95}},{t:this.instance_305,p:{x:795.35,y:1039.95}},{t:this.instance_304,p:{x:866.95,y:1039.95}},{t:this.instance_303,p:{x:938.55,y:1039.95}},{t:this.instance_302,p:{x:1010.15,y:1039.95}},{t:this.instance_301,p:{x:1081.75,y:1039.95}},{t:this.instance_300,p:{x:1153.35,y:1039.95}},{t:this.instance_299,p:{x:1224.95,y:1039.95}},{t:this.instance_298,p:{x:1296.55,y:1039.95}},{t:this.instance_297,p:{x:1368.15,y:1039.95}},{t:this.instance_296,p:{x:1439.75,y:1039.95}},{t:this.instance_295,p:{x:437.35,y:1039.95}},{t:this.instance_294,p:{x:508.95,y:1039.95}},{t:this.instance_293,p:{x:580.55,y:1039.95}},{t:this.instance_292,p:{x:1511.35,y:1039.95}},{t:this.instance_291,p:{x:1582.95,y:1039.95}},{t:this.instance_290,p:{x:1654.55,y:1039.95}},{t:this.instance_289,p:{x:1726.15,y:1039.95}},{t:this.instance_288,p:{x:1797.75,y:1039.95}},{t:this.instance_287,p:{x:1869.35,y:1039.95}},{t:this.instance_286,p:{x:1942.2,y:1039.95}},{t:this.instance_285,p:{x:652.15,y:1110.9}},{t:this.instance_284,p:{x:723.75,y:1110.9}},{t:this.instance_283,p:{x:795.35,y:1110.9}},{t:this.instance_282,p:{x:866.95,y:1110.9}},{t:this.instance_281,p:{x:938.55,y:1110.9}},{t:this.instance_280,p:{x:1010.15,y:1110.9}},{t:this.instance_279,p:{x:1081.75,y:1110.9}},{t:this.instance_278,p:{x:1153.35,y:1110.9}},{t:this.instance_277,p:{x:1224.95,y:1110.9}},{t:this.instance_276,p:{x:1296.55,y:1110.9}},{t:this.instance_275,p:{x:1368.15,y:1110.9}},{t:this.instance_274,p:{x:1439.75,y:1110.9}},{t:this.instance_273,p:{x:437.35,y:1110.9}},{t:this.instance_272,p:{x:508.95,y:1110.9}},{t:this.instance_271,p:{x:580.55,y:1110.9}},{t:this.instance_270,p:{x:1511.35,y:1110.9}},{t:this.instance_269,p:{x:1582.95,y:1110.9}},{t:this.instance_268,p:{x:1654.55,y:1110.9}},{t:this.instance_267,p:{x:1726.15,y:1110.9}},{t:this.instance_266,p:{x:1797.75,y:1110.9}},{t:this.instance_265,p:{x:1869.35,y:1110.9}},{t:this.instance_264,p:{x:1942.2,y:1110.9}},{t:this.instance_263,p:{x:652.15,y:1182.9}},{t:this.instance_262,p:{x:723.75,y:1182.9}},{t:this.instance_261,p:{x:795.35,y:1182.9}},{t:this.instance_260,p:{x:866.95,y:1182.9}},{t:this.instance_259,p:{x:938.55,y:1182.9}},{t:this.instance_258,p:{x:1010.15,y:1182.9}},{t:this.instance_257,p:{x:1081.75,y:1182.9}},{t:this.instance_256,p:{x:1153.35,y:1182.9}},{t:this.instance_255,p:{x:1224.95,y:1182.9}},{t:this.instance_254,p:{x:1296.55,y:1182.9}},{t:this.instance_253,p:{x:1368.15,y:1182.9}},{t:this.instance_252,p:{x:1439.75,y:1182.9}},{t:this.instance_251,p:{x:437.35,y:1182.9}},{t:this.instance_250,p:{x:508.95,y:1182.9}},{t:this.instance_249,p:{x:580.55,y:1182.9}},{t:this.instance_248,p:{x:1511.35,y:1182.9}},{t:this.instance_247,p:{x:1582.95,y:1182.9}},{t:this.instance_246,p:{x:1654.55,y:1182.9}},{t:this.instance_245,p:{x:1726.15,y:1182.9}},{t:this.instance_244,p:{x:1797.75,y:1182.9}},{t:this.instance_243,p:{x:1869.35,y:1182.9}},{t:this.instance_242,p:{x:1942.2,y:1182.9}},{t:this.instance_241,p:{x:652.15,y:1254.9}},{t:this.instance_240,p:{x:723.75,y:1254.9}},{t:this.instance_239,p:{x:795.35,y:1254.9}},{t:this.instance_238,p:{x:866.95,y:1254.9}},{t:this.instance_237,p:{x:938.55,y:1254.9}},{t:this.instance_236,p:{x:1010.15,y:1254.9}},{t:this.instance_235,p:{x:1081.75,y:1254.9}},{t:this.instance_234,p:{x:1153.35,y:1254.9}},{t:this.instance_233,p:{x:1224.95,y:1254.9}},{t:this.instance_232,p:{x:1296.55,y:1254.9}},{t:this.instance_231,p:{x:1368.15,y:1254.9}},{t:this.instance_230,p:{x:1439.75,y:1254.9}},{t:this.instance_229,p:{x:437.35,y:1254.9}},{t:this.instance_228,p:{x:508.95,y:1254.9}},{t:this.instance_227,p:{x:580.55,y:1254.9}},{t:this.instance_226,p:{x:1511.35,y:1254.9}},{t:this.instance_225,p:{x:1582.95,y:1254.9}},{t:this.instance_224,p:{x:1654.55,y:1254.9}},{t:this.instance_223,p:{x:1726.15,y:1254.9}},{t:this.instance_222,p:{x:1797.75,y:1254.9}},{t:this.instance_221,p:{x:1869.35,y:1254.9}},{t:this.instance_220,p:{x:1942.2,y:1254.9}},{t:this.instance_219,p:{x:652.15,y:1326.9}},{t:this.instance_218,p:{x:723.75,y:1326.9}},{t:this.instance_217,p:{x:795.35,y:1326.9}},{t:this.instance_216,p:{x:866.95,y:1326.9}},{t:this.instance_215,p:{x:938.55,y:1326.9}},{t:this.instance_214,p:{x:1010.15,y:1326.9}},{t:this.instance_213,p:{x:1081.75,y:1326.9}},{t:this.instance_212,p:{x:1153.35,y:1326.9}},{t:this.instance_211,p:{x:1224.95,y:1326.9}},{t:this.instance_210,p:{x:1296.55,y:1326.9}},{t:this.instance_209,p:{x:1368.15,y:1326.9}},{t:this.instance_208,p:{x:1439.75,y:1326.9}},{t:this.instance_207,p:{x:437.35,y:1326.9}},{t:this.instance_206,p:{x:508.95,y:1326.9}},{t:this.instance_205,p:{x:580.55,y:1326.9}},{t:this.instance_204,p:{x:1511.35,y:1326.9}},{t:this.instance_203,p:{x:1582.95,y:1326.9}},{t:this.instance_202,p:{x:1654.55,y:1326.9}},{t:this.instance_201,p:{x:1726.15,y:1326.9}},{t:this.instance_200,p:{x:1797.75,y:1326.9}},{t:this.instance_199,p:{x:1869.35,y:1326.9}},{t:this.instance_198,p:{x:1942.2,y:1326.9}},{t:this.instance_197,p:{x:652.15,y:1398.9}},{t:this.instance_196,p:{x:723.75,y:1398.9}},{t:this.instance_195,p:{x:795.35,y:1398.9}},{t:this.instance_194,p:{x:866.95,y:1398.9}},{t:this.instance_193,p:{x:938.55,y:1398.9}},{t:this.instance_192,p:{x:1010.15,y:1398.9}},{t:this.instance_191,p:{x:1081.75,y:1398.9}},{t:this.instance_190,p:{x:1153.35,y:1398.9}},{t:this.instance_189,p:{x:1224.95,y:1398.9}},{t:this.instance_188,p:{x:1296.55,y:1398.9}},{t:this.instance_187,p:{x:1368.15,y:1398.9}},{t:this.instance_186,p:{x:1439.75,y:1398.9}},{t:this.instance_185,p:{x:437.35,y:1398.9}},{t:this.instance_184,p:{x:508.95,y:1398.9}},{t:this.instance_183,p:{x:580.55,y:1398.9}},{t:this.instance_182,p:{x:1511.35,y:1398.9}},{t:this.instance_181,p:{x:1582.95,y:1398.9}},{t:this.instance_180,p:{x:1654.55,y:1398.9}},{t:this.instance_179,p:{x:1726.15,y:1398.9}},{t:this.instance_178,p:{x:1797.75,y:1398.9}},{t:this.instance_177,p:{x:1869.35,y:1398.9}},{t:this.instance_176,p:{x:1942.2,y:1398.9}},{t:this.instance_175,p:{x:652.15,y:1470.9}},{t:this.instance_174,p:{x:723.75,y:1470.9}},{t:this.instance_173,p:{x:795.35,y:1470.9}},{t:this.instance_172,p:{x:866.95,y:1470.9}},{t:this.instance_171,p:{x:938.55,y:1470.9}},{t:this.instance_170,p:{x:1010.15,y:1470.9}},{t:this.instance_169,p:{x:1081.75,y:1470.9}},{t:this.instance_168,p:{x:1153.35,y:1470.9}},{t:this.instance_167,p:{x:1224.95,y:1470.9}},{t:this.instance_166,p:{x:1296.55,y:1470.9}},{t:this.instance_165,p:{x:1368.15,y:1470.9}},{t:this.instance_164,p:{x:1439.75,y:1470.9}},{t:this.instance_163,p:{x:437.35,y:1470.9}},{t:this.instance_162,p:{x:508.95,y:1470.9}},{t:this.instance_161,p:{x:580.55,y:1470.9}},{t:this.instance_160,p:{x:1511.35,y:1470.9}},{t:this.instance_159,p:{x:1582.95,y:1470.9}},{t:this.instance_158,p:{x:1654.55,y:1470.9}},{t:this.instance_157,p:{x:1726.15,y:1470.9}},{t:this.instance_156,p:{x:1797.75,y:1470.9}},{t:this.instance_155,p:{x:1869.35,y:1470.9}},{t:this.instance_154,p:{x:1942.2,y:1470.9}},{t:this.instance_153,p:{x:652.15,y:1542.9}},{t:this.instance_152,p:{x:723.75,y:1542.9}},{t:this.instance_151,p:{x:795.35,y:1542.9}},{t:this.instance_150,p:{x:866.95,y:1542.9}},{t:this.instance_149,p:{x:938.55,y:1542.9}},{t:this.instance_148,p:{x:1010.15,y:1542.9}},{t:this.instance_147,p:{x:1081.75,y:1542.9}},{t:this.instance_146,p:{x:1153.35,y:1542.9}},{t:this.instance_145,p:{x:1224.95,y:1542.9}},{t:this.instance_144,p:{x:1296.55,y:1542.9}},{t:this.instance_143,p:{x:1368.15,y:1542.9}},{t:this.instance_142,p:{x:1439.75,y:1542.9}},{t:this.instance_141,p:{x:437.35,y:1542.9}},{t:this.instance_140,p:{x:508.95,y:1542.9}},{t:this.instance_139,p:{x:580.55,y:1542.9}},{t:this.instance_138,p:{x:1511.35,y:1542.9}},{t:this.instance_137,p:{x:1582.95,y:1542.9}},{t:this.instance_136,p:{x:1654.55,y:1542.9}},{t:this.instance_135,p:{x:1726.15,y:1542.9}},{t:this.instance_134,p:{x:1797.75,y:1542.9}},{t:this.instance_133,p:{x:1869.35,y:1542.9}},{t:this.instance_132,p:{x:1942.2,y:1542.9}},{t:this.instance_131,p:{x:652.15,y:1614.9}},{t:this.instance_130,p:{x:723.75,y:1614.9}},{t:this.instance_129,p:{x:795.35,y:1614.9}},{t:this.instance_128,p:{x:866.95,y:1614.9}},{t:this.instance_127,p:{x:938.55,y:1614.9}},{t:this.instance_126,p:{x:1010.15,y:1614.9}},{t:this.instance_125,p:{x:1081.75,y:1614.9}},{t:this.instance_124,p:{x:1153.35,y:1614.9}},{t:this.instance_123,p:{x:1224.95,y:1614.9}},{t:this.instance_122,p:{x:1296.55,y:1614.9}},{t:this.instance_121,p:{x:1368.15,y:1614.9}},{t:this.instance_120,p:{x:1439.75,y:1614.9}},{t:this.instance_119,p:{x:437.35,y:1614.9}},{t:this.instance_118,p:{x:508.95,y:1614.9}},{t:this.instance_117,p:{x:580.55,y:1614.9}},{t:this.instance_116,p:{x:1511.35,y:1614.9}},{t:this.instance_115,p:{x:1582.95,y:1614.9}},{t:this.instance_114,p:{x:1654.55,y:1614.9}},{t:this.instance_113,p:{x:1726.15,y:1614.9}},{t:this.instance_112,p:{x:1797.75,y:1614.9}},{t:this.instance_111,p:{x:1869.35,y:1614.9}},{t:this.instance_110,p:{x:1942.2,y:1614.9}},{t:this.instance_109,p:{x:652.15,y:1686.9}},{t:this.instance_108,p:{x:723.75,y:1686.9}},{t:this.instance_107,p:{x:795.35,y:1686.9}},{t:this.instance_106,p:{x:866.95,y:1686.9}},{t:this.instance_105,p:{x:938.55,y:1686.9}},{t:this.instance_104,p:{x:1010.15,y:1686.9}},{t:this.instance_103,p:{x:1081.75,y:1686.9}},{t:this.instance_102,p:{x:1153.35,y:1686.9}},{t:this.instance_101,p:{x:1224.95,y:1686.9}},{t:this.instance_100,p:{x:1296.55,y:1686.9}},{t:this.instance_99,p:{x:1368.15,y:1686.9}},{t:this.instance_98,p:{x:1439.75,y:1686.9}},{t:this.instance_97,p:{x:437.35,y:1686.9}},{t:this.instance_96,p:{x:508.95,y:1686.9}},{t:this.instance_95,p:{x:580.55,y:1686.9}},{t:this.instance_94,p:{x:1511.35,y:1686.9}},{t:this.instance_93,p:{x:1582.95,y:1686.9}},{t:this.instance_92,p:{x:1654.55,y:1686.9}},{t:this.instance_91,p:{x:1726.15,y:1686.9}},{t:this.instance_90,p:{x:1797.75,y:1686.9}},{t:this.instance_89,p:{x:1869.35,y:1686.9}},{t:this.instance_88,p:{x:1942.2,y:1686.9}},{t:this.instance_87,p:{x:652.15,y:1758.9}},{t:this.instance_86,p:{x:723.75,y:1758.9}},{t:this.instance_85,p:{x:795.35,y:1758.9}},{t:this.instance_84,p:{x:866.95,y:1758.9}},{t:this.instance_83,p:{x:938.55,y:1758.9}},{t:this.instance_82,p:{x:1010.15,y:1758.9}},{t:this.instance_81,p:{x:1081.75,y:1758.9}},{t:this.instance_80,p:{x:1153.35,y:1758.9}},{t:this.instance_79,p:{x:1224.95,y:1758.9}},{t:this.instance_78,p:{x:1296.55,y:1758.9}},{t:this.instance_77,p:{x:1368.15,y:1758.9}},{t:this.instance_76,p:{x:1439.75,y:1758.9}},{t:this.instance_75,p:{x:437.35,y:1758.9}},{t:this.instance_74,p:{x:508.95,y:1758.9}},{t:this.instance_73,p:{x:580.55,y:1758.9}},{t:this.instance_72,p:{x:1511.35,y:1758.9}},{t:this.instance_71,p:{x:1582.95,y:1758.9}},{t:this.instance_70,p:{x:1654.55,y:1758.9}},{t:this.instance_69,p:{x:1726.15,y:1758.9}},{t:this.instance_68,p:{x:1797.75,y:1758.9}},{t:this.instance_67,p:{x:1869.35,y:1758.9}},{t:this.instance_66,p:{x:1942.2,y:1758.9}},{t:this.instance_65,p:{x:652.15,y:1830.9}},{t:this.instance_64,p:{x:723.75,y:1830.9}},{t:this.instance_63,p:{x:795.35,y:1830.9}},{t:this.instance_62,p:{x:866.95,y:1830.9}},{t:this.instance_61,p:{x:938.55,y:1830.9}},{t:this.instance_60,p:{x:1010.15,y:1830.9}},{t:this.instance_59,p:{x:1081.75,y:1830.9}},{t:this.instance_58,p:{x:1153.35,y:1830.9}},{t:this.instance_57,p:{x:1224.95,y:1830.9}},{t:this.instance_56,p:{x:1296.55,y:1830.9}},{t:this.instance_55,p:{x:1368.15,y:1830.9}},{t:this.instance_54,p:{x:1439.75,y:1830.9}},{t:this.instance_53,p:{x:437.35,y:1830.9}},{t:this.instance_52,p:{x:508.95,y:1830.9}},{t:this.instance_51,p:{x:580.55,y:1830.9}},{t:this.instance_50,p:{x:1511.35,y:1830.9}},{t:this.instance_49,p:{x:1582.95,y:1830.9}},{t:this.instance_48,p:{x:1654.55,y:1830.9}},{t:this.instance_47,p:{x:1726.15,y:1830.9}},{t:this.instance_46,p:{x:1797.75,y:1830.9}},{t:this.instance_45,p:{x:1869.35,y:1830.9}},{t:this.instance_44,p:{x:1942.2,y:1830.9}},{t:this.instance_43,p:{x:652.15,y:1902.9}},{t:this.instance_42,p:{x:723.75,y:1902.9}},{t:this.instance_41,p:{x:795.35,y:1902.9}},{t:this.instance_40,p:{x:866.95,y:1902.9}},{t:this.instance_39,p:{x:938.55,y:1902.9}},{t:this.instance_38,p:{x:1010.15,y:1902.9}},{t:this.instance_37,p:{x:1081.75,y:1902.9}},{t:this.instance_36,p:{x:1153.35,y:1902.9}},{t:this.instance_35,p:{x:1224.95,y:1902.9}},{t:this.instance_34,p:{x:1296.55,y:1902.9}},{t:this.instance_33,p:{x:1368.15,y:1902.9}},{t:this.instance_32,p:{x:1439.75,y:1902.9}},{t:this.instance_31,p:{x:437.35,y:1902.9}},{t:this.instance_30,p:{x:508.95,y:1902.9}},{t:this.instance_29,p:{x:580.55,y:1902.9}},{t:this.instance_28,p:{x:1511.35,y:1902.9}},{t:this.instance_27,p:{x:1582.95,y:1902.9}},{t:this.instance_26,p:{x:1654.55,y:1902.9}},{t:this.instance_25,p:{x:1726.15,y:1902.9}},{t:this.instance_24,p:{x:1797.75,y:1902.9}},{t:this.instance_23,p:{x:1869.35,y:1902.9}},{t:this.instance_22,p:{x:1942.2,y:1902.9}},{t:this.instance_21,p:{x:652.15,y:1974.9}},{t:this.instance_20,p:{x:723.75,y:1974.9}},{t:this.instance_19,p:{x:795.35,y:1974.9}},{t:this.instance_18,p:{x:866.95,y:1974.9}},{t:this.instance_17,p:{x:938.55,y:1974.9}},{t:this.instance_16,p:{x:1010.15,y:1974.9}},{t:this.instance_15,p:{x:1081.75,y:1974.9}},{t:this.instance_14,p:{x:1153.35,y:1974.9}},{t:this.instance_13,p:{x:1224.95,y:1974.9}},{t:this.instance_12,p:{x:1296.55,y:1974.9}},{t:this.instance_11,p:{x:1368.15,y:1974.9}},{t:this.instance_10,p:{x:1439.75,y:1974.9}},{t:this.instance_9,p:{x:437.35,y:1974.9}},{t:this.instance_8,p:{x:508.95,y:1974.9}},{t:this.instance_7,p:{x:580.55,y:1974.9}},{t:this.instance_6,p:{x:1511.35,y:1974.9}},{t:this.instance_5,p:{x:1582.95,y:1974.9}},{t:this.instance_4,p:{x:1654.55,y:1974.9}},{t:this.instance_3,p:{x:1726.15,y:1974.9}},{t:this.instance_2,p:{x:1797.75,y:1974.9}},{t:this.instance_1,p:{x:1869.35,y:1974.9}},{t:this.instance,p:{x:1942.2,y:1974.9}}]}).to({state:[{t:this.instance_419,p:{x:671.4,y:27}},{t:this.instance_418,p:{x:743,y:27}},{t:this.instance_417,p:{x:814.6,y:27}},{t:this.instance_416,p:{x:886.2,y:27}},{t:this.instance_415,p:{x:957.8,y:27}},{t:this.instance_414,p:{x:1029.4,y:27}},{t:this.instance_413,p:{x:1101,y:27}},{t:this.instance_412,p:{x:1172.6,y:27}},{t:this.instance_411,p:{x:1244.2,y:27}},{t:this.instance_410,p:{x:1315.8,y:27}},{t:this.instance_409,p:{x:1387.4,y:27}},{t:this.instance_408,p:{x:1459,y:27}},{t:this.instance_407,p:{x:27,y:27}},{t:this.instance_406,p:{x:98.6,y:27}},{t:this.instance_405,p:{x:170.2,y:27}},{t:this.instance_404,p:{x:241.8,y:27}},{t:this.instance_403,p:{x:313.4,y:27}},{t:this.instance_402,p:{x:385,y:27}},{t:this.instance_401,p:{x:456.6,y:27}},{t:this.instance_400,p:{x:528.2,y:27}},{t:this.instance_399,p:{x:599.8,y:27}},{t:this.instance_398,p:{x:1530.6,y:27}},{t:this.instance_397,p:{x:1602.2,y:27}},{t:this.instance_396,p:{x:1673.8,y:27}},{t:this.instance_395,p:{x:1745.4,y:27}},{t:this.instance_394,p:{x:1817,y:27}},{t:this.instance_393,p:{x:1888.6,y:27}},{t:this.instance_392,p:{x:1961.45,y:27}},{t:this.instance_391,p:{x:671.4,y:99}},{t:this.instance_390,p:{x:743,y:99}},{t:this.instance_389,p:{x:814.6,y:99}},{t:this.instance_388,p:{x:886.2,y:99}},{t:this.instance_387,p:{x:957.8,y:99}},{t:this.instance_386,p:{x:1029.4,y:99}},{t:this.instance_385,p:{x:1101,y:99}},{t:this.instance_384,p:{x:1172.6,y:99}},{t:this.instance_383,p:{x:1244.2,y:99}},{t:this.instance_382,p:{x:1315.8,y:99}},{t:this.instance_381,p:{x:1387.4,y:99}},{t:this.instance_380,p:{x:1459,y:99}},{t:this.instance_379,p:{x:27,y:99}},{t:this.instance_378,p:{x:98.6,y:99}},{t:this.instance_377,p:{x:170.2,y:99}},{t:this.instance_376,p:{x:241.8,y:99}},{t:this.instance_375,p:{x:313.4,y:99}},{t:this.instance_374,p:{x:385,y:99}},{t:this.instance_373,p:{x:456.6,y:99}},{t:this.instance_372,p:{x:528.2,y:99}},{t:this.instance_371,p:{x:599.8,y:99}},{t:this.instance_370,p:{x:1530.6,y:99}},{t:this.instance_369,p:{x:1602.2,y:99}},{t:this.instance_368,p:{x:1673.8,y:99}},{t:this.instance_367,p:{x:1745.4,y:99}},{t:this.instance_366,p:{x:1817,y:99}},{t:this.instance_365,p:{x:1888.6,y:99}},{t:this.instance_364,p:{x:1961.45,y:99}},{t:this.instance_363,p:{x:671.4,y:171}},{t:this.instance_362,p:{x:743,y:171}},{t:this.instance_361,p:{x:814.6,y:171}},{t:this.instance_360,p:{x:886.2,y:171}},{t:this.instance_359,p:{x:957.8,y:171}},{t:this.instance_358,p:{x:1029.4,y:171}},{t:this.instance_357,p:{x:1101,y:171}},{t:this.instance_356,p:{x:1172.6,y:171}},{t:this.instance_355,p:{x:1244.2,y:171}},{t:this.instance_354,p:{x:1315.8,y:171}},{t:this.instance_353,p:{x:1387.4,y:171}},{t:this.instance_352,p:{x:1459,y:171}},{t:this.instance_351,p:{x:27,y:171}},{t:this.instance_350,p:{x:98.6,y:171}},{t:this.instance_349,p:{x:170.2,y:171}},{t:this.instance_348,p:{x:241.8,y:171}},{t:this.instance_347,p:{x:313.4,y:171}},{t:this.instance_346,p:{x:385,y:171}},{t:this.instance_345,p:{x:456.6,y:171}},{t:this.instance_344,p:{x:528.2,y:171}},{t:this.instance_343,p:{x:599.8,y:171}},{t:this.instance_342,p:{x:1530.6,y:171}},{t:this.instance_341,p:{x:1602.2,y:171}},{t:this.instance_340,p:{x:1673.8,y:171}},{t:this.instance_339,p:{x:1745.4,y:171}},{t:this.instance_338,p:{x:1817,y:171}},{t:this.instance_337,p:{x:1888.6,y:171}},{t:this.instance_336,p:{x:1961.45,y:171}},{t:this.instance_335,p:{x:671.4,y:243}},{t:this.instance_334,p:{x:743,y:243}},{t:this.instance_333,p:{x:814.6,y:243}},{t:this.instance_332,p:{x:886.2,y:243}},{t:this.instance_331,p:{x:957.8,y:243}},{t:this.instance_330,p:{x:1029.4,y:243}},{t:this.instance_329,p:{x:1101,y:243}},{t:this.instance_328,p:{x:1172.6,y:243}},{t:this.instance_327,p:{x:1244.2,y:243}},{t:this.instance_326,p:{x:1315.8,y:243}},{t:this.instance_325,p:{x:1387.4,y:243}},{t:this.instance_324,p:{x:1459,y:243}},{t:this.instance_323,p:{x:27,y:243}},{t:this.instance_322,p:{x:98.6,y:243}},{t:this.instance_321,p:{x:170.2,y:243}},{t:this.instance_320,p:{x:241.8,y:243}},{t:this.instance_319,p:{x:313.4,y:243}},{t:this.instance_318,p:{x:385,y:243}},{t:this.instance_317,p:{x:456.6,y:243}},{t:this.instance_316,p:{x:528.2,y:243}},{t:this.instance_315,p:{x:599.8,y:243}},{t:this.instance_314,p:{x:1530.6,y:243}},{t:this.instance_313,p:{x:1602.2,y:243}},{t:this.instance_312,p:{x:1673.8,y:243}},{t:this.instance_311,p:{x:1745.4,y:243}},{t:this.instance_310,p:{x:1817,y:243}},{t:this.instance_309,p:{x:1888.6,y:243}},{t:this.instance_308,p:{x:1961.45,y:243}},{t:this.instance_307,p:{x:671.4,y:315}},{t:this.instance_306,p:{x:743,y:315}},{t:this.instance_305,p:{x:814.6,y:315}},{t:this.instance_304,p:{x:886.2,y:315}},{t:this.instance_303,p:{x:957.8,y:315}},{t:this.instance_302,p:{x:1029.4,y:315}},{t:this.instance_301,p:{x:1101,y:315}},{t:this.instance_300,p:{x:1172.6,y:315}},{t:this.instance_299,p:{x:1244.2,y:315}},{t:this.instance_298,p:{x:1315.8,y:315}},{t:this.instance_297,p:{x:1387.4,y:315}},{t:this.instance_296,p:{x:1459,y:315}},{t:this.instance_295,p:{x:27,y:315}},{t:this.instance_294,p:{x:98.6,y:315}},{t:this.instance_293,p:{x:170.2,y:315}},{t:this.instance_292,p:{x:241.8,y:315}},{t:this.instance_291,p:{x:313.4,y:315}},{t:this.instance_290,p:{x:385,y:315}},{t:this.instance_289,p:{x:456.6,y:315}},{t:this.instance_288,p:{x:528.2,y:315}},{t:this.instance_287,p:{x:599.8,y:315}},{t:this.instance_286,p:{x:1530.6,y:315}},{t:this.instance_285,p:{x:1602.2,y:315}},{t:this.instance_284,p:{x:1673.8,y:315}},{t:this.instance_283,p:{x:1745.4,y:315}},{t:this.instance_282,p:{x:1817,y:315}},{t:this.instance_281,p:{x:1888.6,y:315}},{t:this.instance_280,p:{x:1961.45,y:315}},{t:this.instance_279,p:{x:671.4,y:387}},{t:this.instance_278,p:{x:743,y:387}},{t:this.instance_277,p:{x:814.6,y:387}},{t:this.instance_276,p:{x:886.2,y:387}},{t:this.instance_275,p:{x:957.8,y:387}},{t:this.instance_274,p:{x:1029.4,y:387}},{t:this.instance_273,p:{x:1101,y:387}},{t:this.instance_272,p:{x:1172.6,y:387}},{t:this.instance_271,p:{x:1244.2,y:387}},{t:this.instance_270,p:{x:1315.8,y:387}},{t:this.instance_269,p:{x:1387.4,y:387}},{t:this.instance_268,p:{x:1459,y:387}},{t:this.instance_267,p:{x:27,y:387}},{t:this.instance_266,p:{x:98.6,y:387}},{t:this.instance_265,p:{x:170.2,y:387}},{t:this.instance_264,p:{x:241.8,y:387}},{t:this.instance_263,p:{x:313.4,y:387}},{t:this.instance_262,p:{x:385,y:387}},{t:this.instance_261,p:{x:456.6,y:387}},{t:this.instance_260,p:{x:528.2,y:387}},{t:this.instance_259,p:{x:599.8,y:387}},{t:this.instance_258,p:{x:1530.6,y:387}},{t:this.instance_257,p:{x:1602.2,y:387}},{t:this.instance_256,p:{x:1673.8,y:387}},{t:this.instance_255,p:{x:1745.4,y:387}},{t:this.instance_254,p:{x:1817,y:387}},{t:this.instance_253,p:{x:1888.6,y:387}},{t:this.instance_252,p:{x:1961.45,y:387}},{t:this.instance_251,p:{x:671.4,y:459}},{t:this.instance_250,p:{x:743,y:459}},{t:this.instance_249,p:{x:814.6,y:459}},{t:this.instance_248,p:{x:886.2,y:459}},{t:this.instance_247,p:{x:957.8,y:459}},{t:this.instance_246,p:{x:1029.4,y:459}},{t:this.instance_245,p:{x:1101,y:459}},{t:this.instance_244,p:{x:1172.6,y:459}},{t:this.instance_243,p:{x:1244.2,y:459}},{t:this.instance_242,p:{x:1315.8,y:459}},{t:this.instance_241,p:{x:1387.4,y:459}},{t:this.instance_240,p:{x:1459,y:459}},{t:this.instance_239,p:{x:27,y:459}},{t:this.instance_238,p:{x:98.6,y:459}},{t:this.instance_237,p:{x:170.2,y:459}},{t:this.instance_236,p:{x:241.8,y:459}},{t:this.instance_235,p:{x:313.4,y:459}},{t:this.instance_234,p:{x:385,y:459}},{t:this.instance_233,p:{x:456.6,y:459}},{t:this.instance_232,p:{x:528.2,y:459}},{t:this.instance_231,p:{x:599.8,y:459}},{t:this.instance_230,p:{x:1530.6,y:459}},{t:this.instance_229,p:{x:1602.2,y:459}},{t:this.instance_228,p:{x:1673.8,y:459}},{t:this.instance_227,p:{x:1745.4,y:459}},{t:this.instance_226,p:{x:1817,y:459}},{t:this.instance_225,p:{x:1888.6,y:459}},{t:this.instance_224,p:{x:1961.45,y:459}},{t:this.instance_223,p:{x:671.4,y:531}},{t:this.instance_222,p:{x:743,y:531}},{t:this.instance_221,p:{x:814.6,y:531}},{t:this.instance_220,p:{x:886.2,y:531}},{t:this.instance_219,p:{x:957.8,y:531}},{t:this.instance_218,p:{x:1029.4,y:531}},{t:this.instance_217,p:{x:1101,y:531}},{t:this.instance_216,p:{x:1172.6,y:531}},{t:this.instance_215,p:{x:1244.2,y:531}},{t:this.instance_214,p:{x:1315.8,y:531}},{t:this.instance_213,p:{x:1387.4,y:531}},{t:this.instance_212,p:{x:1459,y:531}},{t:this.instance_211,p:{x:27,y:531}},{t:this.instance_210,p:{x:98.6,y:531}},{t:this.instance_209,p:{x:170.2,y:531}},{t:this.instance_208,p:{x:241.8,y:531}},{t:this.instance_207,p:{x:313.4,y:531}},{t:this.instance_206,p:{x:385,y:531}},{t:this.instance_205,p:{x:456.6,y:531}},{t:this.instance_204,p:{x:528.2,y:531}},{t:this.instance_203,p:{x:599.8,y:531}},{t:this.instance_202,p:{x:1530.6,y:531}},{t:this.instance_201,p:{x:1602.2,y:531}},{t:this.instance_200,p:{x:1673.8,y:531}},{t:this.instance_199,p:{x:1745.4,y:531}},{t:this.instance_198,p:{x:1817,y:531}},{t:this.instance_197,p:{x:1888.6,y:531}},{t:this.instance_196,p:{x:1961.45,y:531}},{t:this.instance_195,p:{x:671.4,y:603}},{t:this.instance_194,p:{x:743,y:603}},{t:this.instance_193,p:{x:814.6,y:603}},{t:this.instance_192,p:{x:886.2,y:603}},{t:this.instance_191,p:{x:957.8,y:603}},{t:this.instance_190,p:{x:1029.4,y:603}},{t:this.instance_189,p:{x:1101,y:603}},{t:this.instance_188,p:{x:1172.6,y:603}},{t:this.instance_187,p:{x:1244.2,y:603}},{t:this.instance_186,p:{x:1315.8,y:603}},{t:this.instance_185,p:{x:1387.4,y:603}},{t:this.instance_184,p:{x:1459,y:603}},{t:this.instance_183,p:{x:27,y:603}},{t:this.instance_182,p:{x:98.6,y:603}},{t:this.instance_181,p:{x:170.2,y:603}},{t:this.instance_180,p:{x:241.8,y:603}},{t:this.instance_179,p:{x:313.4,y:603}},{t:this.instance_178,p:{x:385,y:603}},{t:this.instance_177,p:{x:456.6,y:603}},{t:this.instance_176,p:{x:528.2,y:603}},{t:this.instance_175,p:{x:599.8,y:603}},{t:this.instance_174,p:{x:1530.6,y:603}},{t:this.instance_173,p:{x:1602.2,y:603}},{t:this.instance_172,p:{x:1673.8,y:603}},{t:this.instance_171,p:{x:1745.4,y:603}},{t:this.instance_170,p:{x:1817,y:603}},{t:this.instance_169,p:{x:1888.6,y:603}},{t:this.instance_168,p:{x:1961.45,y:603}},{t:this.instance_167,p:{x:671.4,y:675}},{t:this.instance_166,p:{x:743,y:675}},{t:this.instance_165,p:{x:814.6,y:675}},{t:this.instance_164,p:{x:886.2,y:675}},{t:this.instance_163,p:{x:957.8,y:675}},{t:this.instance_162,p:{x:1029.4,y:675}},{t:this.instance_161,p:{x:1101,y:675}},{t:this.instance_160,p:{x:1172.6,y:675}},{t:this.instance_159,p:{x:1244.2,y:675}},{t:this.instance_158,p:{x:1315.8,y:675}},{t:this.instance_157,p:{x:1387.4,y:675}},{t:this.instance_156,p:{x:1459,y:675}},{t:this.instance_155,p:{x:27,y:675}},{t:this.instance_154,p:{x:98.6,y:675}},{t:this.instance_153,p:{x:170.2,y:675}},{t:this.instance_152,p:{x:241.8,y:675}},{t:this.instance_151,p:{x:313.4,y:675}},{t:this.instance_150,p:{x:385,y:675}},{t:this.instance_149,p:{x:456.6,y:675}},{t:this.instance_148,p:{x:528.2,y:675}},{t:this.instance_147,p:{x:599.8,y:675}},{t:this.instance_146,p:{x:1530.6,y:675}},{t:this.instance_145,p:{x:1602.2,y:675}},{t:this.instance_144,p:{x:1673.8,y:675}},{t:this.instance_143,p:{x:1745.4,y:675}},{t:this.instance_142,p:{x:1817,y:675}},{t:this.instance_141,p:{x:1888.6,y:675}},{t:this.instance_140,p:{x:1961.45,y:675}},{t:this.instance_139,p:{x:671.4,y:747}},{t:this.instance_138,p:{x:743,y:747}},{t:this.instance_137,p:{x:814.6,y:747}},{t:this.instance_136,p:{x:886.2,y:747}},{t:this.instance_135,p:{x:957.8,y:747}},{t:this.instance_134,p:{x:1029.4,y:747}},{t:this.instance_133,p:{x:1101,y:747}},{t:this.instance_132,p:{x:1172.6,y:747}},{t:this.instance_131,p:{x:1244.2,y:747}},{t:this.instance_130,p:{x:1315.8,y:747}},{t:this.instance_129,p:{x:1387.4,y:747}},{t:this.instance_128,p:{x:1459,y:747}},{t:this.instance_127,p:{x:27,y:747}},{t:this.instance_126,p:{x:98.6,y:747}},{t:this.instance_125,p:{x:170.2,y:747}},{t:this.instance_124,p:{x:241.8,y:747}},{t:this.instance_123,p:{x:313.4,y:747}},{t:this.instance_122,p:{x:385,y:747}},{t:this.instance_121,p:{x:456.6,y:747}},{t:this.instance_120,p:{x:528.2,y:747}},{t:this.instance_119,p:{x:599.8,y:747}},{t:this.instance_118,p:{x:1530.6,y:747}},{t:this.instance_117,p:{x:1602.2,y:747}},{t:this.instance_116,p:{x:1673.8,y:747}},{t:this.instance_115,p:{x:1745.4,y:747}},{t:this.instance_114,p:{x:1817,y:747}},{t:this.instance_113,p:{x:1888.6,y:747}},{t:this.instance_112,p:{x:1961.45,y:747}},{t:this.instance_111,p:{x:671.4,y:819}},{t:this.instance_110,p:{x:743,y:819}},{t:this.instance_109,p:{x:814.6,y:819}},{t:this.instance_108,p:{x:886.2,y:819}},{t:this.instance_107,p:{x:957.8,y:819}},{t:this.instance_106,p:{x:1029.4,y:819}},{t:this.instance_105,p:{x:1101,y:819}},{t:this.instance_104,p:{x:1172.6,y:819}},{t:this.instance_103,p:{x:1244.2,y:819}},{t:this.instance_102,p:{x:1315.8,y:819}},{t:this.instance_101,p:{x:1387.4,y:819}},{t:this.instance_100,p:{x:1459,y:819}},{t:this.instance_99,p:{x:27,y:819}},{t:this.instance_98,p:{x:98.6,y:819}},{t:this.instance_97,p:{x:170.2,y:819}},{t:this.instance_96,p:{x:241.8,y:819}},{t:this.instance_95,p:{x:313.4,y:819}},{t:this.instance_94,p:{x:385,y:819}},{t:this.instance_93,p:{x:456.6,y:819}},{t:this.instance_92,p:{x:528.2,y:819}},{t:this.instance_91,p:{x:599.8,y:819}},{t:this.instance_90,p:{x:1530.6,y:819}},{t:this.instance_89,p:{x:1602.2,y:819}},{t:this.instance_88,p:{x:1673.8,y:819}},{t:this.instance_87,p:{x:1745.4,y:819}},{t:this.instance_86,p:{x:1817,y:819}},{t:this.instance_85,p:{x:1888.6,y:819}},{t:this.instance_84,p:{x:1961.45,y:819}},{t:this.instance_83,p:{x:671.4,y:891}},{t:this.instance_82,p:{x:743,y:891}},{t:this.instance_81,p:{x:814.6,y:891}},{t:this.instance_80,p:{x:886.2,y:891}},{t:this.instance_79,p:{x:957.8,y:891}},{t:this.instance_78,p:{x:1029.4,y:891}},{t:this.instance_77,p:{x:1101,y:891}},{t:this.instance_76,p:{x:1172.6,y:891}},{t:this.instance_75,p:{x:1244.2,y:891}},{t:this.instance_74,p:{x:1315.8,y:891}},{t:this.instance_73,p:{x:1387.4,y:891}},{t:this.instance_72,p:{x:1459,y:891}},{t:this.instance_71,p:{x:27,y:891}},{t:this.instance_70,p:{x:98.6,y:891}},{t:this.instance_69,p:{x:170.2,y:891}},{t:this.instance_68,p:{x:241.8,y:891}},{t:this.instance_67,p:{x:313.4,y:891}},{t:this.instance_66,p:{x:385,y:891}},{t:this.instance_65,p:{x:456.6,y:891}},{t:this.instance_64,p:{x:528.2,y:891}},{t:this.instance_63,p:{x:599.8,y:891}},{t:this.instance_62,p:{x:1530.6,y:891}},{t:this.instance_61,p:{x:1602.2,y:891}},{t:this.instance_60,p:{x:1673.8,y:891}},{t:this.instance_59,p:{x:1745.4,y:891}},{t:this.instance_58,p:{x:1817,y:891}},{t:this.instance_57,p:{x:1888.6,y:891}},{t:this.instance_56,p:{x:1961.45,y:891}},{t:this.instance_55,p:{x:671.4,y:963}},{t:this.instance_54,p:{x:743,y:963}},{t:this.instance_53,p:{x:814.6,y:963}},{t:this.instance_52,p:{x:886.2,y:963}},{t:this.instance_51,p:{x:957.8,y:963}},{t:this.instance_50,p:{x:1029.4,y:963}},{t:this.instance_49,p:{x:1101,y:963}},{t:this.instance_48,p:{x:1172.6,y:963}},{t:this.instance_47,p:{x:1244.2,y:963}},{t:this.instance_46,p:{x:1315.8,y:963}},{t:this.instance_45,p:{x:1387.4,y:963}},{t:this.instance_44,p:{x:1459,y:963}},{t:this.instance_43,p:{x:27,y:963}},{t:this.instance_42,p:{x:98.6,y:963}},{t:this.instance_41,p:{x:170.2,y:963}},{t:this.instance_40,p:{x:241.8,y:963}},{t:this.instance_39,p:{x:313.4,y:963}},{t:this.instance_38,p:{x:385,y:963}},{t:this.instance_37,p:{x:456.6,y:963}},{t:this.instance_36,p:{x:528.2,y:963}},{t:this.instance_35,p:{x:599.8,y:963}},{t:this.instance_34,p:{x:1530.6,y:963}},{t:this.instance_33,p:{x:1602.2,y:963}},{t:this.instance_32,p:{x:1673.8,y:963}},{t:this.instance_31,p:{x:1745.4,y:963}},{t:this.instance_30,p:{x:1817,y:963}},{t:this.instance_29,p:{x:1888.6,y:963}},{t:this.instance_28,p:{x:1961.45,y:963}},{t:this.instance_27,p:{x:671.4,y:1035.25}},{t:this.instance_26,p:{x:743,y:1035.25}},{t:this.instance_25,p:{x:814.6,y:1035.25}},{t:this.instance_24,p:{x:886.2,y:1035.25}},{t:this.instance_23,p:{x:957.8,y:1035.25}},{t:this.instance_22,p:{x:1029.4,y:1035.25}},{t:this.instance_21,p:{x:1101,y:1035.25}},{t:this.instance_20,p:{x:1172.6,y:1035.25}},{t:this.instance_19,p:{x:1244.2,y:1035.25}},{t:this.instance_18,p:{x:1315.8,y:1035.25}},{t:this.instance_17,p:{x:1387.4,y:1035.25}},{t:this.instance_16,p:{x:1459,y:1035.25}},{t:this.instance_15,p:{x:27,y:1035.25}},{t:this.instance_14,p:{x:98.6,y:1035.25}},{t:this.instance_13,p:{x:170.2,y:1035.25}},{t:this.instance_12,p:{x:241.8,y:1035.25}},{t:this.instance_11,p:{x:313.4,y:1035.25}},{t:this.instance_10,p:{x:385,y:1035.25}},{t:this.instance_9,p:{x:456.6,y:1035.25}},{t:this.instance_8,p:{x:528.2,y:1035.25}},{t:this.instance_7,p:{x:599.8,y:1035.25}},{t:this.instance_6,p:{x:1530.6,y:1035.25}},{t:this.instance_5,p:{x:1602.2,y:1035.25}},{t:this.instance_4,p:{x:1673.8,y:1035.25}},{t:this.instance_3,p:{x:1745.4,y:1035.25}},{t:this.instance_2,p:{x:1817,y:1035.25}},{t:this.instance_1,p:{x:1888.6,y:1035.25}},{t:this.instance,p:{x:1961.45,y:1035.25}}]},448).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1988.5,2001.9);


(lib.BoardAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_10
	this.instance = new lib.Symbol10("single",0);
	this.instance.setTransform(260.8,-46.4,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_5
	this.instance_1 = new lib.Symbol5("single",0);
	this.instance_1.setTransform(85.25,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_8
	this.instance_2 = new lib.Symbol8("single",0);
	this.instance_2.setTransform(611.8,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(123).to({mode:"synched",loop:false},0).wait(87).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_1
	this.instance_3 = new lib.Symbol1("single",0);
	this.instance_3.setTransform(-616.75,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(123).to({mode:"synched",loop:false},0).wait(87).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_20
	this.instance_4 = new lib.Symbol20("single",0);
	this.instance_4.setTransform(436.3,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(76).to({mode:"synched",loop:false},0).wait(134).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_11
	this.instance_5 = new lib.Symbol11("single",0);
	this.instance_5.setTransform(15.55,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(76).to({mode:"synched",loop:false},0).wait(134).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_7
	this.instance_6 = new lib.Symbol7("single",0);
	this.instance_6.setTransform(436.3,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(76).to({mode:"synched",loop:false},0).wait(134).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_14
	this.instance_7 = new lib.Symbol14("single",0);
	this.instance_7.setTransform(-616.75,-46.4,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_6
	this.instance_8 = new lib.Symbol6("single",0);
	this.instance_8.setTransform(260.8,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_18
	this.instance_9 = new lib.Symbol18("single",0);
	this.instance_9.setTransform(85.25,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({mode:"synched",loop:false},0).wait(163).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_15
	this.instance_10 = new lib.Symbol15("single",0);
	this.instance_10.setTransform(-616.75,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({mode:"synched",loop:false},0).wait(163).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_17
	this.instance_11 = new lib.Symbol17("single",0);
	this.instance_11.setTransform(-441.25,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({mode:"synched",loop:false},0).wait(150).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_12
	this.instance_12 = new lib.Symbol12("single",0);
	this.instance_12.setTransform(-90.25,-46.4,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60).to({mode:"synched",loop:false},0).wait(150).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_19
	this.instance_13 = new lib.Symbol19("single",0);
	this.instance_13.setTransform(260.8,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_16
	this.instance_14 = new lib.Symbol16("single",0);
	this.instance_14.setTransform(-265.75,144.6,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_13
	this.instance_15 = new lib.Symbol13("single",0);
	this.instance_15.setTransform(-441.25,-46.4,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(152).to({mode:"synched",loop:false},0).wait(58).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_9
	this.instance_16 = new lib.Symbol9("single",0);
	this.instance_16.setTransform(436.3,-46.4,1,1,0,0,0,69.7,81.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Symbol_4
	this.instance_17 = new lib.Symbol4("single",0);
	this.instance_17.setTransform(-90.25,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10).to({mode:"synched",loop:false},0).wait(200).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_3
	this.instance_18 = new lib.Symbol3("single",0);
	this.instance_18.setTransform(-265.75,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(152).to({mode:"synched",loop:false},0).wait(58).to({startPosition:10},0).to({_off:true},1).wait(10));

	// Symbol_2
	this.instance_19 = new lib.Symbol2("single",0);
	this.instance_19.setTransform(-441.25,-247.8,1,1,0,0,0,69.7,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	// Base_Board
	this.instance_20 = new lib.BackBoard("synched",0);
	this.instance_20.setTransform(-2.65,-51.55,1,1,0,0,0,685.8,278.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(210).to({startPosition:0},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-706.4,-330,1411.8,579);


(lib.TitleGraphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Path_33();
	this.instance.setTransform(161,120.85,1,1,0,0,0,19.2,19.2);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_32();
	this.instance_1.setTransform(161.1,120.85,1,1,0,0,0,12.8,21.4);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Path_1_20();
	this.instance_2.setTransform(161.1,120.9,1,1,0,0,0,24.7,3.8);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Path_2_20();
	this.instance_3.setTransform(161.1,120.85,1,1,0,0,0,12.8,21.4);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Path_31();
	this.instance_4.setTransform(161.05,120.9,1,1,0,0,0,27.7,16.5);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Path_1_19();
	this.instance_5.setTransform(161.05,120.9,1,1,0,0,0,27.7,16.5);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.Path_2_19();
	this.instance_6.setTransform(161.05,120.95,1,1,0,0,0,4.9,31.9);
	this.instance_6.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{x:161.05,y:120.95}},{t:this.instance_5,p:{x:161.05,y:120.9}},{t:this.instance_4,p:{x:161.05,y:120.9}},{t:this.instance_3,p:{x:161.1,y:120.85}},{t:this.instance_2,p:{x:161.1,y:120.9}},{t:this.instance_1,p:{x:161.1,y:120.85}},{t:this.instance,p:{x:161,y:120.85}}]}).to({state:[{t:this.instance_6,p:{x:173.3,y:122.3}},{t:this.instance_5,p:{x:173.3,y:122.25}},{t:this.instance_4,p:{x:173.3,y:122.25}},{t:this.instance_3,p:{x:173.35,y:122.2}},{t:this.instance_2,p:{x:173.35,y:122.25}},{t:this.instance_1,p:{x:173.35,y:122.2}},{t:this.instance,p:{x:173.25,y:122.2}}]},9).to({state:[{t:this.instance_6,p:{x:193,y:126.35}},{t:this.instance_5,p:{x:193,y:126.3}},{t:this.instance_4,p:{x:193,y:126.3}},{t:this.instance_3,p:{x:193.05,y:126.25}},{t:this.instance_2,p:{x:193.05,y:126.3}},{t:this.instance_1,p:{x:193.05,y:126.25}},{t:this.instance,p:{x:192.95,y:126.25}}]},9).wait(9));

	// Layer_3
	this.instance_7 = new lib.Path_30();
	this.instance_7.setTransform(76.5,124.95,1,1,0,0,0,19.2,19.2);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Path_29();
	this.instance_8.setTransform(76.6,124.95,1,1,0,0,0,12.8,21.4);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Path_1_18();
	this.instance_9.setTransform(76.6,125,1,1,0,0,0,24.7,3.8);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_2_18();
	this.instance_10.setTransform(76.6,124.95,1,1,0,0,0,12.8,21.4);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_28();
	this.instance_11.setTransform(76.55,125.05,1,1,0,0,0,27.7,16.5);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Path_1_17();
	this.instance_12.setTransform(76.55,125.05,1,1,0,0,0,27.7,16.5);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_2_17();
	this.instance_13.setTransform(76.55,125.05,1,1,0,0,0,4.9,31.9);
	this.instance_13.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{x:76.55,y:125.05}},{t:this.instance_12,p:{x:76.55,y:125.05}},{t:this.instance_11,p:{x:76.55,y:125.05}},{t:this.instance_10,p:{x:76.6,y:124.95}},{t:this.instance_9,p:{x:76.6,y:125}},{t:this.instance_8,p:{x:76.6,y:124.95}},{t:this.instance_7,p:{x:76.5,y:124.95}}]}).to({state:[{t:this.instance_13,p:{x:108.5,y:120.3}},{t:this.instance_12,p:{x:108.5,y:120.3}},{t:this.instance_11,p:{x:108.5,y:120.3}},{t:this.instance_10,p:{x:108.55,y:120.2}},{t:this.instance_9,p:{x:108.55,y:120.25}},{t:this.instance_8,p:{x:108.55,y:120.2}},{t:this.instance_7,p:{x:108.45,y:120.2}}]},9).to({state:[{t:this.instance_13,p:{x:140.45,y:119.65}},{t:this.instance_12,p:{x:140.45,y:119.65}},{t:this.instance_11,p:{x:140.45,y:119.65}},{t:this.instance_10,p:{x:140.5,y:119.55}},{t:this.instance_9,p:{x:140.5,y:119.6}},{t:this.instance_8,p:{x:140.5,y:119.55}},{t:this.instance_7,p:{x:140.4,y:119.55}}]},9).wait(9));

	// Layer_4
	this.instance_14 = new lib.Path_27();
	this.instance_14.setTransform(209.25,228.95,1,1,0,0,0,19.2,19.2);
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Path_26();
	this.instance_15.setTransform(209.35,228.95,1,1,0,0,0,12.8,21.4);
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.Path_1_16();
	this.instance_16.setTransform(209.35,228.95,1,1,0,0,0,24.7,3.8);
	this.instance_16.compositeOperation = "screen";

	this.instance_17 = new lib.Path_2_16();
	this.instance_17.setTransform(209.35,228.95,1,1,0,0,0,12.8,21.4);
	this.instance_17.compositeOperation = "screen";

	this.instance_18 = new lib.Path_25();
	this.instance_18.setTransform(209.3,229,1,1,0,0,0,27.7,16.5);
	this.instance_18.compositeOperation = "screen";

	this.instance_19 = new lib.Path_1_15();
	this.instance_19.setTransform(209.3,229,1,1,0,0,0,27.7,16.5);
	this.instance_19.compositeOperation = "screen";

	this.instance_20 = new lib.Path_2_15();
	this.instance_20.setTransform(209.3,229,1,1,0,0,0,4.9,31.9);
	this.instance_20.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20,p:{x:209.3,y:229}},{t:this.instance_19,p:{x:209.3,y:229}},{t:this.instance_18,p:{x:209.3,y:229}},{t:this.instance_17,p:{x:209.35,y:228.95}},{t:this.instance_16,p:{x:209.35,y:228.95}},{t:this.instance_15,p:{x:209.35,y:228.95}},{t:this.instance_14,p:{x:209.25,y:228.95}}]}).to({state:[{t:this.instance_20,p:{x:188.25,y:227.6}},{t:this.instance_19,p:{x:188.25,y:227.6}},{t:this.instance_18,p:{x:188.25,y:227.6}},{t:this.instance_17,p:{x:188.3,y:227.55}},{t:this.instance_16,p:{x:188.3,y:227.55}},{t:this.instance_15,p:{x:188.3,y:227.55}},{t:this.instance_14,p:{x:188.2,y:227.55}}]},9).to({state:[{t:this.instance_20,p:{x:166.5,y:226.9}},{t:this.instance_19,p:{x:166.5,y:226.9}},{t:this.instance_18,p:{x:166.5,y:226.9}},{t:this.instance_17,p:{x:166.55,y:226.85}},{t:this.instance_16,p:{x:166.55,y:226.85}},{t:this.instance_15,p:{x:166.55,y:226.85}},{t:this.instance_14,p:{x:166.45,y:226.85}}]},9).wait(9));

	// Layer_5
	this.instance_21 = new lib.Path_24();
	this.instance_21.setTransform(93.6,237.95,1,1,0,0,0,19.2,19.2);
	this.instance_21.compositeOperation = "screen";

	this.instance_22 = new lib.Path_23();
	this.instance_22.setTransform(93.7,237.95,1,1,0,0,0,12.8,21.4);
	this.instance_22.compositeOperation = "screen";

	this.instance_23 = new lib.Path_1_14();
	this.instance_23.setTransform(93.7,238,1,1,0,0,0,24.7,3.8);
	this.instance_23.compositeOperation = "screen";

	this.instance_24 = new lib.Path_2_14();
	this.instance_24.setTransform(93.7,237.95,1,1,0,0,0,12.8,21.4);
	this.instance_24.compositeOperation = "screen";

	this.instance_25 = new lib.Path_22();
	this.instance_25.setTransform(93.65,238,1,1,0,0,0,27.7,16.5);
	this.instance_25.compositeOperation = "screen";

	this.instance_26 = new lib.Path_1_13();
	this.instance_26.setTransform(93.65,238,1,1,0,0,0,27.7,16.5);
	this.instance_26.compositeOperation = "screen";

	this.instance_27 = new lib.Path_2_13();
	this.instance_27.setTransform(93.65,238.05,1,1,0,0,0,4.9,31.9);
	this.instance_27.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27,p:{x:93.65,y:238.05}},{t:this.instance_26,p:{x:93.65,y:238}},{t:this.instance_25,p:{x:93.65,y:238}},{t:this.instance_24,p:{x:93.7,y:237.95}},{t:this.instance_23,p:{x:93.7,y:238}},{t:this.instance_22,p:{x:93.7,y:237.95}},{t:this.instance_21,p:{x:93.6,y:237.95}}]}).to({state:[{t:this.instance_27,p:{x:63.05,y:249.6}},{t:this.instance_26,p:{x:63.05,y:249.55}},{t:this.instance_25,p:{x:63.05,y:249.55}},{t:this.instance_24,p:{x:63.1,y:249.5}},{t:this.instance_23,p:{x:63.1,y:249.55}},{t:this.instance_22,p:{x:63.1,y:249.5}},{t:this.instance_21,p:{x:63,y:249.5}}]},9).to({state:[{t:this.instance_27,p:{x:36.55,y:231.95}},{t:this.instance_26,p:{x:36.55,y:231.9}},{t:this.instance_25,p:{x:36.55,y:231.9}},{t:this.instance_24,p:{x:36.6,y:231.85}},{t:this.instance_23,p:{x:36.6,y:231.9}},{t:this.instance_22,p:{x:36.6,y:231.85}},{t:this.instance_21,p:{x:36.5,y:231.85}}]},9).wait(9));

	// Layer_6
	this.instance_28 = new lib.Path_21();
	this.instance_28.setTransform(36.55,221.15,1,1,0,0,0,19.2,19.2);
	this.instance_28.compositeOperation = "screen";

	this.instance_29 = new lib.Path_20();
	this.instance_29.setTransform(36.65,221.15,1,1,0,0,0,12.8,21.4);
	this.instance_29.compositeOperation = "screen";

	this.instance_30 = new lib.Path_1_12();
	this.instance_30.setTransform(36.65,221.2,1,1,0,0,0,24.7,3.8);
	this.instance_30.compositeOperation = "screen";

	this.instance_31 = new lib.Path_2_12();
	this.instance_31.setTransform(36.65,221.15,1,1,0,0,0,12.8,21.4);
	this.instance_31.compositeOperation = "screen";

	this.instance_32 = new lib.Path_19();
	this.instance_32.setTransform(36.6,221.2,1,1,0,0,0,27.7,16.5);
	this.instance_32.compositeOperation = "screen";

	this.instance_33 = new lib.Path_1_11();
	this.instance_33.setTransform(36.6,221.2,1,1,0,0,0,27.7,16.5);
	this.instance_33.compositeOperation = "screen";

	this.instance_34 = new lib.Path_2_11();
	this.instance_34.setTransform(36.6,221.25,1,1,0,0,0,4.9,31.9);
	this.instance_34.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34,p:{x:36.6,y:221.25}},{t:this.instance_33,p:{x:36.6,y:221.2}},{t:this.instance_32,p:{x:36.6,y:221.2}},{t:this.instance_31,p:{x:36.65,y:221.15}},{t:this.instance_30,p:{x:36.65,y:221.2}},{t:this.instance_29,p:{x:36.65,y:221.15}},{t:this.instance_28,p:{x:36.55,y:221.15}}]}).to({state:[{t:this.instance_34,p:{x:33.2,y:200.2}},{t:this.instance_33,p:{x:33.2,y:200.15}},{t:this.instance_32,p:{x:33.2,y:200.15}},{t:this.instance_31,p:{x:33.25,y:200.1}},{t:this.instance_30,p:{x:33.25,y:200.15}},{t:this.instance_29,p:{x:33.25,y:200.1}},{t:this.instance_28,p:{x:33.15,y:200.1}}]},9).to({state:[{t:this.instance_34,p:{x:30.5,y:168.25}},{t:this.instance_33,p:{x:30.5,y:168.2}},{t:this.instance_32,p:{x:30.5,y:168.2}},{t:this.instance_31,p:{x:30.55,y:168.15}},{t:this.instance_30,p:{x:30.55,y:168.2}},{t:this.instance_29,p:{x:30.55,y:168.15}},{t:this.instance_28,p:{x:30.45,y:168.15}}]},9).wait(9));

	// Layer_7
	this.instance_35 = new lib.Path_18();
	this.instance_35.setTransform(260.7,238.05,1,1,0,0,0,19.2,19.2);
	this.instance_35.compositeOperation = "screen";

	this.instance_36 = new lib.Path_17();
	this.instance_36.setTransform(260.8,238.05,1,1,0,0,0,12.8,21.4);
	this.instance_36.compositeOperation = "screen";

	this.instance_37 = new lib.Path_1_10();
	this.instance_37.setTransform(260.8,238.05,1,1,0,0,0,24.7,3.8);
	this.instance_37.compositeOperation = "screen";

	this.instance_38 = new lib.Path_2_10();
	this.instance_38.setTransform(260.8,238.05,1,1,0,0,0,12.8,21.4);
	this.instance_38.compositeOperation = "screen";

	this.instance_39 = new lib.Path_16();
	this.instance_39.setTransform(260.75,238.1,1,1,0,0,0,27.7,16.5);
	this.instance_39.compositeOperation = "screen";

	this.instance_40 = new lib.Path_1_9();
	this.instance_40.setTransform(260.75,238.1,1,1,0,0,0,27.7,16.5);
	this.instance_40.compositeOperation = "screen";

	this.instance_41 = new lib.Path_2_9();
	this.instance_41.setTransform(260.85,238.1,1,1,0,0,0,5,31.9);
	this.instance_41.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41,p:{x:260.85,y:238.1}},{t:this.instance_40,p:{x:260.75,y:238.1}},{t:this.instance_39,p:{x:260.75,y:238.1}},{t:this.instance_38,p:{x:260.8,y:238.05}},{t:this.instance_37,p:{x:260.8,y:238.05}},{t:this.instance_36,p:{x:260.8,y:238.05}},{t:this.instance_35,p:{x:260.7,y:238.05}}]}).to({state:[{t:this.instance_41,p:{x:240.7,y:235.25}},{t:this.instance_40,p:{x:240.6,y:235.25}},{t:this.instance_39,p:{x:240.6,y:235.25}},{t:this.instance_38,p:{x:240.65,y:235.2}},{t:this.instance_37,p:{x:240.65,y:235.2}},{t:this.instance_36,p:{x:240.65,y:235.2}},{t:this.instance_35,p:{x:240.55,y:235.2}}]},9).to({state:[{t:this.instance_41,p:{x:219.65,y:229.15}},{t:this.instance_40,p:{x:219.55,y:229.15}},{t:this.instance_39,p:{x:219.55,y:229.15}},{t:this.instance_38,p:{x:219.6,y:229.1}},{t:this.instance_37,p:{x:219.6,y:229.1}},{t:this.instance_36,p:{x:219.6,y:229.1}},{t:this.instance_35,p:{x:219.5,y:229.1}}]},9).wait(9));

	// Layer_8
	this.instance_42 = new lib.Path_15();
	this.instance_42.setTransform(192.2,125.6,1,1,0,0,0,19.2,19.2);
	this.instance_42.compositeOperation = "screen";

	this.instance_43 = new lib.Path_14();
	this.instance_43.setTransform(192.25,125.6,1,1,0,0,0,12.8,21.4);
	this.instance_43.compositeOperation = "screen";

	this.instance_44 = new lib.Path_1_8();
	this.instance_44.setTransform(192.25,125.65,1,1,0,0,0,24.7,3.8);
	this.instance_44.compositeOperation = "screen";

	this.instance_45 = new lib.Path_2_8();
	this.instance_45.setTransform(192.25,125.6,1,1,0,0,0,12.8,21.4);
	this.instance_45.compositeOperation = "screen";

	this.instance_46 = new lib.Path_13();
	this.instance_46.setTransform(192.2,125.65,1,1,0,0,0,27.7,16.5);
	this.instance_46.compositeOperation = "screen";

	this.instance_47 = new lib.Path_1_7();
	this.instance_47.setTransform(192.2,125.65,1,1,0,0,0,27.7,16.5);
	this.instance_47.compositeOperation = "screen";

	this.instance_48 = new lib.Path_2_7();
	this.instance_48.setTransform(192.3,125.7,1,1,0,0,0,5,31.9);
	this.instance_48.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_48,p:{x:192.3,y:125.7}},{t:this.instance_47,p:{x:192.2,y:125.65}},{t:this.instance_46,p:{x:192.2,y:125.65}},{t:this.instance_45,p:{x:192.25,y:125.6}},{t:this.instance_44,p:{x:192.25,y:125.65}},{t:this.instance_43,p:{x:192.25,y:125.6}},{t:this.instance_42,p:{x:192.2,y:125.6}}]}).to({state:[{t:this.instance_48,p:{x:223.55,y:133.85}},{t:this.instance_47,p:{x:223.45,y:133.8}},{t:this.instance_46,p:{x:223.45,y:133.8}},{t:this.instance_45,p:{x:223.5,y:133.75}},{t:this.instance_44,p:{x:223.5,y:133.8}},{t:this.instance_43,p:{x:223.5,y:133.75}},{t:this.instance_42,p:{x:223.45,y:133.75}}]},9).to({state:[{t:this.instance_48,p:{x:243.95,y:141.35}},{t:this.instance_47,p:{x:243.85,y:141.3}},{t:this.instance_46,p:{x:243.85,y:141.3}},{t:this.instance_45,p:{x:243.9,y:141.25}},{t:this.instance_44,p:{x:243.9,y:141.3}},{t:this.instance_43,p:{x:243.9,y:141.25}},{t:this.instance_42,p:{x:243.85,y:141.25}}]},9).wait(9));

	// Layer_9
	this.instance_49 = new lib.Path_12();
	this.instance_49.setTransform(31.05,147.45,1,1,0,0,0,19.2,19.2);
	this.instance_49.compositeOperation = "screen";

	this.instance_50 = new lib.Path_11();
	this.instance_50.setTransform(31.15,147.45,1,1,0,0,0,12.8,21.4);
	this.instance_50.compositeOperation = "screen";

	this.instance_51 = new lib.Path_1_6();
	this.instance_51.setTransform(31.15,147.5,1,1,0,0,0,24.7,3.8);
	this.instance_51.compositeOperation = "screen";

	this.instance_52 = new lib.Path_2_6();
	this.instance_52.setTransform(31.15,147.45,1,1,0,0,0,12.8,21.4);
	this.instance_52.compositeOperation = "screen";

	this.instance_53 = new lib.Path_10();
	this.instance_53.setTransform(31.1,147.5,1,1,0,0,0,27.7,16.5);
	this.instance_53.compositeOperation = "screen";

	this.instance_54 = new lib.Path_1_5();
	this.instance_54.setTransform(31.1,147.5,1,1,0,0,0,27.7,16.5);
	this.instance_54.compositeOperation = "screen";

	this.instance_55 = new lib.Path_2_5();
	this.instance_55.setTransform(31.1,147.55,1,1,0,0,0,4.9,31.9);
	this.instance_55.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_55,p:{x:31.1,y:147.55}},{t:this.instance_54,p:{x:31.1,y:147.5}},{t:this.instance_53,p:{x:31.1,y:147.5}},{t:this.instance_52,p:{x:31.15,y:147.45}},{t:this.instance_51,p:{x:31.15,y:147.5}},{t:this.instance_50,p:{x:31.15,y:147.45}},{t:this.instance_49,p:{x:31.05,y:147.45}}]}).to({state:[{t:this.instance_55,p:{x:45.4,y:132.6}},{t:this.instance_54,p:{x:45.4,y:132.55}},{t:this.instance_53,p:{x:45.4,y:132.55}},{t:this.instance_52,p:{x:45.45,y:132.5}},{t:this.instance_51,p:{x:45.45,y:132.55}},{t:this.instance_50,p:{x:45.45,y:132.5}},{t:this.instance_49,p:{x:45.35,y:132.5}}]},9).to({state:[{t:this.instance_55,p:{x:65.8,y:127.15}},{t:this.instance_54,p:{x:65.8,y:127.1}},{t:this.instance_53,p:{x:65.8,y:127.1}},{t:this.instance_52,p:{x:65.85,y:127.05}},{t:this.instance_51,p:{x:65.85,y:127.1}},{t:this.instance_50,p:{x:65.85,y:127.05}},{t:this.instance_49,p:{x:65.75,y:127.05}}]},9).wait(9));

	// Layer_10
	this.instance_56 = new lib.Path_9();
	this.instance_56.setTransform(262.3,150.35,1,1,0,0,0,19.2,19.2);
	this.instance_56.compositeOperation = "screen";

	this.instance_57 = new lib.Path_8();
	this.instance_57.setTransform(262.4,150.35,1,1,0,0,0,12.8,21.4);
	this.instance_57.compositeOperation = "screen";

	this.instance_58 = new lib.Path_1_4();
	this.instance_58.setTransform(262.4,150.4,1,1,0,0,0,24.7,3.8);
	this.instance_58.compositeOperation = "screen";

	this.instance_59 = new lib.Path_2_4();
	this.instance_59.setTransform(262.4,150.35,1,1,0,0,0,12.8,21.4);
	this.instance_59.compositeOperation = "screen";

	this.instance_60 = new lib.Path_7();
	this.instance_60.setTransform(262.35,150.4,1,1,0,0,0,27.7,16.5);
	this.instance_60.compositeOperation = "screen";

	this.instance_61 = new lib.Path_1_3();
	this.instance_61.setTransform(262.35,150.4,1,1,0,0,0,27.7,16.5);
	this.instance_61.compositeOperation = "screen";

	this.instance_62 = new lib.Path_2_3();
	this.instance_62.setTransform(262.35,150.45,1,1,0,0,0,4.9,31.9);
	this.instance_62.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_62,p:{x:262.35,y:150.45}},{t:this.instance_61,p:{x:262.35,y:150.4}},{t:this.instance_60,p:{x:262.35,y:150.4}},{t:this.instance_59,p:{x:262.4,y:150.35}},{t:this.instance_58,p:{x:262.4,y:150.4}},{t:this.instance_57,p:{x:262.4,y:150.35}},{t:this.instance_56,p:{x:262.3,y:150.35}}]}).to({state:[{t:this.instance_62,p:{x:274.6,y:178.3}},{t:this.instance_61,p:{x:274.6,y:178.25}},{t:this.instance_60,p:{x:274.6,y:178.25}},{t:this.instance_59,p:{x:274.65,y:178.2}},{t:this.instance_58,p:{x:274.65,y:178.25}},{t:this.instance_57,p:{x:274.65,y:178.2}},{t:this.instance_56,p:{x:274.55,y:178.2}}]},9).to({state:[{t:this.instance_62,p:{x:269.85,y:207.5}},{t:this.instance_61,p:{x:269.85,y:207.45}},{t:this.instance_60,p:{x:269.85,y:207.45}},{t:this.instance_59,p:{x:269.9,y:207.4}},{t:this.instance_58,p:{x:269.9,y:207.45}},{t:this.instance_57,p:{x:269.9,y:207.4}},{t:this.instance_56,p:{x:269.8,y:207.4}}]},9).wait(9));

	// Layer_11
	this.instance_63 = new lib.Path_6();
	this.instance_63.setTransform(124.5,230.35,1,1,0,0,0,19.2,19.2);
	this.instance_63.compositeOperation = "screen";

	this.instance_64 = new lib.Path_5();
	this.instance_64.setTransform(124.6,230.35,1,1,0,0,0,12.8,21.4);
	this.instance_64.compositeOperation = "screen";

	this.instance_65 = new lib.Path_1_2();
	this.instance_65.setTransform(124.6,230.4,1,1,0,0,0,24.7,3.8);
	this.instance_65.compositeOperation = "screen";

	this.instance_66 = new lib.Path_2_2();
	this.instance_66.setTransform(124.6,230.35,1,1,0,0,0,12.8,21.4);
	this.instance_66.compositeOperation = "screen";

	this.instance_67 = new lib.Path_4();
	this.instance_67.setTransform(124.55,230.4,1,1,0,0,0,27.7,16.5);
	this.instance_67.compositeOperation = "screen";

	this.instance_68 = new lib.Path_1_1();
	this.instance_68.setTransform(124.55,230.4,1,1,0,0,0,27.7,16.5);
	this.instance_68.compositeOperation = "screen";

	this.instance_69 = new lib.Path_2_1();
	this.instance_69.setTransform(124.55,230.45,1,1,0,0,0,4.9,31.9);
	this.instance_69.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_69,p:{x:124.55,y:230.45}},{t:this.instance_68,p:{x:124.55,y:230.4}},{t:this.instance_67,p:{x:124.55,y:230.4}},{t:this.instance_66,p:{x:124.6,y:230.35}},{t:this.instance_65,p:{x:124.6,y:230.4}},{t:this.instance_64,p:{x:124.6,y:230.35}},{t:this.instance_63,p:{x:124.5,y:230.35}}]}).to({state:[{t:this.instance_69,p:{x:102.85,y:235.2}},{t:this.instance_68,p:{x:102.85,y:235.15}},{t:this.instance_67,p:{x:102.85,y:235.15}},{t:this.instance_66,p:{x:102.9,y:235.1}},{t:this.instance_65,p:{x:102.9,y:235.15}},{t:this.instance_64,p:{x:102.9,y:235.1}},{t:this.instance_63,p:{x:102.8,y:235.1}}]},9).to({state:[{t:this.instance_69,p:{x:83.15,y:240.65}},{t:this.instance_68,p:{x:83.15,y:240.6}},{t:this.instance_67,p:{x:83.15,y:240.6}},{t:this.instance_66,p:{x:83.2,y:240.55}},{t:this.instance_65,p:{x:83.2,y:240.6}},{t:this.instance_64,p:{x:83.2,y:240.55}},{t:this.instance_63,p:{x:83.1,y:240.55}}]},9).wait(9));

	// Layer_1
	this.instance_70 = new lib.MPVKTGG("synched",0);
	this.instance_70.setTransform(152.1,184,0.5,0.5,0,0,0,229.9,104.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0DE48").s().p("AvkKxQgGgFgCgIQgCgKAFgJQAFgIAKgCIACgBQAKgCAJAFQAIAFADAKQACAJgFAJQgFAJgKACIgDAAIgGABQgIAAgHgFgAxFKcIgDgCQgIgHAAgJQgBgKAGgIQAHgIAJgBQAKAAAIAGIACACQAIAGABAKQABAJgGAJQgHAIgMABQgIAAgHgGgAuJJ/QgEgKADgJQAEgJAJgFIADgBQAJgEAJAEQAJADAEAKQAEAIgDAKQgEAJgJAEIgDABQgEACgFAAQgQAAgGgNgAsoJUQgEgJAEgKQAEgJAJgDIADgBQAJgEAJAEQAKADADAKQAEAJgEAJQgEAJgJAEIgDABQgEACgFAAQgQAAgGgPgAx6JDQgGgGgCgHIgBgEQgCgJAFgJQAFgIAKgDQAKgCAIAGQAJAEACAKIABAEQACAJgFAJQgFAIgKADIgGAAQgIAAgHgFgAq8I5QgHgFgCgGQgEgKAFgJQAEgJAJgEIADgBQAKgDAJAEQAIAFAEAJQADAJgEAJQgEAKgKADIgDABQgDACgFAAQgHAAgGgFgAPRIlIgEgBQgJgCgGgIQgGgIACgKQADgKAIgGQAIgFAKACIACABQAKABAGAJQAGAHgCALQgCAIgGAFQgHAGgJAAgApYIXQgHgEgCgJQgDgJAEgJQAFgJAKgCIADgBQAJgEAJAFQAJAFADAJQADAKgFAIQgFAJgJAEIgDABIgHABQgIgBgGgEgAQkIMQgEgJADgJQADgKAJgEIACgCQAJgEAJACQAKADAEAJQAFAJgDAKQgDAJgIAFIgEABQgFAEgGAAQgOAAgHgOgANpIGIgDgBQgKgCgFgKQgEgIACgKQADgJAJgFQAIgEAKACIADABQAKADAFAJQAEAJgCAJQgGARgSAAIgGgBgAnzH5QgHgFgCgIQgCgKAFgIQAFgJAJgDIADAAQAKgDAJAGQAIAEADAKQACAJgFAJQgFAJgJACIgJACQgJAAgGgFgAMDHrIgDgBQgKgCgFgJQgFgIADgKQACgKAJgEQAIgGAKACIADABQAKACAFAJQAFAJgDAKQgCAIgGAEQgHAFgIABgAmMHfQgHgFgCgIQgCgKAFgIQAGgJAJgCIADgBQAKgCAJAGQAIAFACAJQACAKgFAIQgFAJgKACIgDABIgGABQgIAAgGgGgAx5HfQgJAAgHgGQgHgGgBgJIAAgEQgBgJAGgIQAGgIAKgBQAKgBAIAGQAIAGABAKIAAADQABAKgGAIQgGAIgKABgAKaHUQgKgCgGgJQgFgIACgKQACgKAIgFQAIgFAKACIADAAQAKACAGAIQAFAJgCAJQgCAIgGAGQgHAFgJAAgAkkHIQgGgGgCgJQgBgIAEgHQAFgIAKgDIADAAQALgBAIAFQAHAFACAKQACAKgFAIQgGAKgKAAIgEAAQgLAAgHgGgARyHHQgJgCgGgJQgGgHACgLIABgCIAAgBQABgJAIgHQAIgFAKABQAKACAGAIQAGAIgCAKIAAABIgBAEQgBAJgHAFQgHAGgIAAgAIyHBQgKgCgFgHQgGgJABgJQACgKAIgGQAIgGAKACIADAAQAJABAGAJQAGAHgBALQgCAIgGAGQgHAGgJAAgAitG+QgJAAgHgFQgHgHgBgJQgBgKAGgIQAGgHAKgCIADgBQAKgBAIAHQAIAFABAKQABAKgGAIQgFAIgKABIgEABgAHNG0IgDgBQgKAAgGgJQgGgHABgKQABgKAIgGQAHgHAKABIAEABQAKABAGAIQAGAIgBAJQgBAKgHAGQgHAGgJAAgAhUGrQgHgGgBgJQAAgKAGgIQAGgHAKgBIADgBQAKgBAIAGQAIAHAAAJQABALgGAHQgGAIgKABIgDAAIgDAAQgJAAgHgGgAFlGqIgEAAQgKgBgGgHQgGgIAAgKQABgJAHgHQAIgGAKAAIADAAQAKABAGAIQAHAHgBAKQAAAKgHAGQgHAHgKgBgAAlGpQgJAAgHgHQgHgGgBgKQAAgKAGgHQAHgHAKgBIADAAQAKgBAHAGQAIAHAAAKQABAKgHAHQgGAIgKAAIgEABgAD5GmQgKgBgHgHQgHgHAAgLQAAgJAHgHQAIgHAKAAIADAAQAKABAHAGQAHAIgBAKQAAAKgHAGQgHAIgKAAgACPGlQgKAAgHgHQgHgHAAgKQAAgKAHgHQAHgHAKgBIADAAQAKABAHAGQAHAIAAAJQAAAKgHAIQgGAGgKABgAyFF1QgJAAgHgFQgHgHgBgJIgBgDQgBgJAGgIQAHgJAJAAQAKgBAIAFQAIAHABAJIABADQABALgGAHQgHAIgKABgASEFdQgKgCgFgHQgGgJACgJIAAgEQACgJAIgGQAIgGAKABQAJACAGAIQAGAIgBAKIgBAEQgBAIgHAGQgHAFgJABgAySEMQgJAAgHgGQgHgGgBgJIAAgDQgBgKAGgIQAGgIAKgBQAKgBAIAGQAIAHABAJIAAAEQABAKgGAHQgGAIgKABgASWD0QgKgBgGgIQgGgIACgKIABgDQABgKAIgGQAJgGAJACQAKABAGAJQAGAIgCAKIgBADQgBAJgHAGQgHAFgIAAgAyuCdQgHgGgBgJIAAgEQgBgJAGgJQAGgHAKgCQAKgBAHAHQAIAGABAKIABADQABAKgGAHQgGAJgKAAIgDABQgJAAgHgGgASnCMQgJgCgGgIQgGgIABgKIABgDQACgKAIgGQAIgFAKABQAKACAFAIQAGAIgCAKIAAADQgCAJgGAGQgHAFgJAAgAyrA5QgJAAgHgFQgGgGgBgKIgBgDQgBgKAGgHQAHgJAJAAQAKgBAIAFQAIAHABAJIAAADQABALgGAHQgGAJgKAAgAS5AjQgKgCgGgHQgGgIACgKIAAgEQACgIAIgGQAIgGAKABQAKACAGAIQAFAHgBAKIgBAEQgBAIgHAGQgHAFgIABgAy3gvQgJAAgHgGQgHgGgBgJIAAgDQgBgKAGgIQAGgIAKgBQAKgBAIAGQAHAGACAKIAAAEQABAJgGAIQgGAIgKABgATKhFQgKgBgGgIQgGgJACgJIABgDQABgLAIgFQAJgGAJACQAKABAGAJQAGAHgCALIAAADQgCAIgHAHQgHAFgIAAgAzTieQgHgGgBgJIgBgEQgBgKAGgIQAGgHAKgCQAKgBAIAHQAIAFABALIAAADQACAKgGAIQgHAHgKACIgCAAQgJAAgHgGgAS/iyQgGgEgCgIIgBgDQgDgJAEgJQAFgJAKgDQAJgDAJAEQAJAGADAJIABADQADAKgFAIQgFAKgJACIgHABQgIAAgHgFgAzOkCQgKAAgHgHQgHgHAAgKIAAgEQAAgKAHgGQAHgHAKAAQAKAAAHAHQAHAHAAAKIAAAEQAAAJgHAHQgHAIgKgBgASJkTIgCgCQgGgIABgKQABgKAHgGQAIgHAKACQAKAAAGAJIADACQAGAIgBAKQgBAKgIAGQgHAFgIAAQgMAAgHgJgARAlUIgCgBQgJgFgCgKQgDgKAGgIQAFgJAJgCQAKgDAJAFIACADQAJAEACAKQADAKgGAIQgHAMgNAAQgHAAgGgEgAzDlrQgJgDgEgKQgEgJAEgJIABgDQAEgJAJgFQAJgDAJADQAKAFAEAJQAEAIgEAKIgBADQgHAPgQAAIgJgCgAPkmBIgDgBQgJgEgEgKQgDgIAEgKQAEgIAJgFQAJgDAJAEIADABQAKAFADAJQADAJgEAKQgGANgPAAQgGAAgEgCgAODmqIgDgCQgJgDgEgJQgEgJAEgJQAEgKAJgEQAJgDAJADIADACQAKADADAJQAEAKgEAJQgFAPgRAAQgFAAgEgCgAyTnKQgHgGAAgKQAAgKAGgIIADgCQAHgHAKgBQAKAAAHAIQAHAGAAALQAAAKgHAHIgCACQgGAHgLAAQgKAAgHgHgAMhnQIgDgCQgKgDgEgIQgEgKAEgJQADgJAJgFQAJgEAKADIADABQAJAFAEAIQAEAJgDAKQgGAPgRAAIgIgBgAK+nzIgDgBQgKgDgEgJQgFgIADgKQADgJAJgFQAJgEAKACIADABQAJAEAFAJQAEAJgDAJQgCAHgHAFQgGAFgIAAgAw4oAQgHgFgCgHQgDgKAEgIQAFgKAJgDIADgBQAKgDAJAEQAJAFADAKQADAJgFAJQgEAIgKAEIgDABIgHABQgIAAgGgEgAJZoSIgDgBQgJgDgFgIQgFgJADgJQACgKAJgFQAJgEAJACIADABQAKADAFAIQAFAJgDAJQgCAJgHAEQgGAFgIAAIgHgBgAvTogQgGgEgDgIQgDgKAFgJQAFgJAKgCIADgBQAJgCAJAFQAJAEADAJQACAKgFAJQgEAJgKACIgDABIgHABQgIAAgGgFgAHxouQgKgCgFgJQgFgJACgJQADgKAIgFQAJgFAJACIADABQAKACAFAJQAFAJgCAJQgCAIgHAFQgGAGgJAAgAtto7QgGgFgDgIQgCgKAFgIQAGgJAJgCIADgBQAKgDAJAGQAIAFACAKQADAJgGAJQgFAJgJACIgJABQgIAAgHgFgAGNpFIgDgBQgJgCgGgJQgGgIACgKQADgJAIgGQAIgFAKACIADABQAKACAFAIQAGAIgCAKQgCAJgHAFQgGAGgJgBgAsGpSQgGgGgCgJQgCgJAFgJQAGgHAKgDIADgBQAJgCAJAGQAIAFACAKQACALgFAHQgGAJgKABIgDABIgFABQgIAAgHgFgAEjpaQgKgCgGgHQgGgJACgJQACgLAIgFQAIgGAKACIADABQAKABAGAIQAGAJgCAJQgCAJgGAFQgHAGgJAAgAqeplQgHgGgBgKQgCgJAGgIQAGgIAKgCIADAAQAKgCAIAGQAIAGACAJQABALgGAHQgGAJgJABIgHABQgJAAgHgFgAC+pqIgDAAQgKgBgGgJQgGgHABgKQACgKAIgGQAHgGAKACIAEAAQAKABAFAIQAGAIgBAKQgBAJgHAGQgHAGgJgBgAolpvQgJgBgHgFQgHgGgBgKQgBgJAGgIQAGgIAKgBIADgBQAKgBAIAHQAIAFABALQABAJgGAIQgGAIgKABIgDABgABVp2IgDAAQgKgBgGgIQgGgIABgKQABgKAIgGQAHgGAKAAIAEABQAKABAGAIQAGAIgBAJQgBAKgHAGQgHAGgJAAgAm8p7QgJABgHgHQgHgGgBgJQAAgLAGgHQAGgHAKgCIADAAQAKAAAIAGQAIAGAAAKQABAKgGAHQgHAJgKAAIgDAAgAgVp/QgKgBgHgHQgGgHAAgLQABgKAHgGQAIgHAKABIADAAQAKABAFAHQAHAIgBAJQAAAKgGAGQgHAHgKAAgAlSqBQgJAAgHgHQgHgGgBgLQAAgJAGgIQAHgHAKgBIADAAQAKAAAHAHQAIAHAAAJQABAKgHAIQgHAHgKABgAh7qEIgDAAQgKAAgHgHQgHgIAAgJQAAgLAHgGQAIgIAKABIADAAQAKAAAHAIQAHAHgBAKQAAAJgHAIQgHAGgKAAgAjoqFQgKABgHgIQgHgHAAgJQAAgKAHgHQAHgIAKABIADgBQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAIgKgBg");
	this.shape.setTransform(152.3133,186.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31C4A").s().p("Aw4LKQgggPgZgbQgvgzgLhVIhcsOQgNhuA6hkQA6hjBfgfQGsiNHIAAQFKAAFKBLQFOBOE0CUQBdAtA4BaQA4BagOBTIhcIqQgMBCgyAoQgzAphHAAQglAAgpgNIAAAAQlqh3mFAAQkaAAkbBBQkbBBkFB+QgqAVgsAAQgkAAgggOgAwengQg5ATglBCQgkBCAJBGIBcMOQAEAmARAZQATAeAfAAQARAAAUgKQEUiFEnhEQElhCEmAAQGVAAF9B8QAVAHAWAAQAXAAASgIQAbgOAFgfIBcoqQAHgqgkg5Qgng8g9gdQkmiOlAhKQk/hJlAAAQm4AAmZCGg");
	this.shape_1.setTransform(152.6386,186.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AwxKNQg3gkgLhXIhcsOQgLhZAvhTQAvhUBMgZQIGiqIqAoQIvAoICD4QBMAlAwBKQAuBKgLA+IhcIqQgKA+g3AZQg3AahEgWQnLiXntAjQnuAknIDbQghAQgeAAQggAAgcgTg");
	this.shape_2.setTransform(152.6335,186.7341);

	this.instance_71 = new lib.Path_34();
	this.instance_71.setTransform(77.35,160.9,1,1,0,0,0,127.5,127.5);
	this.instance_71.alpha = 0.6016;
	this.instance_71.compositeOperation = "screen";
	this.instance_71.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance_71.cache(-2,-2,259,259);

	this.instance_72 = new lib.Shadow();
	this.instance_72.setTransform(157.7,191.75,1,1,0,0,0,129.1,72.8);
	this.instance_72.alpha = 0.1914;
	this.instance_72.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_72.cache(-2,-2,262,150);

	this.instance_73 = new lib.GlowBG();
	this.instance_73.setTransform(120,160.95,0.796,0.796,0,0,0,250,288.3);
	this.instance_73.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_70}]}).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-68.5,398,459);


// stage content:
(lib._20773NSGCKNOW_THE_GAME300x250A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [286];
	// timeline functions:
	this.frame_286 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(286).call(this.frame_286).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/AAFIAAgJMCf/AAAIAAAJg");
	this.shape.setTransform(-212,249.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EhP/AAFIAAgJMCf/AAAIAAAJg");
	this.shape_1.setTransform(299.6,-262.05,1,1,89.9948,0,0,-0.1,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EhP/AAFIAAgJMCf/AAAIAAAJg");
	this.shape_2.setTransform(0.5469,512.0001,1,1,89.9948);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EhP/AAFIAAgJMCf/AAAIAAAJg");
	this.shape_3.setTransform(512,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(287));

	// CTA2
	this.instance = new lib.CTA2("synched",0);
	this.instance.setTransform(99.55,313.4,0.369,0.369,0,0,0,72.1,18.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(268).to({_off:false},0).to({regX:72,scaleX:1,scaleY:1,x:148.9,y:476.5,alpha:1},12).wait(7));

	// Board Animation
	this.instance_1 = new lib.BoardAnimation("synched",0,false);
	this.instance_1.setTransform(149.1,150.65,0.1818,0.1818,0,0,0,-9.1,46.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).to({alpha:1,startPosition:9},9).wait(202));

	// Win
	this.instance_2 = new lib.Win("synched",0);
	this.instance_2.setTransform(149.15,190.6,1,1,0,0,0,123.4,8.8);
	this.instance_2.alpha = 0.1914;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({alpha:1},9).wait(212));

	// KTA
	this.instance_3 = new lib.KTA("synched",0);
	this.instance_3.setTransform(144.55,139.5,1,1,0,0,0,79.5,25.4);
	this.instance_3.alpha = 0.1914;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(52).to({_off:false},0).to({alpha:1},9).wait(226));

	// LOGO
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(149.6,222.55,1,1,0,0,0,51.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({x:234.1,y:221.05},20,cjs.Ease.quadInOut).wait(226));

	// Intro
	this.instance_5 = new lib.TitleGraphic();
	this.instance_5.setTransform(150,121.05,1,1,0,0,0,150,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({alpha:0},13).to({_off:true},1).wait(232));

	// Dots
	this.instance_6 = new lib.FadeyBG();
	this.instance_6.setTransform(62.95,155.3,0.161,0.161,-90,0,0,994.2,531);
	this.instance_6.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(287));

	// BG
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171046").s().p("EgYDAvbMAAAhe1MAwHAAAMAAABe1g");
	this.shape_4.setTransform(150.0372,131.9344,1.0921,0.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(287));

	// stageBackground
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_6.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(287));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-574,-649,1598,1673);
// library properties:
lib.properties = {
	id: '6B49F5A2C9A44C3D8CBD22EF4D961880',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap4.png", id:"Bitmap4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6B49F5A2C9A44C3D8CBD22EF4D961880'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;