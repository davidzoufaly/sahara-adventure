
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png">
     <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png">
     <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png">
     <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png">
     <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png">
     <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png">
     <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png">
     <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png">
     <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png">
     <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
     <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
     <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
     <meta name="msapplication-TileColor" content="#ffffff">
     <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
     <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>
     <script src="https://cdn.jsdelivr.net/gh/bmoren/p5.collide2D/p5.collide2d.min.js"></script>
     <script src="imports.js"></script>
     <script src="elephant.js"></script>
     <script src="obstacle.js"></script>
     <script src="groundObject.js"></script>
     <script src="skyObject.js"></script>
     <script src="foregroundObject.js"></script>
     <script src="behindObject.js"></script>
     <script src="sprite.js"></script>
     <script src="game.js"></script>
     <link rel="stylesheet" href="style.css" type="text/css"></link>
     <title>Sahara Adventure</title>
</head>
<body>
     <main>
          <div class="container">
          <div class="wrapper">
          <div id="canvas"></div>
          <div class="scoreboard">
               <h1>Scoreboard</h1>
               <ol class=leaders></ol>
               <h1>Current best</h1>
               <p class="current-best">0</p>
               <div class="controls">
                    <div class="controls__item">
                         <img src="./assets/controls/spacebar.png"/>
                         <p>To Jump/Start</p>
                    </div>
                    <div class="controls__item">
                         <img src="./assets/controls/ctrl.png"/>
                         <p>To Crouch</p>
                    </div>
               </div>
          </div>
          </div>
          </div>
     </main> 

     <script>
     let resArr = [];

     async function saveResult(data) {
          const save = await fetch('./save.php', {method: 'POST', body: JSON.stringify(data)})
     }

     async function getResults() {
          const data = await fetch('./results.json', {cache: "no-cache"});
          const results = await data.json(); 

          return results;
     }
 

     function createScoreboard(data) {
          const ul = document.querySelector('.leaders');

          while (ul.firstChild) {
               ul.removeChild(ul.lastChild);
          }

          data.sort((a,b) => b.score - a.score).forEach((result, i) => {
               const newLi = document.createElement('LI');
               const newSpan1 = document.createElement('SPAN');
               const newSpan2 = document.createElement('SPAN');
               const textNode1 = document.createTextNode(`${i + 1}. ${result.name}`);
               const textNode2 = document.createTextNode(result.score);

               newSpan1.appendChild(textNode1);
               newSpan2.appendChild(textNode2);

               newLi.appendChild(newSpan1);
               newLi.appendChild(newSpan2);

               ul.appendChild(newLi);
          })
     }

     const results = getResults().then(data => { 
          createScoreboard(data)
          const sortedData = data.sort((a,b) => b.score - a.score)
          resArr = sortedData;
     })
     </script>
</body>
</html>