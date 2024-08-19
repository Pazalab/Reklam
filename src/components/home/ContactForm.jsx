import { useForm } from "react-hook-form"
import axios from "axios";
import { useState } from "react";
const ContactForm = () => {
  const { handleSubmit, register, formState: { errors }, reset} = useForm();
   const API_PATH = import.meta.env.VITE_SERVER_URL;
   const [ btnMsg, setBtnMsg ] = useState("Send Message");
   const [ serverMsg, setServerMsg ] = useState("");
  
  const submitForm = (data) => {
         setBtnMsg("Sending...");
         axios.post(API_PATH, {
                form_data: data
         }).then(res => {
                  setServerMsg(res.data.message);
                  reset();
         }).finally(() => {
                 setBtnMsg("Sent");
                 setTimeout(() => {
                        setBtnMsg("Send Message");
                        setServerMsg("")
                 }, 4500)
         })
  }
  return (
    <div className="contact-form" data-aos="zoom-in-right">
               <form onSubmit={handleSubmit(submitForm)}>
                          <div className="form-row split">
                                     <div className="form-column">
                                               <input type="text" {...register("name", { required: "This input is required"})} className="form-control" placeholder="Name" />
                                               <span className="error">{errors.name && errors.name.message}</span>
                                     </div>
                                     <div className="form-column">
                                               <input type="email" {...register("email", { required: "This input is required"})} className="form-control" placeholder="Email"/>
                                               <span className="error">{errors.email && errors.email.message}</span>
                                     </div>
                          </div>
                           <input type="text" {...register("honeypot")} className="honey"/>
                          <div className="form-row">
                                    <input type="number" {...register("phone", { required: 'This input is required'})} className="form-control" placeholder="Phone number" pattern="+[0,9]"/>
                                    <span className="error">{errors.phone && errors.phone.message}</span>
                          </div>
                          <div className="form-row">
                                    <textarea placeholder="Your message" {...register("msg", { required: "This input is required"})}></textarea>
                                    <span className="error">{errors.msg && errors.msg.message}</span>
                          </div>

                          <button type="submit">{btnMsg}</button>

                          <p className="server-msg">{serverMsg}</p>
               </form>
    </div>
  )
}

export default ContactForm