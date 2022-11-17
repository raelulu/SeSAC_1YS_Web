class Car{
    constructor(color){
        this.color = color;
        this.isDoeer =true;
    }
    move(){
        console.log("움직인다.");
    }
    stop(){
            console.log("멈춘다")
        }
    returnColor(){
            return this.color;
        }
    }

module.exports = {Car};
//constructor생성자