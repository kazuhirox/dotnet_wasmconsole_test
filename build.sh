#!/bin/sh

dotnet build -c Release

# TypeScriptのコンパイルのために型情報ファイルをコピー
if [ ! -e ./bin/Release/net7.0/browser-wasm/AppBundle/dotnet.d.ts ]; then
  cp -p ./bin/Release/net7.0/browser-wasm/dotnet.d.ts ./bin/Release/net7.0/browser-wasm/AppBundle/dotnet.d.ts
fi

yarn tsc