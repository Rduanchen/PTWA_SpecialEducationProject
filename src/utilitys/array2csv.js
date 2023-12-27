export default function (csv_array,GameName="") {
    // 獲取當前日期
    const today = new Date();

    // 獲取月份和日期，並確保它們為兩位數
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份是從 0 開始的
    const day = String(today.getDate()).padStart(2, '0');

    // 組合成 mmdd 格式
    const mmdd = month + day;

    const arrayToCSV = (arr) => {
        return arr.map(row => row.join(',')).join('\n');
    };

    var csvString = arrayToCSV(csv_array);
    csvString=  '\ufeff'+csvString; // 添加 BOM

    var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${GameName}_${mmdd}.csv`;

    document.body.appendChild(a);
    a.click();
}