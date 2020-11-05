  
class Dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, 200, 20, {isStatic:true})
		World.add(world, this.bottomBody);
		
		this.leftBody=Bodies.rectangle(this.x-100, this.y-50, 20, 100, {isStatic:true})
		World.add(world, this.leftBody);

		this.rightBody=Bodies.rectangle(this.x+100, this.y-50, 20, 100, {isStatic:true})
		World.add(world, this.rightBody);

	}
	display(){
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftBody.position;
		var posRight=this.rightBody.position;
			
		push();
		translate(posLeft.x, posLeft.y);
		rotate(this.angle);
		rectMode(CENTER);
		fill("white");
		rect(0,0,20, 100);
		pop();

		push();
		translate(posRight.x, posRight.y);
		rectMode(CENTER);
		fill("white");
		rotate(-1*this.angle);
		rect(0,0,20, 100);
		pop();

		push();
		translate(posBottom.x, posBottom.y);
		rectMode(CENTER);
		fill("white");
		rect(0,0,200, 20);
		pop();
			
	}

}