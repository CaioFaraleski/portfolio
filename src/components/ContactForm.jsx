export function ContactForm() {
  return (
    <div className="ml-16 flex flex-col justify-evenly gap-y-2">
      <h2 className="text-6xl text-lightRed font-bold">Just say Hello!</h2>
      <h3 className="text-3xl text-lightGray mb-4">Send me a message!</h3>
      <form className="flex flex-col justify-evenly gap-y-6">
        <div className="w-[60%] flex justify-between">
          <input className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="text" placeholder="First Name" />
          <input className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="text" placeholder="Last Name" />
        </div>
        <div className="w-[60%] flex justify-between">
          <input className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="email" placeholder="Mail" />
          <input className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="phone" placeholder="Phone" />
        </div>
        <textarea className="w-[60%] h-52 bg-[#323232] py-4 px-3 rounded-xl resize-none" placeholder="Message" />
        <button className="bg-lightRed py-4 px-16 rounded-xl text-xl font-bold w-fit">Submit</button>
      </form>
    </div>
  )
}
