# Downloads the free Unsplash photos used on the site into the images folder.
# Right-click this file > 'Run with PowerShell' (run it from inside this folder).

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot
New-Item -ItemType Directory -Force -Path 'images/services' | Out-Null

$photos = @(
  @('images/hero-ocean.jpg', 'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2200&q=80'),
  @('images/booking-ocean.jpg', 'https://images.unsplash.com/photo-1485955891060-a3318433e95f?auto=format&fit=crop&w=2000&q=80'),
  @('images/services/life-coaching.jpg', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/wellness-coaching.jpg', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/career-counseling.jpg', 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/leadership.jpg', 'https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/social-media.jpg', 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/business-development.jpg', 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/communication.jpg', 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/esl.jpg', 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/travel.jpg', 'https://images.unsplash.com/photo-1507812984078-917a274065be?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/events.jpg', 'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/image-branding.jpg', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/divorce.jpg', 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?auto=format&fit=crop&w=1600&q=80'),
  @('images/services/notary.jpg', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80')
)

foreach ($p in $photos) {
  try {
    Invoke-WebRequest -Uri $p[1] -OutFile $p[0] -UseBasicParsing
    Write-Host ('Saved ' + $p[0])
  } catch {
    Write-Host ('Could not download ' + $p[0] + ' (the site will use the Unsplash link instead)') -ForegroundColor Yellow
  }
}

Write-Host ''
Write-Host 'Done. Upload index.html and the whole images folder to GitHub.' -ForegroundColor Green
Read-Host 'Press Enter to close'
