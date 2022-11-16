using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;

// Console.WriteLine("Hello, Console!");

return 0;

public class JsonObject
{
    public string? param1 { get; set; }
    public int param2 { get; set; }
    public bool param3 { get; set; }
}

public partial class MyClass
{
    [JSExport]
    internal static bool? MethodBool(bool? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    // [JSExport]
    // internal static bool[]? MethodBoolArray(bool[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    //     return param;
    // }

    [JSExport]
    internal static byte? MethodByte(byte? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    [JSExport]
    internal static byte[]? MethodByteArray(byte[]? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
        return param;
    }

    [JSExport]
    internal static char MethodChar(char param)
    {
        Console.WriteLine($@"C#: {param}");
        return param;
    }

    [JSExport]
    internal static char? MethodCharNullable(char? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    // [JSExport]
    // internal static char[]? MethodCharArray(char[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    //     return param;
    // }

    [JSExport]
    internal static short? MethodShort(short? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    // [JSExport]
    // internal static short[]? MethodShortArray(short[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    //     return param;
    // }

    [JSExport]
    internal static int? MethodInt(int? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    [JSExport]
    internal static int[]? MethodIntArray(int[]? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
        return param;
    }

    [JSExport]
    internal static void MethodLong([JSMarshalAs<JSType.BigInt>] long? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
    }

    // [JSExport]
    // internal static void MethodLong([JSMarshalAs<JSType.BigInt>] long[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    // }

    [JSExport]
    internal static float? MethodFloat(float? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    // [JSExport]
    // internal static float[]? MethodFloatArray(float[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    //     return param;
    // }

    [JSExport]
    internal static double? MethodDouble(double? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? param : "NULL")}");
        return param;
    }

    [JSExport]
    internal static double[]? MethodDoubleArray(double[]? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
        return param;
    }

    [JSExport]
    internal static void MethodDateTime([JSMarshalAs<JSType.Date>] DateTime? param)
    {
        Console.WriteLine($@"C#: {(param.HasValue ? TimeZoneInfo.ConvertTimeFromUtc(param.Value, TimeZoneInfo.Local) : "NULL")}");
    }

    // [JSExport]
    // internal static void MethodDateTimeArray([JSMarshalAs<JSType.Date>] DateTime[]? param)
    // {
    //    Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
    // }

    [JSExport]
    internal static Exception? MethodException(Exception? param)
    {
        Console.WriteLine($@"C#: {(param != null ? param.Message : "NULL")}");
        return param;
    }

    // [JSExport]
    // internal static Exception[]? MethodExceptionArray(Exception[]? param)
    // {
    //     Console.WriteLine($@"C#: {(param != null ? string.Join(",", param.Select(p=>p.Message)) : "NULL")}");
    //     return param;
    // }

    [JSExport]
    internal static JSObject? MethodJSObject(JSObject? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
        return param;
    }

    [JSExport]
    internal static JSObject[]? MethodJSObjectArray(JSObject[]? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(", ", param.Select(o => o.ToString())) : "NULL")}");
        return param;
    }

    [JSExport]
    internal static string? MethodString(string? param)
    {
        Console.WriteLine($@"C#: {(param ?? "NULL")}");
        return param;
    }

    [JSExport]
    internal static string[]? MethodStringArray(string[] param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(",", param) : "NULL")}");
        return param;
    }


    [JSExport]
    internal static void MethodAny([JSMarshalAs<JSType.Any>] object? param)
    {
        Console.WriteLine($@"C#: {(param ?? "NULL")}");
    }


    [JSExport]
    internal static void MethodAnyArray([JSMarshalAs<JSType.Array<JSType.Any>>] object[]? param)
    {
        Console.WriteLine($@"C#: {(param != null ? string.Join(", ", param.Select(o => o.ToString())) : "NULL")}");
    }

    [JSExport]
    [RequiresUnreferencedCode("Calls System.Text.Json.JsonSerializer.Serialize<TValue>(TValue, JsonSerializerOptions)")]
    internal static string MethodJson(string json)
    {
        var obj = JsonSerializer.Deserialize<JsonObject[]>(json);
        var jsonStr = JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true });
        Console.WriteLine($@"C#: {jsonStr}");
        return jsonStr;
    }

    [JSExport]
    internal static bool? MethodReturningBool() => true;

    [JSExport]
    internal static bool? MethodReturningBoolNull() => null;
}
