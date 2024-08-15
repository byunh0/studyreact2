import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import {useState} from "react"

function App() {
  const choice = {
    scissors:{
       name: "Scissors",
       img:"https://img.freepik.com/premium-vector/children-scissors-cartoon-vector-illustration-serrated-scissors-isolated-white-background_893800-160.jpg"
    },
    rock:{
      name:"Rock",
       img:"https://img.freepik.com/free-psd/son-eulo-geulin-bawi-hyeongseong_23-2151544045.jpg"
    },
    paper:{
      name: "Paper",
      img:"https://i.pinimg.com/originals/0d/e7/a4/0de7a46fe194279fa2198c75e33c3d1a.jpg"
    }
   
  }
  //1.(구성)box 두개, 버튼3개, 승패(사용자 기준)
  //2.버튼을 클릭하면 box에 해당 그림이 바뀌어 나온다.
  //3.버튼을 누르면 computer의 값은 랜덤하게 나온다.
  //4.승패를 비교한다. 
  //5.승리하면 승리한 쪽은 초록색 패배한 쪽은 빨간색을 띄운다.
  const[userClick, setUserClick]=useState(null);

  const[computerClick, setComputerClick]=useState(null);

  const[result, setResult]=useState("");

 const play =(playing)=>{
   setUserClick(choice[playing])
   const computerchoice = randomchoice();
   setComputerClick(computerchoice);
   setResult(justifyWinner(choice[playing],computerchoice));
 }
 const justifyWinner=(user,computer)=>{
  if(user.name==computer.name){return "tie"}else if(user.name="Rock")return computer.name="Paper"?"win":"lose"
  else if(user.name="Scissors") return computer.name="Rock"?"win":"lose"
  else if(user.name="Paper") return computer.name="Scissors"?"win":"lose"
 }
 const randomchoice=()=>{
  const randomArray = Object.keys(choice);
  //key값만 모아 array로 만들어주기 [rock,scissor,paper]
  const computerRandom = Math.floor(Math.random()*randomArray.length);
  //1,2,3
 const final = randomArray[computerRandom]
  return choice[final]
 }
  return (
   <div className="container">
    <div className="containerBox">
    <div className="boxcontainer">
      <Box title="You" item={userClick} result={result}/>
      <Box title="Computer" item={computerClick} result={result} />
    </div>
    <div>
    <button class="button"onClick={()=>play("scissors")}>가위</button>
    <button  class="button" onClick={()=>play("rock")}>바위</button>
    <button   class="button" onClick={()=>play("paper")}>보</button>
   </div>
   <div class="result"> {result}</div>
   </div>
   </div>
   
  );
}

export default App;
