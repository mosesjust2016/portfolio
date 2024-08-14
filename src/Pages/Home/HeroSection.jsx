export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Moses</p>
          <h4 className="hero--section--title">
            <span className="hero--section-title--color">Fullstack Developer </span>{" "}
            <br />
            & Payment Specialist
          </h4>
          <p className="hero--section-description">
            With 14+ years of experience, specializing in cloud solutions  
            <br /> and  payment integrations focusing on quality and performance.
          </p>
        </div>
        <button href="" className="btn btn-primary">Get In Touch</button>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
