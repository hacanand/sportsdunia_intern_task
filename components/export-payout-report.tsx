"use client";

// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { stringify } from "csv-stringify/sync";
// import { GoogleAuth } from "google-auth-library";
// import { google } from "googleapis";

interface Payout {
  id: string;
  author: string;
  articles: number;
  payout: number;
}

interface ExportPayoutReportProps {
  payouts: Payout[];
}

export function ExportPayoutReport({ payouts }: ExportPayoutReportProps) {
//   const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Author", "Articles", "Payout"]],
      body: payouts.map((payout) => [
        payout.author,
        payout.articles,
        `$${payout.payout.toFixed(2)}`,
      ]),
    });
    doc.save("payout-report.pdf");
  };

  const exportToCSV = () => {
    const csv = stringify(payouts, {
      header: true,
      columns: ["author", "articles", "payout"],
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "payout-report.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

//   const exportToGoogleSheets = async () => {
//     setIsExporting(true);
//     try {
//       const auth = new GoogleAuth({
//         keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
//         scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//       });

//       const sheets = google.sheets({ version: "v4", auth });

//       const response = await sheets.spreadsheets.create({
//         requestBody: {
//           properties: {
//             title: "Payout Report",
//           },
//           sheets: [
//             {
//               data: [
//                 {
//                   rowData: [
//                     {
//                       values: [
//                         { userEnteredValue: { stringValue: "Author" } },
//                         { userEnteredValue: { stringValue: "Articles" } },
//                         { userEnteredValue: { stringValue: "Payout" } },
//                       ],
//                     },
//                     ...payouts.map((payout) => ({
//                       values: [
//                         { userEnteredValue: { stringValue: payout.author } },
//                         { userEnteredValue: { numberValue: payout.articles } },
//                         { userEnteredValue: { numberValue: payout.payout } },
//                       ],
//                     })),
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       });

//       console.log(`Spreadsheet created: ${response.data.spreadsheetUrl}`);
//       alert(`Spreadsheet created: ${response.data.spreadsheetUrl}`);
//     } catch (error) {
//       console.error("Error exporting to Google Sheets:", error);
//       alert(
//         "Error exporting to Google Sheets. Please check the console for details."
//       );
//     } finally {
//       setIsExporting(false);
//     }
//   };

  return (
    <div className="flex space-x-4">
      <Button onClick={exportToPDF}>Export to PDF</Button>
      <Button onClick={exportToCSV}>Export to CSV</Button>
      {/* <Button onClick={exportToGoogleSheets} disabled={isExporting}>
        {isExporting ? "Exporting..." : "Export to Google Sheets"}
      </Button> */}
    </div>
  );
}
