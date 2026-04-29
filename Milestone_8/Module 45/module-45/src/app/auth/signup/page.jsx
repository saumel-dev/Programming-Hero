"use client";
import React from 'react';
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useState } from "react";
const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        // console.log(data);
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        })
        if (error) {
            alert('Error signing up: ' + error.message)
        }
        else {
            alert('sign up successfully')
        }
        console.log('signup resonse', data, error);
    };

    return (
        <div>
            <h2>Please Sign Up</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                {/* name */}
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>User Name</Label>
                    <Input name='name' placeholder="Jhon Doe" />
                    <FieldError />
                </TextField>
                {/* email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name='email' placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                {/* password */}
                <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          name='password' 
          placeholder='your password'
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;