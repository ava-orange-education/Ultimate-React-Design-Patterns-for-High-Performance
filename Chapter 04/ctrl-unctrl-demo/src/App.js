import { useState } from 'react';
import './App.css';
import ControlledFlow from './components/ControlledFlow';

const FirstStep = ({ nextStep }) => {
  return (
    <>
      <h1>Step No. 1: Name:</h1>
      <button onClick={() => nextStep({ name: 'Nabendu' })}>Next</button>
    </>
  )
}

const SecondStep = ({ nextStep }) => {
  return (
    <>
      <h1>Step No. 2: Age:</h1>
      <button onClick={() => nextStep({ age: 46 })}>Next</button>
    </>
  )
}

const ThirdStep = ({ nextStep }) => {
  return (
    <>
      <h1>You Won a Free Amazon voucher</h1>
      <button onClick={() => nextStep({})}>Next</button>
    </>
  )
}

const FourthStep = ({ nextStep }) => {
  return (
    <>
      <h1>Step No. 4: Country:</h1>
      <button onClick={() => nextStep({ country: 'India' })}>Next</button>
    </>
  )
}

function App() {
  const [data, setData] = useState({})
  const [currentStepIdx, setCurrentStepIdx] = useState(0)

  const nextStep = dataStep => {
    const newData = { ...data, ...dataStep }
    alert(JSON.stringify(newData))
    setData(newData)
    setCurrentStepIdx(currentStepIdx + 1)
  }

  return (
    <div className="App">
      <ControlledFlow currentIndex={currentStepIdx} onNext={nextStep}>
        <FirstStep />
        <SecondStep />
        {data.age > 45 && <ThirdStep />}
        <FourthStep />
      </ControlledFlow>
    </div>
  );
}

export default App;
