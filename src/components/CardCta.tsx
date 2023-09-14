import CardCtaButtons from "./CardCtaButtons"

function CardCta() {
  return (
    <div 
        className="card text-center relative rounded-[10px] before:bg-logo-mastercraft before:bg-no-repeat before:content-['_'] before:block before:absolute before:top-0 before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:h-14 before:w-14"
    >
        <h1 className="text-[1.3rem] font-bold leading-[1.3] my-3">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-[0.875rem] text-neutral-dark-gray leading-[1.6] my-[14px]">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <CardCtaButtons />
    </div>
  )
}

export default CardCta