import { useForm } from "react-hook-form"

const ContactForm = () => {
  const { handleSubmit, register, formState: { errors }, watch} = useForm();

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const subject = watch("subject");
  const enquiry = watch("enquiry");

  const submitForm = (data) => {
        console.log(data)
  }
  return (
    <div className="contact-form" data-aos="zoom-in-left">
             <form onSubmit={handleSubmit(submitForm)}>
                      <div className="input-row">
                                <label htmlFor="name">Name <span>*</span></label>
                                <input type="text" {...register("name", { required: "Name is required"})} className={name === undefined || name === "" ? "input-control" : "input-control active" } />
                                { errors.name && <span className="error">{errors.name.message}</span>}
                      </div>
                      <div className="input-row">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" {...register("email", { required: "Email input is required"})} className={email === undefined || email === "" ? "input-control" : "input-control active"} />
                                { errors.email && <span className="error">{errors.email.message}</span>}
                      </div>
                       <div className="input-row">
                                <label htmlFor="phone">Phone <span>*</span></label>
                                <input type="number" pattern="+[0,9]" {...register("phone", { required: "Phone number input is required"})} className={phone === undefined || phone === "" ? "input-control" : "input-control active"} />
                                { errors.phone && <span className="error">{errors.phone.message}</span>}
                      </div>
                       <div className="input-row">
                                <label htmlFor="subject">Subject <span></span></label>
                                <input type="text" {...register("subject")} className={ subject === undefined || subject === "" ? "input-control" : "input-control active"} />
                      </div>
                      <div className="input-row alt">
                                <label htmlFor="enquiry">Enquiry <span>*</span></label>
                                <textarea {...register("enquiry", { required: "Enquiry message is required"})} className={ enquiry === undefined || enquiry === "" ? "textarea-control" : "textarea-control active"}></textarea>
                                {errors.enquiry && <span className="error">{errors.enquiry.message}</span>}
                      </div>

                      <button type="submit" className="submit-btn">Submit Enquiry</button>
             </form>
    </div>
  )
}

export default ContactForm