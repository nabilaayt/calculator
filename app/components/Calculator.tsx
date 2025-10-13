import { View, Text, ScrollView } from "react-native"; // komponen UI
import React, { useState } from "react";
import Button from "./Button";
import Feather from 'react-native-vector-icons/Feather';
// import { Colors } from "@/utils/Colors";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [displayValue, setDisplayValue] = useState("0");

  const handleInput = (value: string) => {
    // Menghindari 2 operator berurutan, exp: ++ / +*
    if( /[\+\-\*\%]$/.test(expression) && /[\+\-\*\%]/.test(value)) {
      setExpression(expression.slice(0, -1) + value);  
    } else {
      setExpression(expression + value);
    }
  }; 

  const handleClear = () => {
    setExpression("");
    setDisplayValue("0");
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const calculateExpression = (expr: string): number => {
    // Memisahkan angka & operator
    const tokens = expr.match(/(\d+\.?\d*|[+\-*/%])/g);
    if(!tokens) return 0;

    // Hitung operasi * / % lebih dulu
    const highPriority: (string | number)[] = [];
    let i = 0;
    while(i < tokens.length){
      const token = tokens[i];
      if(token === "*" || token === "/" || token === "%"){
        const prev = Number(highPriority.pop());
        const next = Number(tokens[i + 1]);
        let calc = 0;

        if(token === "*") calc = prev * next;
        else if (token === "/") calc = prev / next;
        else if (token === "%") calc = prev % next;
        highPriority.push(calc);
        i += 2; // skip angka berikutnya
      } else {
        highPriority.push(token);
        i++;
      }
    };

    // Hitung + - dari kiri ke kanan
    let total = Number(highPriority[0]);
    for(let j = 1; j < highPriority.length; j += 2){
      const op = highPriority[j];
      const next = Number(highPriority[j + 1]);
      if(op === "+") total += next;
      else if(op === "-") total -= next;
    };
    
    return total;
  };

  const handleCalculation = () => {
    try {
      const formattedExpr = expression.replace(/,/g, ".");
      const finalResult = calculateExpression(formattedExpr);
      setDisplayValue(finalResult.toString());
    } catch (e) {
      setDisplayValue("Error");
    }
  };

  return (
    <View className="flex-1">
      <View className="flex-[1.5] bg-light py-20 px-10 justify-end items-end">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        >
          <Text className="font-poppinsMedium text-5xl mb-5 text-black">{expression}</Text>
        </ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        >
          <Text className="font-poppinsMedium text-7xl text-black">{displayValue}</Text>
        </ScrollView>
      </View>

      <View className="flex-[3.5] bg-light flex-row flex-wrap justify-center gap-2 py-2">
        <Button icon={<Feather name="divide" size={34} />} type="top" onPress={() => handleInput("/")}/>
        <Button icon={<Feather name="percent" size={34} />} type="top" onPress={() => handleInput("%")}/>
        <Button icon={<Feather name="delete" size={34} />} type="top" onPress={handleDelete}/>
        <Button title="AC" type="top" onPress={handleClear}/>
        <Button title="7" type="number" onPress={() => handleInput("7")}/>
        <Button title="8" type="number" onPress={() => handleInput("8")}/>
        <Button title="9" type="number" onPress={() => handleInput("9")}/>
        <Button title="x" type="right" onPress={() => handleInput("*")}/>
        <Button title="4" type="number" onPress={() => handleInput("4")}/>
        <Button title="5" type="number" onPress={() => handleInput("5")}/>
        <Button title="6" type="number" onPress={() => handleInput("6")}/>
        <Button title="-" type="right" onPress={() => handleInput("-")}/>
        <Button title="1" type="number" onPress={() => handleInput("1")}/>
        <Button title="2" type="number" onPress={() => handleInput("2")}/>
        <Button title="3" type="number" onPress={() => handleInput("3")}/>
        <Button title="+" type="right" onPress={() => handleInput("+")}/>
        <Button title="0" type="number" onPress={() => handleInput("0")}/>
        <Button title="00" type="number" onPress={() => handleInput("00")}/>
        <Button title="," type="number" onPress={() => handleInput(",")}/>
        <Button title="=" type="right"  onPress={handleCalculation}/>
      </View>
    </View>
  );
};