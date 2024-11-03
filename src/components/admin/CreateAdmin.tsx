"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";




const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onclickHandler = async () => {
    try {
      const response = await axios.post("/api/admin/create-admin", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
      
    }
    const response = await axios.post("/api/admin/create-admin", {
      name: name,
      email: email,
      password: password,
    });
    console.log(response);
  };
  return (
    <>
      <div className="mx-auto h-screen max-w-2xl items-center flex justify-center">
        <Card className="w-2/3 px-5">
          <CardHeader className="text-center">
            <CardTitle>Create Admin</CardTitle>
          </CardHeader>
          <CardDescription className="flex flex-col gap-2">
            <Label className="px-2" htmlFor="name">Name</Label>
            <Input onChange={(e) => setName(e.target.value)} className="mb-3" id="name" placeholder="Enter name" />
            <Label className="px-2" htmlFor="email">Email</Label>
            <Input onChange={(e) => setEmail(e.target.value)} className="mb-3" id="name" placeholder="Enter email" />
            <Label className="px-2" htmlFor="password">Password</Label>
            <Input onChange={(e) => setPassword(e.target.value)} className="mb-3" id="name" type="password" placeholder="Enter password" />
          </CardDescription>
          <CardFooter className="items-center justify-center py-8">
            <Button onClick={onclickHandler} className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Create Admin</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CreateAdmin;
