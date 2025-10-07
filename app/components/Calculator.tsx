import { View, Text } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import Feather from 'react-native-vector-icons/Feather';
// import { Colors } from "@/utils/Colors";

export default function Calculator() {
  const [firstValue, setFirstValue] = useState("");
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState("");

  const handleNumberInput = (num: string) => {
    if( displayValue === "0" ) {
      setDisplayValue(num);  
    } else {
      setDisplayValue(displayValue + num);
    }
  }

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue("0");
  }

  const handleCalculation = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if( operator === "+" ) {
      setDisplayValue( (num1 + num2).toString() );
    } else if( operator === "-" ) {
      setDisplayValue( (num1 - num2).toString() );
    } else if( operator === "*" ) {
      setDisplayValue( (num1 * num2).toString() );
    } else if( operator === "/" ) {
      setDisplayValue( (num1 / num2).toString() );
    } else if( operator === "%" ) {
      setDisplayValue( (num1 % num2).toString() );
    }

    setOperator("");
    setFirstValue("");
  }

  const handleClear = () => {
    setDisplayValue("0");
    setOperator("");
    setFirstValue("");
  }

  const handleDelete = () => {
    if( displayValue.length == 1 ) {
      setDisplayValue("0")
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  }

  return (
    <View className="flex-1">
      <View className="flex-1 bg-light py-20 px-10 justify-end items-end">
        <Text className="font-poppinsMedium text-4xl">{firstValue + operator}</Text>
        <Text className="font-poppinsMedium  text-6xl text-black">{displayValue}</Text>
      </View>

      <View className="flex-[4] bg-light flex-row flex-wrap justify-center gap-2 py-2">
        <Button icon={<Feather name="divide" size={34} />} type="top" onPress={() => handleOperatorInput("/")}/>
        <Button icon={<Feather name="percent" size={34} />} type="top" onPress={() => handleOperatorInput("%")}/>
        <Button icon={<Feather name="delete" size={34} />} type="top" onPress={handleDelete}/>
        <Button title="AC" type="top" onPress={handleClear}/>
        <Button title="7" type="number" onPress={() => handleNumberInput("7")}/>
        <Button title="8" type="number" onPress={() => handleNumberInput("8")}/>
        <Button title="9" type="number" onPress={() => handleNumberInput("9")}/>
        <Button title="x" type="right" onPress={() => handleOperatorInput("*")}/>
        <Button title="4" type="number" onPress={() => handleNumberInput("4")}/>
        <Button title="5" type="number" onPress={() => handleNumberInput("5")}/>
        <Button title="6" type="number" onPress={() => handleNumberInput("6")}/>
        <Button title="-" type="right" onPress={() => handleOperatorInput("-")}/>
        <Button title="1" type="number" onPress={() => handleNumberInput("1")}/>
        <Button title="2" type="number" onPress={() => handleNumberInput("2")}/>
        <Button title="3" type="number" onPress={() => handleNumberInput("3")}/>
        <Button title="+" type="right" onPress={() => handleOperatorInput("+")}/>
        <Button title="0" type="number" onPress={() => handleNumberInput("0")}/>
        <Button title="00" type="number" onPress={() => handleNumberInput("00")}/>
        <Button title="," type="number" onPress={() => handleNumberInput(",")}/>
        <Button title="=" type="right"  onPress={handleCalculation}/>
      </View>
    </View>
  );
};