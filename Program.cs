using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;

// Console.WriteLine("Hello, Console!");

return 0;

public class JsonObject
{
    public string param1 { get; set; }
    public int param2 { get; set; }
    public bool param3 { get; set; }
}

public partial class MyClass
{
    [JSExport]
    internal static string MethodBool(bool pBool) => $@"bool: {pBool}";
    // [JSExport]
    // internal static string MethodBoolArray(bool[] pBoolArray) => $@"bool[]: [{string.Join(", ",pBoolArray)}]";
    [JSExport]
    internal static string MethodByte(byte pByte) => $@"byte: {pByte}";
    [JSExport]
    internal static string MethodByteArray(byte[] pByteArray) => $@"byte[]: [{string.Join(", ", pByteArray)}]";
    // [JSExport]
    // internal static string MethodCharArray(char[] pCharArray) => $@"char[]: [{string.Join(", ",pCharArray)}]";

    [JSExport]
    internal static string MethodChar(char pChar) => $@"char: {pChar}";
    // [JSExport]
    // internal static string MethodCharArray(char[] pCharaArray) => $@"char[]: [{string.Join(", ",pCharaArray)}]";
    [JSExport]
    internal static string MethodShort(short pShort) => $@"short: {pShort}";
    // [JSExport]
    // internal static string MethodShortArray(short[] pShortArray) => $@"short[]: [{string.Join(", ",pShortArray)}]";
    [JSExport]
    internal static string MethodInt(int pInt) => $@"int: {pInt}";
    [JSExport]
    internal static string MethodIntArray(int[] pIntArray) => $@"int[]: [{string.Join(", ", pIntArray)}]";
    [JSExport]
    internal static string MethodLong([JSMarshalAs<JSType.BigInt>] long pLong) => $@"long: {pLong}";
    // [JSExport]
    // internal static string MethodLongArray([JSMarshalAs<JSType.Array<JSType.BigInt>>] long[] pLongArray) => $@"long[]: [{string.Join(", ",pLongArray)}]";
    [JSExport]
    internal static string MethodFloat(float pFloat) => $@"float: {pFloat}";
    // [JSExport]
    // internal static string MethodFloatArray(float[] pFloatArray) => $@"float[]: [{string.Join(", ",pFloatArray)}]";
    [JSExport]
    internal static string MethodDouble(double pDouble) => $@"double: {pDouble}";
    [JSExport]
    internal static string MethodDoubleArray(double[] pDoubleArray) => $@"double[]: [{string.Join(", ", pDoubleArray)}]";
    [JSExport]
    internal static string MethodDateTime([JSMarshalAs<JSType.Date>] DateTime pDateTime) => $@"DateTime: {TimeZoneInfo.ConvertTimeFromUtc(pDateTime, TimeZoneInfo.Local)}";
    //[JSExport]
    //internal static string MethodDateTimeArray([JSMarshalAs<JSType.Array<JSType.Date>>] DateTime[] pDateTimeArray) => $@"DateTime[]: [{string.Join(", ", pDateTimeArray)}]";
    [JSExport]
    internal static string MethodException(Exception pException) => $@"Exception: {pException.Message}";
    //[JSExport]
    //internal static string MethodExceptionArray(Exception[] pExceptionArray) => $@"Exception[]: [{string.Join(", ", pExceptionArray)}]";
    [JSExport]
    internal static string MethodJSObject(JSObject pObject) => $@"JSObject: {pObject}";
    [JSExport]
    internal static string MethodJSObjectArray(JSObject[] pObjectArray) => $@"Object[]: [{string.Join(", ", pObjectArray.Select(o => o.ToString()))}]";
    [JSExport]
    internal static string MethodString(string pString) => $@"string: {pString}";
    [JSExport]
    internal static string MethodStringArray(string[] pStringArray) => $@"string[]: [{string.Join(", ", pStringArray)}]";

    [JSExport]
    internal static string MethodAny([JSMarshalAs<JSType.Any>] Object pAny) => $@"any: {pAny}";
    [JSExport]
    internal static string MethodAnyArray([JSMarshalAs<JSType.Array<JSType.Any>>] object[] pAnyArray) => $@"Object[]: [{string.Join(", ", pAnyArray.Select(o => o.ToString()))}]";

    [JSExport]
    [RequiresUnreferencedCode("Calls System.Text.Json.JsonSerializer.Serialize<TValue>(TValue, JsonSerializerOptions)")]
    internal static string MethodJson(string json)
    {
        var obj = JsonSerializer.Deserialize<JsonObject[]>(json);
        var ret = $@"JSON: {JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })}";
        return ret;
    }
}
