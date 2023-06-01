import HeadComponet from "@/Components/HeadComponet";

const Contactus = () => {
  return (
    <>
      <HeadComponet title={'Contact Us'}/>
      <div className="container py-5 mb-5 mt-4 px-lg-5" style={{ background: "#F1F5F9" }}>
        <h2 className="text-center">Lets talk about everything!</h2>
        <div className="text-center">
          <img src="/logo.png" alt="image" style={{height : '200px' , width : '200px'}} />
        </div>
        <h4 className="text-center">Feel free to ask us anything!</h4>
        <p className="text-center">
          If you have any questions regarding your order, feel free to send
          email, call or Whatsapp us on our support number
        </p>
        <div className="d-md-flex justify-content-md-between text-md-start text-center d-block mx-lg-5 px-xl-5">
          <div className="pb-3 ps-xxl-5 ms-xxl-5 pt-md-4 pt-2">
            <p className="fw-bold mb-2">Corporate Address</p>
            <p className="mb-0">CWH Solutions</p>
            <p className="mb-0">94, Ghair Saifuddin Domehla Road,</p>
            <p className="mb-0">Rampur, Uttar Pradesh, 244901</p>
          </div>
          <div className="pe-xxl-5 me-xxl-5 pt-md-4 pt-2">
            <p className="fw-bold mb-2">Customer Support</p>
            <p className="mb-0">Call/Whatsapp: <a href="https://wa.me/7078073838?text=Hi,%20I%20need%20to%20enquire%20about%20products%20on%20CodesWear" target="_blank">+91 707 807 3838</a></p>
            <p className="mb-0">Email: care@e-commerce.in</p>
            <p className="mb-0">Morning: 10AM - 6PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
