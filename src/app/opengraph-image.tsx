import { ImageResponse } from 'next/og'

export const alt = 'Farhan Ridho Illahi'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: '#f1f5f9',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#f1f5f9',
            marginBottom: 16,
          }}
        >
          Farhan Ridho Illahi
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#38bdf8',
          }}
        >
          Fullstack Developer
        </div>
      </div>
    ),
    { ...size },
  )
}
