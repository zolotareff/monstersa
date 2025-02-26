
//JSON
function banco(){
    const bd = [
                 {id:1,login:"john", senha:"1234",nome:"John",email:"john@gmail.com"}, //0
                 {id:2,login:"ringo", senha:"1234@",nome:"Ringo",email:"ringo@gmail.com"},//1
                 {id:3,login:"paul", senha:"12345",nome:"Paul",email:"paul@gmail.com"}//2
               ]
    let dados = JSON.stringify(bd)

    localStorage.setItem("banco", dados)

    console.log(dados)           
}






