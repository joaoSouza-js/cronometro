function sleep(value){
  setInterval(()=>{
    console.log(value)
  },1000)
}

for(var cont = 0; cont <= 10; cont++){
  console.log(`o número é ${cont}`)
  sleep(cont)
}
