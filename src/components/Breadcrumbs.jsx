import { useLocation, Link, useParams } from "react-router-dom";

const Breadcrumbs = ({ products }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "all";
  const { id } = useParams();

  const formatSegment = (segment) => {
    const decoded = decodeURIComponent(segment);
    return decoded.charAt(0).toUpperCase() + decoded.slice(1);
  };

  let productName = null;
  if (products && id) {
    const found = products.find((p) => p.id.toString() === id.toString());
    if (found) productName = found.name;
  }

  let finalSegments = [...pathnames];

  if (category == "all" && finalSegments.length > 1) {
    finalSegments = finalSegments.filter(
      (seg) => seg.toLowerCase() !== category.toLowerCase()
    );
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {finalSegments.map((segment, index) => {
        const routeTo = "/" + finalSegments.slice(0, index + 1).join("/");
        const isLast = index === finalSegments.length - 1;
        const label = isLast && productName ? productName : segment;

        return isLast ? (
          <span key={routeTo}>/ {formatSegment(label)}</span>
        ) : (
          <span key={routeTo}>
            {" "}
            / <Link to={routeTo}>{segment}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
