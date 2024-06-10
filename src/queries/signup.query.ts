import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ISignUp} from "../interfaces/signup.interface";
import {signUpApi} from "../apis/signup.api";

export function useSignUpQuery() {
    const queryClient = useQueryClient()
    const post = useMutation({mutationFn : (data : ISignUp) => signUpApi(data),
    onSuccess : (data : ISignUp)=> {
        alert(data)
        queryClient.invalidateQueries({queryKey : ['member']})

    },
        onError : (error : any)=> {
        if (error.response) {
            alert(error.response.data.message)
        }
        }
    })
    return {post}
}