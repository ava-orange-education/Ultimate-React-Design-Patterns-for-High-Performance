import { Children, cloneElement, isValidElement, useState } from "react"

const UncontrolledFlow = ({ children, onDone }) => {
    const [data, setData] = useState({})
    const [currentStepIdx, setCurrentStepIdx] = useState(0)

    const nextStep = dataStep => {
        const nextStepIndex = currentStepIdx + 1;
        const newData = { ...data, ...dataStep }

        alert(JSON.stringify(newData))

        if(nextStepIndex < children.length) setCurrentStepIdx(nextStepIndex)
        else onDone(newData)

        setData(newData)
    }

    const currentChild = Children.toArray(children)[currentStepIdx]

    if(isValidElement(currentChild)) return cloneElement(currentChild, { nextStep })
    return currentChild;
}

export default UncontrolledFlow