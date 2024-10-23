import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  
  const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Sophia', 'Jackson', 'Isabella', 'Lucas', 'Mia'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
  
  const generateRandomSerial = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const generateName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const serial = generateRandomSerial();
    setGeneratedName(`${firstName} ${lastName}`);
    setSerialNumber(`#${serial}`);
  };

  return (
    <Card className="w-80 bg-red-500 text-black font-mono">
      <CardHeader>
        <CardTitle className="text-center tracking-widest border-b-2 border-black pb-2">
          NAME-GEN v1.0
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-black p-4 bg-white rounded">
          <div className="text-center text-lg tracking-wider">
            {generatedName}
          </div>
          <div className="text-center text-sm tracking-[0.3em] mt-2 font-bold">
            {serialNumber}
          </div>
        </div>
        <Button 
          onClick={generateName}
          className="w-full bg-black text-white hover:bg-gray-800 font-mono tracking-widest"
        >
          GENERATE-ID
        </Button>
      </CardContent>
    </Card>
  );
};

export default NameGenerator;
