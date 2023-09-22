type AboutProps = {
  children: JSX.Element
}

export default function About({ children } : AboutProps) {
  return (
    <section className="card pb-5 screen-850:py-[50px] screen-850:px-[45px]">
      <h2 className="text-[1.1rem] font-bold screen-850:text-[1.3rem]">About this project</h2>
      <p className="text-sm text-neutral-dark-gray mx-auto my-[30px] leading-[1.7] screen-850:my-[37px] screen-850:mx-auto screen-850:text-base">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
      <p className="text-sm text-neutral-dark-gray mx-auto my-[30px] leading-[1.7] screen-850:my-[37px] screen-850:mx-auto screen-850:text-base">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

      { children }
      
    </section>
  )
}
