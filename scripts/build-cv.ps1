$ErrorActionPreference = "Stop"

function Require-Command([string]$name) {
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if (-not $cmd) {
    throw "Missing required command: $name. Install MiKTeX (with latexmk) and ensure it is on PATH."
  }
  return $cmd.Source
}

function Run-InDir([string]$dir, [scriptblock]$action) {
  Push-Location $dir
  try { & $action } finally { Pop-Location }
}

$repoRoot = Split-Path -Parent $PSScriptRoot

$latexmk = Require-Command "latexmk"

$enDir = Join-Path $repoRoot "cv_src/overleaf_en"
$zhDir = Join-Path $repoRoot "cv_src/overleaf_zh/resume"
$outDir = Join-Path $repoRoot "public/files"

New-Item -ItemType Directory -Force $outDir | Out-Null

Write-Host "Building EN CV (pdfLaTeX)..." -ForegroundColor Cyan
Run-InDir $enDir {
  & $latexmk -pdf -interaction=nonstopmode -file-line-error -halt-on-error main.tex
}
Copy-Item -Force (Join-Path $enDir "main.pdf") (Join-Path $outDir "CV_EN.pdf")

Write-Host "Building ZH CV (XeLaTeX)..." -ForegroundColor Cyan
Run-InDir $zhDir {
  & $latexmk -pdf -xelatex -interaction=nonstopmode -file-line-error -halt-on-error resume-zh_CN.tex
}
Copy-Item -Force (Join-Path $zhDir "resume-zh_CN.pdf") (Join-Path $outDir "CV_ZH.pdf")

Write-Host "Done:" -ForegroundColor Green
Write-Host ("  " + (Join-Path $outDir "CV_EN.pdf"))
Write-Host ("  " + (Join-Path $outDir "CV_ZH.pdf"))

