type Props = { children: JSX.Element }

export default function Header({ children } : Props ) {
  return (
      <header className="bg-mobile-hero h-[300px] bg-cover py-8 px-6 font-commissioner md:bg-center">
        { children }
      </header>

  )
}
