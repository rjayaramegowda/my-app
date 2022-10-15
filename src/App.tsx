type AppProps = {
  component?: string;
};

export default function App({ component }: AppProps) {
  function renderCompByName() {
    if (component === "ImageSlider") {
      return <ImageSlider />;
    } else if (component === "Products") {
      return <Products />;
    }
    return <PageNotFound />;
  }

  return <div className="container">{renderCompByName()}</div>;
}

const ImageSlider = () => <h1>Image Slider</h1>;
const Products = () => <h1>Products Gallery</h1>;

const PageNotFound = () => <></>;
