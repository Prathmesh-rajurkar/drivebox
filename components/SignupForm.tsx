"use client";

import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";
import { useState } from "react";

// zod custom schema
import { signUpSchema } from "@/schemas/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
    const [verifying, setVerifying] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);
    const { signUp, isLoaded, setActive } = useSignUp();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    })
    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        if(!isLoaded) return;

    };

    const handleVerifactionSubmit = async (data: any) => { };

    if (verifying) {
        return <h1>this is OTP entering field </h1>;
    }
    return <h1>signup form with email and other fields</h1>;
}
