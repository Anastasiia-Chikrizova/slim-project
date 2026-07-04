import styles from "./Logo.module.scss";

interface LogoProps {
  logoDesktop: string;
  logoDesktop2x: string;
  logoTablet: string;
  logoTablet2x: string;
  logoMobile: string;
  logoMobile2x: string;
}

const Logo = ({
  logoDesktop,
  logoDesktop2x,
  logoTablet,
  logoTablet2x,
  logoMobile,
  logoMobile2x,
}: LogoProps) => {
  return (
    <>
      <picture className={styles.imageBox}>
        <source
          className="image"
          src={logoDesktop}
          srcSet={logoDesktop + " 1x," + logoDesktop2x + " 2x"}
          media="(min-width:1280px)"
        />
        <source
          className="image"
          src={logoTablet}
          srcSet={logoTablet + " 1x," + logoTablet2x + " 2x"}
          media="(min-width:768px)"
        />
        <source
          className="image"
          src={logoMobile}
          srcSet={logoMobile + " 1x," + logoMobile2x + " 2x"}
          media="(max-width:767px)"
        />
        <img className="default" src={logoMobile} alt="Logo" />
      </picture>
    </>
  );
};

export default Logo;
