interface HeadPropos {
  tableHeadData: any;
  display: boolean;
}

const TableHead = ({ tableHeadData, display }: HeadPropos) => {
  return (
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
      <tr>
        {!display
          ? tableHeadData
              .filter((item: string) => item !== "DisplayNamePGOMedMij")
              .map((item: string) => (
                <th key={item} className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">{item}</div>
                </th>
              ))
          : tableHeadData.map((item: string) => (
              <th key={item} className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">{item}</div>
              </th>
            ))}
      </tr>
    </thead>
  );
};

export default TableHead;
