var tableDisplay = function() 
{
  var curCol = 1;
  var curRow = 1;

  function tableCreate(jsTable) 
  {
     var body = document.body;
     var table = document.createElement('table');
     var tableBody = document.createElement('tbody');

     table.style.width = '100%';
     table.setAttribute('border', '1');

     for (var i = 0; i < 4; i++) 
     {  
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++) 
        {
           if (i === 0) 
           {
              var th = document.createElement('th');
              th.appendChild(document.createTextNode("Header " + (j + 1)));
              tr.appendChild(th);
           } 
           else 
           {
              var td = document.createElement('td');
              var label = (j + 1) + "," + i;
              td.appendChild(document.createTextNode(label));
              td.setAttribute('id', label);
              if (j === 0 && i === 1)
              {
                 td.style.border = "3px solid black";
              }
              tr.appendChild(td);
           }   
        }
        tableBody.appendChild(tr);
     }
     
     table.appendChild(tableBody);
     body.appendChild(table);
     jsTable();
  }

  function addButtons(jsTable) 
  {
     var body = document.body;
     var directions = ["Left", "Up", "Right", "Down", "Mark Cell"];

     for (var i = 0; i < directions.length; i++) 
     {
        var button = document.createElement('button');
        button.appendChild(document.createTextNode(directions[i]));
        body.appendChild(button);
        var dir = directions[i];
        button.addEventListener("click", function(e)
        {
            if (e.target.innerText !== "Mark Cell")
            {
               move(e.target.innerText);
            } 
            else 
            {
               markCell();
            }
        });
     }
  }

  function move(dir) 
  {
     var curCellID = curRow + "," + curCol;
     var curCell = document.getElementById(curCellID);
     curCell.style.border = "1px solid black";

     switch (dir) 
     {
       case "Up":
          if (curCol !== 1) 
          {
             curCol--;
          }
          break;
       case "Down":
          if (curCol !== 3) 
          {
             curCol++;
          }
          break;
       case "Left":
          if (curRow !== 1) 
          {
             curRow--;
          }
          break;
       case "Right":
          if (curRow !== 4) 
          {
             curRow++;
          }
          break;
     }

     curCellID = curRow + "," + curCol;
     curCell = document.getElementById(curCellID);
     curCell.style.border = "3px solid black";
  }
  
  function markCell() 
  {
     var cell = document.getElementById(curRow + "," + curCol);
     cell.style["background-color"] = "yellow";
  }

  tableCreate(addButtons);
};

tableDisplay();
