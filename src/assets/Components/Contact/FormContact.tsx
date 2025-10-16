import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function FormContact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    emailjs
      .send(
        "service_1e91wvh", // tu service ID
        "template_p50d1gk", // tu template ID
        data, // datos del formulario
        "t3bgazav2G14LJ5fT" // tu public key
      )
      .then(() => {
        alert("Correo enviado con éxito ✅");
        reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Hubo un problema al enviar el correo ❌");
      });
  };

  return (
    <div className="col-12 col-md-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <div className="row g-3">
            <div className="col-12 col-md-6 d-flex flex-column">
              <label htmlFor="name">Your Name</label>
              <input
                {...register("name", {
                  required: "The field is required",
                  minLength: {
                    value: 3,
                    message: "the minimum length is 3",
                  },
                })}
                id="name"
                className="input-contact"
                type="text"
                placeholder="John Doe"
              />
              {errors?.name && (
                <p className="text-warning">{errors?.name?.message}</p>
              )}
            </div>

            <div className="col-12 col-md-6 d-flex flex-column">
              <label htmlFor="email">Your Email</label>
              <input
                {...register("email", {
                  required: "The field is required",
                  minLength: {
                    value: 3,
                    message: "the minimum length is 3",
                  },
                })}
                id="email"
                className="input-contact"
                type="email"
                placeholder="john@example.com"
              />
              {errors?.email && (
                <p className="text-warning">{errors?.email?.message}</p>
              )}
            </div>
          </div>

          <div className="d-flex flex-column mt-3">
            <label htmlFor="subject">Subject</label>
            <input
              {...register("subject", {
                required: "The field is required",
                minLength: {
                  value: 3,
                  message: "the minimum length is 3",
                },
              })}
              id="subject"
              className="input-contact"
              type="text"
              placeholder="How can I help you?"
            />
            {errors?.subject && (
              <p className="text-warning">{errors?.subject?.message}</p>
            )}
          </div>

          <div className="d-flex flex-column mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", {
                required: "The field is required",
                minLength: {
                  value: 5,
                  message: "the minimum length is 5",
                },
                maxLength: {
                  value: 300,
                  message: "The maximum length is 300",
                },
              })}
              id="message"
              className="input-contact message"
              placeholder="Your message here..."
              rows={6}
            />
            {errors?.message && (
              <p className="text-warning">{errors?.message?.message}</p>
            )}
          </div>

          <button className="btn btn-primary w-100 mt-4" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
