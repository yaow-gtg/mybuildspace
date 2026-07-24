export default function ProfileAvatar() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 animate-float">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]"
      >
        <defs>
          <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="gradBlue" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradPink" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <radialGradient id="gradSkin" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2d1b69" />
            <stop offset="100%" stopColor="#140a2e" />
          </radialGradient>
        </defs>

        {/* Outer ring */}
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="6 4"
        />

        {/* Shoulders */}
        <path
          d="M40 165 Q100 195 160 165 L170 200 L30 200 Z"
          fill="url(#gradBlue)"
          opacity="0.15"
        />

        {/* Neck */}
        <path
          d="M82 142 Q100 168 118 142 L122 200 L78 200 Z"
          fill="url(#gradPurple)"
          opacity="0.15"
        />

        {/* Head */}
        <ellipse
          cx="100"
          cy="92"
          rx="48"
          ry="58"
          fill="url(#gradSkin)"
          stroke="url(#gradPurple)"
          strokeWidth="1"
          opacity="0.7"
        />

        {/* Hair main volume */}
        <path
          d="M52 80 C48 52, 55 28, 100 22 C145 28, 152 52, 148 80 C150 55, 140 35, 100 30 C60 35, 50 55, 52 80 Z"
          fill="url(#gradPurple)"
          opacity="0.4"
        />
        <path
          d="M52 80 C48 40, 65 20, 100 18 C135 20, 152 40, 148 80 L140 50 C135 35, 115 28, 100 27 C85 28, 65 35, 60 50 Z"
          fill="url(#gradBlue)"
          opacity="0.25"
        />

        {/* Hair sides */}
        <path
          d="M52 75 C46 60, 48 42, 55 32 L62 45 C54 55, 55 72, 56 82 Z"
          fill="url(#gradPink)"
          opacity="0.2"
        />
        <path
          d="M148 75 C154 60, 152 42, 145 32 L138 45 C146 55, 145 72, 144 82 Z"
          fill="url(#gradPink)"
          opacity="0.2"
        />

        {/* Bangs */}
        <path
          d="M62 50 Q75 38 90 44 Q100 35 110 44 Q125 38 138 50 Q125 68 100 65 Q75 68 62 50 Z"
          fill="url(#gradPurple)"
          opacity="0.3"
        />

        {/* Ears */}
        <ellipse
          cx="52"
          cy="98"
          rx="5"
          ry="9"
          fill="url(#gradSkin)"
          stroke="url(#gradPurple)"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <ellipse
          cx="148"
          cy="98"
          rx="5"
          ry="9"
          fill="url(#gradSkin)"
          stroke="url(#gradPurple)"
          strokeWidth="0.8"
          opacity="0.4"
        />

        {/* Eyebrows */}
        <path
          d="M72 78 Q80 73 90 77"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M110 77 Q120 73 128 78"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Eyes */}
        <ellipse
          cx="80"
          cy="88"
          rx="8"
          ry="10"
          fill="url(#gradPurple)"
          opacity="0.3"
        />
        <ellipse
          cx="120"
          cy="88"
          rx="8"
          ry="10"
          fill="url(#gradPurple)"
          opacity="0.3"
        />
        <ellipse
          cx="80"
          cy="88"
          rx="5"
          ry="6"
          fill="#c4b5fd"
          opacity="0.7"
        />
        <ellipse
          cx="120"
          cy="88"
          rx="5"
          ry="6"
          fill="#c4b5fd"
          opacity="0.7"
        />
        <circle cx="80" cy="87" r="2.5" fill="#ffffff" opacity="0.9" />
        <circle cx="120" cy="87" r="2.5" fill="#ffffff" opacity="0.9" />

        {/* Nose */}
        <path
          d="M100 93 L97 106 Q100 110 103 106"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Mouth */}
        <path
          d="M88 120 Q100 127 112 120"
          fill="none"
          stroke="url(#gradPurple)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Accent dots */}
        <circle cx="100" cy="22" r="2" fill="#a78bfa" opacity="0.4" />
        <circle cx="48" cy="50" r="1.5" fill="#8b5cf6" opacity="0.3" />
        <circle cx="152" cy="50" r="1.5" fill="#ec4899" opacity="0.3" />
        <circle cx="60" cy="30" r="1.5" fill="#a78bfa" opacity="0.25" />
        <circle cx="140" cy="30" r="1.5" fill="#a78bfa" opacity="0.25" />
      </svg>
    </div>
  )
}
