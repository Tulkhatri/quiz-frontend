import type { LoadingType } from "./type";

const TableLoading = ({ loading }: LoadingType) => {
  return loading ? (
    <div className="table-skeleton-wrapper">
      {[...Array(4)].map((_, idx) => (
        <div key={idx} className="table-skeleton-row" />
      ))}
    </div>
  ) : null;
};

export default TableLoading;
