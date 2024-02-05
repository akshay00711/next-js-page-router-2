import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/aks.jpg'
          alt='An image showing '
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm AKS</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React | Mobile.
      </p>
    </section>
  );
}

export default Hero;