

// Story

const textNodes = [
    {
      id: 1,
      text: 'Du vaknar upp i en märklig skog, omringad av vakra lysande blommor.',
      options: [ 
        {
            text: '->',
            nextText: 2
        }
        
      ]
    },
    {
        id: 2,
      text: 'du väljer att:',
      options: [
        {
          text: 'plocka lite blommor innan du försöker hitta hem.',
          setState: { flower: true },
          nextText: 3
        },
        {
          text: 'ignorera blommorna, och börjar gå igenom skogen för att hitta ut',
          nextText: 3
        }
      ]
    },
    {
        id: 3,
        text: 'Du går igenom den mörka skogen, och efter vad känns som flera timmar, så stöter du på en kvinna i skogen. Hon ser ut att ha mycket packning.',
        options: [
            {
                text: '->',
                nextText: 4
 
            }
           
        ]
    }
   
    {
      id: 4,
      text: 'Du:',
      options: [
        {
          text: 'Hjälper kvinnan bära sin pakning',
          nextText: 9
        },
        {
          text: 'Frågar om du kan byta ut blommorna mot en karta i hennes väska',
          requiredState: (currentState) => currentState.flower,
          setState: { flower: false, map: true },
          nextText: 5
        },
        {
          text: 'Ignorea kvinnan och gå vidare',
          nextText: 5
        }
      ]
    },
    {
      id: 5,
      text: 'Efter enu mer vandring kommer du äntligen ut ur skogen, men du känner fortfarande inte igen dig...Du ser dig omkring och väljer att bege dig mot',
      options: [
        {
          text: 'Ett slott på en kulle',
          nextText: 11
        },
        {
          text: 'En liten by vid en flod',
          nextText: 7
        },
        {
          text: 'Tillbaka in i Skogen bakom dig',
          nextText: 8
        }
      ]
    },
    {
      id: 6,
      text: 'Du beger dig mot slotet och knackar på porten. En drake tittar fram och bränner dig till aska.',
      
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 7,
      text: 'Du kommer ner till by, och ingen förstår vad du pratar om, och tycker du ser konstig ut, så dem håller sig undan...',
      options: [
        {
            text: '->',
            nextText: 8
        }
      ]
      
        },
        {
            id: 8,
            text: 'Men du ser den ändre damen från skogen',
          
      options: [
        {
          text: 'Prata med henen',
          nextText: 9
        }
      ]  
        },
      
  
    {
      id: 9,
      text: 'Visa sig att hon är en häxa och leter efter en lärling',
      options: [
        {
          text: 'Bli häxans lärling',
          nextText: 10
        }
      ]
    },
    {
      id: 10,
      text: 'Häxan blir jätte glad, och vill se vad du går för! Så hon flyger dig till slotet där en ont drake bor.',
      options: [
        {
            text: ' -> ',
            nextText: 11
        }
        
      ]
    },
    { 

    id: 11,
    text: 'Framme vid slottets portar ser du en jättestor och skrämade drake, Du:',
      options: [
        {
          text: 'Bli vättskrämd och försker fly',
          nextText: 12
        },
        {
          text: 'Titta på häxan och fråga om du kan byta blommorna mot hennes brinnande svärd',
          requiredState: (currentState) => currentState.flower,
          setState: { flower: false, Sword: true },
          nextText: 13
        },
        {
          text: 'erbjud den karta så dem kan ta över mer plattser, och tillsut hela värden!',
          requiredState: (currentState) => currentState.map,
          nextText: 14
        },
        {
          text: 'Erbjud Draken blomman',
          requiredState: (currentState) => currentState.flower,
          nextText: 15
        }
      ]
    },
    {
      id: 12,
      text: 'Du visar rädsla framför draken, så nu blir du bränd till aska av den...',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 13,
      text: 'Häxar går med på det, och du lyckas besegra draken i epic combat, och nu älskar byborna dig, och du Påbärjar din magiska fighting resa som en DragonSlayer',
      
      options: [
        {
          text: 'Grattis!, vill spela igen?',
          nextText: -1
        }
      ]
    },
    {
      id: 14,
      text: 'Draken tar emot kartan och gör dig till sin partner in crime. Tillsamans tar ni över värden och bränner allt i er väg.',
      options: [
        {
          text: 'Grattis...Tror jag? Spela igen?',
          nextText: -1
        }
      ]
    },
    {
      id: 15,
      text: 'Dragen börjar rodna, men tar emot Blomorna och ni bestämmer en date, som leder till det första Mäniska drak relationen någon i den här dimentionsen hört om',
      options: [
        {
          text: 'Grattis din draksjusare! Spela igen?',
          nextText: -1
        }
      ]
    }
  ]
  
  startGame()