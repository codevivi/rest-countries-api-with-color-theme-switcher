import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../../../images/placeholder-flag.png";
import "react-lazy-load-image-component/src/effects/blur.css";
function LazyImage({ src, alt, scrollPosition }) {
  return <LazyLoadImage alt={alt} src={src} scrollPosition={scrollPosition} effect="blur" placeholderSrc={placeholder} width="264" height="160" />;
}
export default LazyImage;
