import Education from './education/Education';
import Work from './work/Work';
import './experience.css'

const Experience = () => {
  return (
    <section className="experience">
      <div className="container experience__container">
        < Work />
        < Education />
      </div>
    </section>

  );
}

export default Experience;

