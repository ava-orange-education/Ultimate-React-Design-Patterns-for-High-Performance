import { Children, cloneElement, isValidElement } from "react"

const ControlledFlow = ({ children, currentIndex, onNext }) => {
    const nextStep = dataStep => onNext(dataStep)
    const currentChild = Children.toArray(children)[currentIndex]

    if(isValidElement(currentChild)) return cloneElement(currentChild, { nextStep })
    return currentChild;
}

export default ControlledFlow