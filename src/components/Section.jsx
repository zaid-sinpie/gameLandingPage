
const Section = ({children, }) => {
  return (
    <section className='wrapper-section relative w-screen h-screen bg-gray-700 overflow-x-auto overflow-y-hidden flex scroll-smooth'>
      {children}
    </section>
  )
}

export default Section
