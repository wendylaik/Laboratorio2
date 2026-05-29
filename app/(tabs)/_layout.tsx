import { Tabs } from "expo-router";
import React from "react";

export default function TabPest(){
    return(
        <Tabs screenOptions={{headerShown: false}}>


            <Tabs.Screen
                name='explorar'
                options={{title:'Explorar'}}
            />

            <Tabs.Screen
                name='mapa'
                options={{title:'Mapa'}}
            />

            <Tabs.Screen
                name='mi_plan'
                options={{title:'Mi Plan'}}
            />

            <Tabs.Screen
                name='perfil'
                options={{title:'Perfil'}}
            />

        </Tabs>         
    );
}