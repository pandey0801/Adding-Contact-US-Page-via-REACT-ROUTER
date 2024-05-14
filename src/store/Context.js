import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = React.createContext(
    {
        item:[],
        totalItem:[],
        addCart:()=>{},
        removeCart:()=>{},
        total:()=>{}
    }
);