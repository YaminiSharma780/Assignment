export default function FeesTable() {
  return (
    <div className="table-div">
      <table className="fees-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Fees Name</th>
            <th>Fees Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tuition Fee</td>
            <td>30,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lab Fee</td>
            <td>10,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sports Fee</td>
            <td>10,000</td>
          </tr>
        </tbody>
      </table>

      <div className="lower-table-div">
        <h4>Total Fees Amount</h4>
        <div className="lower-table-div-child">50,000</div>
      </div>
    </div>
  );
}
