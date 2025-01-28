import { Icon } from "@iconify/react";
import { useState } from "react";



const Contact = () => {

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }



  // const formik=useFormik({
  //   initialValues : {
  //     fname:"",
  //     lname:"",
  //     company:"",
  //     email:"",
  //     phone:"",
  //     message:"",
  //   },
  //   validationSchema:yup.object({
  //     fname:yup.string().min(3, "name must have atleast 2 char").required(),
  //     lname:yup.string().min(3, "name must have atleast 2 char").required(),
  //     company:yup.string().min(3, "name must have atleast 3 char").required(),
  //     email:yup.string().email().required(),
  //     phone:yup.string().required(),
  //     message:yup.string().required(),
  //   }),
  //   onSubmit:(values, {resetForm})=>{
  //     fetch('http://localhost:5000/postquote', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //        fname:values.fname,
  //        lname:values.lname,
  //        company:values.company,
  //        email:values.email,
  //        phone:values.phone,
  //        message:values.message,

  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  //     resetForm({values:""});


  //   }
  // }) 

  // const handleChange =(e)=>{
  //   e.preventDefault();
  //   console.log(values)

  // }

  return (
    <div name='bg-white'>
      <div className="contact-us bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] lg:w-[75%] mx-auto ">
          <div className="contact-first pl-4 py-10 my-10">
            <div className="mt-[20px]">
              <h5 className="text-black">CONTACT WITH US</h5>
              <h6 className="text-2xl my-[10px]">
                LET’S WORK TOGETHER?
              </h6>
              <p className="contact-item-text">
                I have worls-class, flexible support via live chat, email and
                hone. I <br></br>guarantee that you’ll be able to have any issue
                resolved within 24 hours.
              </p>
              <div className="mt-[20px] flex ">
                <div className="">
                  <Icon icon="zondicons:location" width="22px" className="mt-1" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className=" hover:text-[#06D889]"><a href="jkuds">168/170, Avenue 01 <br />Uttara,Bangladesh</a> </p>
                </div>
              </div>
              <div className="phone mt-[20px] flex ">
                <div className="ad-icon">
                  <Icon icon="fluent:call-16-filled" width="22px" className="mt-1" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className="hover:text-[#06D889]"><a href="tel:+123456789">+1 9656 567-89</a> </p>
                  <p className="hover:text-[#06D889]"><a href="tel:+123456789">+1 4845 567-89</a></p>
                </div>
              </div>
              <div className="email mt-[20px] flex ">
                <div className="ad-icon">
                  <Icon icon="ic:round-email" className="mt-1" />
                </div>
                <div className="address-content ml-[20px]">
                  <p className="text- hover:text-[#06D889]"><a href="mailto:qubictechltd@gmail.com">ecommerce@gmail.com</a></p>
                </div>
              </div>
            </div>
            <div className="follow mt-[40px]">
              <h3 className="font-bold text-2xl">Follow Us</h3>
              <h5 className="">Follow us on Social Network</h5>
              <div className="gap-4 flex py-2">
                <a href="igdyu"><Icon icon="logos:facebook" width="22px" className="" /></a>
                <a href="ifhysd"><Icon icon="logos:twitter" width="22px" className="social-i" /></a>
                <a href="uhfyrf"><Icon icon="skill-icons:instagram" width="22px" className="social-i" /></a>
                <a href="lhfyf"><Icon icon="logos:whatsapp-icon" width="22px" className="social-i" /></a>
              </div>
            </div>
          </div>
          <div className="contact-second shadow-lg py-10 my-10 mx-5">
            <div className="contact-form mt-[20px]">
              <h3 className="text-center  text-3xl py-10">Make a Free Consulting</h3>
              <hr />

              <form onSubmit={handleSubmit}>
                <div className='col-span-12 md:col-span-6 ml-3 md:ml-4'>
                  <h1 className='text-2xl lg:text-2xl ml-1  italic my-3 '>To get a free consultation please leave your questions.</h1>
                  <div className='grid md:grid-cols-2'>
                    <div className=''>
                      <input type='name'
                        className='border-[1px] w-[96%] p-2 bg-gray-100 my-1 rounded-lg focus:outline-none'
                        placeholder='First Name' name='fname' id="fname" required
                        onChange={e => { setValues({ ...values, fname: e.target.value }) }} />
                    </div>

                    <div className=''><input type='name'
                      className='border-[1px] w-[96%] p-2 bg-gray-100 my-1 rounded-lg focus:outline-none'
                      placeholder='Last name' name='lname' id="lanme" required
                      onChange={e => { setValues({ ...values, lname: e.target.value }) }} />
                    </div>
                  </div>

                  <div>
                    <input type='email'
                      className='border-[1px] w-[96%] lg:w-[98%] p-2 bg-gray-100 my-1 focus:outline-none rounded-lg'
                      placeholder='Email' name='email' id="email" required
                      onChange={e => { setValues({ ...values, email: e.target.value }) }} />
                  </div>

                  <div>
                    <input type='phone'
                      className='border-[1px] w-[96%] lg:w-[98%] p-2 bg-gray-100 my-1 focus:outline-none rounded-lg'
                      placeholder='Phone' name='phone' id="phone" required
                      onChange={e => { setValues({ ...values, phone: e.target.value }) }} />
                  </div>

                  <div className=''>

                    <textarea type='text' placeholder='Type Your Message'
                      className='border-[1px] w-[96%] md:w-[98%] h-[130px] bg-gray-100 p-2 my-2 rounded-lg focus:outline-none'
                      name='message'
                      onChange={e => { setValues({ ...values, message: e.target.value }) }}
                    />
                    <h2 className='font-semibold italic text-black px-1'>We will get back to you within 24hrs.</h2>

                    <button className='border rounded-lg py-2 px-14 font-bold mb-[40px] mt-[40px]' type='submit' onClick={handleSubmit}>Submit</button>
                  </div>


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <WorkFlow/> */}
    </div>
  );
};

export default Contact;
