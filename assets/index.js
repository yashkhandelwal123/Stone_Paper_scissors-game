const score1 = document.querySelector('[data-score1]')
const score2 = document.querySelector('[data-score2]')

const score3 = document.querySelector('[data-score3]')
const score4 = document.querySelector('[data-score4]')


const finalColumn = document.querySelector('[data-final-column]')

const Buttons = document.querySelectorAll('[data-part]')

var val = [
    {
       name: '1',
       value: 'a'
    },
    {
        name: '2' ,
        value: 'a',
        
    },
    {
        name: '3' ,
        value: 'a'
    },
    {
        name: '4' ,
        value: 'a'
    },
]

const SELECTIONS = [
    {
      name: 'rock',
      
      beats: 'scissors'
    },
    {
      name: 'paper',
      
      beats: 'rock'
    },
    {
      name: 'scissors',
      
      beats: 'paper'
    }
  ]

  val.forEach(selectionButton => {
    // let i = 0;
    const computerSelection = randomSelection() 
    if(selectionButton.value === 'a'){
        selectionButton.value = computerSelection;
    }
    
  })
  val.forEach(call => {
    check(call);
    // addSelectionResult(computerSelection, computerWinner)
    // addSelectionResult(selection, yourWinner)
  })
  function check(player_beat){
    val.forEach(selection => {
        //   let p1 = selection.name;
        // selection.value
        // console.log(val[1].name)
        // if(selection.value.name === player_beat.value.name){
        //     continue
        // }
         console.log(selection.value.name === player_beat.value.beats);
         let ans = (selection.value.name === player_beat.value.beats);
        //  let s = Buttons.find(x => x.dataset.selection == selection[0].name)
        //  if(selection[0].name ===  s)
         addSelectionResult(selection.value , ans);
        //  return selection.value.name === player_beat.value.beats;
    
      })
  }

  function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
  };

  
//   function isWinner(player) {
//     val.forEach(member => {
//         // if(member.name === player){
//         //     continue;
//         // }
//         // else if()
//         return player === member.val;

//     })
//   }
function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.name
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

// const score1 = document.querySelector('[data-score1]')
