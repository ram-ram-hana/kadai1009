 // 生まれた日を入力
 const day = parseInt(process.argv[2])

 if (day % 3 === 0) {
     console.log('あなたは穏やかな性格です')
 }　else if(day % 3 === 1) {
   　 console.log('あなたは朗らかな性格です')
 }  else if(day % 3 === 2) {
      console.log('あなたは優しい性格です')
 }  else if(day % 3 === 3) {
      console.log('あなたは陽気な性格です')
 }