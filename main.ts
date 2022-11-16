// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from "./dotnet.js";

export const test = async () => {
  const { getAssemblyExports, getConfig } = await dotnet
    .withDiagnosticTracing(false)
    .create();
  const config = getConfig();
  const exports = await getAssemblyExports(config.mainAssemblyName!);

  //TS:boolean → C#:bool?
  const pBool: boolean = true;
  console.log("bool?");
  console.log(`TS: ${exports.MyClass.MethodBool(pBool)}`);
  console.log(`TS: ${exports.MyClass.MethodBool(null)}`);
  console.log(`TS: ${exports.MyClass.MethodBool(undefined)}`);
  console.log("--------");

  //TS:number → C#:byte?
  const pByte: number = 0b1;
  console.log("byte?");
  console.log(`TS: ${exports.MyClass.MethodByte(pByte)}`);
  console.log(`TS: ${exports.MyClass.MethodByte(null)}`);
  console.log(`TS: ${exports.MyClass.MethodByte(undefined)}`);
  console.log("--------");

  //TS:number[] → C#:byte[]?
  const pByteArray: number[] = [0b1, 0b10];
  console.log("byte[]?");
  console.log(`TS: ${exports.MyClass.MethodByteArray(pByteArray)}`);
  console.log(`TS: ${exports.MyClass.MethodByteArray(null)}`);
  console.log(`TS: ${exports.MyClass.MethodByteArray(undefined)}`);
  console.log("--------");

  //TS:number → C#:char
  console.log("char");
  const pChar = "あ".codePointAt(0);
  console.log(`TS: ${String.fromCharCode(exports.MyClass.MethodChar(pChar))}`);
  console.log("--------");

  //TS:number → C#:char?
  console.log("char?");
  const pChar2 = "a".codePointAt(0);
  console.log(
    `TS: ${String.fromCharCode(exports.MyClass.MethodCharNullable(pChar2))}`
  );
  console.log(
    `TS: ${String.fromCharCode(exports.MyClass.MethodCharNullable(null))}`
  );
  console.log(
    `TS: ${String.fromCharCode(exports.MyClass.MethodCharNullable(undefined))}`
  );
  console.log("--------");

  //TS:number → C#:short?
  console.log("short?");
  const pShort: number = 32767;
  console.log(`TS: ${exports.MyClass.MethodShort(pShort)}`);
  console.log(`TS: ${exports.MyClass.MethodShort(null)}`);
  console.log(`TS: ${exports.MyClass.MethodShort(undefined)}`);
  console.log("--------");

  //TS:number → C#:int?
  console.log("int?");
  const pInt: number = 2147483647;
  console.log(`TS: ${exports.MyClass.MethodInt(pInt)}`);
  console.log(`TS: ${exports.MyClass.MethodInt(null)}`);
  console.log(`TS: ${exports.MyClass.MethodInt(undefined)}`);
  console.log("--------");

  //TS:number[] → C#:int[]?
  console.log("int[]?");
  const pIntArray: number[] = [-2147483648, 2147483647];
  console.log(`TS: ${exports.MyClass.MethodIntArray(pIntArray)}`);
  console.log(`TS: ${exports.MyClass.MethodIntArray(null)}`);
  console.log(`TS: ${exports.MyClass.MethodIntArray(undefined)}`);
  console.log("--------");

  //TS:bigint → C#:long?
  console.log("long?");
  const pLong: bigint = 9223372036854775807n;
  exports.MyClass.MethodLong(pLong);
  exports.MyClass.MethodLong(null);
  exports.MyClass.MethodLong(undefined);
  console.log("--------");

  //TS:number → C#:float?
  console.log("float?");
  const pFloat: number = 3.4e28;
  console.log(`TS: ${exports.MyClass.MethodFloat(pFloat)}`);
  console.log(`TS: ${exports.MyClass.MethodFloat(null)}`);
  console.log(`TS: ${exports.MyClass.MethodFloat(undefined)}`);
  console.log("--------");

  //TS:number → C#:double?
  console.log("double?");
  const pDouble: number = 1.7e308;
  console.log(`TS: ${exports.MyClass.MethodDouble(pDouble)}`);
  console.log(`TS: ${exports.MyClass.MethodDouble(null)}`);
  console.log(`TS: ${exports.MyClass.MethodDouble(undefined)}`);
  console.log("--------");

  //TS:number[] → C#:double[]?
  console.log("double[]?");
  const pDoubleArray: number[] = [-5e-324, 1.7e308];
  console.log(`TS: ${exports.MyClass.MethodDoubleArray(pDoubleArray)}`);
  console.log(`TS: ${exports.MyClass.MethodDoubleArray(null)}`);
  console.log(`TS: ${exports.MyClass.MethodDoubleArray(undefined)}`);
  console.log("--------");

  //TS:Date → C#:DateTime?
  console.log("DateTime?");
  const pDateTime: Date = new Date();
  exports.MyClass.MethodDateTime(pDateTime);
  exports.MyClass.MethodDateTime(null);
  exports.MyClass.MethodDateTime(undefined);
  console.log("--------");

  //TS:Error → C#:Exception?
  console.log("Exception?");
  const pException: Error = new Error("Error object");
  console.log(`TS: ${exports.MyClass.MethodException(pException)}`);
  console.log(`TS: ${exports.MyClass.MethodException(null)}`);
  console.log(`TS: ${exports.MyClass.MethodException(undefined)}`);
  console.log("--------");

  //TS:object → C#:JSObject?
  console.log("JSObject?");
  const pObject: object = { param1: "abc", param2: 123, param3: true };
  const retObject = exports.MyClass.MethodJSObject(pObject);
  console.log(`TS: ${JSON.stringify(retObject)}`);
  const retObjectNull = exports.MyClass.MethodJSObject(null);
  console.log(`TS: ${JSON.stringify(retObjectNull)}`);
  const retObjectUndefined = exports.MyClass.MethodJSObject(undefined);
  console.log(`TS: ${JSON.stringify(retObjectUndefined)}`);
  console.log("--------");

  //TS:object[] → C#:JSObject[]?
  console.log("JSObject[]?");
  const pObjectArray: object[] = [
    { param1: "abc", param2: 123, param3: true },
    { param1: "def", param2: 456, param3: false },
  ];
  const retObjectArray = exports.MyClass.MethodJSObjectArray(pObjectArray);
  console.log(`TS: ${JSON.stringify(retObjectArray)}`);
  const retObjectArrayNull = exports.MyClass.MethodJSObjectArray(null);
  console.log(`TS: ${JSON.stringify(retObjectArrayNull)}`);
  const retObjectArrayUndefined =
    exports.MyClass.MethodJSObjectArray(undefined);
  console.log(`TS: ${JSON.stringify(retObjectArrayUndefined)}`);
  console.log("--------");

  //TS:string → C#:string?
  console.log("string?");
  const pString: string = "abc";
  console.log(`TS: ${exports.MyClass.MethodString(pString)}`);
  console.log(`TS: ${exports.MyClass.MethodString(null)}`);
  console.log(`TS: ${exports.MyClass.MethodString(undefined)}`);
  console.log("--------");

  //TS:string[] → C#:string[]?
  console.log("string[]?");
  const pStringArray: string[] = ["abc", "def"];
  console.log(`TS: ${exports.MyClass.MethodStringArray(pStringArray)}`);
  console.log(`TS: ${exports.MyClass.MethodStringArray(null)}`);
  console.log(`TS: ${exports.MyClass.MethodStringArray(undefined)}`);
  console.log("--------");

  //TS:any → C#:object
  console.log("object?");
  const pAny: any = { param1: "abc", param2: 123, param3: true };
  console.log(`TS: ${exports.MyClass.MethodAny(pAny)}`);
  console.log(`TS: ${exports.MyClass.MethodAny(null)}`);
  console.log(`TS: ${exports.MyClass.MethodAny(undefined)}`);
  console.log("--------");

  //TS:any[] → C#:object[]?
  console.log("object[]?");
  const pAnyArray: any[] = [
    { param1: "abc", param2: 123, param3: true },
    { param1: "def", param2: 456, param3: false },
  ];
  console.log(`TS: ${exports.MyClass.MethodAnyArray(pAnyArray)}`);
  console.log(`TS: ${exports.MyClass.MethodAnyArray(null)}`);
  console.log(`TS: ${exports.MyClass.MethodAnyArray(undefined)}`);
  console.log("--------");

  //TS:JSON string → C#:string(JSON)
  console.log("JSON string");
  const retJson = JSON.parse(
    exports.MyClass.MethodJson(JSON.stringify(pAnyArray))
  );
  console.log(`TS: ${JSON.stringify(retJson)}`);
  console.log("--------");

  await dotnet.run();
};
