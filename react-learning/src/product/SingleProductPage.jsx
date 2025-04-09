import { useEffect, useState } from "react";
import { Link,Outlet,useLocation,useParams } from "react-router";
import "./SingleProductPage.css"; // Import external CSS

export default function SingleProductPage() {
    const uselocation = useLocation();
    console.log(uselocation);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errr, setError] = useState(null);

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      if (data) {
        setProduct(data);
      }
    } catch (errr) {
      console.error(errr);
      setIsError(true);
      setError("Something went wrong while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="single-product-container">
      <h1 className="title">Single Product Page</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : isError ? (
        <div className="error">{errr}</div>
      ) : (
        <div className="product-card">
          <img src={product?.image} className="product-image" />
          <h3 className="product-title">{product?.title}</h3>
          <h3 className="product-description">{product?.description}</h3>
        </div>
      )}
      <div style={{ display: "flex", gap: "1rem" }}>
        <button>
            <Link to={location?.pathname?.endsWith("review")}>review</Link>
        </button>
        <button>
          <Link to="#">overview</Link>
        </button>
      </div>
      <Outlet />
    </div>

  );
}
export function ReviewPage() {
    return (
      <div>
        <div>
          <Link to={"../"}>Go back</Link>
        </div>
        <h1>review Page</h1>
      </div>
    );
  }
  
  export function OverviewPage() {
    return (
      <div>
        <h1>Overview Page</h1>
      </div>
    );
  }
