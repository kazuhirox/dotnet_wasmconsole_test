// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from "./dotnet.js";

export const test = async () => {
  const { getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .create();
  const config = getConfig();
  const exports = await getAssemblyExports(config.mainAssemblyName!);

  //TypeScript:boolean ⇔ C#:bool
  const pBool: boolean = true;
  console.log(exports.MyClass.MethodBool(pBool));

  //TypeScript:Number ⇔ C#:byte
  const pByte: Number = 0b1;
  console.log(exports.MyClass.MethodByte(pByte));

  //TypeScript:Number[] ⇔ C#:byte[]
  const pByteArray: Number[] = [0b1, 0b10];
  console.log(exports.MyClass.MethodByteArray(pByteArray));

  //TypeScript:Number ⇔ C#:char
  const pChar = "あ".codePointAt(0);
  console.log(exports.MyClass.MethodChar(pChar));

  //TypeScript:Number ⇔ C#:short
  const pShort: Number = 32767;
  console.log(exports.MyClass.MethodShort(pShort));

  //TypeScript:Number ⇔ C#:int
  const pInt: Number = 2147483647;
  console.log(exports.MyClass.MethodInt(pInt));

  //TypeScript:Number[] ⇔ C#:int[]
  const pIntArray: Number[] = [-2147483648, 2147483647];
  console.log(exports.MyClass.MethodIntArray(pIntArray));

  //TypeScript:bigint ⇔ C#:long
  const pLong: bigint = 9223372036854775807n;
  console.log(exports.MyClass.MethodLong(pLong));

  //TypeScript:Number ⇔ C#:float
  const pFloat: Number = 3.4e28;
  console.log(exports.MyClass.MethodFloat(pFloat));

  //TypeScript:Number ⇔ C#:double
  const pDouble: Number = 1.7e308;
  console.log(exports.MyClass.MethodDouble(pDouble));

  //TypeScript:Number[] ⇔ C#:double[]
  const pDoubleArray: Number[] = [-5e-324, 1.7e308];
  console.log(exports.MyClass.MethodDoubleArray(pDoubleArray));

  //TypeScript:Date ⇔ C#:DateTime
  const pDateTime: Date = new Date();
  console.log(exports.MyClass.MethodDateTime(pDateTime));

  //TypeScript:Error ⇔ C#:Exception
  const pException: Error = new Error("Error object");
  console.log(exports.MyClass.MethodException(pException));

  //TypeScript:object ⇔ C#:JSObject
  const pObject: object = { param1: "abc", param2: 123, param3: true };
  console.log(exports.MyClass.MethodJSObject(pObject));

  //TypeScript:object[] ⇔ C#:JSObject[]
  const pObjectArray: object[] = [
    { param1: "abc", param2: 123, param3: true },
    { param1: "def", param2: 456, param3: false },
  ];
  console.log(exports.MyClass.MethodJSObjectArray(pObjectArray));

  //TypeScript:string ⇔ C#:string
  const pString: string = "abc";
  console.log(exports.MyClass.MethodString(pString));

  //TypeScript:string[] ⇔ C#:string[]
  const pStringArray: string[] = ["abc", "def"];
  console.log(exports.MyClass.MethodStringArray(pStringArray));

  //TypeScript:any ⇔ C#:object
  const pAny: any = { param1: "abc", param2: 123, param3: true };
  console.log(exports.MyClass.MethodAny(pAny));

  //TypeScript:any[] ⇔ C#:object[]
  const pAnyArray: any[] = [
    { param1: "abc", param2: 123, param3: true },
    { param1: "def", param2: 456, param3: false },
  ];
  console.log(exports.MyClass.MethodAnyArray(pAnyArray));

  //TypeScript:JSON string ⇔ C#:string(JSON deserialization)
  console.log(exports.MyClass.MethodJson(JSON.stringify(pAnyArray)));

  await dotnet.run();
};
