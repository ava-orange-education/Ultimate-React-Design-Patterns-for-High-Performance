import { CloseIcon, Images } from "../assets"
import { PrimaryButton } from "./Buttons"
import { CloseIconContainer, RegisterContainer, RegisterHeader, RegisterHelper } from "./Register"

const RegisterModal = () => {
    return (
        <RegisterContainer>
            <img style={{ maxWidth: "200px" }} src={Images.register} alt="Register" />
            <RegisterHeader>Register</RegisterHeader>
            <RegisterHelper>Register and unlock all the features!</RegisterHelper>
            <PrimaryButton onClick={() => alert("Registered!")}>
                Register
            </PrimaryButton>
            <CloseIconContainer onClick={() => alert("Closed")}>
                <CloseIcon />
            </CloseIconContainer>
        </RegisterContainer>
    )
}
export default RegisterModal