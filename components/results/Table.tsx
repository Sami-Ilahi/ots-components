import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface TableProps {
  tableHeadData: any;
  tableBodyData: any;
  display: boolean;
}

const Table = ({ tableBodyData, tableHeadData, display }: TableProps) => {
  return (
    <div className="p-1">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <TableHead tableHeadData={tableHeadData} display={display} />
          <TableBody tableBodyData={tableBodyData} display={display} />
        </table>
      </div>
    </div>
  );
};

export default Table;
