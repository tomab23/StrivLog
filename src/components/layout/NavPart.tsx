import NavLinkPart from "./NavLinkPart"

const NavPart = () => {
  return (
    <div>
      {/* Navigation Links */}
      <div className="flex items-center gap-3 max-sm:gap-1">
      <NavLinkPart page={"home"} />

      <NavLinkPart page={"diary"} />

      <NavLinkPart page={"stats"} />
      </div>
    </div>
  )
}

export default NavPart