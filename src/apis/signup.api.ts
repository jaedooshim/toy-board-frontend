import {ISignUp} from "../interfaces/signup.interface";
import {instance} from "./instance";

export async function signUpApi({email, password, phoneNumber, nickname} : ISignUp) {
    const {data} = await instance.post('members', {email,password,phoneNumber,nickname})
    return data
}