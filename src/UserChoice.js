import React from 'react'
import { Container, Header, Badge } from "semantic-ui-react";
import paper from './paper.png'
import rock from './rock.png'
import scissors from './scissors.png'


class UserChoice extends React.Component {
state = {
  showResult: false,
  choices:["rock", "paper", "scissors"],
  result: '',
  compChoice: '',
  compScore: 0,
  playScore: 0 
}

rock = () => {
  let randomNum = Math.floor(Math.random()*this.state.choices.length)
  let compChoice = this.state.choices[randomNum]
  if(compChoice === 'rock') {
    this.setState({ compChoice: 'Rock'})
    this.setState({ result: 'Tie!'})
  } else if(compChoice === 'paper') {
    this.setState({ compChoice: 'Paper'})
    this.setState({ result: 'You Lose!', compScore: this.state.compScore + 1 })
  } else {
    this.setState({ compChoice: 'Scissors'})
    this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
  }
  console.log(this.state.result)
}

paper = () => {
  let randomNum = Math.floor(Math.random()*this.state.choices.length)
  let compChoice = this.state.choices[randomNum]
  if(compChoice === 'paper') {
    this.setState({ compChoice: 'Paper'})
    this.setState({ result: 'Tie!'})
  } else if(compChoice === 'scissors') {
    this.setState({ compChoice: 'Scissors'})
    this.setState({ result: 'You Lose!', compScore: this.state.compScore + 1 })
  } else {
    this.setState({ compChoice: 'Rock'})
    this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
  }
  console.log(this.state.result)
}

scissors = () => {
  let randomNum = Math.floor(Math.random()*this.state.choices.length)
  let compChoice = this.state.choices[randomNum]
  if(compChoice === 'scissors') {
    this.setState({ compChoice: 'Scissors'})
    this.setState({ result: 'Tie!'})
  } else if(compChoice === 'rock') {
    this.setState({ compChoice: 'Rock'})
    this.setState({ result: 'You Lose!', compScore: this.state.compScore + 1 })
  } else {
    this.setState({ compChoice: 'Paper'})
    this.setState({ result: 'You Win!',  playScore: this.state.playScore + 1})
  }
  console.log(this.state.result)
}


  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginTop: "25px", paddingBottom: "25px" }}>RPS REACT</h1>
        <h3 style={{ textAlign: "center", paddingBottom: "25px"}}>Make your Choice</h3>
        <Container style={styles.container}>
          <br />
          <br />
          <img onClick={this.rock} src={rock} alt="rock"></img>
          <img onClick={this.paper} src={paper} alt="paper"></img>
          <img onClick={this.scissors} src={scissors} alt="scissors"></img>
        </Container>
        <h1 style={{ textAlign: "center" }}>Computer chooses: {this.state.compChoice}</h1>
        <h2 style={{ textAlign: "center" }}>{this.state.result}</h2>
        <Container style={styles.scoreBoard} >
            <div style={styles.badge1}>User</div> <span> {this.state.playScore} </span>:<span> {this.state.compScore} </span><div style={styles.badge2}>Comp</div>
           
          
        </Container>

      </div>
    )
  }
}

const styles = {
  container: {
    cursor: "pointer",
    alignText: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  scoreBoard: {
    padding: "10px",
    marginLeft: "40%",
    alignItems: "center",
    color: "black",
    fontSize: "30px",
    border: "4px solid black",
    width: "20%",
    position: "relative",
    textAlign: "center"
  },
  badge1: {
    background: "#03ce25",
    color: "white",
    fontSize: "18px",
    padding: "2px 10px",
    position: "absolute",
    top: "6px",
    left: "25px"
  },
  badge2: {
    background: "#03ce25",
    color: "white",
    fontSize: "18px",
    padding: "2px 10px",
    position: "absolute",
    top: "6px",
    left: "200px"
  },


}

export default UserChoice
