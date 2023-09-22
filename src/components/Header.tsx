type Props = { children: JSX.Element }

export default function Header({ children } : Props ) {
  return (
      <header className="bg-mobile-hero h-[300px] bg-cover py-8 px-6 font-commissioner md:bg-center screen-850:h-[400px] screen-850:bg-bottom screen-850:bg-desktop-hero screen-850:py-8 screen-850:px-[2.82353vw] screen-950:py-8 screen-950:px-[5.82353vw] screen-1200:py-8 screen-1200:px-[11.3889vw]">
        { children }
      </header>

  )
}
