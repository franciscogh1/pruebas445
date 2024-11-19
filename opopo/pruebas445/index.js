var data;
var forDaSquaw=[];
 var criteriaHolder=[];
var teamColors={
  '1610612739 1610612739': 'linear-gradient(to right, #6F263D, #FFB81C )',
  "1610612738 1610612738":'linear-gradient(to right, #007A33, white )',
  "1610612744 1610612744": 'linear-gradient(to right, #006BB6, #FDB927 )'
};

    var requestURL = 'https://raw.githubusercontent.com/alexruma/nbajson/master/playerdata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var json=request.response;

      
    
   runIt(json);
}
  
request.onerror = function() {
    console.error("Error en la solicitud");
};


function runIt(val){
forDaSquaw.push(val);

  data=forDaSquaw[0];
  
  
}



function clik(name){
   document.getElementById('dropdown-content').style.display='none';
  var results;
  var numb;
  var pos;
  var height;
  var first;
  var last;
  var college;
  var multipleHolder=[];
 
  var value;
  

  data.league.standard.map(function(val, index){
  if(name.toLowerCase()==val.firstName.toLowerCase() || name.toLowerCase()==val.lastName.toLowerCase()||name.toLowerCase()==val.firstName.toLowerCase()+" "+val.lastName.toLowerCase() ||name.toLowerCase()==val.collegeName.toLowerCase()){
 
    return results=val.firstName+" "+val.lastName,
    numb=val.jersey,
      value=val,
      college=val.collegeName,
    pos=val.pos,
      height=val.heightFeet+"'"+val.heightInches+'"',
       first=val.firstName,
     last=val.lastName,
      multipleHolder.push(' '+index+". " +results)
           

  }})
    

     if (multipleHolder.length==1){                document.getElementById('headshot').style.display='inline';  
                                   document.getElementById('headshot').style.background=teamColors[value.teamId];
 return document.getElementById('info').innerHTML=results,
  document.getElementById('num').innerHTML=numb,
  document.getElementById('pos').innerHTML=pos,
   document.getElementById('feet').innerHTML=height,
   document.getElementById('college').innerHTML=college,
  document.getElementById('allInfo').style.display='inline-block',
       document.getElementById('headshot').src='https://nba-players.herokuapp.com/players/'+last+'/'+first;
  
  
     
     }
  
  
  
  else{ 
    document.getElementById('headshot').style.display='none';
  document.getElementById('info').innerHTML="";
    document.getElementById('allInfo').style.display="none"
    for (var i=0; i <multipleHolder.length; i++){
      var div = document.createElement('div');
    div.innerHTML = div.id = multipleHolder[i];
   document.getElementById('info').appendChild( div );
      
       
    }
   function listenerForPlayer(i){
     document.getElementById(multipleHolder[i]).addEventListener('mousedown', function(){playerSelect(multipleHolder[i])})
     
   }
  }
  for (var x=0; x< multipleHolder.length; x++){
    listenerForPlayer(x)
  }
  
  //individual player select function
  function playerSelect(player){
    let indexNumber=[];

    let playerSplit=player.split("");
    playerSplit.splice(0,1);
    let firstElement = playerSplit.shift();
 indexNumber.push(firstElement);
    while (isNaN(playerSplit[0]) ==false){
      firstElement = playerSplit.shift();
 indexNumber.push(firstElement);
    }
    indexNumber=indexNumber.join('')
   let val= data.league.standard[indexNumber];
   let results=val.firstName+" "+val.lastName;
    let numb=val.jersey;
    let pos=val.pos;
    college=val.collegeName;
      height=val.heightFeet+"'"+val.heightInches+'"';
    let first=val.firstName;
    let last=val.lastName;
   document.getElementById('headshot').style.display='inline';
     document.getElementById('allInfo').style.display='inline-block';
    document.getElementById('headshot').style.background=teamColors[val.teamId];
 document.getElementById('info').innerHTML=results;
  document.getElementById('num').innerHTML=numb;
  document.getElementById('pos').innerHTML=pos;
   document.getElementById('feet').innerHTML=height;
    document.getElementById('college').innerHTML=college;
    document.getElementById('headshot').src='https://nba-players.herokuapp.com/players/'+last+'/'+first;
  
  
 
    
  }
}
                           


function validate(e){
  clik(document.getElementById('nameSearch').value);
}
addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { 
        validate(e);
    }
})

