import { Tabs } from "expo-router";
import React from "react";

export default function TabPest(){
    return(
        <Tabs screenOptions={{headerShown: false}}>


            <Tabs.Screen
                name='home'
                options={{title:'Home'}}
            />

            <Tabs.Screen
                name='producto'
                options={{title:'Productos'}}
            />

            <Tabs.Screen
                name='index'
                options={{title:'Productos'}}
            />

        </Tabs>         
    );
}