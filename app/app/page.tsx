
export default function Home() {
  return (
    <main>
      <header>
        <a href="/" className="logo">ma<span>NOW</span>j</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">TECHNOLOGY · DATA · INNOVATION</p>
        <h1>Ideas into work.<br />Work into impact.</h1>
        <p className="intro">
          I build practical digital experiences, explore emerging technology,
          and turn ideas into useful projects.
        </p>
        <a className="cta" href="#projects">Explore my work ↗</a>
      </section>

      <section id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious by nature. Building with purpose.</h2>
        <p>Technology professional, continuous learner, and creator of maNOWj.</p>
      </section>

      <section id="projects">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Things I'm building.</h2>
        <p>Projects, experiments, and ideas will be showcased here.</p>
      </section>

      <section id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Have something in mind?</h2>
        <p>Find me on GitHub, Instagram, and YouTube.</p>
      </section>

      <footer>© {new Date().getFullYear()} maNOWj. Built with purpose.</footer>
    </main>
  );
}
