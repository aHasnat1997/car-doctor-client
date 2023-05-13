import group from '../../assets/icons/group.svg';
import person from '../../assets/icons/person.svg';
import wrench from '../../assets/icons/wrench.svg';
import check from '../../assets/icons/check.svg';
import deliveryt from '../../assets/icons/deliveryt.svg';

const Features = () => {
  return (
    <div className="max-w my-16">
      <div className="text-center">
        <h3 className='text-primary font-extrabold text-2xl'>Core Features</h3>
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p className="py-6 w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
      </div>
      <div className="flex justify-between">
        <div className='flex flex-col gap-4 items-center p-10 border-2 rounded-2xl duration-500 hover:bg-secondary'>
          <img src={group} alt="icon" />
          <p className='text-2xl font-bold'>Expert Team</p>
        </div>
        <div className='flex flex-col gap-4 items-center p-10 border-2 rounded-2xl duration-500 hover:bg-secondary'>
          <img src={person} alt="icon" />
          <p className='text-2xl font-bold'>24/7 Support</p>
        </div>
        <div className='flex flex-col gap-4 items-center p-10 border-2 rounded-2xl duration-500 hover:bg-secondary'>
          <img src={wrench} alt="icon" />
          <p className='text-2xl font-bold'>Best Equipment</p>
        </div>
        <div className='flex flex-col gap-4 items-center p-10 border-2 rounded-2xl duration-500 hover:bg-secondary'>
          <img src={check} alt="icon" />
          <p className='text-2xl font-bold'>100% Guranty</p>
        </div>
        <div className='flex flex-col gap-4 items-center p-10 border-2 rounded-2xl duration-500 hover:bg-secondary'>
          <img src={deliveryt} alt="icon" />
          <p className='text-2xl font-bold'>Timely Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
