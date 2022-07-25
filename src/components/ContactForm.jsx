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
    <div className="ml-16 flex flex-col justify-evenly gap-y-2">
      <h2 className="text-6xl text-lightRed font-bold">Just say Hello!</h2>
      <h3 className="text-3xl text-lightGray mb-4">Send me a message!</h3>
      <form ref={form} className="flex flex-col justify-evenly gap-y-6" onSubmit={sendEmail}>
        <div className="w-[60%] flex justify-between">
          <input name='first_name' className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="text" placeholder="First Name" />
          <input name='last_name' className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="text" placeholder="Last Name" />
        </div>
        <div className="w-[60%] flex justify-between">
          <input name='email' className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="email" placeholder="Mail" />
          <InputMask mask="+99 (99) 999999-999" name='phone_number' className="bg-[#323232] w-[48%] py-4 px-3 rounded-xl" type="text" placeholder="Phone" />
        </div>
        <textarea name='message' className="w-[60%] h-52 bg-[#323232] py-4 px-3 rounded-xl resize-none" placeholder="Message" />
        <button className="bg-lightRed py-4 px-16 rounded-xl text-xl font-bold w-fit border-b-4 border-[#5a0000] hover:bg-red active:border-none active:mt-[4px]">Submit</button>
      </form>
    </div>
  )
}
