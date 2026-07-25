export default function ProfileAvatar() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 animate-float">
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
        <img
          src="/avatar-profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
