import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page") || 1);

  const goToPage = (newPage) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (newPage > 1) {
        params.set("page", newPage);
      } else {
        params.delete("page");
      }

      return params;
    });
  };

  return (
    <div>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Попередня
      </button>
      <span>Сторінка {currentPage}</span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Наступна
      </button>
    </div>
  );
};

export default Pagination;
