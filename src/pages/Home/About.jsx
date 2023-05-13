import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div id='about' className="max-w mt-16 mb-28 hero-content flex-col lg:flex-row">
      <div className="w-1/2 relative">
        <img src={person} className="w-[70%] rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-[50%] left-[40%] border-8 border-white" />
      </div>
      <div className="w-1/2">
        <h3 className='text-primary font-extrabold text-2xl'>About Us</h3>
        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
        <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        <button className="btn btn-primary">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
