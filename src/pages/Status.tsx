import { PaperPlaneRight } from "phosphor-react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Status.css'
import { useState, FormEvent, KeyboardEvent } from 'react';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }
  return(
    <main className="status">
          <Header title="Tweet  "/>
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos doloremque natus nesciunt! Magnam dolor optio obcaecati, eveniet alias quam voluptates at nisi maiores doloremque, facilis quaerat tempora sequi quis." />
          
          <Separator />
          
          <form onSubmit={createAnswer} className="answer-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/lucascampos1710.png" alt="Lucas Campos" />
              <textarea 
              id="tweet" 
              placeholder="Tweet your answer" 
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
              />
            </label>

            <button type="submit">
              <PaperPlaneRight />
              <span>Answer</span>
              </button>
          </form>
          
          {answers.map(answer => {
            return(
              <Tweet key={answer} content={answer}/>
            )
          })}
        </main>
  )
}