class Game {
    constructor(){
  
    }
  
    getState(){
      var toread = database.ref('gameState');
      toread.on("value",function (data) {
          gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }
  
    async start(){

      /* if(gameState === 0){
          form = new Form()
         form.display();
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
         }
        
       }*/
 
       player = new Player();
      
       player.getCount();
     
       form = new Form()
       form.display(); 

      p1 = createSprite(100,200,10,10);
      p2 = createSprite(300,200,10,10);
      p3 = createSprite(500,200,10,10);
      p4 = createSprite(700,200,10,10);
      ps = [p1, p2, p3, p4];
    }
  
     play(){
   
    player.getplayerRank();
    form.hide();
    Player.getplayerInfo();
    
    if(allPlayers !== undefined){
      background("white");
      image(track,100,300,displayWidth*5,displayHeight);
      var displayPosition=130;
      var index = 0;
      var y = 200 ;
      var x;

      for(var plr in allPlayers){

        index = index + 1 ;
        y = y + 200;
        x = displayHeight - allPlayers[plr].distance;
        ps[index-1].x = x;
        ps[index-1].y = y;
       console.log(index, player.index)

        if (plr==="player"+player.index){
          fill("red");
          ps[index - 1].shapeColor = "red";
          camera.position.y = displayWidth/2;
          camera.position.x = ps[index-1].x;
        }
        displayPosition=displayPosition+20;
        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
      }
      }

    }

    if ( keyDown(RIGHT_ARROW) && player.index !== null ) {
      player.distance -= 10;
      player.update();
  }

  drawSprites();

  if (player.distance>=3760) {
      gameState = 2 ;
      player.rank += 1;
      Player.updatePlayerRank(player.rank);
      textSize(40);
      fill("red");
      text("Player rank : " + player.rank,displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
      console.log(player.rank); 
      console.log("Game Ended");
  }

  }

 
    
  
}
