import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button,Container,Card} from 'react-bootstrap'



function Text() {

  const [data,setData]= useState({
    text:" ",
    number1:0,
    number2:0,
    number3:0,
    number4:0
  })

  var arr=[]

  function textState(e){
    setData({...data,[e.target.name]:e.target.value,})
    arr=e.target.value
    console.log(arr)
  }      

  function calculateNumbers(e){
    setData({...data,
      [e.target.name]:''
    })    
  }

  function formSubmit(ev){
    let sum4=0
    let sum3=0
    let sum1=0
    let sum2=0
    var num
    ev.preventDefault()
    var ch
    const arr=data.text
    // console.log(arr)
    for(ch=0;ch<arr.length;ch++){
      
      //soul number
      if(arr[ch]==='a'||arr[ch]==='e'||arr[ch]==='i'||arr[ch]==='o'||arr[ch]==='u'){
        if(arr[ch]==='a'||arr[ch]==='i'){
          sum4+=1
        }
        else if(arr[ch]==='e'){
          sum4+=5
        }
        else if(arr[ch]==='u'){
          sum4+=6
        }
        else if(arr[ch]==='o'){
          sum4+=7
        }
      } 
      var finalSum4
      
      if(sum4>9){
        const quo4=Math.floor(sum4/10)
      const rem4=sum4%10
      finalSum4=quo4+rem4
      }else{
        finalSum4=sum4
      }

      //dream number
      if(arr[ch]!=='a'||arr[ch]!=='e'||arr[ch]!=='i'||arr[ch]!=='o'||arr[ch]!=='u'){
        if(arr[ch]==='j'||arr[ch]==='q'||arr[ch]==='y'){
          sum3+=1
        }
        else if(arr[ch]==='b'||arr[ch]==='k'||arr[ch]==='r'){
          sum3+=2
        }
        else if(arr[ch]==='c'||arr[ch]==='g'||arr[ch]==='l'||arr[ch]==='s'){
          sum3+=3
        }
        else if(arr[ch]==='d'||arr[ch]==='m'||arr[ch]==='t'){
          sum3+=4
        }
        else if(arr[ch]==='h'||arr[ch]==='n'||arr[ch]==='x'){
          sum3+=5
        }
        else if(arr[ch]==='v'||arr[ch]==='w'){
          sum3+=6
        }
        else if(arr[ch]==='z'){
          sum3+=7
        }
        else if(arr[ch]==='f'||arr[ch]==='p'){
          sum3+=8
        }
      }
     
      var finalSum3
    if(sum3>9){
      const quo3=Math.floor(sum3/10)
      const rem3=sum3%10
      finalSum3=quo3+rem3
    }else{
      finalSum3=sum3
    }

      //compound number
      if(arr[ch]==='j'||arr[ch]==='q'||arr[ch]==='y'||arr[ch]==='a'||arr[ch]==='i'){
        sum1+=1
      }
      else if(arr[ch]==='b'||arr[ch]==='k'||arr[ch]==='r'){
        sum1+=2
      }
      else if(arr[ch]==='c'||arr[ch]==='g'||arr[ch]==='l'||arr[ch]==='s'){
        sum1+=3
      }
      else if(arr[ch]==='d'||arr[ch]==='m'||arr[ch]==='t'){
        sum1+=4
      }
      else if(arr[ch]==='h'||arr[ch]==='n'||arr[ch]==='x'||arr[ch]==='e'){
        sum1+=5
      }
      else if(arr[ch]==='v'||arr[ch]==='w'||arr[ch]==='u'){
        sum1+=6
      }
      else if(arr[ch]==='z'||arr[ch]==='o'){
        sum1+=7
      }
      else if(arr[ch]==='f'||arr[ch]==='p'){
        sum1+=8
      }
    }//end of for loop

    
    
    //destiny number
    const quo=Math.floor(sum1/10)
    const rem=sum1%10
    sum2=quo+rem

    var finalSum2
    if(sum2>9){
      const quo2=Math.floor(sum2/10)
      const rem2=sum2%10
      finalSum2=quo2+rem2
    }else{
      finalSum2=sum2
    }
    
    setData({
      ...data,
      number4:finalSum4,
      number3:finalSum3,
      number1:sum1,
      number2:finalSum2
    })

  }
  return (
    <div>
      <Container style={{marginLeft:"40%",marginTop:"40px"}}>
        <label><h3>ENTER YOUR FIRST NAME</h3></label>
        <form onSubmit={formSubmit}>
          <div><input type="text" placeholder="enter name" value={data.text} name="text" onChange={textState}></input></div>
          <Button type="submit" onClick={calculateNumbers} style={{marginTop:"20px",marginBottom:"20px"}}>CALCULATE </Button>
          <div>
            <h2>Compound Number: {data.number1}</h2>
            <h2>Destiny Number: {data.number2}</h2>
            <h2>Soul Number: {data.number4}</h2>
            <h2>Dream Number: {data.number3}</h2>
          </div>
        </form>
        </Container>
    </div>
  );
}

export default Text;
 