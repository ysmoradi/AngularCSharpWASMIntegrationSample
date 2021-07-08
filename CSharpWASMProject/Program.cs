using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.JSInterop;
using System;

var hostBuilder = WebAssemblyHostBuilder.CreateDefault(args);

var services = hostBuilder.Services;

var host = hostBuilder.Build();

await host.RunAsync();


public class CSharpCodes
{
    [JSInvokable("Do")]
    public static void Do(string value)
    {
        Console.WriteLine($"C#! {value}");
    }
}