function criteriaSearch(){
  criteriaHolder=[];
  let results;
  let criterion=document.getElementById('criteria').value;
  let feet=document.getElementById('feet-input').value *12;
   let inches=document.getElementById('inches-input').value;
 
  
  data.league.standard.map((val, index)=>{
    if (criterion=='>='){
      let valHeight=Number(val.heightFeet)*12+Number(val.heightInches)
      if (valHeight>=(Number(feet)+Number(inches))){
       
       results=val.firstName+" "+val.lastName;
        criteriaHolder.push(' '+index+". " +results)
      }
    }
     if (criterion=='<='){
      let valHeight=Number(val.heightFeet)*12+Number(val.heightInches)
      if (valHeight<=(Number(feet)+Number(inches))){
       
       results=val.firstName+" "+val.lastName;
        criteriaHolder.push(' '+index+". " +results)
      }
    }
  });
  
  if (criteriaHolder.length>=1){
    { 
    document.getElementById('headshot').style.display='none';
  document.getElementById('info').innerHTML="";
    document.getElementById('allInfo').style.display="none"
    for (var i=0; i <criteriaHolder.length; i++){
      var div = document.createElement('div');
    div.innerHTML = div.id = criteriaHolder[i];
   document.getElementById('info').appendChild( div );
      
       
    }
  }
  
  function listenerForPlayer(i){
     document.getElementById(criteriaHolder[i]).addEventListener('mousedown', function(){playerSelect(criteriaHolder[i])})
     
   }
  }
  for (var x=0; x< criteriaHolder.length; x++){
    listenerForPlayer(x)
  }
  
  //individual player select function
  function playerSelect(player){
    let indexNumber=[];

    let playerSplit=player.split("");
    playerSplit.splice(0,1);
    let firstElement = playerSplit.shift();
 indexNumber.push(firstElement);
    while (isNaN(playerSplit[0]) ==false){
      firstElement = playerSplit.shift();
 indexNumber.push(firstElement);
    }
    indexNumber=indexNumber.join('')
   let val= data.league.standard[indexNumber];
   let results=val.firstName+" "+val.lastName;
    let numb=val.jersey;
    let pos=val.pos;
    college=val.collegeName;
      height=val.heightFeet+"'"+val.heightInches+'"';
    let first=val.firstName;
    let last=val.lastName;
   document.getElementById('headshot').style.display='inline';
     document.getElementById('allInfo').style.display='inline-block';
    document.getElementById('headshot').style.background=teamColors[val.teamId];
 document.getElementById('info').innerHTML=results;
  document.getElementById('num').innerHTML=numb;
  document.getElementById('pos').innerHTML=pos;
   document.getElementById('feet').innerHTML=height;
    document.getElementById('college').innerHTML=college;
    document.getElementById('headshot').src='https://nba-players.herokuapp.com/players/'+last+'/'+first;
  
  
 
    
  }
}
//autocomplete
function autoComplete(val){
   document.getElementById('dropdown-content').innerHTML='';
  val=val.toLowerCase();
 
  let holder=[];
  
  let valLength=val.length;
  if (valLength>0){
    
  
  data.league.standard.map(ind=>{
    
    let sliced=ind.firstName.toLowerCase().slice(0, valLength);
    let slicedLast=ind.lastName.toLowerCase().slice(0, valLength);
    let slicedSchool=ind.collegeName.toLowerCase().slice(0, valLength);
    if (sliced==val ||slicedLast==val ){
      holder.push("<br>"+ind.firstName+" "+ind.lastName);
    }
    else if (slicedSchool==val){
      if(holder.indexOf("<br>"+ind.collegeName)==-1){
      holder.push("<br>"+ind.collegeName);
      }
    }
  });
  for (let i=0; i<holder.length; i++){
    var div=document.createElement('div');
    div.innerHTML=div.id=holder[i];
    div.className='dropdown-result';
    document.getElementById('dropdown-content').appendChild(div);
  };
  
    document.getElementById('dropdown-content').style.display="block";

  
  function suggestionListener(i){
    
  document.getElementById(holder[i]).addEventListener('mousedown', function(){
   
    suggestionSelect(holder[i])})
}

for (let x=0; x<holder.length; x++){
  suggestionListener(x)
}
function suggestionSelect(choice){
  clik(document.getElementById(choice).innerHTML.slice(4))
}
}
}

document.getElementById('nameSearch').addEventListener( 'input',function(){
  
  autoComplete(document.getElementById('nameSearch').value)})
document.getElementById('x-button').addEventListener('click', function(){
  document.getElementById('intro-popup').style.display='none'
});

document.addEventListener('click',function(){

  document.getElementById('dropdown-content').style.display='none';
})



