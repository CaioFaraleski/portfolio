import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import InputMask from "react-input-mask";

export function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_qw96u6g","template_lkutpu9", form.current, "VVgC9u48QzuiHiZF0")
      .then((result) => {
          alert("Mensagem enviada com sucesso");
      }, (error) => {
          alert("Não foi possível enviar sua mensagem");
      });
      e.target.reset()
  };

  return (
    <div className="lg:ml-16 flex flex-col justify-evenly items-center lg:items-start gap-y-2">
      <h2 className="text-6xl text-lightRed font-bold">Just say Hello!</h2>
      <h3 className="text-3xl text-lightGray mb-4">Send me a message!</h3>
      <form ref={form} className="w-full flex flex-col justify-evenly items-center lg:items-start gap-y-6" onSubmit={sendEmail}>
        <div className="lg:w-[60%] w-[70%] flex flex-wrap justify-center lg:justify-between">
          <input name='first_name' className="bg-[#323232] w-full lg:w-[48%] py-6 lg:py-4 mb-4 mt-2 lg:m-0 text-2xl lg:text-base px-5 lg:px-3 rounded-xl" type="text" placeholder="First Name" />
          <input name='last_name' className="bg-[#323232] w-full lg:w-[48%] py-6 lg:py-4 mt-4 mb-2 lg:m-0 text-2xl lg:text-base px-5 lg:px-3 rounded-xl" type="text" placeholder="Last Name" />
        </div>
        <div className="lg:w-[60%] w-[70%] flex flex-wrap justify-center lg:justify-between">
          <input name='email' className="bg-[#323232] w-full lg:w-[48%] py-6 lg:py-4 mb-4 mt-2 lg:m-0 text-2xl lg:text-base px-5 lg:px-3 rounded-xl" type="email" placeholder="E-Mail" />
          <InputMask mask="+99 (99) 999999-999" name='phone_number' className="bg-[#323232] w-full lg:w-[48%] py-6 lg:py-4 mt-4 mb-2 lg:m-0 text-2xl lg:text-base px-5 lg:px-3 rounded-xl" type="text" placeholder="Phone" />
        </div>
        <textarea name='message' className="lg:w-[60%] w-[70%] h-52 bg-[#323232] text-2xl lg:text-base py-4 px-5 lg:px-3 rounded-xl resize-none" placeholder="Message" />
        <button className="bg-lightRed py-4 px-16 w-[70%] rounded-xl text-xl font-bold lg:w-fit border-b-4 border-[#5a0000] hover:bg-red active:border-none active:mt-[4px]">Submit</button>
      </form>
    </div>
  )
}
